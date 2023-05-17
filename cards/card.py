import json
from fastapi import HTTPException
from mysqlx import IntegrityError

from pydantic import BaseModel
from typing import Optional


from cards.queries import query_card


import datetime
import decimal


def convert_to_json(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    elif isinstance(obj, datetime.date):
        return obj.isoformat()
    else:
        return str(obj)



class CardIn(BaseModel):
    """Modelo de input para los card."""
    title: str
    content: str


class Card(BaseModel):
    """Modelo de respuesta para los card."""
    title: str
    content: str
    user: str
    category_id: int

class Data(BaseModel):
    """Modelo de respuesta para las cards."""
    len: int
    data: list[dict]


from utils.timed import timed

@timed
def get_cards(db, title_content: str = '%', user:str = '*', category_name:str='root') -> Data:
    result = db.execute(query_card, {"title_content": title_content, "user": user, "category_name": category_name})
    results = []
    for row in result.fetchall():
        results.append(dict(row))
    return Data(len=len(results), data=json.loads(json.dumps(results, default=convert_to_json)))


def get_category_by_name(db, category_name: str):
    result = db.execute("SELECT * FROM Categories WHERE name = %(category_name)s", {"category_name": category_name})
    return result.fetchone()

@timed
def create_card(db, card: Card):
    db.execute("INSERT INTO Cards (title, content, user_owner, category_id) VALUES (%(title)s, %(content)s, %(user)s, %(category_id)s)", card.dict())


@timed
def delete_card(db, id: str, user: str, category_name: str):
    db.execute("DELETE FROM Cards WHERE id = %(id)s AND user_owner = %(user)s AND category_id = (SELECT id FROM Categories WHERE name = %(category_name)s)", {"id": id, "user": user, "category_name": category_name})
    return {"message": "Card deleted successfully"}

@timed
def update_card(conn, card_id :int,title: str, content:str, user: str, category_name: str):
    # Verificar si la tarjeta existe
    result = conn.execute("SELECT id, user_owner FROM Cards WHERE id = %(card_id)s and (user_owner='*' or user_owner=%(user_owner)s)", {"card_id":card_id, "user_owner":user}).fetchone()


    if not result:
        raise HTTPException(status_code=404, detail="Card no exist")

    result_category_id = conn.execute("SELECT id FROM Categories WHERE name = %(category_name)s", {"category_name":category_name}).fetchone()
    if not result_category_id:
        raise HTTPException(status_code=404, detail="Category no exist")

    try:
        update_query = """
            UPDATE Cards
            SET title = %(title)s, content = %(content)s, category_id = %(category_id)s
            WHERE id =  %(card_id)s
        """
        conn.execute(
            update_query,
            {
                "card_id":card_id,
                "title":title,
                "content":content,
                "category_id":result_category_id["id"],
            }
        )

        return {"message": "Card updated successfully"}

    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Error de integridad en la base de datos")
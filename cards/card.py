import json

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



    

class Data(BaseModel):
    """Modelo de respuesta para los productos renovadores."""
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
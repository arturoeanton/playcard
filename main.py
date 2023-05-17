from typing import Optional
import uvicorn
from fastapi import FastAPI, Query
from sqlalchemy import create_engine
from decouple import config
from fastapi.staticfiles import StaticFiles

from fastapi.responses import HTMLResponse


from cards.card import Data, get_cards, create_card, get_category_by_name, delete_card, update_card,  CardIn, Card


from utils.timed import timed

app = FastAPI()



@app.on_event("startup")
def startup():
    db_url = config("DB")
    app.db = create_engine(db_url, pool_pre_ping=True)



app.mount("/static", StaticFiles(directory="static"), name="static")




@app.put("/{category_name}/cards/{card_id}")
def http_update_card(category_name:str, card_id: int, card: CardIn):
    conn = app.db.connect()
    try:
      update_card(conn, card_id=card_id, title=card.title, content=card.content, user='*', category_name=category_name)
    finally:
        conn.close()


@app.get("/", response_class=HTMLResponse)
async def index():
    with open("static/index.html") as file:
        return file.read()


@timed
@app.post(
    "/{category_name}/cards"
)
def http_post_card(
    category_name: str,
    data: CardIn
):
    c = app.db.engine.connect()
    try:
        category = get_category_by_name(c, category_name)
        card = Card(title=data.title, content=data.content, user='*', category_id=category['id'])
        create_card(c, card)
        print(data)
    finally:
        c.close()



@timed
@app.delete(
    "/{category_name}/cards/{id}"
)
def http_delete_card(
    category_name: str,
    id: str ):
    c = app.db.engine.connect()
    try:
        return delete_card(c, id=id, user='*', category_name=category_name)
    finally:
        c.close()



@timed
@app.get(
    "/{category_name}/cards"
)
def http_get_card(
    category_name: str,
    filter: str = Query(None, min_length=0, max_length=100)
):
    c = app.db.engine.connect()
    try:
        if filter is None:
            filter = ''
            
        filter = filter.strip('%')
        filter +=  '%'
        
        if category_name != '%':
            filter = '%'+filter
            
        print(filter, category_name)
        return get_cards(c, title_content=filter, user='*', category_name=category_name)
    finally:
        c.close()
 




workers=int(config('WORKERS_UVCORN', default='5'))
if __name__ == "__main__":
    port =int(config('APP_PORT',default='8080'))
    uvicorn.run("main:app",host="0.0.0.0", port=port, workers=workers)
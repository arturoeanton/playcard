from typing import Optional
import uvicorn
from fastapi import FastAPI, Query
from sqlalchemy import create_engine
from decouple import config
from fastapi.staticfiles import StaticFiles

from fastapi.responses import HTMLResponse


from cards.card import Data, get_cards


from utils.timed import timed

app = FastAPI()



@app.on_event("startup")
def startup():
    db_url = config("DB")
    app.db_mifos = create_engine(db_url, 
                                 pool_pre_ping=True,
                                 connect_args={"charset":"utf8","collation":"utf8_general_ci",})



app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def index():
    with open("static/index.html") as file:
        return file.read()

@timed
@app.get(
    "/{category_name}/cards"
)
def http_get_card(
    category_name: str,
    filter: str = Query(None, min_length=0, max_length=100)
):
    c = app.db_mifos.engine.connect()
    if filter is None:
        filter = ''
        
    filter = filter.strip('%')
    filter +=  '%'
    
    if category_name != '%':
        filter = '%'+filter
    
    print(filter, category_name)
    try:
        return get_cards(c, title_content=filter, user='*', category_name=category_name)
    finally:
        c.close()
 




workers=int(config('WORKERS_UVCORN', default='5'))
if __name__ == "__main__":
    port =int(config('APP_PORT',default='8080'))
    uvicorn.run("main:app",host="0.0.0.0", port=port, workers=workers)
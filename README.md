# 96-mora

```
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt 

```

# App UI Lit

```
cd app
npm init -y
npm install parcel-bundler lit
npm install parcel --save-dev
cd -
```



# run server
```
cd app
npx parcel build index.html --dist-dir ../static --public-url ./static/
cd -
python main.py
```


# File .env

```
APP_PORT=8080
MIFOS_DB=mysql+mysqlconnector://root:supersecret@127.0.0.1/playcard
WORKERS_UVCORN=1
```

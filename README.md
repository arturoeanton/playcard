# Playcard

```
python3 -m venv venv
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



# run server (run.sh)
```
rm -rf static/; #borra el directorio static para que no se acumulen los archivos
cd app;
rm -rf .parcel-cache; #borra el cahce de parcel para poder buildear siempre 
npx parcel build index.html --dist-dir ../static --public-url ./static/;
cd -;
python main.py;
```


# File .env

```
APP_PORT=8080
DB=mysql+mysqlconnector://root:supersecret@127.0.0.1/playcard
WORKERS_UVCORN=1
```

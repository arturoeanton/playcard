rm -rf static/; #borra el directorio static para que no se acumulen los archivos
cd app;
rm -rf .parcel-cache; #borra el cahce de parcel para poder buildear siempre 
npx parcel build index.html --dist-dir ../static --public-url ./static/;
cd -;
python main.py;
mkdir static/;
cd app;
npx parcel build index.html --dist-dir ../static --public-url ./static/;
cd -;
python main.py;
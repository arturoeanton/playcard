use playcard;
SET FOREIGN_KEY_CHECKS = 0; -- Deshabilita temporalmente la comprobación de claves foráneas

-- Borra las tablas existentes
DROP TABLE IF EXISTS CardTags;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS Cards;
DROP TABLE IF EXISTS Categories;

SET FOREIGN_KEY_CHECKS = 1; 

CREATE TABLE Categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_owner VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  parent_id INT,
  FOREIGN KEY (parent_id) REFERENCES Categories(id)
);


CREATE TABLE Cards (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_owner VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_owner VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE CardTags (
  card_id INT,
  tag_id INT,
  user_owner VARCHAR(255) NOT NULL,
  FOREIGN KEY (card_id) REFERENCES Cards(id),
  FOREIGN KEY (tag_id) REFERENCES Tags(id),
  PRIMARY KEY (card_id, tag_id)
);


INSERT INTO Categories (user_owner, name) VALUES ('*', 'root');

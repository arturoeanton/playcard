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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES Categories(id)
);


CREATE TABLE Cards (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_owner VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL UNIQUE,
  content TEXT,
  category_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_owner VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE CardTags (
  card_id INT,
  tag_id INT,
  user_owner VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (card_id) REFERENCES Cards(id),
  FOREIGN KEY (tag_id) REFERENCES Tags(id),
  PRIMARY KEY (card_id, tag_id)
);


INSERT INTO Categories (user_owner, name) VALUES ('*', 'root');
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 1', 'contenido 1 <b>1</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 2', 'contenido 2 <b>2</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 3', 'contenido 3 <b>3</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 4', 'contenido 4 <b>4</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 5', 'contenido 5 <b>5</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 6', 'contenido 6 <b>6</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 7', 'contenido 7 <b>7</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 8', 'contenido 8 <b>8</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 9', 'contenido 9 <b>9</b>', 1);
INSERT INTO Cards (user_owner, title, content, category_id) VALUES ('*', 'Title 10', 'contenido 10 <b>10</b>', 1);

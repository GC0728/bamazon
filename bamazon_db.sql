DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    department_name VARCHAR(25) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
    ); 


INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pentel Energel Pens", "Office Products", 16.43, 8);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Oil Filter Element", "Automotive", 19.04, 7);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Leather Belt", "Clothing", 18.99, 15);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Climbing Chalk", "Outdoor Recreation", 10.00, 20);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Addidas Campus Sneakers", "Clothing", 32.39, 19);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Hydration Backpack", "Outdoor Recreation", 34.99, 25);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Aloe Vera Plant", "Patio, Lawn, and Garden", 17.99, 9);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Bluetooth Speaker", "Electronics", 23.79, 4);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Cast-Iron Pan", "Cooking", 29.70, 12);
INSERT INTO products (product_name, department_name, price,stock_quantity) VALUES("Chromebook", "Electronics", 134.99, 0);

SELECT * FROM products;
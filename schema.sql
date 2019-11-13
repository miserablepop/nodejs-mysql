-- Drop if database exists --
DROP DATABASE IF EXISTS bamazon_db;

-- Create database --
CREATE DATABASE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL,
    product_name VARCHAR (300) NULL,
    department_name VARCHAR (300) NULL,
    price DECIMAL (10, 2) NULL,
    stock_quantity INT NOT NULL
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (55, 'PLAYMOBIL Advent Calendar - Construction Site Fire Rescue', 'Toys', 16.49, 22);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (2098, 'Olababy 100% Silicone Soft-Tip Training Spoon Teether', 'Baby', 14.95, 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (2, 'Klorane Dry Shampoo with Nettle', 'Hair Care', 20.00, 46);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (785, 'Zarbees Naturals Childrens Sleep Liquid with Melatonin Supplement', 'Health Care', 7.99, 9);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (243, 'Outdoor Waterproof and Weatherproof TV Cover', 'TV', 19.99, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (34, 'Car Windshield Sun Shade', 'Automotive', 14.96, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (100, 'Navy Blue Buffalo Check Plaid Throw Pillow Covers', 'Bedding', 10.99, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (89, 'Bamboo Charcoal Loofah', 'Personal Care', 9.99, 1);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (123, 'Innsky Air Fryer XL', 'Kitchen', 90.99, 18);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (476, 'Playtown: Emergency: A Lift-the-Flap book', 'Books', 8.98, 24);







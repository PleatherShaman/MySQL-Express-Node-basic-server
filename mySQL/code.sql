CREATE DATABASE mailing_list;

USE mailing_list;

SELECT DATABASE();


CREATE TABLE users (
    email  VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

DESC users;

INSERT INTO users (email)
VALUES 
    ('john@gmail.com'),
    ("peter@gmail.com");

SELECT * FROM users;




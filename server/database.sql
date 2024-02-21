CREATE DATABASE library;

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_phone_no VARCHAR(20) ,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);


CREATE TABLE books(
    book_id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(20) NOT NULL,
    subject VARCHAR(255),
    publish VARCHAR(255)
);


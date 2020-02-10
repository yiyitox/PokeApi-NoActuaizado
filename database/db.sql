CREATE DATABASE programacion;

USE programacion;

--USERS TABLE
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR (60) NOT NULL,
    fullname VARCHAR (100) NOT NULL
);

ALTER TABLE users 
ADD PRIMARY KEY (id);

ALTER TABLE users
MODIFY id INT (11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

DESCRIBE users;

--LINKS TABLE
-- CREATE TABLE links(
--     id INT (11) NOT NULL,
--     title VARCHAR(150) NOT NULL,
--     url VARCHAR(255) NOT NULL,
--     description TEXT,
--     user_id INT(11),
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
-- );
CREATE TABLE pokemon(
    id INT (11) NOT NULL,
    name VARCHAR(300) NOT NULL,
    img VARCHAR(300) NOT NULL,
    abilities varchar(300) NOT NULL,
    types varchar(300) NOT NULL,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE pokemon
ADD PRIMARY KEY (id);

ALTER TABLE pokemon
MODIFY id INT (11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

DESCRIBE pokemon;
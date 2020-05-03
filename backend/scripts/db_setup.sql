CREATE DATABASE IF NOT EXISTS cafe_db;
USE cafe_db;
CREATE TABLE IF NOT EXISTS user(
    user_username varchar(50) PRIMARY KEY,
    user_password binary(60)
);
CREATE TABLE IF NOT EXISTS cafe(
    cafe_name varchar(50),
    cafe_location geometry,
    one_dollar_to double(8,5) DEFAULT 1.0,
    cafe_menu blob,
    cafe_username varchar(50)  PRIMARY KEY,
    cafe_password binary(60)
);
CREATE TABLE IF NOT EXISTS trans(
    trans_price double(8,5),
    user_username varchar(50) references user(user_username),
    cafe_username varchar(50) references cafe(cafe_username),
    trans_timestamp timestamp DEFAULT CURRENT_TIMESTAMP,
    primary key(user_username, cafe_username, trans_timestamp)
);
CREATE TABLE IF NOT EXISTS user_cafe(
    user_username varchar(50) references user(user_username),
    cafe_username varchar(50) references cafe(cafe_username),
    total double(15, 5),
    PRIMARY KEY(cafe_username, user_username)
);
CREATE TABLE IF NOT EXISTS star_trans(
    user_username varchar(50) references user(user_username),
    cafe_username varchar(50) references cafe(cafe_username),
    stars double(8,5),
    stars_timestamp timestamp DEFAULT CURRENT_TIMESTAMP,
    primary key(user_username, cafe_username, stars_timestamp)
);


DROP DATABASE IF EXISTS Booking;

CREATE DATABASE Booking;

USE Booking;

CREATE TABLE Info (
  id int NOT NULL,
  price int NOT NULL,
  cleaning int NOT NULL,
  reviews int NOT NULL,
  views int NOT NULL,
  guests int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Dates (
  roomId int NOT NULL,
  dates varchar(50) NOT NULL,
  FOREIGN KEY (roomId) REFERENCES Info (id)
);
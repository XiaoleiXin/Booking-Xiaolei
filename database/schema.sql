DROP DATABASE IF EXISTS Booking;

CREATE DATABASE Booking;

USE Booking;

CREATE TABLE Info (
  id int NOT NULL,
  price int NOT NULL,
  cleaning int NOT NULL,
  reviews int NOT NULL,
  stars int NOT NULL,
  guests int NOT NULL,
  minimumNights int NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE Dates (
  roomId int NOT NULL,
  dates varchar(200) NOT NULL,
  FOREIGN KEY (roomId) REFERENCES Info (id)
);

INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (1,114,50,47,4,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (2,110,95,100,3,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (3,206,78,142,2,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (4,284,97,77,4,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (5,295,84,131,3,1,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (6,157,64,130,2,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (7,193,98,106,2,1,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (8,288,88,35,3,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (9,222,59,87,3,2,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (10,96,95,74,4,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (11,238,34,147,5,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (12,166,93,48,2,3,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (13,54,88,145,5,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (14,144,60,36,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (15,185,75,103,3,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (16,135,57,104,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (17,265,56,73,3,3,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (18,182,41,50,2,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (19,58,82,62,5,3,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (20,152,39,79,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (21,229,82,38,5,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (22,228,49,72,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (23,252,30,43,5,1,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (24,278,35,106,2,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (25,64,60,101,3,1,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (26,150,51,149,4,1,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (27,256,59,122,5,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (28,108,31,96,3,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (29,123,53,99,3,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (30,124,65,70,5,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (31,55,40,63,4,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (32,142,72,48,5,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (33,108,73,148,2,2,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (34,171,97,33,2,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (35,257,81,31,4,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (36,50,97,133,5,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (37,102,78,62,5,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (38,54,68,39,3,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (39,141,31,91,3,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (40,230,59,120,5,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (41,85,72,61,5,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (42,164,63,109,2,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (43,249,45,59,5,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (44,93,33,111,2,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (45,260,84,33,5,1,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (46,221,88,64,2,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (47,61,100,149,5,1,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (48,86,76,101,5,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (49,253,71,50,2,3,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (50,123,38,124,3,3,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (51,186,100,60,5,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (52,187,41,40,3,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (53,201,66,101,2,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (54,201,38,30,5,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (55,129,87,112,4,3,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (56,70,68,102,5,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (57,186,41,114,3,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (58,246,87,83,4,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (59,242,57,39,3,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (60,141,64,65,5,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (61,300,42,102,2,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (62,289,35,115,4,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (63,177,33,127,2,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (64,156,51,98,4,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (65,167,97,128,4,1,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (66,193,35,60,2,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (67,59,34,55,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (68,170,37,129,3,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (69,228,48,63,4,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (70,94,98,147,2,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (71,193,47,73,3,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (72,67,34,96,2,2,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (73,154,87,96,2,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (74,208,71,138,2,1,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (75,253,74,35,4,1,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (76,72,32,127,4,3,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (77,123,56,53,2,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (78,238,56,130,3,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (79,205,97,62,2,3,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (80,162,42,104,5,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (81,222,49,101,3,1,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (82,245,30,92,5,1,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (83,104,91,106,4,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (84,101,68,130,5,2,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (85,268,86,97,4,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (86,99,33,144,2,2,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (87,159,99,117,3,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (88,92,88,67,3,2,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (89,145,57,64,3,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (90,160,39,61,5,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (91,283,77,69,2,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (92,56,73,100,4,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (93,122,30,77,3,1,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (94,60,93,113,3,4,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (95,181,58,86,5,4,3);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (96,71,36,86,2,2,4);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (97,258,90,44,3,4,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (98,212,78,128,4,4,1);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (99,124,98,44,4,3,2);
INSERT INTO Info (id,price,cleaning,reviews,stars,guests,minimumNights) VALUES (100,150,66,51,2,4,1);
INSERT INTO Dates (roomid,dates) VALUES (6,'2018-07-04');
INSERT INTO Dates (roomid,dates) VALUES (11,'2018-06-23');
INSERT INTO Dates (roomid,dates) VALUES (11,'2018-06-24');
INSERT INTO Dates (roomid,dates) VALUES (6,'2018-07-27');
INSERT INTO Dates (roomid,dates) VALUES (13,'2018-07-13');
INSERT INTO Dates (roomid,dates) VALUES (8,'2018-07-21');
INSERT INTO Dates (roomid,dates) VALUES (8,'2018-07-12');
INSERT INTO Dates (roomid,dates) VALUES (2,'2018-06-27');
INSERT INTO Dates (roomid,dates) VALUES (2,'2018-07-05');
INSERT INTO Dates (roomid,dates) VALUES (19,'2018-07-18');
INSERT INTO Dates (roomid,dates) VALUES (17,'2018-06-21');
INSERT INTO Dates (roomid,dates) VALUES (9,'2018-06-23');
INSERT INTO Dates (roomid,dates) VALUES (14,'2018-07-21');
INSERT INTO Dates (roomid,dates) VALUES (7,'2018-07-06');
INSERT INTO Dates (roomid,dates) VALUES (23,'2018-06-12');
INSERT INTO Dates (roomid,dates) VALUES (12,'2018-07-12');
INSERT INTO Dates (roomid,dates) VALUES (23,'2018-06-27');
INSERT INTO Dates (roomid,dates) VALUES (27,'2018-07-04');
INSERT INTO Dates (roomid,dates) VALUES (19,'2018-06-17');
INSERT INTO Dates (roomid,dates) VALUES (13,'2018-07-02');
INSERT INTO Dates (roomid,dates) VALUES (25,'2018-06-29');
INSERT INTO Dates (roomid,dates) VALUES (1,'2018-06-29');
INSERT INTO Dates (roomid,dates) VALUES (19,'2018-07-05');
INSERT INTO Dates (roomid,dates) VALUES (1,'2018-07-19');
INSERT INTO Dates (roomid,dates) VALUES (20,'2018-06-14');
INSERT INTO Dates (roomid,dates) VALUES (15,'2018-06-15');
INSERT INTO Dates (roomid,dates) VALUES (13,'2018-07-11');
INSERT INTO Dates (roomid,dates) VALUES (9,'2018-06-16');
INSERT INTO Dates (roomid,dates) VALUES (28,'2018-07-14');
INSERT INTO Dates (roomid,dates) VALUES (21,'2018-07-26');
INSERT INTO Dates (roomid,dates) VALUES (22,'2018-07-26');
INSERT INTO Dates (roomid,dates) VALUES (15,'2018-07-05');
INSERT INTO Dates (roomid,dates) VALUES (14,'2018-07-04');
INSERT INTO Dates (roomid,dates) VALUES (18,'2018-06-15');
INSERT INTO Dates (roomid,dates) VALUES (7,'2018-07-22');
INSERT INTO Dates (roomid,dates) VALUES (19,'2018-07-23');
INSERT INTO Dates (roomid,dates) VALUES (29,'2018-07-29');
INSERT INTO Dates (roomid,dates) VALUES (4,'2018-06-29');
INSERT INTO Dates (roomid,dates) VALUES (15,'2018-07-16');
INSERT INTO Dates (roomid,dates) VALUES (10,'2018-06-24');
INSERT INTO Dates (roomid,dates) VALUES (17,'2018-06-26');
INSERT INTO Dates (roomid,dates) VALUES (18,'2018-06-14');
INSERT INTO Dates (roomid,dates) VALUES (20,'2018-07-08');
INSERT INTO Dates (roomid,dates) VALUES (14,'2018-06-29');
INSERT INTO Dates (roomid,dates) VALUES (2,'2018-07-27');
INSERT INTO Dates (roomid,dates) VALUES (17,'2018-07-07');
INSERT INTO Dates (roomid,dates) VALUES (8,'2018-07-18');
INSERT INTO Dates (roomid,dates) VALUES (9,'2018-07-24');
INSERT INTO Dates (roomid,dates) VALUES (6,'2018-06-26');
INSERT INTO Dates (roomid,dates) VALUES (9,'2018-07-04');
INSERT INTO Dates (roomid,dates) VALUES (4,'2018-07-10');
INSERT INTO Dates (roomid,dates) VALUES (21,'2018-06-30');
INSERT INTO Dates (roomid,dates) VALUES (4,'2018-06-28');
INSERT INTO Dates (roomid,dates) VALUES (24,'2018-06-18');
INSERT INTO Dates (roomid,dates) VALUES (5,'2018-06-15');
INSERT INTO Dates (roomid,dates) VALUES (18,'2018-06-16');
INSERT INTO Dates (roomid,dates) VALUES (10,'2018-07-10');
INSERT INTO Dates (roomid,dates) VALUES (20,'2018-07-02');
INSERT INTO Dates (roomid,dates) VALUES (15,'2018-07-11');
INSERT INTO Dates (roomid,dates) VALUES (23,'2018-07-07');
INSERT INTO Dates (roomid,dates) VALUES (14,'2018-06-14');
INSERT INTO Dates (roomid,dates) VALUES (2,'2018-07-01');
INSERT INTO Dates (roomid,dates) VALUES (14,'2018-06-29');
INSERT INTO Dates (roomid,dates) VALUES (24,'2018-07-21');
INSERT INTO Dates (roomid,dates) VALUES (12,'2018-07-11');
INSERT INTO Dates (roomid,dates) VALUES (23,'2018-07-26');
INSERT INTO Dates (roomid,dates) VALUES (11,'2018-06-18');
INSERT INTO Dates (roomid,dates) VALUES (6,'2018-06-28');
INSERT INTO Dates (roomid,dates) VALUES (6,'2018-06-12');
INSERT INTO Dates (roomid,dates) VALUES (16,'2018-06-12;')
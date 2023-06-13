CREATE TABLE todos (
	"id" serial primary key,
	"name" VARCHAR(60),
	"image" VARCHAR(256),
	"dateCreated" DATE,
	"dateDue" DATE,
	"dateCompleted" DATE,
	"description" TEXT,
	"isCompleted" boolean,
	"priority" VARCHAR(10),
	"category" VARCHAR(10)
)

INSERT INTO todos (name, image, "dateCreated", "dateDue", description, "isCompleted", "priority", "category")
VALUES 
('create database', 'https://www.easeus.com/images_2019/tb/free/2022/json1/images/img.png', 
NOW(), '2023-05-29', 'Create a database and dummy data for development', false, 'High', 'work'),
('create pg routes', 'https://www.easeus.com/images_2019/tb/free/2022/json1/images/img.png', NOW(), '2023-06-28', 
'Create pg get, put, push, del routes etc.', false, 'Medium', 'school');
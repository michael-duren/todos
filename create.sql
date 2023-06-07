CREATE TABLE todos (
	"id" serial primary key,
	"name" VARCHAR(60),
	"image" VARCHAR(60),
	"dateCreated" DATE,
	"dueDate" DATE,
	"description" TEXT,
	"isCompleted" boolean,
	"priority" smallint,
	"category" VARCHAR(10)
)

INSERT INTO todos (name, image, "dateCreated", "dueDate", description, "isCompleted", "priority", "category")
VALUES ('create database', 'https://cdn.guru99.com/images/1/092818_0513_PostgreSQLC9.png', NOW(), '2023-05-29', 'Create a database and dummy data for development', false, 2, "work")


INSERT INTO todos (name, image, "dateCreated", "dueDate", description, "isCompleted", "priority")
VALUES ('create pg routes', 'https://cdn.guru99.com/images/1/092818_0513_PostgreSQLC9.png', NOW(), '2023-05-29', 'Create pg get, put, push, del routes etc.', false, 2, "school")
# Backend GT Assessment - Task Management API

This project is a simple Task Management API built with Node.js and Express. It allows users to create, assign, update, and manage tasks with basic authorization rules.

# Setup Instructions

1. Clone the repository:
   git clone https://github.com/Ifenimi/backend-gt-assessment

   cd backend-gt-assessment/task-2-api-implementation

2. Install dependencies:

npm install

npm init -y

npm install express

npm install nodemon

# How to Run the Project

Start the development server:
npm run dev

The server will start on:
http://localhost:3000

# Authentication

This API uses a simple header-based authentication approach.

Include the following header in all requests:

x-user-id: <user_id>

Example:
x-user-id: 1

# API Endpoints

1. Create Task

POST /tasks

Request:

json
{
"title": "Complete assessment",
"priority": "high",
"assignedTo": 2
}

2. Get All Tasks

GET /tasks

3. Update Task (Assigner Only)

PATCH /tasks/:id

Request:

json
{
"title": "Updated task title",
"priority": "medium"
}

4. Update Task Status (Assignee Only)

PATCH /tasks/:id/status

Request:
json
{
"status": "in-progress"
}

5. Unassign Task (Assigner Only)

   PATCH /tasks/:id/unassign

6. Delete Task (Assigner Only)

   DELETE /tasks/:id

# Example Request (Postman)

Create Task

- Method: POST
- URL: `http://localhost:3000/tasks`

Headers:
Content-Type: application/json
x-user-id: 1

Body:
json
{
"title": "Complete assessment",
"priority": "high",
"assignedTo": 2
}

# Business Rules

- The assigner can:
  - Update task details
  - Delete task
  - Unassign task

- The assignee can:
  - Update task status only

# Tech Stack

- Node.js
- Express.js
- ES Modules

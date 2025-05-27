#  Task Manager API

A simple, fully functional **Task Management REST API** built using **Node.js and Express**. It supports basic **CRUD operations**, input validation, error handling, and serves a minimal frontend UI for demonstration.

---

##  Goal

To demonstrate backend development skills by building a RESTful API that allows users to:

- Create new tasks
- View all or specific tasks
- Update existing tasks
- Delete tasks
- Interact via a minimal web UI

---

##  Features

-  **CRUD operations** (Create, Read, Update, Delete)
-  **Input validation** (e.g. valid status, non-empty title)
-  **In-memory data storage**
-  **Descriptive error messages** with HTTP status codes
-  **Timestamps** for task creation and updates
-  **Minimal frontend UI** (HTML + JS)
-  (Optional) Add JWT auth or deploy to cloud later

---

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla HTML, JavaScript
- **Data Storage**: In-memory array (no DB required)
- **UUID**: For generating unique task IDs

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Avadhoot4757/Spawn-Right-Task-Round
cd task-manager-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

Server will run at: http://localhost:3000

---

## API Endpoints
### Method	Endpoint	Description
- POST	/tasks	Create a new task
- GET	/tasks	Retrieve all tasks
- GET	/tasks/:id	Retrieve a specific task
- PUT	/tasks/:id	Update title, description or status
- DELETE	/tasks/:id	Delete a task

---

## Validation & Error Handling

   - title is required and must be a non-empty string

   - status must be one of: "pending", "in-progress", "completed"

   -  Returns meaningful 400 or 404 errors when necessary
   
---

## Frontend UI

- minimal HTML interface is available at: http://localhost:3000

---

## Testing with cURL

### 1. Create Task

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Buy groceries", "description": "Eggs, Milk, Bread"}'
```

### 2. Get All Tasks

```bash
curl http://localhost:3000/tasks
```

### 3. Get Task by ID

```bash
curl http://localhost:3000/tasks/<TASK_ID>
```

### 4. Update Task

```bash
curl -X PUT http://localhost:3000/tasks/<TASK_ID> \
-H "Content-Type: application/json" \
-d '{"status": "completed"}'
```

### 5. Delete Task

```bash
curl -X DELETE http://localhost:3000/tasks/<TASK_ID>
```


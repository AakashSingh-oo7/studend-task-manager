# 📝 Student Task Manager (Beginner → Intermediate)

A **full‑stack task management web application** built as **Project 1** to demonstrate end‑to‑end Full Stack Development skills. This project follows the given PDF specification closely and is suitable for **college submission, internships, and fresher interviews**.
---
**Walkthrough Video**

https://github.com/user-attachments/assets/ebaaeebc-1f91-4eb6-a353-5ee6d86da035
---
**Deployment Link**

https://studend-task-manager.vercel.app/

---

## 🎯 Purpose

The goal of this project is to demonstrate:

* CRUD operations
* REST API design
* Frontend state management
* API integration
* Responsive UI design
* Clean project structure

This project shows how a simple idea (task management) can be implemented using **modern full‑stack tools**.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* In‑memory data store (JavaScript array)

### Tools

* Git & GitHub
* Postman (API testing)

---

## ✅ Core Features (Implemented)

* ➕ Add task (title, description, due date, priority)
* ✏️ Edit task using modal
* ✔️ Mark task complete / uncomplete
* 🗑️ Delete task
* 🔍 Search tasks (title & description)
* 🎯 Filter tasks (All / Pending / Completed)
* ↕️ Sort tasks (Priority / Due Date / Created Date)
* 📱 Responsive UI (mobile & desktop)
* 💾 In‑memory persisted data (resets on server restart)

---

## 🌱 Optional / Extra Features

* Edit task using modal UI
* Client‑side search
* Task metadata display (created date)
* Clean dashboard‑style layout

---

## 🧩 Frontend Component Breakdown

* **App** — root component, manages state
* **Header** — app title + global search bar
* **AddTaskForm** — controlled form to create tasks
* **TaskList** — renders list of tasks
* **TaskCard** — displays task details and actions
* **FilterBar** — filter & sort controls
* **EditTaskModal** — modal for editing tasks
* **NotFound** — basic error UI

---

## 📁 Project Structure

```
student-task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   └── .env
│
└── backend/
    ├── data/
    │   └── tasks.js
    ├── routes/
    │   └── taskRoutes.js
    └── server.js
```

---

## 🧪 API Endpoints

Base URL:

```
/api
```

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| POST   | /api/tasks     | Create task     |
| GET    | /api/tasks     | Get all tasks   |
| GET    | /api/tasks/:id | Get single task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

Optional query:

```
/api/tasks?status=pending
/api/tasks?status=completed
```

---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🧠 Interview / Viva Explanation

> “This project demonstrates a complete full‑stack workflow using React and Express. The backend exposes REST APIs for task management, while the frontend consumes these APIs and manages UI state efficiently. The application is responsive, modular, and easily extendable to MongoDB and authentication.”

---

## ⏳ Suggested Timeline (Followed)

* **Day 1:** Backend scaffold + CRUD APIs (in‑memory)
* **Day 2:** Frontend scaffold + API integration
* **Day 3:** Filters, search, and edit modal
* **Day 4:** Tailwind UI polish + responsiveness
* **Day 5:** Testing, README, and final submission

---

## 📦 Deliverables

* GitHub repository with frontend & backend
* Working local deployment
* Screenshots (optional)
* README documentation

---

## 👨‍💻 Author

**Akash Singh**

---

## 🚀 Future Improvements

* MongoDB integration
* User authentication (JWT)
* Notifications for overdue tasks
* Drag‑and‑drop ordering

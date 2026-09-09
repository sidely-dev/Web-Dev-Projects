# ✅ Task Manager (Full-Stack)

> A full-stack personal task manager built to learn how real web applications work end-to-end.  
> Create, organize, and track tasks with a clean interface, authentication, and persistent storage.

![Status](https://img.shields.io/badge/Status-Learning%20%2F%20In%20Development-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-0.1.0-blue?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Node.js%20%7C%20Express%20%7C%20SQLite-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started & Learning Roadmap](#-getting-started--learning-roadmap)
- [Development Timeline](#-development-timeline)
- [What I'm Learning](#-what-im-learning)
- [Screenshots](#-screenshots)
- [Known Issues](#-known-issues)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 📖 About The Project

### What is this project?

A full-stack **Task Manager** web application where users can create accounts, add tasks, mark them as complete, organize them by priority or due date, and view basic statistics.

This project is intentionally built as a learning vehicle to understand how the browser, JavaScript, Node.js, and a database work together.

### Why did I build it?

- To learn full-stack development by building something practical
- To understand the complete request/response cycle
- To create a portfolio project that demonstrates backend + frontend skills
- To force myself to learn the fundamentals listed below instead of just copying tutorials

### Project Background

Personal learning project. Current target stack for Version 1:

**Browser → JavaScript → Node.js → SQLite**

---

## 🎯 Project Objectives

- [ ] Build a clean and usable task management interface
- [ ] Implement user authentication (signup / login)
- [ ] Persist tasks in a real database
- [ ] Understand and implement the full request lifecycle
- [ ] Deploy a working version of the application
- [ ] Document everything clearly for portfolio use

---

## ✨ Features

### ✅ Planned for Version 1
- User registration and login
- Create, read, update, and delete tasks
- Mark tasks as complete / incomplete
- Basic task filtering (All / Active / Completed)
- Simple dashboard with task counts

### 🚧 Later Features
- Due dates & priorities
- Categories / tags
- Notifications / reminders
- Calendar view
- Charts & statistics
- Dark mode

---

## 🛠️ Tech Stack (Version 1)

| Layer       | Technology              | Purpose                              |
|-------------|-------------------------|--------------------------------------|
| Frontend    | HTML, CSS, JavaScript   | User interface & client-side logic   |
| Backend     | Node.js + Express       | Handle HTTP requests & business logic|
| Database    | SQLite                  | Store users and tasks                |
| Auth        | Sessions + Cookies (or JWT later) | Keep users logged in          |
| Deployment  | Railway / Render / Vercel | Host the application               |

---

## 📂 Project Structure (Target)

```text
task-manager/
│
├── frontend/
│   ├── index.html          # Main app (after login)
│   ├── login.html
│   ├── signup.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js          # Main frontend logic
│       ├── auth.js
│       └── api.js          # Functions that call the backend
│
├── backend/
│   ├── server.js           # Entry point
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── models/             # or database setup
│   ├── middleware/
│   │   └── auth.js
│   ├── db/
│   │   └── database.sqlite
│   ├── .env.example
│   └── package.json
│
├── docs/
│   └── screenshots/
├── README.md
└── .gitignore

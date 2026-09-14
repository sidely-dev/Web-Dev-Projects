# 📝 Scribble (Full-Stack Notes App)

> A modern, full-stack note-taking web application featuring rich text formatting, nested folder organization, tag filtering, and real-time cloud synchronization.

![Status](https://shields.io)
![Version](https://shields.io)
![Stack](https://shields.io)
![License](https://shields.io)

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 📖 About The Project

### What is this project?
Scribble is a complete cloud-based notes app that gives users a clean workspace to write, manage, and organize their thoughts. Users can create secure accounts, organize their notes into folders, apply custom tags for quick retrieval, and format their ideas seamlessly. 

### Why did I build it?
- To master relational data management (handling parent-child relationships like Folders containing Notes).
- To dive deeper into full-text search algorithms and query filters in a backend database.
- To create a practical productivity tool that solves real-world organization needs.

### Project Background
This project began as a frontend mockup for writing markdown text. It is now evolving into a robust, responsive web app backed by a database to ensure notes persist safely and are accessible across any device.

---

## 🎯 Project Objectives

- [x] Design an intuitive, distraction-free writing UI with a dynamic sidebar
- [ ] Implement secure user authentication (JWT-based login and session persistence)
- [ ] Create CRUD operations for notes, folders, and structural groupings
- [ ] Build an efficient, real-time search engine to scan titles and content body
- [ ] Set up secure cloud storage for note data to prevent data loss on logouts
- [ ] Deploy frontend and backend microservices online for public availability

---

## ✨ Features

### ✅ Currently Implemented
- **Workspace Layout** — Clean, responsive sidebar navigation alongside a main writing panel.
- **Dynamic Content Areas** — Switch seamlessly between "All Notes", "Recent Notes", and "Trash".
- **Visual Categorization** — Unique visual identifiers for pinned items and active selections.
- **Static Authentication Shell** — Registration and Login user interfaces built out.

### 🚧 In Progress / Next
- **Dynamic Persistence** — Storing and syncing note payloads inside a live database.
- **Folder Management** — Capability to create, rename, drag, and delete parent folders.
- **Rich Text Editor Integration** — Adding inline formatting like headers, code snippets, and lists.

### 🔮 Planned Future Features
- [ ] **Markdown Support** — Auto-rendering rich elements out of raw markdown inputs.
- [ ] **Collaborative Workspace** — Generating shared links to allow read/write file access for friends.
- [ ] **Offline Mode** — Local caching via Service Workers that syncs automatically when reconnected.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | Document handling, sidebar rendering, client-side logic |
| **Backend** | Node.js + Express | REST API handling routes for `/api/notes`, `/api/auth`, and `/api/folders` |
| **Database** | MongoDB + Mongoose | Saving documents with distinct schemas for Users, Folders, and Notes |
| **Auth** | JWT (JSON Web Tokens) + bcrypt | Securing note paths, encrypting credentials, managing auth states |
| **Deployment**| Frontend: Vercel / Netlify <br> Backend: Render / Railway | Server environments hosting production endpoints |

---

## 📂 Project Structure

```text
scribble-notes-app/
│
├── frontend/
│   ├── index.html          # Main application writing environment
│   ├── login.html          # User authentication entry portal
│   ├── signup.html         # User onboarding setup portal
│   ├── css/
│   │   └── global.css      # Shared palette variables and markdown layouts
│   └── js/
│       ├── app.js          # Core document editing & layout controller
│       ├── auth.js         # Intercepts login forms and saves session tokens
│       └── api.js          # Manages fetch requests to backend endpoints
│
├── backend/
│   ├── server.js           # Initializes server pipeline & database handshake
│   ├── routes/
│   │   ├── auth.js         # Authentication logic paths
│   │   ├── notes.js        # Note creation, update, and search logic
│   │   └── folders.js      # Structural folder generation endpoints
│   ├── models/
│   │   ├── User.js         # Profiles, emails, and hashed password keys
│   │   ├── Note.js         # Title fields, main body, folder links, and tags
│   │   └── Folder.js       # Directory names linked to owner IDs
│   └── middleware/
│       └── verifyToken.js  # Blocks unauthorized requests to user notes
│
├── .env.example            # Environment variables placeholder config
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following tools set up on your machine:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes packaged with Node)
* **MongoDB Atlas account** (or a local MongoDB installation running)

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd scribble-notes-app
   ```

2. **Set up Environment variables**
   Create a `.env` file within the `backend/` directory:
   ```text
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_encryption_key
   ```

3. **Launch the backend server**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Launch the frontend interface**
   Simply open `frontend/login.html` or `frontend/index.html` using a local environment live-reloader (like Live Server in VS Code) to watch your edits reflect live!

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

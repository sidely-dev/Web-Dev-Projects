# 🧮 Split Bill Pro (v1)

> A web-based simulator and dynamic calculator designed to calculate, split, and estimate group bills with an interactive interface.

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
Split Bill Pro is an interactive, web-based simulator built to solve the social headache of dividing group expenses. Instead of using static, boring input grids, this project focuses on a highly visual graphical user interface (GUI) that simulates dining or expense scenarios to accurately parse who owes what—handling dynamic factors like custom tip percentages, local sales tax, and uneven item assignments.

### Why did I build it?
- To practice state management in vanilla JavaScript when tracking highly dynamic, interconnected data inputs.
- To focus heavily on frontend UI/UX logic, data binding, and DOM updates without relying on heavy frontend frameworks.
- To implement floating-point math validation patterns to prevent common decimal rounding errors in financial computations.

### Project Background
This utility project focuses heavily on interactive GUI elements. It transitions static math formulas into a reactive, gamified web tool where adding people, dragging items, or sliding scales instantly changes financial outputs across the group model.

---

## 🎯 Project Objectives

- [x] Build a responsive, dashboard-style GUI workspace for inputting core receipt data
- [ ] Implement an state machine to manage dynamic list structures (People, Items, Shares)
- [ ] Write granular split calculation utilities handling uneven distributions, tax weighting, and tip margins
- [ ] Create a visual dashboard summarizing total costs vs individual breakdowns
- [ ] Connect a persistent data layer to save or share group tabs for later review
- [ ] Deploy the application to a live platform for fast, real-world utility testing

---

## ✨ Features

### ✅ Currently Implemented
- **Dynamic Total Tracker** — Central calculator engine validating baseline receipt metrics, tax values, and tipping presets.
- **Participant Ledger** — Add and remove custom names in real-time, instantly refreshing the layout arrays.
- **Responsive Theme Framework** — Clean, dark-mode-first aesthetic targeting mobile browser viewport environments.

### 🚧 In Progress / Next
- **Granular Itemizer System** — A breakdown list where individual items can be assigned exclusively to specific group members.
- **Tax & Tip Auto-Proportioning** — Logic modules that accurately scale overhead expenses across people based strictly on their order subtotal.
- **Instant Result Panel** — A clean checkout overview mapping out clean summaries of exactly who owes what.

### 🔮 Planned Future Features
- [ ] **Quick Currency Conversions** — On-the-fly currency swapping using baseline exchange rate packages.
- [ ] **Settle Up Sharing Links** — Dynamic URL generation that copies an individual's specific tab payload to text out over messaging apps.
- [ ] **Camera Receipt Scanning** — Future client OCR integrations to scan paper bills and automatically populate the itemizer arrays.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS | Interactive workspace elements, calculation bindings, layout mutations |
| **Backend** | Node.js + Express | API path configuration managing quick history storage keys or session templates |
| **Database** | MongoDB + Mongoose | Saving past ledger archives, shared groups, and historical splitting models |
| **Styling** | Custom Flexbox/Grid CSS | Clean, tactile grid blocks and fully fluid responsive web layout scales |
| **Deployment**| Frontend: Vercel / Netlify <br> Backend: Render / Railway | Hosting providers handling active application pipelines |

---

## 📂 Project Structure

```text
split-bill-pro/
│
├── frontend/
│   ├── index.html          # Primary calculator GUI canvas space
│   ├── history.html        # Ledger look-up panel for past group sessions
│   ├── css/
│   │   └── layout.css      # Core styles handling inputs, grid groups, and badges
│   └── js/
│       ├── calculator.js   # Math kernel managing tax, tip, and fraction operations
│       ├── state.js        # Active workspace memory arrays (People, Items)
│       └── dom.js          # Handles dynamic list generation and layout rendering
│
├── backend/
│   ├── server.js           # Launch file initializing local backend network frameworks
│   ├── routes/
│   │   └── sessions.js     # Management endpoints to save, pull, or copy splitting records
│   └── models/
│       └── Session.js      # Document layout detailing total bills, items, and peer lists
│
├── .env.example            # Environment configurations blueprint file
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following packages running locally:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes default with Node environment configurations)
* **MongoDB Community Server** running locally, or an active cloud-managed cluster link

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd split-bill-pro
   ```

2. **Configure environment settings**
   Create a `.env` configuration file inside your `backend/` folder:
   ```text
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. **Boot the application server backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Launch the web application GUI**
   Open `frontend/index.html` directly in your web browser or use a live development server plugin (like VS Code Live Server) to interact with the frontend dynamically!

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

# 🔗 SnapLink (Scalable URL Shortener)

> A high-performance, full-stack URL-shortening service engineered to convert long URLs into compact links while supporting rapid redirection, real-time analytics, caching, and abuse protection. Test2

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
SnapLink is a utility web application designed to compress long, unwieldy URLs into highly shareable, clean slugs. 

```text
Long URL:  https://example.com/products/category/item/123456789
                 ↓
           [ SnapLink Engine ]
                 ↓
Short URL: https://snap.ly
```

When a user visits a shortened URL, the system dynamically maps the short token back to the primary location and processes the route redirection seamlessly.

### Why did I build it?
- To learn base encoding algorithms (like Base62 hashing) for generating short, unique URL tokens.
- To study system performance optimizations such as indexing databases for hyper-fast link lookups.
- To practice capturing and processing analytical network request metadata (IPs, user agents, referrers).

### Project Background
This utility project handles high-frequency data reads and writes. It focuses on clean backend routing, database constraints, and visual reporting metrics for tracking link popularity.

---

## 🎯 Project Objectives

- [x] Create a clean, responsive single-page portal to submit long links and retrieve shortened tokens
- [ ] Implement a custom Base62 encoding engine to generate clean 5-to-7 character short keys
- [ ] Build a rapid redirection API route that minimizes path lookup overhead
- [ ] Track click metadata to record time, location data, and browser properties per access event
- [ ] Set up database indexing on shortened key parameters to keep lookups fast
- [ ] Deploy the complete live production platform onto scalable hosting environments

---

## ✨ Features

### ✅ Currently Implemented
- **Dynamic Entry Portal** — Modern user interface with copy-to-clipboard functionality for generated short links.
- **Link Validator** — Client-side string check mechanisms ensuring only properly formatted protocols (`http://` or `https://`) can be processed.
- **Recent Activity Ledger** — A temporary history feed on the dashboard showing recently shortened links during the current session.

### 🚧 In Progress / Next
- **Hashed Token Generator** — Backend mapping routes using custom unique algorithms to link short tokens to data payloads.
- **Analytics Capture Engine** — Route handlers tracking user agent strings and referral header sources upon link access.
- **Link Expiration Lifecycle** — Optional database rules that clean out and delete short paths after set expiry time periods.

### 🔮 Planned Future Features
- [ ] **Redis Caching Integration** — Memory-layer lookups to serve high-traffic redirects instantly without hitting the main database.
- [ ] **Rate Limiting Protection** — Abuse safety guards using IP tokens to block brute-force automation scripts.
- [ ] **Analytics Visual Dashboard** — Modern graph panels visualizing aggregate weekly click performance metrics.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS | User interaction forms, dynamic copy actions, analytics display |
| **Backend** | Node.js + Express | REST API routes handling shortened link redirection and link storage logic |
| **Database** | MongoDB + Mongoose | Key/Value style persistent storage indexing `shortUrl` keys to `longUrl` targets |
| **Validation** | Validator.js | Regular expression string vetting confirming destination URL structures |
| **Deployment**| Frontend: Vercel / Netlify <br> Backend: Render / Railway | Server infrastructure running live application routines |

---

## 📂 Project Structure

```text
snaplink-url-shortener/
│
├── frontend/
│   ├── index.html          # Main landing dashboard for shortening links
│   ├── analytics.html      # Individual dashboard view for checking link performance
│   ├── css/
│   │   └── style.css       # Clean layout systems, form designs, and copy animations
│   └── js/
│       ├── main.js         # Intercepts form submissions and interacts with shortening API
│       └── metrics.js      # Processes tracking responses to load metrics graphs
│
├── backend/
│   ├── server.js           # Main application engine establishing server networks
│   ├── routes/
│   │   ├── url.js          # API paths managing slug creation (`/api/shorten`)
│   │   └── redirect.js     # Core wildcard route intercepting short keys (`/:shortCode`)
│   ├── models/
│   │   ├── Url.js          # Documents storing long URLs, short codes, and creation timestamps
│   │   └── Analytics.js    # Data ledgers storing browser info, timestamps, and click counts
│   └── utils/
│       └── generateCode.js # Standalone module housing the short-code generation algorithm
│
├── .env.example            # Environment variables placeholder config
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following tools set up on your machine:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (packaged alongside Node installation updates)
* **MongoDB Atlas account** (or a local MongoDB instance running)

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd snaplink-url-shortener
   ```

2. **Set up Environment configurations**
   Create a `.env` file within the `backend/` directory:
   ```text
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:5000
   ```

3. **Launch the backend server**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Launch the frontend interface**
   Open `frontend/index.html` using a local static file server plugin (like Live Server in VS Code) to test link form posts against your running local server!

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

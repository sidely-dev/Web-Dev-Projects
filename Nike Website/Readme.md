# 👟 Nike Shoe Store (Full-Stack E-Commerce)

> A full-stack Nike-inspired sneaker e-commerce website built from scratch — starting with a clean frontend and evolving into a complete application with authentication, product management, cart, and order handling.

![Status](https://img.shields.io/badge/Status-In%20Development-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-0.1.0-blue?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Node.js%20%7C%20MongoDB-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started (Dev To-Do List)](#-getting-started-dev-to-do-list)
- [Development Timeline & Roadmap](#-development-timeline--roadmap)
- [What I'm Learning](#-what-im-learning)
- [Screenshots](#-screenshots)
- [Known Issues](#-known-issues)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 📖 About The Project

### What is this project?

A Nike-inspired sneaker store where users can browse shoes by category (Sneakers, Boots, Low-tops, Sandals), view product details, add items to cart, create accounts, and place orders.

This started as a pure frontend project (HTML + CSS) and is being expanded into a full-stack application so I can learn backend fundamentals through a real product.

### Why did I build it?

- To practice building a real e-commerce UI from scratch
- To force myself to learn backend concepts (APIs, databases, auth, state) by needing them
- To create a strong portfolio project that shows both frontend and full-stack ability

### Project Background

Personal learning + portfolio project. Started with static HTML/CSS (main page, login/signup, styles, product images) and is now being turned into a complete full-stack application.

---

## 🎯 Project Objectives

- [x] Build a clean, responsive Nike-style product listing page
- [ ] Make the site fully dynamic (products come from a database)
- [ ] Add user authentication (signup / login)
- [ ] Implement shopping cart + basic checkout flow
- [ ] Create an admin-friendly way to manage products
- [ ] Deploy a working version online
- [ ] Document everything clearly for portfolio use

---

## ✨ Features

### ✅ Currently Implemented
- Responsive header with search bar and category navigation
- Sidebar navigation
- Product cards (Trending Sneakers + Low-tops sections)
- Footer with Info & Support links
- Separate login and signup pages (structure ready)

### 🚧 In Progress / Next
- Dynamic product data from database
- User authentication
- Shopping cart functionality
- Product detail pages

### 🔮 Planned
- Order history
- Admin product management
- Image uploads for products
- Payment simulation / Stripe test mode
- Search & filtering that actually works
- Wishlist

---

## 🛠️ Tech Stack

| Layer          | Technology                          | Purpose                          |
|----------------|-------------------------------------|----------------------------------|
| Frontend       | HTML5, CSS3, Vanilla JS (or React later) | UI & client-side logic          |
| Backend        | Node.js + Express                   | REST API                         |
| Database       | MongoDB (with Mongoose)             | Products, users, orders          |
| Auth           | JWT + bcrypt                        | Secure login / signup            |
| Styling        | Custom CSS (possibly Tailwind later)| Design system                    |
| Deployment     | Frontend: Vercel / Netlify<br>Backend: Render / Railway | Hosting                  |
| Version Control| Git + GitHub                        | Code management                  |

---

## 📂 Project Structure (Target)

```text
nike-shoe-store/
│
├── frontend/
│   ├── index.html          # Main product listing (your current main.html)
│   ├── login.html
│   ├── signup.html
│   ├── product.html        # Individual product page (to be created)
│   ├── cart.html
│   ├── css/
│   │   └── stylesheet.css
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── cart.js
│   └── images/
│       ├── shoes/
│       └── icons/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── auth.js
│   │   └── orders.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env.example
│   └── package.json
│
├── docs/
│   └── screenshots/
│
├── README.md
├── DEVELOPMENT_LOG.md      # (recommended – track what you did each week)
└── .gitignore

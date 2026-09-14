# 🌤️ SkySync (Full-Stack Weather App)

> A real-time, full-stack weather tracking application that provides hyper-local forecasts, interactive radar map overlays, historical climate insights, and automated severe weather notifications.

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
SkySync is a web-based dashboard engineered to fetch, aggregate, and visualize weather conditions globally. By pairing responsive frontends with a robust backend proxy API, the application safely requests real-time weather metrics, manages saved user locations, saves historical weather searches, and serves dynamic geocoding responses.

### Why did I build it?
- To master asynchronous backend operations and securely handle third-party API keys (e.g., OpenWeatherMap, WeatherAPI).
- To study data visualization strategies using charting libraries and geographical map integration APIs.
- To practice custom caching systems to decrease network requests and drastically speed up backend response times.

### Project Background
This project transitions simple static weather lookups into a personalized climate hub. It focuses heavily on security (preventing front-facing API exploitation) and optimizing real-time data streams via server routes.

---

## 🎯 Project Objectives

- [x] Design a dynamic weather dashboard displaying current metrics (UV Index, humidity, wind velocity)
- [ ] Establish a secure Node.js backend proxy to communicate safely with external weather APIs
- [ ] Connect a persistent database layer to handle user profiles and pinned watchlists
- [ ] Build a search autocompletion engine using location geocoding services
- [ ] Integrate interactive mapping modules for real-time visual radar layers
- [ ] Deploy the working services publicly onto isolated cloud web hosting providers

---

## ✨ Features

### ✅ Currently Implemented
- **Weather Status Canvas** — Responsive UI display that renders live conditions and changes backgrounds dynamically based on local conditions (sunny, rainy, snowy).
- **Search Engine Bar** — Client-side inputs equipped to query text parameters and dispatch location triggers.
- **Metric Unit Toggler** — Instant UI scaling configuration to switch between Celsius/Metric and Fahrenheit/Imperial profiles.

### 🚧 In Progress / Next
- **Secure Backend Router** — Endpoint structures processing API requests secretly, keeping developer access keys out of client source code.
- **Location Database Ledger** — Document schemas saving preferred city lists relative to user login instances.
- **Extended Forecast Matrix** — Multi-day card components displaying detailed thermodynamic calculations and pressure graphs.

### 🔮 Planned Future Features
- [ ] **Interactive Visual Maps** — Embedded geographic maps projecting rain radar overlays and wind flow charts.
- [ ] **Severe Weather Alerts** — Automatic notification systems pushing pop-ups or SMS triggers when regional hazards occur.
- [ ] **Air Quality Matrix** — Expanded dataset widgets reporting localized ozone, pollen counts, and particulate matters.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS | User interaction layouts, geolocation fetching, charts orchestration |
| **Backend** | Node.js + Express | API path configuration, secure token proxies, and response payload caching |
| **Database** | MongoDB + Mongoose | Saving account properties, search history records, and custom dashboard layouts |
| **External APIs**| OpenWeatherMap / WeatherAPI | Downstream providers supplying live data grids and historical indexes |
| **Deployment**| Frontend: Vercel / Netlify <br> Backend: Render / Railway | Environments handling continuous integration and live public paths |

---

## 📂 Project Structure

```text
skysync-weather-app/
│
├── frontend/
│   ├── index.html          # Core weather dashboard workspace view
│   ├── login.html          # Watchlist account authorization portal
│   ├── css/
│   │   └── main.css        # Adaptive layout grids and condition-based theme sheets
│   └── js/
│       ├── weather.js      # Manipulates DOM text nodes using backend JSON payloads
│       ├── geo.js          # Handles browser geolocation queries and autocomplete tools
│       └── charts.js       # Processes hourly forecasts onto trend line graphs
│
├── backend/
│   ├── server.js           # Launch application booting the local node servers
│   ├── routes/
│   │   ├── weatherProxy.js # Middleman controller fetching external API data safely
│   │   └── users.js        # Manages endpoints saving custom city watchlists
│   ├── models/
│   │   └── User.js         # Document schema mapping credentials and tracked locations
│   └── middleware/
│       └── rateLimiter.js  # Throttling scripts keeping API request counts within free tiers
│
├── .env.example            # Blueprint detailing hidden third-party access variables
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have these packages running locally before booting the system:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (shipped default with Node environments)
* **Free Third-Party Weather Key** (obtainable via OpenWeatherMap or WeatherAPI)
* **MongoDB cluster** link (Atlas instance or local DB service)

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd skysync-weather-app
   ```

2. **Configure hidden variable profiles**
   Create a `.env` file within your `backend/` directory:
   ```text
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   WEATHER_API_KEY=your_secret_weather_api_token
   ```

3. **Launch the backend server proxy**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Launch the frontend interface**
   Open `frontend/index.html` directly using a development local web server tool (like VS Code Live Server) to interact with live weather endpoints running on your localhost backend!

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

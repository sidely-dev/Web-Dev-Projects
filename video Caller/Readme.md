# 📹 WebRTC Video Calling Application

> A browser-based peer-to-peer video calling application built to explore real-time communication, WebRTC, signaling, network traversal, and browser media APIs.

![Status](https://img.shields.io/badge/Status-In%20Development-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-0.1.0-blue?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-WebRTC%20%7C%20WebSockets%20%7C%20Node.js-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Goals](#-project-goals)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Roadmap](#-development-roadmap)
- [What I'm Learning](#-what-im-learning)
- [Screenshots](#-screenshots)
- [Known Issues](#-known-issues)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 📖 About The Project

This project is a **browser-based video calling application** that allows users to establish real-time audio and video communication directly between browsers.

Unlike traditional video streaming platforms that rely on central media servers, this application focuses on **peer-to-peer (P2P)** connections using **WebRTC**. The goal is to let browsers communicate directly whenever network conditions allow.

The project explores:

- Webcam and microphone access
- Peer-to-peer communication
- WebRTC fundamentals
- Signaling
- WebSockets
- STUN and TURN servers
- NAT traversal
- Real-time networking
- Browser media APIs
- Connection management
- Security and permissions

---

## 🎯 Project Goals

The main goals of this project are to:

- [ ] Build a working browser-to-browser video call
- [ ] Understand how WebRTC works under the hood
- [ ] Learn how signaling works
- [ ] Understand NAT traversal challenges
- [ ] Work with STUN and TURN servers
- [ ] Learn WebSocket communication
- [ ] Handle browser media permissions correctly
- [ ] Manage connection failures and reconnections
- [ ] Understand peer-to-peer networking concepts
- [ ] Build a real-time web application from scratch

---

## ✨ Features

### ✅ Currently Implemented / In Progress
- Basic project structure
- Media device access (`getUserMedia`)
- Signaling server foundation

### 🚧 Core Features Being Built
- One-to-one video & audio calls
- Real-time signaling via WebSockets
- ICE candidate exchange
- Connection state handling

### 🔮 Planned Features
- Room-based calling (join with a room ID)
- Mute / unmute audio
- Enable / disable video
- Screen sharing
- Call timer
- Reconnection logic
- Multiple STUN/TURN server support
- Simple UI for joining and leaving calls
- Mobile browser support

---

## 🛠️ Tech Stack

| Layer              | Technology                  | Purpose                                      |
|--------------------|-----------------------------|----------------------------------------------|
| Frontend           | HTML, CSS, JavaScript       | User interface & WebRTC client               |
| Real-time Protocol | WebRTC                      | Peer-to-peer audio/video                     |
| Signaling          | WebSockets (Socket.IO or ws)| Exchange offer/answer & ICE candidates       |
| Backend            | Node.js + Express           | Signaling server                             |
| NAT Traversal      | STUN / TURN                 | Help peers connect across NATs/firewalls     |
| Deployment         | Railway / Render / Vercel   | Host signaling server + frontend             |

---

## 🧠 How It Works

The basic architecture looks like this:

# BitLift 🚀

BitLift is a **peer-to-peer file sharing platform** built for privacy, speed, and simplicity.  
No servers store your files — transfers happen directly between devices using **WebRTC DataChannels** with a lightweight **WebSocket signaling server**.

---

## 🔗 Overview

**Goal:** Make file sharing fast, secure, and decentralized.  
When a user clicks **“Share Now”**, BitLift creates a temporary P2P session link. The receiver opens that link and instantly connects to the sender — no uploads, no middlemen, no database.

---

## ✨ Features

- ⚡ **Direct P2P transfer** — files never touch a server.  
- 🔒 **End-to-end data path** — all communication is encrypted by WebRTC.  
- 🧠 **No login, no account, no storage** — completely ephemeral sessions.  
- 🪶 **Lightweight signaling** via WebSocket (no database).  
- 🧱 **Minimal UI** built with React + Tailwind CSS.  
- 💡 **Open source** and fully customizable.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Tailwind CSS, Vite |
| Signaling Server | Node.js, Express, ws (WebSocket) |
| Communication | WebRTC DataChannel |
| Routing | React Router v6 |

---

---

## ⚙️ Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/poison291/BitLift.git
cd BitLift




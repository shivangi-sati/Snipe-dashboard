# Snipe Dashboard (React + JavaScript)

A simple shipment tracking dashboard built with React, Vite, TailwindCSS and a mock JSON API.

## Features

- Login page (accepts any credentials)
- Dashboard with overview cards and shipments table
- Search (by ID/product), sorting (product id, delivery time & last updated), pagination
- Shipment details page with timeline, logs and status
- Mock API (json-server) with loading/error states

## Libraries Used

- React + Vite
- JavaScript
- TailwindCSS
- Axios
- React Router
- json-server (dev)

## Setup

🖥️ Client Setup (Vite + React)
Install dependencies
cd client
npm install

Run development server
npm run dev

Build for production
npm run build

Preview production build
npm run preview

🗄️ Server Setup (JSON Server)
Install dependencies
cd server
npm install

Start the backend
npm start

This will start your backend on http://localhost:5000

🌐 Running Full Project

Open two terminals:

Terminal 1: Start Backend
cd server
npm start

Terminal 2: Start Frontend
cd client
npm run dev

Now your project will be live at:

Frontend → http://localhost:5173

Backend → http://localhost:5000

## Directory Structure

SNIPE-DASHBOARD<br>
├── client<br>
│ ├── dist<br>
│ │ ├── assets<br>
│ │ │ ├── index-9vLfw4p-.css<br>
│ │ │ └── index-DYY9AdHq.js<br>
│ │ ├── index.html<br>
│ │ └── vite.svg<br>
│ ├── images<br>
│ ├── node_modules<br>
│ ├── public<br>
│ ├── src<br>
│ │ ├── api<br>
│ │ │ └── api.js<br>
│ │ ├── assets<br>
│ │ ├── components<br>
│ │ ├── hooks<br>
│ │ ├── pages<br>
│ │ ├── App.jsx<br>
│ │ ├── index.css<br>
│ │ └── main.jsx<br>
│ ├── .gitignore<br>
│ ├── eslint.config.js<br>
│ ├── index.html<br>
│ ├── package-lock.json<br>
│ ├── package.json<br>
│ └── vite.config.js<br>
│<br>
└── server<br>
├── node_modules<br>
├── db.json<br>
├── package-lock.json<br>
├── package.json<br>
└── server.js<br>

## 📸 Screenshots

### 🔐 Login Page

<p align="center">
  <img src="./screenshots/login.png" alt="Login Screen" width="800" />
</p>

---

### 📊 Dashboard – Full View

<p align="center">
  <img src="./screenshots/dashboard.png" alt="Dashboard Screenshot" width="800" />
</p>

---

### 📄 Dashboard – Paginated List View

<p align="center">
  <img src="./screenshots/dashboard-page-2.png" alt="Dashboard Page 2 Screenshot" width="800" />
</p>

---

### 📦 Shipment Details View

<p align="center">
  <img src="./screenshots/shipment-details.png" alt="Shipment Details View" width="800" />
</p>

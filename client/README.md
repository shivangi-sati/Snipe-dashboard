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

1. Install dependencies:

```bash
npm install
```

2. Start json-server (in separate terminal) to serve mock API:

```bash
npm run json-server
```

3. Start dev server:

```bash
npm run dev
```

## Directory Structure

snipe-dashboard/
├── data/<br>
│ └── shipments.json<br>
│
├── public/ <br>
│ └── images/ (All product images png) <br>
│
├── src/ <br>
│ ├── api/ <br>
│ │ └── api.js
│ │
│ ├── assets/
│ │
│ ├── components/ <br>
│ │ ├── Loader.jsx <br>
│ │ ├── OverviewCards.jsx <br>
│ │ ├── ShipmentsTable.jsx <br>
│ │ ├── StatusBadge.jsx <br>
│ │ └── Timeline.jsx <br>
│ │
│ ├── hooks/ <br>
│ │ └── useShipments.js
│ │
│ ├── pages/ <br>
│ │ ├── Dashboard.jsx <br>
│ │ ├── Login.jsx <br>
│ │ └── ShipmentDetails.jsx <br>
│ │
│ ├── App.jsx <br>
│ ├── index.css <br>
│ └── main.jsx <br>
│
├── README.md<br>
├── package.json<br>
└── vite.config.js<br>

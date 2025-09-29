# Domain/IP Reputation Checker – Modern Web App

This repository contains a full‑stack implementation of the Domain/IP reputation checker you requested.  The design follows a clean, minimalist aesthetic with a glassmorphism twist and is built with **React** on the client side and **Express** (Node.js) on the server side.  It also includes Tailwind CSS for rapid styling and modern typography.


## Getting Started

### Prerequisites

To run the app locally, you’ll need Node.js 16 or later.  Install dependencies separately for the server and client.

```bash
cd ui_design_project/server
npm install

cd ../client
npm install
```

Create a `.env` file in both `server` and `client` directories based on their respective `.env.example` files, inserting your VirusTotal and AbuseIPDB API keys.  These keys are required for the reputation lookups.

### Running the Server

```bash
cd ui_design_project/server
npm start
```

The server will start on `http://localhost:5000` and proxy requests to VirusTotal and AbuseIPDB.  You can also adapt it to call your Python script using `child_process.exec` if preferred.

### Running the Client

```bash
cd ui_design_project/client
npm run dev
```

The React app uses Vite and will be available at `http://localhost:5173`.  The proxy defined in `vite.config.js` forwards API requests to the Express server.


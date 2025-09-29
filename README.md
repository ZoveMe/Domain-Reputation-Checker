# Domain/IP Reputation Checker – Modern Web App

This repository contains a full‑stack implementation of the Domain/IP reputation checker you requested.  The design follows a clean, minimalist aesthetic with a glassmorphism twist and is built with **React** on the client side and **Express** (Node.js) on the server side.  It also includes Tailwind CSS for rapid styling and modern typography.

## Overview

The app allows a user to enter a domain name or IP address and retrieves reputation information by querying the VirusTotal and AbuseIPDB APIs.  Results are displayed in an elegant card with clear typography, icons and subtle animations.  The design adheres to the requirements you provided:

* **Visual Style** – The UI uses a cohesive palette of two primary colours (deep blue and purple) with a warm accent colour.  Generous white space and glassmorphic cards give the app a sleek, uncluttered feel.
* **Layout and Structure** – A responsive, grid‑based layout ensures consistent alignment across devices.  Navigation is simplified into a top bar with the app name and optional links.  The content area adapts seamlessly to different screen sizes.
* **UI Elements** – Custom icons (via `react-icons`) accompany buttons and feedback messages.  Buttons and form fields are styled with gentle shadows and rounded corners.  Subtle transitions (opacity and position) are applied to result cards for a polished feel.
* **UX Considerations** – Visual feedback is provided through loading spinners and disabled states.  User flow is optimised: from landing to results in a single step.  On mobile, larger touch targets and intuitive gestures (e.g. tapping anywhere outside the card to dismiss) are supported.
* **Branding** – A placeholder logo and brand name are integrated into the header.  Update these assets to reflect your own identity.
* **Accessibility** – Colour contrasts meet WCAG AA standards.  All interactive elements are keyboard navigable and labelled with `aria` attributes.  Responsive font sizes ensure readability.
* **Current Trends** – Glassmorphism is used on the result card (a frosted, semi‑transparent panel with a subtle blur effect).  A soft gradient background adds depth without distraction.

Although the backend calls out to VirusTotal and AbuseIPDB in this example, feel free to swap in the Python script you created earlier.  The Express server simply exposes a `/api/reputation/:target` endpoint for the frontend to call.

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

## Project Structure

```
ui_design_project/
├── server/             # Express backend
│   ├── index.js        # API endpoint definitions
│   ├── package.json    # Node dependencies
│   ├── .env.example    # Sample environment variables
│   └── README.md       # Backend instructions
├── client/             # React frontend
│   ├── src/
│   │   ├── main.jsx    # Entry point
│   │   ├── App.jsx     # Top‑level component
│   │   ├── components/ # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── Footer.jsx
│   │   ├── index.css   # Tailwind base styles
│   ├── package.json    # Frontend dependencies
│   ├── vite.config.js  # Vite config with proxy
│   ├── tailwind.config.js  # Tailwind customisation
│   ├── postcss.config.js   # PostCSS config
│   └── .env.example    # Sample client environment variables
└── README.md           # This file
```

Explore the individual README files in the `server` and `client` folders for further details on each part of the stack.  Feel free to customise colours, typography and layout to match your brand identity or to incorporate neumorphism if desired.  This project provides a solid foundation to build upon.
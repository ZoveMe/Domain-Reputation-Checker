# Backend (Express Server)

This directory contains the Node.js backend built with Express.  It exposes a
simple API endpoint used by the frontend to retrieve reputation data for
domains and IP addresses.  The server proxies requests to VirusTotal and
AbuseIPDB.  If you prefer to call the Python script you created earlier,
adjust the handler in `index.js` accordingly (see the comments in the code).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and populate it with your API keys:
   ```bash
   cp .env.example .env
   # edit .env to add VT_API_KEY and ABUSEIPDB_API_KEY
   ```

3. Start the server:
   ```bash
   npm start
   ```
   By default it listens on port `5000`.  Feel free to change the `PORT`
   variable in `index.js` or set a different value in your environment.

## API Endpoint

### `GET /api/reputation/:target`

Returns reputation information for a domain name or IP address.  The server
uses the VirusTotal and AbuseIPDB REST APIs and merges the results.

#### Response format

```json
{
  "target": "example.com",
  "virusTotal": {
    "malicious": 0,
    "suspicious": 0,
    "harmless": 70,
    "undetected": 1,
    "total": 71,
    "reputation": 0
  },
  "abuseIPDB": {
    "abuseConfidenceScore": 17,
    "totalReports": 5,
    "lastReportedAt": "2025-08-28T14:32:00"
  }
}
```

If an error occurs (e.g. network error or invalid target), the API responds
with a 500 status code and an object containing an `error` property.

## Notes

This server uses the `axios` library for HTTP requests and `dotenv` to load
environment variables.  CORS is enabled by default to allow the React
development server to make requests from a different origin (port 5173).

Feel free to customise this backend to fit your architecture.  For example,
you could replace the API calls with a call to a Python script via
`child_process.exec` if you want to reuse your existing Python logic.
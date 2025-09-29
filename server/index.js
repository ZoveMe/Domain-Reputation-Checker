const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Helper: check if a string looks like an IPv4 address
function isIpAddress(target) {
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(target);
}

async function fetchVirusTotal(target) {
  const apiKey = process.env.VT_API_KEY;
  const endpoint = isIpAddress(target)
    ? `https://www.virustotal.com/api/v3/ip_addresses/${target}`
    : `https://www.virustotal.com/api/v3/domains/${target}`;
  const headers = { 'x-apikey': apiKey };
  const { data } = await axios.get(endpoint, { headers });
  const attrs = data?.data?.attributes || {};
  const stats = attrs.last_analysis_stats || {};
  const malicious = stats.malicious || 0;
  const suspicious = stats.suspicious || 0;
  const harmless = stats.harmless || 0;
  const undetected = stats.undetected || 0;
  const total = malicious + suspicious + harmless + undetected;
  return {
    malicious,
    suspicious,
    harmless,
    undetected,
    total,
    reputation: attrs.reputation,
  };
}

async function fetchAbuseIPDB(ip) {
  const apiKey = process.env.ABUSEIPDB_API_KEY;
  const url = 'https://api.abuseipdb.com/api/v2/check';
  const headers = {
    Key: apiKey,
    Accept: 'application/json',
  };
  const params = { ipAddress: ip, maxAgeInDays: 90 };
  const { data } = await axios.get(url, { headers, params });
  const result = data?.data || {};
  return {
    abuseConfidenceScore: result.abuseConfidenceScore,
    totalReports: result.totalReports,
    lastReportedAt: result.lastReportedAt,
  };
}

app.get('/api/reputation/:target', async (req, res) => {
  const { target } = req.params;
  try {
    const vt = await fetchVirusTotal(target);
    let abuse = null;
    if (isIpAddress(target)) {
      abuse = await fetchAbuseIPDB(target);
    }
    res.json({ target, virusTotal: vt, abuseIPDB: abuse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch reputation' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
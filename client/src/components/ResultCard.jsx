import React from 'react';
import { FaBug, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

/**
 * ResultCard displays the reputation results returned from the backend.
 * It uses glassmorphism (semi‑transparent backdrop with blur) and a
 * responsive layout.  Malicious, suspicious, harmless and undetected
 * counts are displayed for VirusTotal; abuse metrics are shown for IP
 * addresses.  A simple severity indicator communicates risk.
 */
function ResultCard({ data, className = '' }) {
  const { target, virusTotal, abuseIPDB } = data;
  // Compute a basic severity category from the VirusTotal statistics
  const vt = virusTotal || {};
  const malicious = vt.malicious || 0;
  const suspicious = vt.suspicious || 0;
  const total = vt.total || 1;
  const detectionRatio = (malicious + suspicious) / total;
  let severity = 'safe';
  let SeverityIcon = FaCheckCircle;
  let severityColor = 'text-green-600';
  if (detectionRatio > 0.25) {
    severity = 'malicious';
    SeverityIcon = FaBug;
    severityColor = 'text-red-600';
  } else if (detectionRatio > 0.05) {
    severity = 'suspicious';
    SeverityIcon = FaExclamationTriangle;
    severityColor = 'text-yellow-500';
  }
  // Helper to format date
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleString();
  }
  return (
    <div
      className={`w-full max-w-xl p-6 sm:p-8 rounded-xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          Results for <span className="font-bold">{target}</span>
        </h2>
        <div className={`flex items-center space-x-1 ${severityColor}`}>
          <SeverityIcon className="w-5 h-5" />
          <span className="capitalize text-sm sm:text-base">{severity}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">Malicious</p>
          <p className="text-xl font-bold">{vt.malicious ?? '—'}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Suspicious</p>
          <p className="text-xl font-bold">{vt.suspicious ?? '—'}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Harmless</p>
          <p className="text-xl font-bold">{vt.harmless ?? '—'}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Undetected</p>
          <p className="text-xl font-bold">{vt.undetected ?? '—'}</p>
        </div>
      </div>
      {abuseIPDB && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-2">AbuseIPDB</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Abuse Confidence</dt>
              <dd className="font-bold text-gray-800">
                {abuseIPDB.abuseConfidenceScore ?? '—'}%
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Total Reports</dt>
              <dd className="font-bold text-gray-800">
                {abuseIPDB.totalReports ?? '—'}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Last Reported</dt>
              <dd className="font-bold text-gray-800">
                {formatDate(abuseIPDB.lastReportedAt) || '—'}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
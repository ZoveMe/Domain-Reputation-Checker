import React from 'react';

/**
 * Footer component for the app.  Contains a short disclaimer or
 * informational text.  You can customise the content to fit your brand.
 */
function Footer() {
  return (
    <footer className="w-full mt-auto py-4 bg-white/50 backdrop-blur-xs shadow-inner">
      <div className="max-w-5xl mx-auto px-4 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()} Domain Reputation Checker.  Data sourced from
          VirusTotal and AbuseIPDB.  This tool is for informational purposes
          only.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
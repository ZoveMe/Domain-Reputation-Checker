import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

/**
 * Simple navigation bar with a logo/icon and brand name.  Feel free to
 * replace the icon or text with your own branding.
 */
function Navbar() {
  return (
    <header className="w-full backdrop-blur-xs bg-white/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-start space-x-3">
        <FaShieldAlt className="text-primary text-2xl" />
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Reputation Checker
        </h1>
      </div>
    </header>
  );
}

export default Navbar;
import React from 'react';
import { FaSearch } from 'react-icons/fa';

/**
 * SearchBar component with an input field and a search button.  The
 * `onSubmit` prop is called when the user clicks the button or presses
 * Enter.  A loading state disables the input and button and shows a
 * spinner animation.
 */
function SearchBar({ value, onChange, onSubmit, loading }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="target" className="sr-only">
        Domain or IP address
      </label>
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <input
          id="target"
          type="text"
          className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
          placeholder="Enter domain or IP (e.g. example.com)"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
          aria-label="Domain or IP address to check"
        />
        <button
          className="bg-primary text-white px-5 py-3 flex items-center justify-center space-x-2 disabled:opacity-50"
          onClick={onSubmit}
          disabled={loading}
          aria-label="Check reputation"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            <FaSearch className="h-5 w-5" />
          )}
          <span className="hidden sm:block ml-2">Search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
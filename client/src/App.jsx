import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import ResultCard from './components/ResultCard.jsx';
import Footer from './components/Footer.jsx';

/**
 * Top‑level component controlling the state and layout of the app.
 * Users enter a domain or IP address, and the results are displayed
 * in a glassmorphic card.  Errors and loading states are handled gracefully.
 */
function App() {
  const [target, setTarget] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const trimmed = target.trim();
    if (!trimmed) {
      setError('Please enter a domain or IP address');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await axios.get(`/api/reputation/${encodeURIComponent(trimmed)}`);
      setResult(res.data);
    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start py-12 px-4">
        <SearchBar
          value={target}
          onChange={setTarget}
          onSubmit={handleSearch}
          loading={loading}
        />
        {error && (
          <div className="mt-4 text-red-600 max-w-lg text-center">{error}</div>
        )}
        {result && !error && (
          <ResultCard className="mt-8" data={result} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { Game } from './types';
import { parseCSV, fallbackGames } from './utils/csvParser';

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const REFRESH_INTERVAL = 30000; // 30 seconds

  const loadGames = async () => {
    try {
      const response = await fetch('/games.csv');
      if (!response.ok) {
        throw new Error(`Failed to load CSV: ${response.status}`);
      }
      
      const csvText = await response.text();
      const parsedGames = parseCSV(csvText);
      setGames(parsedGames);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Error loading games from CSV:', err);
      if (games.length === 0) { // Only use fallback if we have no data
        setError('Failed to load games from CSV. Using fallback data.');
        setGames(fallbackGames);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames(); // Initial load

    // Set up auto-refresh
    const intervalId = setInterval(loadGames, REFRESH_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
          <p>Loading games...</p>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-900/20 border border-red-500 text-red-300 px-4 py-3 rounded text-center mx-auto max-w-2xl my-4">
              {error}
            </div>
          )}
          <GameGrid games={games} />
        </>
      )}
      
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
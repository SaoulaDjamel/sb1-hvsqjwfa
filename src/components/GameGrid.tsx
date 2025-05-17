import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  return (
    <section id="games" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Choose Your Game</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameGrid;
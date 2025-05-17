import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl text-center transition-all duration-300 
                    hover:bg-gray-700 hover:scale-[1.03] shadow-md">
      <img 
        src={game.image} 
        alt={game.name} 
        className="w-20 h-20 object-cover rounded-lg mx-auto mb-3"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=Game';
        }} 
      />
      <h3 className="text-lg font-semibold text-white mb-1">{game.name}</h3>
      <p className="text-sm text-gray-400 mb-3">Version: {game.version} • Size: {game.size}</p>
      <a 
        href={game.download_link} 
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                  py-2 px-4 rounded text-sm transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </div>
  );
};

export default GameCard;
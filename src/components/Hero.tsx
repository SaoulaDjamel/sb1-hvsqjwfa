import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Download Top Games</h1>
      <p className="text-lg text-gray-300 mb-8">Pick and install your favorite!</p>
      <a 
        href="#games" 
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 
                  text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 inline-block"
      >
        Start Now
      </a>
    </section>
  );
};

export default Hero;
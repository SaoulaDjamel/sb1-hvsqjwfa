import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 bg-gray-900 text-gray-500 text-sm">
      This is a fan-made site. We are not affiliated with any game companies.
      <br />
      &copy; {new Date().getFullYear()} TechGames.
    </div>
  );
};

export default Footer;
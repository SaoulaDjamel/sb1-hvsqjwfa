import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <StepCard 
          number={1}
          title="Select"
          description="Choose your favorite game from the list above."
        />
        <StepCard 
          number={2}
          title="Complete"
          description="Finish one simple offer to validate your entry."
        />
        <StepCard 
          number={3}
          title="Unlock"
          description="Receive your rewards in your game account instantly!"
        />
      </div>
    </section>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl text-center transition-transform duration-300 hover:scale-[1.02]">
      <h3 className="text-xl font-bold mb-2 text-blue-300">{number}. {title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default HowItWorks;
import React from 'react';
import Button from './Button';

const CTASectionTwo: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 px-6">
      <div className="max-w-5xl mx-auto border border-gold-500/30 rounded-3xl p-10 md:p-16 bg-gradient-to-r from-dark-800 to-dark-900 text-center shadow-[0_0_40px_rgba(214,178,94,0.1)]">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Build Your <span className="text-gold-500">Gold Portfolio?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Don't let inflation erode your savings. Start accumulating timeless wealth today with as little as $10.
        </p>
        <div className="flex justify-center">
          <Button variant="primary" className="text-lg px-10">
            Start Investing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASectionTwo;
import React from 'react';
import Button from './Button';
import { Sparkles } from 'lucide-react';

const CTASectionOne: React.FC = () => {
  return (
    <section className="w-full bg-gold-gradient py-20 text-dark-900 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Sparkles size={48} className="text-dark-900 animate-bounce" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Start Growing Your Digital Gold Today
        </h2>
        <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
          Join thousands of smart investors securing their future with just a few clicks. No hidden fees, just pure growth.
        </p>
        <div className="flex justify-center">
          <Button variant="dark" className="px-10 py-4 text-lg">
            Create Your Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASectionOne;
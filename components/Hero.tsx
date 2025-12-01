import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-900">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-200 text-sm tracking-wide font-medium">#1 Rated Digital Gold Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
            Grow Your Wealth with <span className="text-transparent bg-clip-text bg-gold-gradient">Digital Gold</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-light">
            Invest, track, and grow your gold portfolio with real-time insights. 
            Secure your future with the stability of 24K pure gold.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="primary">
              Start Now
            </Button>
            <Button variant="secondary" className="group">
              Learn More 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Visual Content - Abstract 3D Gold Bar/Graph */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Floating Card Container */}
          <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] bg-gradient-to-br from-gray-800/50 to-black border border-gold-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(214,178,94,0.15)] transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
            
            {/* Header of Card */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Current Value</span>
                <span className="text-3xl font-serif font-bold text-gold-400">$2,458.90</span>
              </div>
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                +2.4% <TrendingUp size={12} />
              </div>
            </div>

            {/* Abstract Gold Bar */}
            <div className="relative h-48 w-full my-8 group">
               <div className="absolute inset-0 bg-gold-gradient rounded-lg shadow-[0_10px_30px_rgba(214,178,94,0.3)] transform skew-y-6 group-hover:skew-y-0 transition-all duration-500"></div>
               <div className="absolute inset-0 bg-black/10 rounded-lg pointer-events-none"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark-900 font-bold text-2xl font-serif opacity-50 mix-blend-overlay">
                 999.9
               </div>
            </div>

            {/* Stats Lines */}
            <div className="space-y-4 mt-auto">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gold-500 rounded-full animate-[shimmer_2s_infinite]"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                 <span>Portfolio Growth</span>
                 <span className="text-white">Excellent</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
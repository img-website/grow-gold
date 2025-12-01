import React from 'react';
import { ShieldCheck, Zap, BarChart3, Coins } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-dark-800 border border-white/5 p-8 rounded-2xl hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Features */}
          <div className="order-2 lg:order-1 space-y-8">
             <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold">
                  About <span className="text-gold-500">Grow Gold</span>
                </h2>
                <h3 className="text-xl text-gray-300 font-light">Your trusted digital gold savings platform</h3>
                <p className="text-gray-500 max-w-lg">
                  We merge the timeless value of gold with modern technology, providing a secure, instant, and transparent way to accumulate wealth.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <FeatureCard 
                  icon={<Coins size={28} />}
                  title="24K Digital Gold"
                  desc="Invest in 99.9% pure gold, backed by real insured vaults. Ownership is yours."
                />
                <FeatureCard 
                  icon={<Zap size={28} />}
                  title="Instant Buy & Sell"
                  desc="Liquidity at your fingertips. Buy or sell your gold instantly at market rates."
                />
                <FeatureCard 
                  icon={<BarChart3 size={28} />}
                  title="Smart Growth Tracker"
                  desc="Monitor your portfolio's performance with our advanced real-time dashboard."
                />
                <FeatureCard 
                  icon={<ShieldCheck size={28} />}
                  title="Bank-Grade Security"
                  desc="Your assets are protected by top-tier encryption and physical audits."
                />
             </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-md aspect-square">
                {/* Decorative Circles */}
                <div className="absolute inset-0 border border-gold-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-8 border border-gold-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-16 border border-gold-500/30 rounded-full"></div>
                
                {/* Center Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-b from-gray-800 to-black border border-gold-500/30 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                     <div className="w-32 h-32 bg-gold-gradient rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(214,178,94,0.4)]">
                        <div className="text-dark-900 font-serif font-bold text-5xl">G</div>
                     </div>
                     <div className="mt-6 text-center">
                       <p className="text-gold-400 font-bold tracking-widest text-sm">EST. 2025</p>
                       <p className="text-white font-serif text-xl mt-1">Pure Wealth</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
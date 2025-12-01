import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alexander Pierce",
    role: "Crypto Investor",
    rating: 5,
    text: "The most elegant and seamless platform I've used for gold investment. The UI is stunning and the tracking tools are precise."
  },
  {
    name: "Sarah Jenkins",
    role: "Wealth Manager",
    rating: 5,
    text: "Grow Gold provides the perfect balance of security and accessibility. My clients love the transparency of the pricing models."
  },
  {
    name: "Michael Chen",
    role: "Day Trader",
    rating: 4,
    text: "Instant liquidity is a game changer. Being able to convert my gold holdings to cash in seconds is exactly what I needed."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">What Our Investors Say</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-dark-800 border border-gold-500/20 p-8 rounded-2xl hover:border-gold-500 transition-colors duration-300 relative group">
              {/* Quote Icon bg */}
              <div className="absolute top-4 right-6 text-6xl text-white/5 font-serif font-bold group-hover:text-gold-500/10 transition-colors">
                "
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < review.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}`} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gold-500/30"></div>
                <div>
                  <h4 className="text-white font-semibold font-serif">{review.name}</h4>
                  <span className="text-gold-500 text-xs uppercase tracking-wider">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
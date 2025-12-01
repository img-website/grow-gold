import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = [
  {
    q: "What is digital gold?",
    a: "Digital gold is a way of investing in physical gold without having to hold it physically. For every unit of digital gold you purchase, an equivalent amount of real, 24K gold is stored in a secure vault under your name."
  },
  {
    q: "Is my investment safe?",
    a: "Absolutely. Your gold is insured and stored in world-class vaults monitored 24/7. We use an independent trustee to verify the quantity and purity of the gold held in the vaults."
  },
  {
    q: "How do I withdraw gold?",
    a: "You can choose to sell your digital gold for cash instantly or redeem it for physical gold coins/bars which will be delivered securely to your doorstep."
  },
  {
    q: "What are the charges?",
    a: "We charge a minimal spread on buy/sell prices which covers storage, insurance, and trustee fees. There are no hidden monthly maintenance charges."
  },
  {
    q: "Can I track gold growth?",
    a: "Yes! Our dashboard provides real-time charts and portfolio analytics, allowing you to track the value of your gold against market fluctuations instantly."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about investing with Grow Gold</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index 
                  ? 'border-gold-500 bg-dark-900/50' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-gold-400' : 'text-white'}`}>
                  {item.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
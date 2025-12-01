import React from 'react';
import { Check, Gem } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for beginners',
      price: 'Free',
      duration: 'Forever',
      features: [
        'Up to ₹50,000 investment limit',
        'Real-time price updates',
        'Basic portfolio tracking',
        'Email support',
        'Mobile app access',
        'Weekly market insights',
      ],
      highlight: false,
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      description: 'For serious investors',
      price: '₹499',
      duration: 'per month',
      features: [
        'Unlimited investment',
        'Advanced analytics & charts',
        'Priority customer support',
        'Automated portfolio rebalancing',
        'Tax reporting tools',
        'Weekly webinars & expert calls',
        'API access',
        'Lower transaction fees (-0.5%)',
      ],
      highlight: true,
      cta: 'Start Free Trial',
    },
    {
      name: 'Premium',
      description: 'For high-net-worth investors',
      price: '₹1,999',
      duration: 'per month',
      features: [
        'All Pro features included',
        'Dedicated account manager',
        '24/7 premium support',
        'Personalized investment strategies',
        'Margin trading options',
        'Advanced tax planning',
        'Institutional-grade reporting',
        'Lowest transaction fees (-1.5%)',
        'VIP access to special events',
      ],
      highlight: false,
      cta: 'Contact Sales',
    },
  ];

  const fees = [
    { item: 'Buying Gold', cost: '0.99%', description: 'One-time purchase fee' },
    { item: 'Selling Gold', cost: '1.49%', description: 'One-time sale fee' },
    { item: 'Storage Fee', cost: 'Free', description: 'Secure vault storage included' },
    { item: 'Insurance', cost: 'Free', description: 'Full coverage included' },
    { item: 'Account Setup', cost: 'Free', description: 'No hidden charges' },
    { item: 'Monthly Maintenance', cost: 'Free', description: 'Forever free' },
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately.',
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No contracts required. Cancel anytime with no penalties or hidden fees.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major debit/credit cards, UPI, net banking, and wallet payments.',
    },
    {
      question: 'Do you offer corporate plans?',
      answer: 'Yes! Contact our sales team for custom enterprise solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5">
            <span className="text-gold-500 text-sm uppercase tracking-widest font-semibold">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Choose Your <span className="bg-clip-text text-transparent bg-gold-gradient">Investment Plan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just transparent pricing designed to maximize your returns.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-lg border transition-all duration-300 ${
                  plan.highlight 
                    ? 'border-gold-500 bg-gradient-to-br from-gold-500/10 to-transparent shadow-2xl shadow-gold-500/20 md:scale-105' 
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                } p-8`}
              >
                {plan.highlight && (
                  <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/50">
                    <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">Most Popular</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-sm">/ {plan.duration}</span>
                  </div>
                </div>

                <Button 
                  variant={plan.highlight ? 'primary' : 'secondary'} 
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={20} className="text-gold-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Transparent Fee Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fees.map((fee) => (
              <div 
                key={fee.item}
                className="flex items-center justify-between p-6 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors"
              >
                <div>
                  <p className="font-semibold mb-1">{fee.item}</p>
                  <p className="text-sm text-gray-400">{fee.description}</p>
                </div>
                <div className="text-2xl font-bold text-gold-500">{fee.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Investment Limit</td>
                  <td className="text-center">₹50K</td>
                  <td className="text-center text-gold-500">Unlimited</td>
                  <td className="text-center text-gold-500">Unlimited</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Transaction Fee</td>
                  <td className="text-center">Standard</td>
                  <td className="text-center text-gold-500">-0.5%</td>
                  <td className="text-center text-gold-500">-1.5%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Priority Support</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><Check size={20} className="inline text-gold-500" /></td>
                  <td className="text-center"><Check size={20} className="inline text-gold-500" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">API Access</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><Check size={20} className="inline text-gold-500" /></td>
                  <td className="text-center"><Check size={20} className="inline text-gold-500" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Account Manager</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><Check size={20} className="inline text-gold-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group p-6 rounded-lg border border-white/10 hover:border-gold-500/30 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold">
                  {faq.question}
                  <Gem size={20} className="text-gold-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-gray-400 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">Choose a plan and start your gold investment journey today.</p>
          <Button variant="primary" className="px-8 py-3">Start Your Free Trial</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;

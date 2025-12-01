import React, { useState } from 'react';
import { ChevronDown, Gem, Mail, Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const FAQPage: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');

  const faqData = [
    {
      category: 'general',
      title: 'General Questions',
      items: [
        {
          question: 'What is Grow Gold?',
          answer: 'Grow Gold is a digital platform that allows you to invest in real, physical gold. We combine blockchain technology with traditional gold vaulting to provide a secure, transparent, and profitable way to own gold.',
        },
        {
          question: 'How is Grow Gold different from traditional gold investment?',
          answer: 'We eliminate middlemen, reduce fees dramatically, provide complete transparency, and offer convenient digital access. You can buy, sell, and track your gold investment in real-time without dealing with physical storage hassles.',
        },
        {
          question: 'Is my gold insured?',
          answer: 'Yes, 100%. All gold held in our vaults is fully insured with top international insurance providers. Your investment is protected against theft, loss, or damage.',
        },
        {
          question: 'Where is my gold stored?',
          answer: 'Your gold is stored in highly secure, certified international vaults with state-of-the-art security systems. We work with only the most reputable vault operators across multiple countries for maximum safety.',
        },
      ],
    },
    {
      category: 'investing',
      title: 'Investing & Trading',
      items: [
        {
          question: 'What\'s the minimum investment amount?',
          answer: 'You can start with as little as ₹500. Our Starter plan has a ₹50,000 limit, but you can upgrade to a higher plan for unlimited investments.',
        },
        {
          question: 'How are prices determined?',
          answer: 'Our prices are based on real-time international gold prices (London Bullion Market) plus our transparent fee structure. Prices update every minute during market hours.',
        },
        {
          question: 'Can I sell my gold anytime?',
          answer: 'Yes, you can sell your gold 24/7. The funds are transferred to your bank account within 1-2 business days, depending on your bank.',
        },
        {
          question: 'What are the transaction fees?',
          answer: 'Buying fees range from 0.99% (Starter) to 0.49% (Pro) to -0.51% (Premium). Selling fees start at 1.49% and reduce similarly. No additional storage or maintenance fees.',
        },
        {
          question: 'Can I use leverage or margin trading?',
          answer: 'Margin trading is available only for Premium plan subscribers. You can borrow up to 3x your balance to multiply your returns (and risks).',
        },
      ],
    },
    {
      category: 'account',
      title: 'Account & Security',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Simply download our app or visit our website, enter your email, verify your phone number, and complete the KYC process. You\'ll be ready to invest within 5 minutes.',
        },
        {
          question: 'What is KYC and why is it required?',
          answer: 'KYC (Know Your Customer) is a regulatory requirement. We collect basic personal and financial information to comply with anti-money laundering laws. Your data is encrypted and never shared.',
        },
        {
          question: 'How secure is my account?',
          answer: 'We use military-grade 256-bit AES encryption, two-factor authentication (2FA), biometric login, and cold storage for sensitive data. Your account is protected with multiple security layers.',
        },
        {
          question: 'Can I link multiple bank accounts?',
          answer: 'Yes, you can link up to 5 bank accounts to your Grow Gold account. This provides flexibility for fund transfers and withdrawals.',
        },
        {
          question: 'What if I forget my password?',
          answer: 'You can reset your password using the "Forgot Password" link on the login page. We\'ll send a secure reset link to your registered email address.',
        },
      ],
    },
    {
      category: 'taxation',
      title: 'Taxation & Legal',
      items: [
        {
          question: 'How are gains taxed?',
          answer: 'Gold investments in India are subject to capital gains tax. Short-term gains (less than 3 years) are taxed as ordinary income. Long-term gains get indexation benefits. Consult a tax professional for personalized advice.',
        },
        {
          question: 'Does Grow Gold provide tax reports?',
          answer: 'Yes, Pro and Premium users can generate automated tax reports showing cost basis, selling price, and capital gains. These can be directly used for tax filing.',
        },
        {
          question: 'What are the regulatory compliances?',
          answer: 'We\'re registered with SEBI, comply with all RBI guidelines, and maintain relationships with certified vaults. All transactions are tracked and reported as required by law.',
        },
        {
          question: 'Can I withdraw physical gold?',
          answer: 'Yes, you can request physical delivery of your gold. There\'s a delivery charge of ₹500 + shipping costs, and delivery takes 5-7 business days.',
        },
      ],
    },
    {
      category: 'technical',
      title: 'Technical & Support',
      items: [
        {
          question: 'Which platforms is Grow Gold available on?',
          answer: 'We\'re available on iOS, Android, and web browsers. All versions are synchronized in real-time, so you can access your portfolio from any device.',
        },
        {
          question: 'What should I do if I encounter a bug?',
          answer: 'Please report bugs through the in-app feedback form or email support@growgold.com. Our team typically responds within 24 hours.',
        },
        {
          question: 'Is there an API for developers?',
          answer: 'Yes, our REST API is available for Pro and Premium users. You can build integrations to track holdings, execute trades, and manage your portfolio programmatically.',
        },
        {
          question: 'How often are app updates released?',
          answer: 'We release updates monthly with new features and security patches. Critical security updates are deployed immediately when needed.',
        },
      ],
    },
  ];

  const FAQCategory = ({ category, title, items }: { category: string; title: string; items: Array<{ question: string; answer: string }> }) => {
    const isExpanded = expandedCategory === category;

    return (
      <div className="mb-8">
        <button
          onClick={() => setExpandedCategory(isExpanded ? null : category)}
          className={`w-full flex items-center justify-between p-6 rounded-lg border transition-all ${
            isExpanded
              ? 'bg-gold-500/10 border-gold-500/50'
              : 'bg-white/5 border-white/10 hover:border-gold-500/30'
          }`}
        >
          <h3 className="text-xl font-bold text-left">{title}</h3>
          <ChevronDown
            size={24}
            className={`text-gold-500 flex-shrink-0 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-white/5 bg-white/[0.02]"
              >
                <h4 className="font-semibold mb-3 text-lg text-gold-300">{item.question}</h4>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5">
            <span className="text-gold-500 text-sm uppercase tracking-widest font-semibold">Help & Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gold-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Grow Gold, investing, account management, and more.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 rounded-lg bg-dark-900 border border-gold-500/30 focus:border-gold-500 outline-none text-white placeholder-gray-500 transition-colors"
            />
            <Gem size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gold-500" />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {faqData.map((categoryData) => (
            <FAQCategory
              key={categoryData.category}
              category={categoryData.category}
              title={categoryData.title}
              items={categoryData.items}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gold-500/10 to-gold-700/10 border-y border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-400 mb-12">Our support team is here to help you succeed.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-lg border border-gold-500/30 bg-white/5">
              <Mail size={32} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">support@growgold.com</p>
              <p className="text-gray-500 text-sm">Response within 24 hours</p>
            </div>

            <div className="p-8 rounded-lg border border-gold-500/30 bg-white/5">
              <Phone size={32} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">1-800-GROW-GOLD</p>
              <p className="text-gray-500 text-sm">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>

            <div className="p-8 rounded-lg border border-gold-500/30 bg-white/5">
              <Gem size={32} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">In-app chat support</p>
              <p className="text-gray-500 text-sm">24/7 availability</p>
            </div>
          </div>

          <Button variant="primary" className="px-8 py-3">Contact Support Team</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of investors who are growing their wealth with Grow Gold.</p>
          <Button variant="primary" className="px-8 py-3">Get Started Today</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;

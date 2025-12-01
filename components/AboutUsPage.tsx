import React from 'react';
import { Gem, TrendingUp, Lock, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const AboutUsPage: React.FC = () => {
  const stats = [
    { number: '50K+', label: 'Active Investors' },
    { number: '$2B+', label: 'Assets Managed' },
    { number: '100%', label: 'Transparent' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: <Lock size={32} />,
      title: 'Security First',
      description: 'We employ military-grade encryption and regulatory compliance to protect your investments.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Optimal Returns',
      description: 'Our algorithmic pricing ensures you get competitive rates for buying and selling gold.',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Driven',
      description: 'Join a global community of investors making smart wealth decisions together.',
    },
    {
      icon: <Gem size={32} />,
      title: 'Pure Quality',
      description: 'All gold is authenticated and stored in certified international vaults.',
    },
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', expertise: '15+ years in fintech' },
    { name: 'Priya Sharma', role: 'Chief Investment Officer', expertise: '12+ years in precious metals' },
    { name: 'Vikram Patel', role: 'Head of Technology', expertise: 'Ex-Google engineer' },
    { name: 'Anjali Verma', role: 'Chief Compliance Officer', expertise: 'Former RBI advisor' },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5">
            <span className="text-gold-500 text-sm uppercase tracking-widest font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Democratizing <span className="bg-clip-text text-transparent bg-gold-gradient">Gold Investment</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, Grow Gold emerged from a simple vision: to make gold investment accessible, transparent, and profitable for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gold-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Why We Started</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We recognized that gold investment was unnecessarily complicated and inaccessible to average investors. The traditional gold market was plagued by high markups, lack of transparency, and outdated processes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We decided to change that by leveraging blockchain technology and modern fintech to create a seamless, transparent, and profitable gold investment platform.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We envision a world where owning gold is as simple as owning stocks. Where anyone, anywhere can invest in real, physical gold with just a few taps.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Through innovation and customer obsession, we're building the future of precious metals investment for the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-8 rounded-lg border border-gold-500/20 bg-white/5 hover:bg-gold-500/5 transition-colors"
              >
                <div className="text-gold-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="text-center p-6 rounded-lg border border-gold-500/20 hover:border-gold-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gold-500/10 to-gold-700/10 border-y border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-400 mb-8">Start your gold investment journey today with Grow Gold.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-8 py-3">Start Investing Now</Button>
            <Button variant="secondary" className="px-8 py-3">Learn More</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;

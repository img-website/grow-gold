import React, { useState, useEffect } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-dark-900/90 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center text-dark-900">
            <Gem size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gold-gradient tracking-wide">
            Grow Gold
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isInternal = link.href.startsWith('/');
            return isInternal ? (
              <Link 
                key={link.name}
                to={link.href} 
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors"
              >
                {link.name}
              </a>
            );
          })}
          <Button variant="primary" className="px-6 py-2 text-sm">
            Start Investing
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-white/10 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isInternal = link.href.startsWith('/');
              return isInternal ? (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-lg font-serif text-gray-300 hover:text-gold-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-lg font-serif text-gray-300 hover:text-gold-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <Button variant="primary" className="w-full mt-4">
              Start Investing
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
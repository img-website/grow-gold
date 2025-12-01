import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-gold-gradient rounded-md flex items-center justify-center text-dark-900">
                <Gem size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Grow Gold
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The modern standard for digital gold investment. Secure, transparent, and designed for the future of wealth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Buy Gold</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Sell Gold</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Live Rates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><Link to="/contact-us" className="hover:text-gold-500 transition-colors">Contact</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-gold-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-gold-500 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Grow Gold. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <div className="h-px w-12 bg-gold-500/50 self-center"></div>
            <span className="text-gold-500/50 text-xs tracking-widest">LUXURY DIGITAL ASSETS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
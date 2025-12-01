import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CTASectionOne from './components/CTASectionOne';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASectionTwo from './components/CTASectionTwo';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from './components/ContactUs';
import RefundPolicy from './components/RefundPolicy';
import AboutUsPage from './components/AboutUsPage';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <CTASectionOne />
        <Testimonials />
        <FAQ />
        <CTASectionTwo />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
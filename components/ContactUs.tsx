import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions about Grow Gold? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-dark-800 p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-400">support@growgold.com</p>
              <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-dark-800 p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-sm mt-2">Mon-Fri, 9 AM - 6 PM EST</p>
            </div>

            <div className="bg-dark-800 p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-gray-400">123 Financial District</p>
              <p className="text-gray-400">New York, NY 10001</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 rounded-lg border border-gold-500/20 p-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-white">Send us a Message</h2>
            

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gold-gradient text-dark-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>

            {submitted && (
              <div className="mb-6 mt-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">✓ Thank you! Your message has been sent successfully.</p>
                <p className="text-green-400/80 text-sm">We'll get back to you soon.</p>
              </div>
            )}
            <div className="mt-10 p-6 bg-dark-900 rounded-lg border border-gold-500/10">
              <h3 className="text-lg font-semibold mb-3 text-gold-400">Business Hours</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif font-bold mb-8 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-dark-800 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">How long does it take to process my inquiry?</h3>
                <p className="text-gray-400">We typically respond to all inquiries within 24 business hours.</p>
              </div>
              <div className="bg-dark-800 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-400">We accept credit cards, bank transfers, and digital payment methods. Contact us for more details.</p>
              </div>
              <div className="bg-dark-800 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Is my gold investment insured?</h3>
                <p className="text-gray-400">All investments are secured with appropriate insurance. Please contact our team for specific coverage details.</p>
              </div>
              <div className="bg-dark-800 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Can I withdraw my investment anytime?</h3>
                <p className="text-gray-400">Yes, you can withdraw your investment with proper notice. Check our terms for specific withdrawal procedures.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;

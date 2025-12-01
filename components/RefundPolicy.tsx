import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const RefundPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Refund and Cancellation Policy
          </h1>
          <p className="text-gray-400 mb-12 text-lg">Effective Date: [Date of Implementation] Last Updated: November 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">Table of Contents</h2>
              <div className="p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  <li><a href="#section-1" onClick={(e) => handleLinkClick(e, 'section-1')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">INTRODUCTION AND SCOPE</a></li>
                  <li><a href="#section-2" onClick={(e) => handleLinkClick(e, 'section-2')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">GENERAL POLICY STATEMENT</a></li>
                  <li><a href="#section-3" onClick={(e) => handleLinkClick(e, 'section-3')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">BUY TRANSACTIONS</a></li>
                  <li><a href="#section-4" onClick={(e) => handleLinkClick(e, 'section-4')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">SELL TRANSACTIONS</a></li>
                  <li><a href="#section-5" onClick={(e) => handleLinkClick(e, 'section-5')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">SYSTEMATIC INVESTMENT PLAN (SIP)</a></li>
                  <li><a href="#section-6" onClick={(e) => handleLinkClick(e, 'section-6')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">GIFT TRANSFERS (PERSONAL GIFTING)</a></li>
                  <li><a href="#section-7" onClick={(e) => handleLinkClick(e, 'section-7')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">CORPORATE GIFTING VOUCHERS</a></li>
                  <li><a href="#section-8" onClick={(e) => handleLinkClick(e, 'section-8')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">LEASING TRANSACTIONS</a></li>
                  <li><a href="#section-9" onClick={(e) => handleLinkClick(e, 'section-9')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">PHYSICAL DELIVERY</a></li>
                  <li><a href="#section-10" onClick={(e) => handleLinkClick(e, 'section-10')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">PROMO CODES, DISCOUNTS, AND OFFERS</a></li>
                  <li><a href="#section-11" onClick={(e) => handleLinkClick(e, 'section-11')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">PAYMENT FAILURES AND REFUNDS</a></li>
                  <li><a href="#section-12" onClick={(e) => handleLinkClick(e, 'section-12')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">ORDER REJECTION BY GROWGOLD</a></li>
                  <li><a href="#section-13" onClick={(e) => handleLinkClick(e, 'section-13')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">ACCOUNT TERMINATION AND CLOSURE</a></li>
                  <li><a href="#section-14" onClick={(e) => handleLinkClick(e, 'section-14')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">EXCEPTIONS AND SPECIAL CIRCUMSTANCES</a></li>
                  <li><a href="#section-15" onClick={(e) => handleLinkClick(e, 'section-15')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">DISPUTE RESOLUTION</a></li>
                  <li><a href="#section-16" onClick={(e) => handleLinkClick(e, 'section-16')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">SUMMARY TABLE</a></li>
                  <li><a href="#section-17" onClick={(e) => handleLinkClick(e, 'section-17')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">CONTACT INFORMATION</a></li>
                  <li><a href="#section-18" onClick={(e) => handleLinkClick(e, 'section-18')} className="text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">ACKNOWLEDGMENT</a></li>
                </ol>
              </div>
            </section>

            <section id="section-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">1. INTRODUCTION AND SCOPE</h2>
              <p className="text-gray-300 leading-relaxed">
                This Refund and Cancellation Policy ("Policy") governs all transactions conducted on the GrowGold mobile application and platform ("Platform"), including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-300 leading-relaxed mt-4">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Buy/Sell transactions (gold and silver)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Systematic Investment Plan (SIP) transactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Gift transfers (personal and corporate)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Leasing transactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Physical delivery of gold/silver</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>Promotional vouchers and promo codes</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using the GrowGold Platform and confirming any transaction, you expressly agree to be bound by this Policy. This Policy should be read in conjunction with our Terms and Conditions and Privacy Policy.
              </p>
              <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                <p className="text-gray-300">
                  <span className="text-gold-400 font-semibold">Note:</span> GrowGold reserves the right to modify this Policy at any time. Changes will be notified via email, SMS, and in-app notifications, and will be effective immediately upon posting.
                </p>
              </div>
            </section>

            <section id="section-2">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">2. GENERAL POLICY STATEMENT</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">2.1 No Cancellation or Refund After Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once a transaction has been confirmed by you (the customer), it is final and binding.
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cancellations are permitted after confirmation.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds are permitted after confirmation.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All orders, whether for buy, sell, SIP, gifting, leasing, or physical delivery, are final upon customer confirmation.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    This policy ensures operational efficiency, regulatory compliance, and fair pricing based on live gold/silver market rates locked at the time of your transaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">2.2 Rationale</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Digital gold and silver transactions are linked to real-time market prices that fluctuate continuously. Once you confirm a transaction at a locked rate:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Physical gold/silver is allocated or reserved in the custodian vault.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Trustee and custodian records are updated.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Payment settlement processes are initiated.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Regulatory and compliance records are generated.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Allowing cancellations or refunds post-confirmation would expose both GrowGold and customers to market volatility risks and operational inefficiencies.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-3">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">3. BUY TRANSACTIONS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">3.1 Order Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you place a buy order (gold/silver), the rate is locked for 5 minutes.
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You must complete payment within this 5-minute window.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Upon successful payment and order confirmation, the transaction is final and binding.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Gold/silver quantity is credited to your account within T+0 (same day) after payment verification.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">3.2 No Cancellation After Payment Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once payment is successfully processed and the order is confirmed:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cancellation is permitted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refund will be issued.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Gold/silver units purchased are credited to your vault account and are subject to a 3-day holding period before they can be sold.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">3.3 Payment Failures</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">If Payment Fails Before Order Confirmation:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>The order will automatically be cancelled.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>No charges will be deducted from your account.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>You may place a new order at the prevailing rate.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">If Payment is Deducted but Order Not Confirmed (Technical Error):</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>The deducted amount will be automatically refunded to your source payment method within 5-7 business days.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Refund timeline depends on your bank's processing time.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>You will receive email and SMS notifications regarding refund status.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">3.4 GST and Final Amount</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All buy transactions include 3% GST (embedded in the buy price).
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GST invoices are generated and available in your transaction history.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GST charges are non-refundable as they are remitted to government authorities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-4">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">4. SELL TRANSACTIONS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">4.1 Order Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you place a sell order, the rate is locked for 5 minutes.
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Upon confirmation, the transaction is final and binding.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Gold/silver quantity is deducted from your account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Settlement proceeds are credited to your registered bank account within T+1 (1 business day).</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">4.2 No Cancellation After Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once a sell order is confirmed:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cancellation is permitted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No reversal of the transaction is possible.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The gold/silver quantity sold cannot be credited back to your account.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">4.3 Settlement Delays</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If there is a delay in crediting your bank account beyond T+1:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>This is typically due to bank processing delays or public holidays.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will notify you of the delay.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If the delay exceeds 3 business days, you may raise a grievance through the app or contact support@growgold.com.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will investigate and expedite the settlement with the bank.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">4.4 Incorrect Bank Account Details</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you provide incorrect bank account details:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The payment may fail or be reversed by the bank.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold is not responsible for delays or losses caused by incorrect information.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The returned funds will be held in your GrowGold wallet/account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You must update your bank details and request a fresh payout.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-5">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">5. SYSTEMATIC INVESTMENT PLAN (SIP)</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">5.1 SIP Auto-Debit</h3>
                  <p className="text-gray-300 leading-relaxed">
                    SIP debits are automated based on your selected frequency (daily/monthly).
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Each debit is a separate buy transaction governed by Section 3 of this Policy.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once a SIP debit is processed and gold is allocated, no refund or cancellation is permitted for that specific debit.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">5.2 Failed SIP Debits</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">First and Second Failure:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Automatic retry on the next day.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>No charges for failed debits.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>User notified via email and SMS.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">Third Consecutive Failure:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>SIP cycle is skipped for that period.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>User notified of the skip.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>SIP continues for the next cycle unless paused or cancelled.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">After Three Skipped Cycles:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Verification notification sent to the user.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>User must confirm whether to continue or cancel the SIP.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>No action taken automatically without user confirmation.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">5.3 SIP Modification and Pause</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may modify SIP amount or frequency at any time.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may pause SIP for a defined period (1-3 months).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Modifications and pauses take effect from the next debit cycle.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds issued for past SIP debits.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">5.4 SIP Cancellation</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may cancel your SIP at any time through the app.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Cancellation takes effect immediately; no further debits will be processed.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Gold accumulated till the date of cancellation remains in your account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may sell or redeem accumulated gold anytime after the 3-day holding period.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds are issued for gold already purchased via SIP.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">5.5 SIP Redemption</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>SIP gold can be redeemed (sold for cash) at any time after the 3-day holding period.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Redemption settlement: T+1 (1 business day).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>SIP gold can also be converted to physical gold (coins, bars, ornaments) subject to delivery terms.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">6. GIFT TRANSFERS (PERSONAL GIFTING)</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">6.1 Order Confirmation</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>When you gift gold/silver to another user, you pay at the current market rate.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Upon payment confirmation, the gift is final and binding.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cancellation or refund is permitted after confirmation.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">6.2 Recipient Non-Claim</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If the recipient does not claim the gift:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The gift remains in escrow for 90 days.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>After 90 days, if unclaimed, the gift is automatically credited to the recipient's account (if KYC is completed).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If the recipient has not completed KYC or does not open an account within 180 days, the gift will be refunded to the sender's GrowGold account (not bank account).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The sender may then sell or use the refunded gold.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">6.3 Incorrect Recipient Details</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you provide incorrect recipient mobile number or name:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The gift may not be delivered successfully.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will attempt to notify you of the error.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If the gift cannot be delivered within 30 days, it will be refunded to your GrowGold account (not bank account).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cash refund will be issued; the refunded gold can be sold or used for another gift transfer.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">6.4 Sender Mistake / Accidental Transfer</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once a gift transfer is confirmed, no cancellation is permitted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If you believe the gift was sent in error, you must contact the recipient directly to request a return gift.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold cannot reverse or cancel confirmed gift transfers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-7">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">7. CORPORATE GIFTING VOUCHERS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">7.1 Voucher Issuance</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Corporate gifting vouchers are issued based on company requests.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once vouchers are generated and distributed, no refunds are issued to the corporate client.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Voucher validity: 180 days from issuance.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">7.2 Employee Voucher Redemption</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Employees must redeem vouchers within the 180-day validity period.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once an employee redeems a voucher and gold is credited, no cancellation or refund is permitted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Unredeemed vouchers expire after 180 days and become void.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">7.3 Expired Vouchers</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Expired vouchers cannot be reactivated or refunded.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Corporate clients must request fresh vouchers if needed.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold reserves the right to charge for new voucher generation.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">7.4 Voided or Cancelled Vouchers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If the corporate client requests cancellation of vouchers before distribution:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refund will be processed within 10-15 business days.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refund mode: Bank transfer to corporate client's account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refund amount: Full voucher value minus administrative fee (2%).</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    If vouchers have already been distributed to employees:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refund will be issued to the corporate client.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The company must manage redemptions internally.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">8. LEASING TRANSACTIONS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">8.1 Lease Commitment</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once you accept a leasing offer and confirm the lease, the transaction is final and binding.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Your gold is physically transferred to the borrower under trustee supervision.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cancellation is permitted after lease confirmation.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">8.2 Early Exit from Lease</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You may exit a lease at any time without penalties. Upon early exit request:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Leased gold is returned to your account within T+3 (3 business days).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Accrued yield (up to exit date) is credited to your account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You will receive email and SMS notifications regarding exit status.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refund is issued; the gold and yield are returned to your digital vault account.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">8.3 Borrower Early Closure</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If the borrower closes the lease early:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Your leased gold and accrued yield (up to closure date) are returned to your account within T+3 (3 business days).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No penalties or charges apply to you.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">8.4 Yield Payments</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Yield is paid monthly in gold grams.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once yield is credited to your account, it is final.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No reversal or refund of yield payments.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may sell yield gold anytime at the prevailing market rate.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">8.5 Lease Default by Borrower</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If a borrower defaults (rare, given 110% collateral requirement):
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Trustee liquidates the borrower's collateral.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You are compensated with the full value of leased gold plus accrued yield.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Compensation is credited to your account within 15 business days of default declaration.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold and the trustee manage the recovery process; no action required from you.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-9">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">9. PHYSICAL DELIVERY</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.1 Delivery Request Confirmation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you request physical delivery (coins, bars, ornaments), you confirm:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Quantity of gold/silver to be delivered.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Delivery address (registered KYC address or verified alternate address).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Delivery charges and making charges (if applicable).</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Once you confirm the delivery request, it is final and binding. No cancellation is permitted after confirmation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.2 Delivery Charges</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Free delivery: For orders ≥3 grams.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Delivery charges apply: For orders &lt;3 grams (displayed before confirmation).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Making charges apply if gold is converted to ornaments (quoted separately).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All charges are non-refundable after confirmation.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.3 Delivery Attempts and Failed Delivery</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">First Delivery Attempt:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Courier partner attempts delivery at your registered address.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>You or your authorized representative must provide:</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Government-issued ID proof for verification.</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Signature on delivery receipt.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">If No One Available:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Courier partner will attempt delivery up to 2 more times (total 3 attempts).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>You will be notified via SMS and email of each attempt.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gold-400">After 3 Failed Attempts:</span>
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed ml-4">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>The package will be returned to the custodian vault.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Your account will be credited back with the corresponding grams of gold/silver.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Re-delivery charges will apply if you request delivery again.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Re-delivery charges: As per current delivery fee schedule (displayed in the app).</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.4 Damaged or Tampered Package</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Do NOT accept delivery if the package appears tampered or damaged.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Notify the courier partner and GrowGold support immediately.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will investigate and arrange for re-delivery at no additional cost.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.5 Quality Issues After Delivery</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customers must verify the delivered product before signing the delivery receipt.
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You have the option to open and inspect the package before accepting.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once you sign the delivery receipt, the delivery is considered complete and final.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No returns, exchanges, or refunds are permitted after delivery acceptance.</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                    <p className="text-gold-400 font-semibold mb-2">Exception: Genuine Quality Defects</p>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      If you discover a genuine quality defect (e.g., purity mismatch, weight discrepancy) within 24 hours of delivery:
                    </p>
                    <ul className="space-y-2 text-gray-300 leading-relaxed">
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Contact support@growgold.com immediately with:</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Photos/videos of the product.</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Delivery receipt copy.</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Description of the issue.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>GrowGold will investigate with the custodian and assayer.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>If the defect is confirmed:</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>You may return the product (shipping prepaid by GrowGold).</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Replacement product will be shipped, OR</span>
                      </li>
                      <li className="flex gap-3 ml-6">
                        <span className="text-gold-400 flex-shrink-0">•</span>
                        <span>Equivalent gold/silver value will be credited to your account.</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-2">
                      Investigation and resolution timeline: 10-15 business days.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-2">
                      <span className="text-gold-400 font-semibold">Note:</span> This exception applies only to verifiable quality defects, not to subjective preferences or design changes.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">9.6 Incorrect Delivery Address</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you provide an incorrect or incomplete delivery address:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The courier may not be able to deliver the package.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The package will be returned to the custodian vault after failed delivery attempts.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Your account will be credited back with the gold/silver.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Re-delivery charges will apply for fresh delivery.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold is not responsible for delays or issues caused by incorrect address information.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-10">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">10. PROMO CODES, DISCOUNTS, AND OFFERS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">10.1 Promo Code Application</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Promo codes provide additional gold grams (not price discounts).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Example: Buy 5 grams, get 0.05 grams free via promo code (GST included in promo).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Once a promo code is applied and the transaction is confirmed, it is final and binding.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No reversal or refund of promo benefits.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">10.2 Promo Code Verification</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Promo codes are verified and adjusted within 7 days of use.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If a promo code is found to be invalid or expired:</span>
                    </li>
                    <li className="flex gap-3 ml-6">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold reserves the right to deduct the equivalent promo gold from your account.</span>
                    </li>
                    <li className="flex gap-3 ml-6">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You will be notified via email and SMS.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">10.3 Misuse of Promo Codes</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Promo codes are for single use per user unless otherwise stated.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Misuse, duplication, or fraudulent use of promo codes may result in:</span>
                    </li>
                    <li className="flex gap-3 ml-6">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Promo benefits being reversed.</span>
                    </li>
                    <li className="flex gap-3 ml-6">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Account suspension or termination.</span>
                    </li>
                    <li className="flex gap-3 ml-6">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Legal action as per Terms and Conditions.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">10.4 Expired or Invalid Promo Codes</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Promo codes have validity periods.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Expired codes cannot be applied retroactively.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds or compensation for expired or unused promo codes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-11">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">11. PAYMENT FAILURES AND REFUNDS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">11.1 Payment Gateway Failures</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If payment fails due to technical issues (gateway downtime, bank issues, network errors):
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The order will be automatically cancelled.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No charges will be deducted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may retry the transaction.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">11.2 Duplicate Payments</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you are charged multiple times for the same transaction due to a technical error:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will investigate and verify the issue.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Duplicate charges will be automatically refunded within 5-7 business days.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refund mode: Same payment method used for the original transaction.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">11.3 Refund Processing Timeline</h3>
                  <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border border-gray-700">
                      <thead>
                        <tr className="bg-dark-800">
                          <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Payment Method</th>
                          <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Refund Timeline</th>
                          <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">UPI</td>
                          <td className="border border-gray-700 px-4 py-2">2-3 business days</td>
                          <td className="border border-gray-700 px-4 py-2">Instant in some cases</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Net Banking</td>
                          <td className="border border-gray-700 px-4 py-2">5-7 business days</td>
                          <td className="border border-gray-700 px-4 py-2">Bank processing dependent</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Credit Card</td>
                          <td className="border border-gray-700 px-4 py-2">5-10 business days</td>
                          <td className="border border-gray-700 px-4 py-2">Card issuer processing dependent</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Debit Card</td>
                          <td className="border border-gray-700 px-4 py-2">5-7 business days</td>
                          <td className="border border-gray-700 px-4 py-2">Bank processing dependent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Refunds are processed to the original payment source only.
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No cash refunds are issued under any circumstances.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds to third-party accounts.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">11.4 Bank/Payment Gateway Delays</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If refunds are delayed beyond the stated timeline:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>This is typically due to bank or payment gateway processing delays.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will provide you with a refund reference number.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may contact your bank with this reference number to track the refund.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold is not liable for delays caused by banks or payment gateways.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-12">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">12. ORDER REJECTION BY GROWGOLD</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">12.1 Circumstances for Order Rejection</h3>
                  <p className="text-gray-300 leading-relaxed">
                    GrowGold reserves the right to reject or cancel any order at its sole discretion, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Technical errors: System downtime, pricing errors, data corruption.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Market volatility: Extreme fluctuations in gold/silver prices.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>KYC/AML issues: Incomplete or suspicious KYC information, suspicious transaction patterns.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Fraudulent activity: Evidence of fraud, money laundering, or unauthorized access.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Regulatory compliance: Orders that violate applicable laws or regulations.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Insufficient collateral: For leasing transactions, if borrower collateral is insufficient.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">12.2 Notification and Refund</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If your order is rejected by GrowGold:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You will be notified via email and SMS within 24 hours.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The reason for rejection will be communicated (where permissible).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>If payment has been received, it will be automatically refunded within 5-7 business days.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refund mode: Same payment method used for the original transaction.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">12.3 No Compensation for Market Fluctuations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If your order is rejected due to market volatility or pricing errors:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No compensation will be provided for any price difference.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You may place a new order at the prevailing market rate.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold is not liable for any opportunity loss or market movements.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-13">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">13. ACCOUNT TERMINATION AND CLOSURE</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">13.1 Voluntary Account Closure by User</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You may close your GrowGold account at any time through the app or by contacting support@growgold.com.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Before account closure:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All active SIPs must be cancelled or paused.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All leased gold must be exited or matured.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All pending transactions must be settled.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>All physical delivery requests must be completed or cancelled.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">13.2 Gold Holdings at Account Closure</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you have gold/silver holdings at the time of account closure:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Option 1: Sell all holdings and receive cash payout to your bank account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Option 2: Request physical delivery of all holdings (subject to delivery terms).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Option 3: Transfer holdings to another user (if feature available).</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    No refunds are issued for gold holdings; you must sell or redeem them before account closure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">13.3 Account Termination by GrowGold</h3>
                  <p className="text-gray-300 leading-relaxed">
                    GrowGold may terminate your account for:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Breach of Terms and Conditions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Fraudulent or suspicious activity.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Repeated KYC/AML violations.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Court order or regulatory mandate.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    If your account is terminated by GrowGold:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You will be notified in writing with the reason for termination.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Your gold holdings will be liquidated at the prevailing market rate.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Proceeds will be credited to your registered bank account within 30 days.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No compensation for any price fluctuations during the liquidation period.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-14">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">14. EXCEPTIONS AND SPECIAL CIRCUMSTANCES</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">14.1 Force Majeure Events</h3>
                  <p className="text-gray-300 leading-relaxed">
                    GrowGold will not be liable for delays or failures in processing transactions, deliveries, or refunds due to Force Majeure events, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Natural disasters (earthquakes, floods, cyclones).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>War, terrorism, or civil unrest.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Pandemics or public health emergencies.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Government actions (lockdowns, policy changes, regulatory restrictions).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Power outages, internet failures, or network disruptions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Strikes, labor disputes, or supply chain disruptions.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    In the event of a Force Majeure:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will notify users of the situation via email, SMS, and in-app notifications.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Alternative arrangements for delivery or service resumption will be communicated where feasible.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>No refunds or compensation will be provided for delays caused by Force Majeure events.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Transactions may be suspended temporarily until normal operations resume.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">14.2 Regulatory Changes</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If regulatory changes (RBI, SEBI, government policies) restrict or prohibit digital gold/silver transactions:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will notify users immediately.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Affected transactions will be suspended or cancelled.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Refunds will be processed in accordance with regulatory guidelines.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will assist users in liquidating or transferring holdings as permitted by law.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">14.3 Custodian or Trustee Insolvency</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In the unlikely event of custodian or trustee insolvency:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Your gold/silver holdings are segregated and ring-fenced.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>An independent administrator will manage the recovery process.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>You will be contacted to claim your holdings (cash or physical delivery).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>GrowGold will facilitate the recovery process as per legal obligations.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Timeline: 30-90 days (may vary based on legal proceedings).
                  </p>
                </div>
              </div>
            </section>

            <section id="section-15">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">15. DISPUTE RESOLUTION</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">15.1 Grievance Submission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you have a dispute regarding refunds or cancellations:
                  </p>
                  <div className="space-y-3 mt-2">
                    <div className="flex gap-4">
                      <span className="text-gold-400 font-bold text-lg flex-shrink-0">Step 1:</span>
                      <p className="text-gray-300">Submit a grievance through the app (Support → Lodge Grievance).</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gold-400 font-bold text-lg flex-shrink-0">Step 2:</span>
                      <div>
                        <p className="text-gray-300">Provide:</p>
                        <ul className="space-y-2 text-gray-300 leading-relaxed mt-2 ml-4">
                          <li className="flex gap-3">
                            <span className="text-gold-400 flex-shrink-0">•</span>
                            <span>Transaction ID or order reference number.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-gold-400 flex-shrink-0">•</span>
                            <span>Detailed description of the issue.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-gold-400 flex-shrink-0">•</span>
                            <span>Supporting documents (screenshots, receipts, emails).</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gold-400 font-bold text-lg flex-shrink-0">Step 3:</span>
                      <p className="text-gray-300">GrowGold will investigate and respond within 7-15 business days.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">15.2 Escalation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you are dissatisfied with the resolution:
                  </p>
                  <div className="p-4 bg-dark-800 rounded-lg border border-gold-500/20 mt-2">
                    <p className="text-gray-300 font-semibold">Escalate to the Grievance Redressal Officer:</p>
                    <p className="text-gray-300">Email: grievance@growgold.com</p>
                    <p className="text-gray-300">Phone: +91-XXXX-XXXXXX</p>
                    <p className="text-gray-300">Expected response: 15 business days.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">15.3 External Complaints</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If your grievance remains unresolved:
                  </p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed mt-2">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>RBI Ombudsman: For banking and payment-related issues.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Consumer Court: File under Consumer Protection Act, 2019.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Data Protection Board of India: For privacy or data-related complaints.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">15.4 Arbitration</h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Disputes may be resolved through arbitration as per the Arbitration and Conciliation Act, 1996.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>Arbitration will be conducted in [Mumbai/Bangalore/specified location].</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold-400 flex-shrink-0">•</span>
                      <span>The decision of the arbitrator will be final and binding.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-16">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">16. SUMMARY TABLE</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700">
                  <thead>
                    <tr className="bg-dark-800">
                      <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Transaction Type</th>
                      <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Cancellation Allowed?</th>
                      <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Refund Allowed?</th>
                      <th className="border border-gray-700 px-4 py-2 text-left text-gold-400">Special Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Buy (Gold/Silver)</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">3-day holding period before sale</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Sell (Gold/Silver)</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">T+1 settlement</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">SIP</td>
                      <td className="border border-gray-700 px-4 py-2">Yes (future debits only)</td>
                      <td className="border border-gray-700 px-4 py-2">No (for past SIP debits)</td>
                      <td className="border border-gray-700 px-4 py-2">Can modify/pause/cancel anytime</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Personal Gifting</td>
                      <td className="border border-gray-700 px-4 py-2">No</td>
                      <td className="border border-gray-700 px-4 py-2">No (except unclaimed gifts)</td>
                      <td className="border border-gray-700 px-4 py-2">90-day escrow for unclaimed gifts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Corporate Gifting</td>
                      <td className="border border-gray-700 px-4 py-2">Only before distribution</td>
                      <td className="border border-gray-700 px-4 py-2">Only before distribution (minus 2% fee)</td>
                      <td className="border border-gray-700 px-4 py-2">180-day voucher validity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Leasing</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">No (early exit returns gold + yield)</td>
                      <td className="border border-gray-700 px-4 py-2">Can exit anytime without penalty</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">Physical Delivery</td>
                      <td className="border border-gray-700 px-4 py-2">No (after confirmation)</td>
                      <td className="border border-gray-700 px-4 py-2">No (except quality defects)</td>
                      <td className="border border-gray-700 px-4 py-2">3 delivery attempts, quality checks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="section-17">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">17. CONTACT INFORMATION</h2>
              <div className="space-y-4">
                <div className="p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">For refund or cancellation inquiries:</h3>
                  <p className="text-gray-300 font-semibold">Customer Support</p>
                  <p className="text-gray-300">Email: support@growgold.com</p>
                  <p className="text-gray-300">Phone: +91-XXXX-XXXXXX</p>
                  <p className="text-gray-300">In-App Chat: Available 24/7</p>
                  <p className="text-gray-300">Support Hours: 10 AM - 6 PM (Mon-Sat, IST)</p>
                </div>
                <div className="p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Grievance Redressal Officer</h3>
                  <p className="text-gray-300">Email: grievance@growgold.com</p>
                  <p className="text-gray-300">Phone: +91-XXXX-XXXXXX</p>
                  <p className="text-gray-300">Response Timeline: Within 7 business days</p>
                </div>
              </div>
            </section>

            <section id="section-18">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">18. ACKNOWLEDGMENT</h2>
              <p className="text-gray-300 leading-relaxed">
                By using the GrowGold Platform and confirming any transaction, you acknowledge that:
              </p>
              <ul className="space-y-2 text-gray-300 leading-relaxed mt-4">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>You have read, understood, and agree to this Refund and Cancellation Policy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>You understand that transactions are final upon confirmation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>You accept the no cancellation/no refund policy for confirmed transactions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>You agree to the exceptions and special circumstances outlined in this Policy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span>You will follow the grievance resolution process for any disputes.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-dark-800 rounded-lg border border-gold-500/20">
                <p className="text-gray-300">
                  This Refund and Cancellation Policy is effective from [Date] and was last updated in November 2025.
                </p>
                <p className="text-gray-300 mt-2">
                  For questions or clarifications regarding this Policy, please contact support@growgold.com or call [phone number].
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
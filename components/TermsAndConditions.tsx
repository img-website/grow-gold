import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 mb-12 text-lg">Last updated: December 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Section A: Account & Regulatory Framework */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">A. Account & Regulatory Framework</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By creating an account with Grow Gold, you represent and warrant that you are at least 18 years of age and possess the legal capacity to enter into a binding contract.
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>KYC Requirements:</strong> Know Your Customer (KYC) verification is mandatory for all users. For any transaction exceeding ₹500, enhanced eKYC (Aadhaar-based OTP/ biometric) is required as per regulatory guidelines.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>SEBI Advisory:</strong> Digital gold is an unregulated product. SEBI does not issue any guidelines on digital gold, and investments are made at your own risk. Grow Gold acts as a facilitator and is not an investment advisor.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Regulatory Non-Endorsement:</strong> Grow Gold, its products, and services are not endorsed, guaranteed, or supervised by the Reserve Bank of India (RBI) or the Securities and Exchange Board of India (SEBI).</span>
                </li>
              </ul>
            </section>

            {/* Section B: Buy/Sell Features */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">B. Buy/Sell Features</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Purity Standards:</strong> All gold sold is 24K with a minimum fineness of 995. All silver is 99.9% pure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Price Mechanics:</strong> The live price is sourced from the India Bullion and Jewellers Association (IBJA). You can lock a rate for 5 minutes to complete your transaction. The final price includes all applicable charges and an embedded Goods and Services Tax (GST) of 3% on gold.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Settlement:</strong> Purchase settlements are processed on the same day (T). A mandatory 3-day waitlist period applies from the date of purchase before selling is allowed, as a security measure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Minimum Order:</strong> The minimum purchase amount is ₹100.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Delivery:</strong> Physical delivery is available in the form of coins, bars, or jewellery. All deliveries are fully insured. Delivery and making charges apply as per the selected product.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Charges:</strong> A detailed fee structure, including making charges for jewellery, delivery fees, insurance, and storage fees (if applicable), is displayed before transaction confirmation.</span>
                </li>
              </ul>
            </section>

            {/* Section C: SIP (Systematic Investment Plan) */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">C. SIP (Systematic Investment Plan)</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Plan Structure:</strong> Minimum investment of ₹100. Frequencies available: Daily, Weekly, and Monthly. Maximum plan tenure is 5 years.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Returns:</strong> Historical returns on gold have been approximately 12% per annum over the long term, though this is not a guarantee. Future returns are subject to market risks and inflation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Payments:</strong> SIPs can be funded via UPI, Net Banking, Debit Card, or Credit Card.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Failed Payments:</strong> In case of a payment failure, our system will automatically retry twice. If both retries fail, that particular instalment will be skipped.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Modifications:</strong> You may modify the SIP amount, frequency, or pause the plan at any time through your dashboard.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Exit:</strong> You can exit the SIP at any time without any exit charges. The accumulated gold will be credited to your vault.</span>
                </li>
              </ul>
            </section>

            {/* Section D: Gifting & Corporate Gifting */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">D. Gifting & Corporate Gifting</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Personal Gifting:</strong> You can gift digital gold to any individual. Delivery is instant or near-instant upon recipient acceptance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Corporate Gifting:</strong> We offer bulk gifting solutions for corporates with customisable voucher codes and denominations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Recipient KYC:</strong> To claim a gift, the recipient must complete a basic KYC verification process.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Redemption:</strong> Gifts can be redeemed into the recipient's vault, sold, or converted to physical delivery. An invoice from the gifter is not required for redemption.</span>
                </li>
              </ul>
            </section>

            {/* Section E: Gold Leasing (Comprehensive) */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">E. Gold Leasing</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Yield Model:</strong> Your yield is calculated as: <strong>Borrower Yield % - 1% (GrowGold Platform Fee) = Your Net Yield %.</strong> The yield is subject to borrower agreement and market conditions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Collateral:</strong> Borrowers are required to provide collateral worth 110% of the leased gold's value.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Payouts:</strong> Monthly yield is paid in equivalent grams of gold directly to your vault. It is not automatically reinvested unless you opt for a reinvestment plan.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Borrower Verification:</strong> We conduct rigorous background checks, business verification, and credit history analysis on all borrowers before approving leases.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Early Exit:</strong> You may exit a lease agreement at any time, free of charge and without penalties. Your principal gold will be returned upon settlement of the lease.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Restrictions:</strong> Gold under an active lease contract cannot be sold or pledged as collateral for other services.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Risks:</strong> Leasing involves risks including borrower default (mitigated by collateral), gold price volatility affecting collateral coverage, and potential liquidity constraints during the lease term.</span>
                </li>
              </ul>
            </section>

            {/* Section F: Custody & Trustee Framework */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">F. Custody & Trustee Framework</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your purchased gold is held under a secure trustee framework for your protection.
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Asset Protection:</strong> All physical gold is held in the name of an independent trustee who maintains a security charge over the assets for the benefit of the users.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Storage:</strong> Gold is stored in segregated, insured vaults. Daily reconciliation is performed between digital holdings and physical stock.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Insolvency Scenario:</strong> In the unlikely event of Grow Gold's insolvency, the trustee's role is to protect and return your assets. The process for return of assets is targeted to be completed within 30 to 90 days.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Nomination:</strong> You are required to designate a nominee. In the event of your demise, your gold holdings will be automatically transferred to your nominee after due verification.</span>
                </li>
              </ul>
            </section>

            {/* Section G: Settlement & Timelines */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">G. Settlement & Timelines</h2>
              <ul className="space-y-2 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Buy:</strong> Settlement on the same day (T).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Sell:</strong> Proceeds credited within 1 business day (T+1).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>SIP Redemption:</strong> Settlement within 1 business day after verification (T+1).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Lease Withdrawal:</strong> Return of leased gold within 3 business days (T+3).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Physical Delivery:</strong> Dispatched within 5-7 business days from the date of request, subject to address verification and payment of applicable charges.</span>
                </li>
              </ul>
            </section>

            {/* Section H: Rate Locking & Pricing */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">H. Rate Locking & Pricing</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Source & Markup:</strong> Live rates are based on the India Bullion and Jewellers Association (IBJA) benchmark with a maximum markup of 1.5%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Rate Lock:</strong> Once a rate is locked, it is valid for 5 minutes to complete the transaction. The locked rate is non-negotiable and cannot be altered.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Market Hours:</strong> Rates are updated in real-time during active market hours. Rates may be static outside of these hours.</span>
                </li>
              </ul>
            </section>

            {/* Section I: Liability & Disclaimers */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">I. Liability & Disclaimers</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>No Guarantees:</strong> Grow Gold does not guarantee any returns on investment. All market risks are borne by the user.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Liability Cap:</strong> Our aggregate liability for any claim arising from a transaction shall be limited to the value of that specific transaction.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Exclusions:</strong> We are not liable for losses arising from third-party payment gateway failures, acts of God (force majeure), market fluctuations, or user negligence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Indemnification:</strong> You agree to indemnify and hold Grow Gold harmless against any claims resulting from your violation of these terms, misuse of the service, or infringement of any law.</span>
                </li>
              </ul>
            </section>

            {/* Section J: Grievance Redressal */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">J. Grievance Redressal</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are committed to resolving your concerns promptly and fairly.
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Internal Process:</strong> A 5-step internal escalation process is followed, with resolution timelines ranging from 7 days (for urgent issues) to 30 days (for complex matters).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Escalation:</strong> If unsatisfied, you may escalate your grievance to our appointed Grievance Officer. Further escalation is available to the RBI Ombudsman, SEBI, or the appropriate Consumer Court.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Tracking:</strong> All complaints are assigned a unique ticket reference number for transparent tracking via your dashboard or email.</span>
                </li>
              </ul>
            </section>

            {/* Section K: Regulatory Contacts & Final Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">K. Regulatory Contacts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For regulatory complaints or information, you may contact the following authorities:
              </p>
              <div className="p-4 bg-dark-800 rounded-lg border border-gold-500/20 space-y-2">
                <p className="text-gray-300"><strong>Reserve Bank of India (RBI):</strong> https://www.rbi.org.in/</p>
                <p className="text-gray-300"><strong>Securities and Exchange Board of India (SEBI):</strong> https://www.sebi.gov.in/</p>
                <p className="text-gray-300"><strong>Financial Intelligence Unit - India (FIU-IND):</strong> https://fiuindia.gov.in/</p>
                <p className="text-gray-300"><strong>National Consumer Helpline:</strong> 1915 or https://consumerhelpline.gov.in</p>
              </div>

              <div className="mt-8 p-6 bg-dark-800/50 rounded-xl border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Important Investment Disclaimer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The information on this platform is for educational purposes only and must not be construed as financial, investment, or legal advice. Gold prices are subject to significant fluctuations. You should conduct your own research and consult with independent financial and tax advisors before making any investment decision.
                </p>
                <div className="p-4 bg-dark-900 rounded-lg border border-red-500/20">
                  <p className="text-red-400 font-semibold">⚠️ WARNING:</p>
                  <p className="text-gray-300 mt-2">
                    Your capital is at risk. The value of gold can go down as well as up. You may not recover the full amount of your investment. Past performance is not indicative of future results.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Agreement Section */}
            <section className="pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">12. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Grow Gold's website, application, and services, you acknowledge that you have read, understood, and irrevocably agree to be bound by all the terms and conditions outlined in this document, as may be revised from time to time. If you do not agree to any of these terms, you are prohibited from using or accessing this service.
              </p>
              <div className="mt-10 p-6 bg-dark-800 rounded-lg border border-gold-500/30">
                <h3 className="text-xl font-serif font-bold mb-2 text-white">Contact Our Legal Team</h3>
                <p className="text-gray-300 mb-4">For any questions regarding these Terms and Conditions, please contact us at:</p>
                <p className="text-gray-300"><strong>Email:</strong> legal@growgold.com</p>
                <p className="text-gray-300"><strong>Registered Address:</strong> Grow Gold Inc., 123 Financial District, New York, NY 10001, USA</p>
                <p className="text-gray-300 mt-2"><strong>Grievance Officer (India):</strong> grievance.officer@growgold.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
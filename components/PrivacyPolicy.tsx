import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12 text-lg">Last updated: December 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Section 1: Introduction */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Grow Gold ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (growgold.co) and use our services. We operate in full compliance with applicable Indian laws and regulations, including the Digital Personal Data Protection Act, 2025 (DPDP Act), the Prevention of Money Laundering Act, 2002 (PMLA), and guidelines issued by the Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI).
              </p>
            </section>

            {/* Section 2: Regulatory Compliance Framework */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">2. Regulatory Compliance Framework</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our privacy practices are designed to meet and exceed the requirements of:
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>DPDP Act, 2025:</strong> We adhere to principles of lawful, fair, and transparent processing, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>RBI Guidelines:</strong> We comply with KYC (Know Your Customer) and AML (Anti-Money Laundering) directives for all financial transactions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>PMLA, 2002:</strong> We maintain records of transactions and customer identification as mandated for a period of seven years.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>SEBI Requirements:</strong> Where applicable, we follow data protection norms relevant to investment-related services.</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Data Collection Categories */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">3. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">A. Personal & Demographic Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Name, contact details (email, phone, address), date of birth, gender, photograph, and government identification numbers (PAN, Aadhaar*).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">B. Financial & KYC Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bank account details, payment instrument information, transaction history, source of funds, and copies of KYC documents (as required by PMLA/RBI).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">C. Technical & Behavioral Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    IP address, device type, browser information, operating system, usage patterns, pages visited, session duration, and clickstream data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">D. Communication Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Records of your communications with our customer support, feedback, and survey responses.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    *Aadhaar collection is voluntary and based on explicit consent for eKYC, where required for transactions above specified limits.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Processing Purposes & Legal Basis */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">4. How & Why We Use Your Information</h2>
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-gold-400">Processing Purposes:</h3>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Service Delivery:</strong> To create your account, process transactions (buy/sell/SIP), facilitate gold leasing, and manage physical deliveries.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Regulatory Compliance:</strong> To verify your identity (KYC), prevent money laundering, and meet reporting obligations to RBI, SEBI, and other authorities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Security & Fraud Prevention:</strong> To monitor for and prevent unauthorized transactions, identity theft, and other fraudulent activities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Communication:</strong> To send transactional alerts, service updates, and (with your consent) marketing communications.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Improvement & Analytics:</strong> To analyze usage trends, improve our platform, and develop new features.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Dispute Resolution:</strong> To investigate and resolve complaints or disputes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400 flex-shrink-0">•</span>
                    <span><strong>Legal Obligations:</strong> To comply with court orders, legal processes, or enforceable government requests.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold-400 mb-2">Legal Basis for Processing:</h3>
                <p className="text-gray-300 leading-relaxed">
                  We process your personal data based on one or more of the following legal grounds: <strong>(a)</strong> Your explicit consent (for marketing, eKYC); <strong>(b)</strong> Necessity for performing our contract with you (service delivery); <strong>(c)</strong> Compliance with a legal obligation (KYC/AML laws); and <strong>(d)</strong> Our legitimate interests (fraud prevention, platform security, improvement), provided such interests do not override your fundamental rights.
                </p>
              </div>
            </section>

            {/* Section 5: Data Retention Periods */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">5. Data Retention Periods</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>KYC & Financial Transaction Records:</strong> <span className="text-red-400">7 years</span> from the date of transaction or termination of business relationship, as mandated by the PMLA, 2002.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Account Data (Inactive Accounts):</strong> Up to 2 years after account inactivity, after which it will be anonymized or deleted, subject to any legal hold.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Technical Logs:</strong> Up to 180 days for security monitoring and debugging.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Marketing Consent:</strong> Until you withdraw consent, which you may do at any time.</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                After the retention period ends, data is securely deleted, anonymized, or archived in accordance with our data destruction policy.
              </p>
            </section>

            {/* Section 6: Data Sharing & Third Parties */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">6. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell your personal data. We may share your information only in the following circumstances and with appropriate contractual safeguards:
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Service Providers:</strong> With trusted third parties who perform services on our behalf under strict confidentiality agreements (e.g., payment gateways like Razorpay/UPI, cloud hosting providers, SMS/email delivery services, vault custodians).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Regulatory & Government Authorities:</strong> With RBI, SEBI, Financial Intelligence Unit (FIU-IND), tax authorities, or law enforcement agencies when mandated by law or to comply with legal processes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as a business asset, subject to the same privacy commitments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>With Your Consent:</strong> For any other purpose disclosed to you at the time we collect the information, with your explicit permission.</span>
                </li>
              </ul>
            </section>

            {/* Section 7: Your Rights (DPDP Act 2025) */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">7. Your Rights Under DPDP Act, 2025</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have significant control over your personal data. As a Data Principal, you have the right to:
              </p>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Right to Access & Confirmation:</strong> To confirm if we are processing your data and obtain a summary of the personal data we hold and the processing activities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Right to Correction & Erasure:</strong> To correct inaccurate or incomplete data, and to request deletion of your personal data when it is no longer necessary for the purpose it was collected.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Right to Grievance Redressal:</strong> To readily access our grievance officer and file a complaint regarding our data practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Right to Nominate:</strong> To nominate another individual to exercise your rights in the event of your death or incapacity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 flex-shrink-0">•</span>
                  <span><strong>Right to Withdraw Consent:</strong> To withdraw your consent for processing at any time, where processing is based on consent. Withdrawal will not affect the lawfulness of processing before the withdrawal.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact our Data Protection Officer (DPO) using the details in Section 13. We will respond to valid requests within the timelines prescribed by the DPDP Act and its rules.
              </p>
            </section>

            {/* Section 8: Data Security Safeguards */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">8. Data Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Technical Measures</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We employ <strong>end-to-end encryption (AES-256)</strong> for data in transit and at rest, <strong>tokenization</strong> for sensitive financial data, <strong>Multi-Factor Authentication (MFA)</strong> for account access, and regular security audits and vulnerability assessments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Organizational Measures</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We have appointed a <strong>Data Protection Officer (DPO)</strong>, conduct regular <strong>Data Protection Impact Assessments (DPIAs)</strong> for high-risk processing, enforce strict role-based access controls, and provide mandatory data privacy training to all employees.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Operational Measures</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive access logging and monitoring, secure development lifecycle (SDL) practices, and a documented incident response plan. However, please note that no method of electronic transmission or storage is 100% secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Breach Notification Protocol */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">9. Data Breach Notification</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In the unlikely event of a personal data breach that is likely to result in a risk to your rights and freedoms, we have a defined 4-step response protocol:
              </p>
              <ol className="space-y-3 text-gray-300 leading-relaxed list-decimal pl-5">
                <li><strong>Containment & Assessment:</strong> Immediate actions to contain the breach and assess the scope and impact.</li>
                <li><strong>Notification to Authorities:</strong> Mandatory reporting to the Data Protection Board (DPB) under the DPDP Act within the stipulated 72-hour timeframe where required.</li>
                <li><strong>Communication to Users:</strong> Prompt and clear communication to affected individuals, describing the nature of the breach, likely consequences, and measures taken.</li>
                <li><strong>Remediation & Review:</strong> Implementation of corrective actions and a post-incident review to prevent future occurrences.</li>
              </ol>
            </section>

            {/* Section 10: Special Categories */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">10. Children's Data & Persons with Disabilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Children:</strong> Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected such data, we will take steps to delete it. If you are a parent/guardian and believe your child has provided us with data, please contact us.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Persons with Disabilities:</strong> We are committed to accessibility. If you are a person with a disability and require assistance in providing consent or exercising your rights, you may do so through your legal guardian, who may act on your behalf with appropriate verification.
              </p>
            </section>

            {/* Section 11: International Transfers & Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">11. International Transfers, Cookies & Tracking</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Data Localization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In compliance with RBI guidelines and the DPDP Act, we store and process all personal data of Indian residents on servers located within India. No data is transferred internationally unless explicitly required for a specific service (e.g., international payment routing) with adequate safeguards and, where necessary, your consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold-400">Cookies & Tracking Technologies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use essential cookies for site functionality, security, and performance. We also use analytical cookies (like Google Analytics) to understand usage patterns. You have control over non-essential cookies via our <strong>Cookie Preference Center</strong> accessible at the bottom of our website. You can adjust your browser settings to refuse cookies, but this may limit some site functionalities.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">12. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or services. The "Last updated" date at the top will be revised. We will notify you of material changes by posting a notice on our website (growgold.co), via email, or through an in-app notification at least 30 days prior to the changes taking effect, where required by law.
              </p>
            </section>

            {/* Section 13: Contact & Escalation */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-white">13. Contact Information & Grievance Redressal</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions, wish to exercise your rights, or have a privacy-related complaint, please contact our designated officers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-dark-800 rounded-lg border border-gold-500/20">
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Data Protection Officer (DPO)</h3>
                  <p className="text-gray-300">For all data privacy inquiries and rights requests.</p>
                  <p className="text-gray-300 mt-3"><strong>Website:</strong> growgold.co</p>
                  <p className="text-gray-300"><strong>Email:</strong> dpo@growgold.com</p>
                </div>
                <div className="p-5 bg-dark-800 rounded-lg border border-gold-500/20">
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Grievance Officer</h3>
                  <p className="text-gray-300">For escalation of unresolved complaints.</p>
                  <p className="text-gray-300 mt-3"><strong>Website:</strong> growgold.co</p>
                  <p className="text-gray-300"><strong>Email:</strong> grievance.officer@growgold.com</p>
                </div>
              </div>

              <div className="mt-6 p-5 bg-dark-800/50 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-white">Registered Office & Regulatory Escalation</h3>
                <p className="text-gray-300 mb-2"><strong>Website:</strong> growgold.co</p>
                <p className="text-gray-300 mb-2"><strong>Address:</strong> Grow Gold Inc., 123 Financial District, New York, NY 10001, USA</p>
                <p className="text-gray-300 mb-4"><strong>For India Operations:</strong> Grow Gold India Pvt. Ltd., [Indian Registered Office Address]</p>
                <p className="text-gray-300">
                  If you are not satisfied with our response, you have the right to lodge a complaint with the <strong>Data Protection Board of India</strong> (once formally constituted under the DPDP Act) or other relevant regulatory authorities like the RBI Ombudsman.
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

export default PrivacyPolicy;
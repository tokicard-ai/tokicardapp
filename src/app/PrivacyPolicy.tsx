export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 hostfont">
      {/* Header */}
      <div className="bg-black py-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          {/* <a href="/" className="text-purple-500 hover:text-purple-400 inline-flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-4">Oracle Digital LTD (Tokicard)</p>
          <p className="text-gray-400 mt-2">
            <strong>Effective Date:</strong> February 2026 | <strong>Last Updated:</strong> February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 1. INTRODUCTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">1. INTRODUCTION</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oracle Digital LTD (Registration No. RC 9000365) ("Oracle Digital", "Tokicard", "we", "us", or "our") 
            is a Nigerian company providing digital currency wallet and stablecoin offramp services through our 
            mobile and web application, Tokicard (the "Platform"). We are committed to protecting your privacy 
            and handling your personal data responsibly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy explains how we collect, use, store, share, and protect your personal information 
            when you use our services. By accessing or using Tokicard, you agree to the practices described in 
            this Privacy Policy.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-gray-700 font-semibold">
              Important: We are not a bank, financial institution, or licensed digital asset exchange. We provide 
              stablecoin wallet services in partnership with Quidax, a regulated digital currency company in Nigeria, 
              and leverage other licensed financial service providers for fiat offramp and payment services.
            </p>
          </div>
        </section>

        {/* 2. DATA PROTECTION LAWS & YOUR RIGHTS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">2. DATA PROTECTION LAWS & YOUR RIGHTS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We comply with applicable data protection laws in the jurisdictions where we operate, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>Nigeria Data Protection Regulation (NDPR) 2019</li>
            <li>Kenya Data Protection Act 2019</li>
            <li>South Africa Protection of Personal Information Act (POPIA) 2013</li>
            <li>Ghana Data Protection Act 2012</li>
            <li>General Data Protection Regulation (GDPR) where applicable to EU residents</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You have rights under these laws, including the right to access, correct, delete, object to processing, 
            restrict processing, data portability, and withdraw consent. See Section 11 below for details.
          </p>
        </section>

        {/* 3. INFORMATION WE COLLECT */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">3. INFORMATION WE COLLECT</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1 Information You Provide Directly</h3>
              <p className="text-gray-700 mb-3">
                When you create an account, use our services, or communicate with us, you provide:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Identity & KYC Information:</strong> Full legal name, date of birth, nationality, government-issued ID number (e.g., National ID, BVN, Passport), ID document images, selfie/photograph for verification, proof of address (utility bill, bank statement)</li>
                <li><strong>Contact Information:</strong> Email address, phone number, residential address</li>
                <li><strong>Financial Information:</strong> Bank account details (account number, bank name, sort code/IBAN), mobile money wallet details (phone number, provider), payment card information</li>
                <li><strong>Transaction Data:</strong> Details of stablecoin deposits/withdrawals, fiat offramps, cross-border transfers, merchant payments, transaction amounts, timestamps, beneficiary information</li>
                <li><strong>Communications:</strong> Customer support inquiries, complaints, feedback, survey responses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2 Information Collected Automatically</h3>
              <p className="text-gray-700 mb-3">When you use Tokicard, we automatically collect:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers (IMEI, UDID), mobile network information</li>
                <li><strong>Usage Data:</strong> IP address, browser type, access times, pages viewed, app features used, clickstream data</li>
                <li><strong>Location Data:</strong> Approximate location derived from IP address; precise GPS location if you grant permission</li>
                <li><strong>Cookies & Tracking:</strong> We use cookies, web beacons, and similar technologies. See our Cookie Policy for details.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.3 Information from Third Parties</h3>
              <p className="text-gray-700 mb-3">We receive information from:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Identity Verification Partners:</strong> KYC/AML screening providers (e.g., Smile Identity, Youverify, Trulioo) who verify your identity against government databases, sanctions lists, and PEP (Politically Exposed Person) databases</li>
                <li><strong>Quidax & Financial Partners:</strong> Transaction confirmations, wallet balances, blockchain transaction data, compliance screening results</li>
                <li><strong>Blockchain Networks:</strong> Publicly available blockchain transaction data (wallet addresses, transaction hashes, amounts, timestamps) when you interact with stablecoin protocols</li>
                <li><strong>Fraud Prevention Services:</strong> Device fingerprinting, fraud scoring, risk analytics</li>
                <li><strong>Public Sources:</strong> Publicly available information for enhanced due diligence (e.g., corporate registries, news sources for sanctions/AML screening)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. HOW WE USE YOUR INFORMATION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">4. HOW WE USE YOUR INFORMATION</h2>
          
          <p className="text-gray-700 mb-4">We process your personal data on the following lawful bases:</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.1 Contract Performance</h3>
              <p className="text-gray-700 mb-3">To provide Tokicard services to you, including:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Creating and managing your account</li>
                <li>Verifying your identity (KYC/AML compliance)</li>
                <li>Processing stablecoin transactions, fiat offramps, and cross-border transfers</li>
                <li>Issuing virtual/physical payment cards</li>
                <li>Facilitating mobile money and bank transfers</li>
                <li>Providing customer support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.2 Legal Obligation</h3>
              <p className="text-gray-700 mb-3">To comply with laws and regulations:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Anti-Money Laundering (AML) & Counter-Terrorism Financing (CFT):</strong> Screening against sanctions lists (OFAC, UN, EU), monitoring suspicious transactions, filing Suspicious Transaction Reports (STRs) with NFIU (Nigeria), FRC (Kenya), FIC (South Africa), or equivalent authorities</li>
                <li><strong>Know Your Customer (KYC):</strong> Verifying identity per FATF standards, Nigeria SEC Virtual Asset Service Provider (VASP) guidelines, Kenya Digital Credit Providers Act, South Africa Financial Intelligence Centre Act (FICA)</li>
                <li><strong>Tax Reporting:</strong> Reporting to tax authorities where required (e.g., FIRS in Nigeria)</li>
                <li><strong>Regulatory Requests:</strong> Responding to lawful requests from regulators, law enforcement, courts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.3 Legitimate Interests</h3>
              <p className="text-gray-700 mb-3">Where not overridden by your rights:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Fraud Prevention & Security:</strong> Detecting/preventing fraud, money laundering, identity theft; monitoring for unusual activity; securing our systems</li>
                <li><strong>Service Improvement:</strong> Analyzing usage patterns, conducting research, developing new features</li>
                <li><strong>Marketing & Communications:</strong> Sending service updates, promotional offers (with opt-out option), educational content about stablecoins and digital assets</li>
                <li><strong>Business Operations:</strong> Managing risks, conducting audits, enforcing our Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.4 Consent</h3>
              <p className="text-gray-700 mb-3">For certain processing activities:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Precise location tracking (you can withdraw consent in device settings)</li>
                <li>Marketing communications (you can opt out anytime)</li>
                <li>Sharing data with third-party analytics providers beyond what's necessary for service delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. HOW WE SHARE YOUR INFORMATION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">5. HOW WE SHARE YOUR INFORMATION</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded">
            <p className="text-lg font-semibold text-purple-700">
              We do not sell your personal data. We share information only as described below:
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1 Service Providers & Partners</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Quidax:</strong> For digital currency custody, stablecoin transactions, blockchain interactions, regulatory compliance</li>
                <li><strong>Payment Processors & Banks:</strong> For fiat offramps, bank transfers (e.g., Flutterwave, Paystack, local banks, mobile money operators like M-Pesa, MTN MoMo)</li>
                <li><strong>KYC/Identity Verification:</strong> Third-party identity verification and AML screening providers</li>
                <li><strong>Card Issuers:</strong> For virtual/physical payment card issuance and processing</li>
                <li><strong>Cloud Hosting:</strong> AWS, Google Cloud, or similar providers for data storage and infrastructure</li>
                <li><strong>Analytics & Fraud Prevention:</strong> Tools for usage analytics, fraud detection, cybersecurity</li>
                <li><strong>Customer Support:</strong> Third-party platforms for helpdesk services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2 Legal & Regulatory Authorities</h3>
              <p className="text-gray-700 mb-3">We disclose information when legally required:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nigerian Financial Intelligence Unit (NFIU), Central Bank of Nigeria (CBN), Securities and Exchange Commission (SEC)</li>
                <li>Kenya Financial Reporting Centre (FRC), Central Bank of Kenya (CBK), Communications Authority of Kenya</li>
                <li>South African Financial Intelligence Centre (FIC), Financial Sector Conduct Authority (FSCA)</li>
                <li>Ghana Bank of Ghana (BoG), Financial Intelligence Centre (FIC Ghana)</li>
                <li>Law enforcement agencies investigating crimes</li>
                <li>Courts, tribunals, or regulators in response to valid legal orders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.3 Business Transfers</h3>
              <p className="text-gray-700">
                If Oracle Digital merges with, is acquired by, or sells assets to another entity, your information 
                may be transferred as part of that transaction (you will be notified).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.4 Affiliates & Group Companies</h3>
              <p className="text-gray-700">
                We may share information with future affiliated companies for legitimate business purposes 
                (service provision, compliance, support).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.5 With Your Consent</h3>
              <p className="text-gray-700">
                We may share your information with third parties when you explicitly authorize us to do so.
              </p>
            </div>
          </div>
        </section>

        {/* 6. INTERNATIONAL DATA TRANSFERS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">6. INTERNATIONAL DATA TRANSFERS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Cross-Border Operations</h3>
              <p className="text-gray-700">
                Because we operate across multiple African countries and use service providers located globally 
                (including the United States, Europe, and Asia), your personal data may be transferred outside 
                your country of residence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Safeguards</h3>
              <p className="text-gray-700 mb-3">We ensure adequate protection through:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Standard Contractual Clauses (SCCs):</strong> EU Commission-approved clauses with service providers in countries without adequacy decisions</li>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries recognized as providing adequate protection (e.g., within EEA)</li>
                <li><strong>Binding Corporate Rules:</strong> Internal policies ensuring consistent data protection standards</li>
                <li><strong>Explicit Consent:</strong> For transfers requiring your consent under local law</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Nigeria-Specific:</strong> Under the NDPR, we implement appropriate safeguards for 
                international transfers and notify the National Information Technology Development Agency (NITDA) 
                where required.
              </p>
            </div>
          </div>
        </section>

        {/* 7. DATA SECURITY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">7. DATA SECURITY</h2>
          
          <p className="text-gray-700 mb-4">
            We implement industry-standard technical and organizational measures to protect your data:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li><strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest (AES-256 or equivalent)</li>
            <li><strong>Access Controls:</strong> Role-based access, multi-factor authentication for staff, regular access reviews</li>
            <li><strong>Monitoring:</strong> 24/7 security monitoring, intrusion detection, regular vulnerability assessments</li>
            <li><strong>Secure Development:</strong> Security testing, code reviews, penetration testing</li>
            <li><strong>Physical Security:</strong> Data centers with restricted access, surveillance, environmental controls</li>
            <li><strong>Incident Response:</strong> Documented breach notification procedures compliant with NDPR (72-hour notification), Kenya DPA, POPIA, GDPR</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-gray-700">
              <strong>No Guarantee:</strong> Despite our efforts, no system is 100% secure. You are responsible 
              for safeguarding your account credentials. Notify us immediately at{' '}
              <a href="mailto:security@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
                security@tokicard.com
              </a>{' '}
              if you suspect unauthorized access.
            </p>
          </div>
        </section>

        {/* 8. DATA RETENTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">8. DATA RETENTION</h2>
          
          <p className="text-gray-700 mb-4">
            We retain your personal information only as long as necessary for the purposes outlined in this 
            Policy or as required by law:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li><strong>Active Accounts:</strong> For the duration of your relationship with us</li>
            <li><strong>Post-Closure:</strong> Up to 7 years after account closure for AML/CFT compliance (FATF guidance, Nigeria MLPA, Kenya POCAMLA, South Africa FICA require 5–7 years)</li>
            <li><strong>Legal Holds:</strong> Longer if required for litigation, investigations, or regulatory requests</li>
            <li><strong>Marketing Data:</strong> Until you unsubscribe or withdraw consent, plus reasonable period to process opt-out</li>
          </ul>

          <p className="text-gray-700">
            After retention periods expire, we securely delete or anonymize your data.
          </p>
        </section>

        {/* 9. COOKIES & TRACKING TECHNOLOGIES */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">9. COOKIES & TRACKING TECHNOLOGIES</h2>
          
          <p className="text-gray-700 mb-4">
            We use cookies (small text files) and similar technologies to:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>Remember your preferences and settings</li>
            <li>Authenticate your login sessions</li>
            <li>Analyze usage and improve our Platform</li>
            <li>Deliver targeted advertising (on third-party sites)</li>
          </ul>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Types of Cookies:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Essential:</strong> Necessary for Platform functionality (cannot be disabled)</li>
              <li><strong>Functional:</strong> Enhance user experience (e.g., language preferences)</li>
              <li><strong>Analytics:</strong> Help us understand usage patterns (e.g., Google Analytics)</li>
              <li><strong>Advertising:</strong> Deliver personalized ads (e.g., Facebook Pixel)</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              <strong>Your Control:</strong> You can manage cookies via browser settings. Disabling essential 
              cookies may impair Platform functionality. See our Cookie Policy for detailed information.
            </p>
          </div>
        </section>

        {/* 10. THIRD-PARTY LINKS & SERVICES */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">10. THIRD-PARTY LINKS & SERVICES</h2>
          
          <p className="text-gray-700">
            Our Platform may contain links to third-party websites, services, or integrations (e.g., Quidax, 
            merchant partners). We are not responsible for their privacy practices. Review their privacy policies 
            before providing personal information.
          </p>
        </section>

        {/* 11. YOUR PRIVACY RIGHTS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">11. YOUR PRIVACY RIGHTS</h2>
          
          <p className="text-gray-700 mb-6">
            Depending on your location, you have the following rights:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.1 Access & Portability</h4>
              <p className="text-gray-700 text-sm">
                Request a copy of your personal data we hold. Receive your data in a structured, 
                machine-readable format (data portability)
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.2 Correction</h4>
              <p className="text-gray-700 text-sm">
                Request correction of inaccurate or incomplete data
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.3 Deletion ("Right to be Forgotten")</h4>
              <p className="text-gray-700 text-sm">
                Request deletion of your data (subject to legal retention obligations)
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.4 Restriction & Objection</h4>
              <p className="text-gray-700 text-sm">
                Restrict processing of your data in certain circumstances. Object to processing based 
                on legitimate interests or for direct marketing
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.5 Withdraw Consent</h4>
              <p className="text-gray-700 text-sm">
                Withdraw consent for processing based on consent (does not affect lawfulness of prior processing)
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-600">11.6 Complaint to Supervisory Authority</h4>
              <p className="text-gray-700 text-sm">
                File a complaint with Nigeria (NITDA), Kenya (ODPC), South Africa (Information Regulator), 
                Ghana (Data Protection Commission)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">11.7 How to Exercise Your Rights</h3>
            <p className="text-gray-700 mb-3">
              Email us at{' '}
              <a href="mailto:privacy@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
                privacy@tokicard.com
              </a>{' '}
              with your request. We will respond within:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Nigeria: 30 days (NDPR)</li>
              <li>Kenya: 21 days (DPA 2019)</li>
              <li>South Africa: Reasonable period, not exceeding 30 days (POPIA)</li>
              <li>GDPR: 1 month (extendable to 3 months for complex requests)</li>
            </ul>
            <p className="text-gray-700">
              We may require proof of identity before processing your request.
            </p>
          </div>
        </section>

        {/* 12. CHILDREN'S PRIVACY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">12. CHILDREN'S PRIVACY</h2>
          
          <p className="text-gray-700">
            Tokicard is not intended for individuals under 18 years of age. We do not knowingly collect personal 
            information from minors. If you believe a minor has provided us with data, contact us immediately at{' '}
            <a href="mailto:privacy@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
              privacy@tokicard.com
            </a>
            , and we will delete it promptly.
          </p>
        </section>

        {/* 13. DATA PROTECTION OFFICER (DPO) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">13. DATA PROTECTION OFFICER (DPO)</h2>
          
          <p className="text-gray-700 mb-4">
            We have appointed a Data Protection Officer (DPO) to oversee compliance with data protection laws:
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-2"><strong>Data Protection Officer</strong></p>
            <p className="text-gray-700 mb-1">Oracle Digital LTD</p>
            <p className="text-gray-700 mb-1">
              Email:{' '}
              <a href="mailto:dpo@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
                dpo@tokicard.com
              </a>
            </p>
            <p className="text-gray-700">Address: Company Registered Address, Nigeria</p>
          </div>
          
          <p className="text-gray-700 mt-4">
            You may contact the DPO with questions or concerns about how we handle your personal data.
          </p>
        </section>

        {/* 14. AUTOMATED DECISION-MAKING & PROFILING */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">14. AUTOMATED DECISION-MAKING & PROFILING</h2>
          
          <p className="text-gray-700 mb-4">We use automated systems to:</p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>Assess fraud risk and detect suspicious transactions</li>
            <li>Verify your identity against databases (KYC/AML screening)</li>
            <li>Determine transaction limits and account eligibility</li>
          </ul>

          <p className="text-gray-700">
            <strong>Your Rights:</strong> You have the right to request human review of automated decisions 
            that significantly affect you, contest the decision, and express your point of view. Contact{' '}
            <a href="mailto:privacy@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
              privacy@tokicard.com
            </a>{' '}
            to exercise this right.
          </p>
        </section>

        {/* 15. CHANGES TO THIS PRIVACY POLICY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">15. CHANGES TO THIS PRIVACY POLICY</h2>
          
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy periodically to reflect changes in our practices, technology, 
            or legal requirements. We will notify you of material changes by:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>Posting the updated Policy on our Platform with a new "Last Updated" date</li>
            <li>Sending an email notification to your registered email address</li>
            <li>Displaying an in-app notification</li>
          </ul>

          <p className="text-gray-700">
            Continued use of Tokicard after changes constitute acceptance of the updated Policy. Review this 
            Policy regularly to stay informed.
          </p>
        </section>

        {/* 16. CONTACT US */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">16. CONTACT US</h2>
          
          <p className="text-gray-700 mb-4">
            For privacy questions, concerns, or to exercise your rights:
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
            <p className="text-gray-700 mb-2"><strong>Oracle Digital LTD (Tokicard)</strong></p>
            <p className="text-gray-700 mb-1">Registration No.: RC 9000365</p>
            <p className="text-gray-700 mb-1">
              Email:{' '}
              <a href="mailto:privacy@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
                privacy@tokicard.com
              </a>
            </p>
            <p className="text-gray-700 mb-1">
              Support:{' '}
              <a href="mailto:support@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">
                support@tokicard.com
              </a>
            </p>
            <p className="text-gray-700">Address: Registered Office Address, Nigeria</p>
          </div>
        </section>

        {/* Final Acknowledgment */}
        <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded">
          <p className="text-gray-800 text-lg font-semibold">
            By using Tokicard, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 text-gray-400 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            {/* <a href="mailto:support@tokicard.com" className="hover:text-white transition-colors">Contact</a> */}
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Oracle Digital LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
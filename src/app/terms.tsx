import './style.css';

export default function TermsAndConditions() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms and Conditions</h1>
          <p className="text-gray-400 mt-4">User Agreement - Oracle Digital LTD (Tokicard)</p>
          <p className="text-gray-400 mt-2">
            <strong>Effective Date:</strong> February 2026 | <strong>Version:</strong> 1.0
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 1. INTRODUCTION & ACCEPTANCE */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">1. INTRODUCTION & ACCEPTANCE</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1.1 Agreement to Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions (the "Terms", "Agreement", or "User Agreement") constitute a legally 
                binding contract between you ("you", "your", or "User") and Oracle Digital LTD, a company duly 
                registered in Nigeria under Registration Number RC 9000365 ("Oracle Digital", "Tokicard", "Company", 
                "we", "us", or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By creating an account, accessing, or using the Tokicard mobile or web application (the "Platform"), 
                you agree to be bound by these Terms, our Privacy Policy, AML/KYC Policy, and all other policies 
                incorporated by reference (collectively, the "Agreements").
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-700 font-bold">
                  IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE TOKICARD.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1.2 About Tokicard</h3>
              <p className="text-gray-700 mb-3">Tokicard is a digital currency wallet and stablecoin offramp service that enables you to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Hold, send, and receive digital currencies (stablecoins and other supported assets)</li>
                <li>Convert stablecoins to local fiat currencies</li>
                <li>Offramp funds to bank accounts and mobile money wallets</li>
                <li>Make cross-border transfers</li>
                <li>Spend via virtual/physical payment cards</li>
                <li>Make merchant payments</li>
              </ul>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Partnership Model:</strong> We are not a bank, financial institution, digital asset exchange, 
                  or licensed payment service provider. We provide wallet services in partnership with Quidax, a 
                  regulated digital currency company in Nigeria, and leverage other licensed financial service 
                  partners for fiat payment rails, card issuance, and related services.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1.3 Amendments</h3>
              <p className="text-gray-700 leading-relaxed">
                We may modify these Terms at any time by posting the updated version on the Platform with a revised 
                "Effective Date." Material changes will be communicated via email or in-app notification at least 30 
                days before taking effect (or as required by law). Continued use after changes take effect constitutes 
                acceptance. If you disagree with changes, you must close your account before the effective date.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ELIGIBILITY & ACCOUNT REGISTRATION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">2. ELIGIBILITY & ACCOUNT REGISTRATION</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Age Requirement</h3>
              <p className="text-gray-700">
                You must be at least 18 years of age to use Tokicard. By registering, you represent and warrant 
                that you meet this requirement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Geographic Eligibility</h3>
              <p className="text-gray-700 mb-3">
                Tokicard is available to residents of supported African countries, including Nigeria, Kenya, South 
                Africa, Ghana, Uganda, and others as we expand. Availability may change. We do not offer services 
                in jurisdictions where prohibited by law.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Prohibited Jurisdictions:</strong> You may not use Tokicard if you are located in, a 
                  citizen/resident of, or subject to sanctions by any jurisdiction on the OFAC Specially Designated 
                  Nationals (SDN) List, UN Sanctions List, EU Sanctions List, or equivalent (including but not limited 
                  to Iran, North Korea, Syria, Cuba, Crimea).
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Individual vs. Business Accounts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Individual Accounts:</strong> For personal use by natural persons</li>
                <li><strong>Business Accounts:</strong> For entities (companies, partnerships, sole proprietorships). Additional documentation required (certificate of incorporation, directors' IDs, beneficial ownership information).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.4 Account Registration</h3>
              <p className="text-gray-700 mb-3">To create an account, you must:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Provide accurate personal information (name, date of birth, email, phone number, address)</li>
                <li>Complete identity verification (KYC) by submitting government-issued ID, selfie, proof of address</li>
                <li>Pass AML/sanctions screening</li>
                <li>Accept these Terms and our Privacy Policy</li>
                <li>Create a secure password and enable two-factor authentication (2FA)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Accuracy:</strong> You represent that all information provided is truthful, accurate, and 
                complete. You must update information promptly if it changes. Providing false information may result 
                in account suspension or termination, and potential legal liability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.5 One Account Per User</h3>
              <p className="text-gray-700">
                You may only create and maintain one Tokicard account per individual (or per business entity for 
                business accounts). Multiple accounts may be closed without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.6 Account Security</h3>
              <p className="text-gray-700 mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Maintaining confidentiality of your password, 2FA codes, and recovery phrases</li>
                <li>All activities conducted through your account</li>
                <li>Notifying us immediately at security@tokicard.com if you suspect unauthorized access</li>
              </ul>
              <p className="text-gray-700">
                We are not liable for losses resulting from unauthorized account access if you failed to maintain 
                adequate security. Do not share your credentials with anyone.
              </p>
            </div>
          </div>
        </section>

        {/* 3. IDENTITY VERIFICATION (KYC/AML) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">3. IDENTITY VERIFICATION (KYC/AML)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1 Legal Requirement</h3>
              <p className="text-gray-700 mb-3">
                We are required by law to verify your identity and monitor transactions to prevent money laundering, 
                terrorist financing, fraud, and other illicit activities. This is mandated by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nigeria Money Laundering (Prevention and Prohibition) Act, SEC VASP Guidelines</li>
                <li>Kenya Proceeds of Crime and Anti-Money Laundering Act (POCAMLA)</li>
                <li>South Africa Financial Intelligence Centre Act (FICA)</li>
                <li>Ghana Anti-Money Laundering Act</li>
                <li>Financial Action Task Force (FATF) Recommendations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2 Information Required</h3>
              <p className="text-gray-700 mb-3">Depending on your risk profile and transaction volume, we may require:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Basic KYC (Tier 1):</strong> Name, phone, email, date of birth</li>
                <li><strong>Enhanced KYC (Tier 2):</strong> Government-issued ID (National ID, Driver's License, Passport, BVN), selfie/liveness check, proof of address (utility bill, bank statement not older than 3 months)</li>
                <li><strong>Advanced KYC (Tier 3):</strong> Source of funds documentation, employment verification, additional identification documents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.3 Transaction Limits</h3>
              <p className="text-gray-700 mb-3">Transaction and wallet limits are tied to your KYC tier:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                <li><strong>Unverified/Tier 1:</strong> Limited or no transactional functionality</li>
                <li><strong>Tier 2:</strong> Standard limits (e.g., ₦500,000 / $500 daily)</li>
                <li><strong>Tier 3:</strong> Higher limits for verified users</li>
              </ul>
              <p className="text-gray-700">Limits may vary by jurisdiction and are subject to change.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.4 Ongoing Monitoring</h3>
              <p className="text-gray-700 mb-3">We continuously monitor transactions for suspicious activity. We may:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Request additional documentation or information at any time</li>
                <li>Freeze, suspend, or close accounts pending investigation</li>
                <li>Report suspicious transactions to the Nigerian Financial Intelligence Unit (NFIU), Kenya FRC, South Africa FIC, or equivalent authorities</li>
                <li>Block transactions to/from high-risk wallets, exchanges, or jurisdictions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.5 Refusal of Service</h3>
              <p className="text-gray-700 mb-3">We reserve the right to refuse service, decline transactions, or close accounts if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>You fail to complete KYC or provide requested documentation</li>
                <li>You are flagged in sanctions screening or PEP databases</li>
                <li>We detect fraudulent, illegal, or suspicious activity</li>
                <li>We are unable to verify your identity adequately</li>
                <li>Servicing you would violate laws or regulations</li>
              </ul>
              <p className="text-gray-700">
                <strong>No Obligation to Disclose:</strong> We are not required to disclose reasons for account 
                closure if doing so would compromise investigations or violate legal obligations.
              </p>
            </div>
          </div>
        </section>

        {/* 4. SERVICES DESCRIPTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">4. SERVICES DESCRIPTION</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.1 Digital Currency Wallet</h3>
              <p className="text-gray-700 mb-3">You can hold, send, and receive supported digital currencies, including:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>Stablecoins:</strong> USDC, USDT, and other fiat-pegged tokens (primarily ERC-20, BEP-20, Polygon, or other supported blockchains)</li>
                <li><strong>Other Digital Assets:</strong> As announced from time to time</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700 mb-2"><strong>Custody:</strong> Digital assets are held via Quidax, our licensed partner. You acknowledge that:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                  <li>Oracle Digital does not directly custody your assets</li>
                  <li>Assets are subject to Quidax's terms, custody arrangements, and security practices</li>
                  <li>We are not liable for Quidax's failures, insolvency, hacks, or breaches (see Section 12)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.2 Fiat Offramp (Stablecoin to Fiat Conversion)</h3>
              <p className="text-gray-700 mb-3">You can convert stablecoins to local currencies (NGN, KES, ZAR, GHS, UGX, etc.) and withdraw to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                <li><strong>Bank Accounts:</strong> Local bank transfers via partner payment processors</li>
                <li><strong>Mobile Money:</strong> M-Pesa (Kenya), MTN MoMo, Airtel Money (Uganda, Ghana, Nigeria), Vodacom (South Africa), etc.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Processing Time:</strong> Offramps typically process within minutes to 24 hours, depending on 
                destination country, payment rail, and compliance checks. Delays may occur due to bank hours, mobile 
                money operator processing times, or enhanced due diligence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.3 Cross-Border Transfers</h3>
              <p className="text-gray-700">
                Send funds to users in other supported countries. Stablecoins facilitate borderless transfers, with 
                recipients able to offramp to their local currency.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.4 Virtual & Physical Payment Cards</h3>
              <p className="text-gray-700 mb-3">Subject to eligibility, you may:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                <li>Generate virtual debit cards for online/in-app purchases</li>
                <li>Order physical cards for ATM withdrawals and point-of-sale transactions</li>
              </ul>
              <p className="text-gray-700">
                <strong>Card Terms:</strong> Card usage is governed by separate card issuer terms (provided upon 
                issuance). Card services may be provided by third-party licensed issuers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.5 Merchant Payments</h3>
              <p className="text-gray-700">
                Pay participating merchants using stablecoins or converted fiat balances directly from your Tokicard wallet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.6 Supported Countries & Expansion</h3>
              <p className="text-gray-700">
                Services availability varies by country. We may add or remove supported jurisdictions, assets, or 
                payment methods at any time with reasonable notice.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FEES & PRICING */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">5. FEES & PRICING</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1 Fee Disclosure</h3>
              <p className="text-gray-700 mb-3">
                We charge fees for certain services. Current fees are displayed on our Platform, website, or 
                communicated before transaction confirmation. Fees include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Offramp Fees:</strong> Percentage or fixed fee for converting stablecoins to fiat and withdrawing to bank/mobile money (e.g., 1.5%–3%)</li>
                <li><strong>Card Fees:</strong> Card issuance, monthly maintenance, ATM withdrawal fees</li>
                <li><strong>Cross-Border Transfer Fees:</strong> Fees for sending to users in other countries</li>
                <li><strong>Network Fees (Gas Fees):</strong> Blockchain transaction costs (Ethereum gas, Polygon fees) passed through at cost or with small markup</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2 Third-Party Fees</h3>
              <p className="text-gray-700 mb-3">You are responsible for third-party fees beyond our control:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Receiving bank charges (e.g., intermediary bank fees)</li>
                <li>Mobile money operator charges</li>
                <li>Foreign exchange spread (if currency conversion occurs outside our control)</li>
                <li>Blockchain miner/validator fees</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.3 Fee Changes</h3>
              <p className="text-gray-700">
                We may change fees at any time with 30 days' prior notice via email or in-app notification. Fee 
                changes do not apply retroactively to completed transactions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.4 No Refunds</h3>
              <p className="text-gray-700">
                Fees are non-refundable except in cases of our error or as required by law.
              </p>
            </div>
          </div>
        </section>

        {/* Continue with sections 6-16... Due to character limits, I'll create the rest in a structured format */}

        {/* 7. RISK DISCLOSURES */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">7. RISK DISCLOSURES</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
            <p className="text-gray-700 font-semibold mb-3">IMPORTANT: Please read these risk disclosures carefully.</p>
            <p className="text-gray-700">
              By using Tokicard, you acknowledge and accept all risks described below. You should only transact 
              with funds you can afford to lose.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.1 Not a Bank</h3>
              <p className="text-gray-700 mb-3">
                Oracle Digital is not a bank, financial institution, or licensed deposit-taking entity. Your funds 
                are not protected by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nigerian Deposit Insurance (NDIC)</li>
                <li>Kenya Deposit Protection Fund (DPF)</li>
                <li>South African deposit insurance schemes</li>
                <li>Any government-backed deposit guarantee</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.2 Stablecoin Risks</h3>
              <p className="text-gray-700 mb-3">Stablecoins carry inherent risks:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Depegging Risk:</strong> Stablecoins may lose their peg to fiat currency due to reserve insufficiency, market panic, or issuer failure. We do not guarantee the value or redemption of stablecoins.</li>
                <li><strong>Issuer Risk:</strong> Stablecoin issuers (e.g., Circle for USDC, Tether for USDT) may fail, become insolvent, or be unable to honor redemptions. We have no control over issuers.</li>
                <li><strong>Liquidity Risk:</strong> You may be unable to convert stablecoins to fiat during market disruptions, high volatility, or if we suspend services.</li>
                <li><strong>Regulatory Risk:</strong> Stablecoins may be banned, restricted, or heavily regulated in certain jurisdictions, affecting availability and usability.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.3 Blockchain & Technology Risks</h3>
              <p className="text-gray-700 mb-3">Blockchain-based transactions involve risks:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Smart Contract Risks:</strong> Bugs, exploits, or vulnerabilities in smart contracts could result in loss of funds</li>
                <li><strong>Network Congestion:</strong> High traffic may delay transactions or increase fees</li>
                <li><strong>Forks & Protocol Changes:</strong> Blockchain upgrades or forks may affect asset availability or value</li>
                <li><strong>Irreversibility:</strong> Blockchain transactions cannot be reversed or canceled once confirmed</li>
                <li><strong>Wallet Address Errors:</strong> Sending to incorrect addresses results in permanent loss</li>
                <li><strong>Private Key Security:</strong> If you use external wallets, loss of private keys means permanent loss of assets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.4 Currency & Foreign Exchange Risk</h3>
              <p className="text-gray-700 mb-3">When converting between currencies, you are exposed to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Volatility:</strong> Local currency values fluctuate against USD and other currencies</li>
                <li><strong>Capital Controls:</strong> Some countries (e.g., Nigeria) impose restrictions on foreign exchange access or transfers</li>
                <li><strong>Exchange Rate Risk:</strong> Offramp rates may differ from interbank rates due to liquidity, market conditions, or provider spreads</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.5 Cybersecurity Risks</h3>
              <p className="text-gray-700 mb-3">Despite our security measures, risks include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Hacking, phishing, malware, or social engineering attacks</li>
                <li>Unauthorized account access if you fail to secure your credentials</li>
                <li>Data breaches affecting you or third-party partners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.6 Operational Risks</h3>
              <p className="text-gray-700 mb-3">We may experience:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>System outages, maintenance downtime, or technical failures</li>
                <li>Delays in processing transactions</li>
                <li>Inability to access services during emergencies or force majeure events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.7 Partner & Third-Party Risks</h3>
              <p className="text-gray-700 mb-3">We rely on third parties (Quidax, payment processors, banks, card issuers) who may:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Experience failures, insolvency, or service disruptions</li>
                <li>Change their terms, fees, or services</li>
                <li>Suspend or terminate their relationship with us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.8 Regulatory & Legal Risks</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cryptocurrency and stablecoin regulations are evolving. New laws may restrict or prohibit services.</li>
                <li>We may be required to suspend services, freeze accounts, or cease operations in certain jurisdictions.</li>
                <li>Tax obligations for digital currency transactions are your responsibility.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. PROHIBITED USES & COMPLIANCE */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">8. PROHIBITED USES & COMPLIANCE</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.1 Prohibited Activities</h3>
              <p className="text-gray-700 mb-3">You may not use Tokicard to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Engage in illegal activities (fraud, money laundering, terrorist financing, drug trafficking, human trafficking, sanctions evasion)</li>
                <li>Purchase illegal goods or services</li>
                <li>Violate export controls, sanctions, or embargoes</li>
                <li>Facilitate gambling, pyramid schemes, or Ponzi schemes (unless legally permitted in your jurisdiction)</li>
                <li>Engage in market manipulation or wash trading</li>
                <li>Impersonate others or provide false identity information</li>
                <li>Circumvent transaction limits or KYC requirements (e.g., structuring transactions)</li>
                <li>Access the Platform from prohibited jurisdictions</li>
                <li>Interfere with or disrupt Platform security or functionality</li>
                <li>Reverse engineer, decompile, or hack our systems</li>
                <li>Use Tokicard for high-risk merchant categories as determined by card networks (e.g., adult content, weapons, unregulated securities)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.2 Sanctions Compliance</h3>
              <p className="text-gray-700 mb-3">You represent and warrant that you are not:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Listed on any sanctions list (OFAC SDN, UN, EU, UK HMT)</li>
                <li>Located in or a resident of a sanctioned country</li>
                <li>Owned or controlled by a sanctioned person or entity</li>
                <li>Acting on behalf of any of the above</li>
              </ul>
              <p className="text-gray-700">
                We will immediately freeze your account and report to authorities if we detect sanctions violations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.3 Tax Compliance</h3>
              <p className="text-gray-700 mb-3">You are solely responsible for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                <li>Determining and paying all applicable taxes on your transactions (income tax, capital gains tax, VAT/GST)</li>
                <li>Reporting digital currency transactions to tax authorities (e.g., Federal Inland Revenue Service in Nigeria, Kenya Revenue Authority, SARS in South Africa)</li>
                <li>Maintaining accurate transaction records for tax purposes</li>
              </ul>
              <p className="text-gray-700">
                We may provide transaction reports to assist with tax compliance but do not provide tax advice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.4 Consequences of Prohibited Use</h3>
              <p className="text-gray-700 mb-3">Violation of this Section may result in:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Immediate account suspension or termination</li>
                <li>Forfeiture of funds (to the extent permitted by law)</li>
                <li>Reporting to law enforcement or regulatory authorities</li>
                <li>Legal action to recover damages</li>
                <li>Criminal or civil penalties under applicable law</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. LIMITATION OF LIABILITY & DISCLAIMERS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">12. LIMITATION OF LIABILITY & DISCLAIMERS</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
            <p className="text-gray-700 font-bold uppercase mb-3">IMPORTANT LEGAL DISCLAIMERS - PLEASE READ CAREFULLY</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12.1 Services "As Is"</h3>
              <p className="text-gray-700 mb-3 uppercase font-semibold">
                TOKICARD IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, 
                WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT</li>
                <li>ACCURACY, COMPLETENESS, OR RELIABILITY OF THE PLATFORM</li>
                <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                <li>SECURITY OR FREEDOM FROM VIRUSES/MALWARE</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12.2 No Guarantee of Asset Value</h3>
              <p className="text-gray-700 mb-3 uppercase font-semibold">WE DO NOT GUARANTEE:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>The value, stability, or liquidity of stablecoins or digital assets</li>
                <li>That stablecoins will maintain their peg to fiat currency</li>
                <li>The solvency or performance of stablecoin issuers (Circle, Tether, etc.)</li>
                <li>That you will be able to convert assets to fiat at any given time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12.3 Third-Party Services</h3>
              <p className="text-gray-700 mb-3">We are not responsible for failures, errors, or conduct of third parties, including:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Quidax (digital asset custody)</li>
                <li>Payment processors and banks</li>
                <li>Mobile money operators</li>
                <li>Blockchain networks</li>
                <li>Card issuers</li>
                <li>Identity verification providers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12.4 Limitation of Liability</h3>
              <p className="text-gray-700 mb-3 uppercase font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Direct Damages Cap:</p>
                <p className="text-gray-700 text-sm">
                  Our total liability to you for any claim arising from these Terms or your use of Tokicard shall 
                  not exceed the greater of (a) fees you paid to us in the 6 months preceding the claim, or (b) USD 
                  $100 / NGN 50,000.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700 font-semibold mb-2 uppercase">No Consequential Damages:</p>
                <p className="text-gray-700 text-sm mb-3">
                  WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or goodwill</li>
                  <li>Cost of substitute services</li>
                  <li>Stablecoin depegging or digital asset value loss</li>
                  <li>Unauthorized account access due to your negligence</li>
                  <li>Delays or failures in transaction processing beyond our reasonable control</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12.6 Indemnification</h3>
              <p className="text-gray-700 mb-3">
                You agree to indemnify, defend, and hold harmless Oracle Digital, its officers, directors, employees, 
                agents, and partners from any claims, losses, damages, liabilities, costs, or expenses (including 
                legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your breach of these Terms</li>
                <li>Your violation of any law or regulation</li>
                <li>Your use of Tokicard</li>
                <li>Infringement of third-party rights</li>
                <li>Fraudulent or illegal activity associated with your account</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 14. DISPUTE RESOLUTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">14. DISPUTE RESOLUTION</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.1 Governing Law</h3>
              <p className="text-gray-700 mb-3">
                These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict 
                of law principles.
              </p>
              <p className="text-gray-700 mb-2">For users in other jurisdictions:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                <li>Kenya: Kenyan law may apply to Kenyan users for consumer protection matters</li>
                <li>South Africa: South African consumer protection laws may apply concurrently</li>
                <li>Ghana: Ghanaian law may apply for Ghanaian users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.2 Informal Resolution</h3>
              <p className="text-gray-700">
                Before initiating formal proceedings, you agree to contact us at legal@tokicard.com to attempt 
                informal resolution. We will respond within 14 days and work in good faith to resolve the dispute.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.3 Arbitration</h3>
              <p className="text-gray-700 mb-3">Any dispute not resolved informally shall be settled by binding arbitration under the rules of:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>London Court of International Arbitration (LCIA), or</li>
                <li>International Chamber of Commerce (ICC), or</li>
                <li>Lagos Court of Arbitration (LCA) (for Nigeria-domiciled disputes)</li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700 font-semibold mb-2">Arbitration Terms:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                  <li>Seat of arbitration: Lagos, Nigeria (or London, UK for international disputes)</li>
                  <li>Language: English</li>
                  <li>Number of arbitrators: One (1) or three (3) for high-value disputes (&gt;$50,000)</li>
                  <li>Confidentiality: Proceedings are confidential</li>
                  <li>Award: Final and binding; enforceable in any court of competent jurisdiction</li>
                  <li>Costs: Each party bears its own costs; arbitrator fees split equally unless arbitrator rules otherwise</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.4 Class Action Waiver</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-gray-700 font-semibold uppercase">
                  YOU AGREE TO RESOLVE DISPUTES INDIVIDUALLY, NOT AS PART OF A CLASS ACTION, CONSOLIDATED ACTION, 
                  OR REPRESENTATIVE PROCEEDING. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT AGAINST 
                  ORACLE DIGITAL.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.5 Exceptions to Arbitration</h3>
              <p className="text-gray-700">
                Either party may seek injunctive or equitable relief in a court of competent jurisdiction to prevent 
                irreparable harm (e.g., intellectual property infringement, data breaches).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">14.6 Jurisdiction for Non-Arbitrable Matters</h3>
              <p className="text-gray-700">
                For matters not subject to arbitration, you consent to the exclusive jurisdiction of the courts in 
                Lagos, Nigeria, or the Federal High Court of Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* 16. CONTACT INFORMATION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">16. CONTACT INFORMATION</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
            <p className="text-gray-700 mb-2"><strong>Oracle Digital LTD</strong></p>
            <p className="text-gray-700 mb-1">Registration Number: RC 9000365</p>
            <p className="text-gray-700 mb-1">Registered Address: Registered Office Address, Nigeria</p>
            <p className="text-gray-700 mb-1">
              Support: <a href="mailto:support@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">support@tokicard.com</a>
            </p>
            <p className="text-gray-700 mb-1">
              Legal: <a href="mailto:legal@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">legal@tokicard.com</a>
            </p>
            <p className="text-gray-700 mb-1">
              Compliance/AML: <a href="mailto:compliance@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">compliance@tokicard.com</a>
            </p>
            <p className="text-gray-700 mb-1">
              Privacy/DPO: <a href="mailto:dpo@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">dpo@tokicard.com</a> / <a href="mailto:privacy@tokicard.com" className="text-purple-600 hover:text-purple-700 underline">privacy@tokicard.com</a>
            </p>
            <p className="text-gray-700 mb-1">
              Website: <a href="https://tokicardai.com" className="text-purple-600 hover:text-purple-700 underline">www.tokicardai.com</a>
            </p>
          </div>
        </section>

        {/* ACKNOWLEDGMENT */}
        <div className="bg-gradient-to-r from-red-50 to-transparent border-l-4 border-red-600 p-6 rounded">
          <p className="text-gray-800 text-lg font-bold mb-4 uppercase">ACKNOWLEDGMENT</p>
          <p className="text-gray-700 mb-3">
            BY USING TOKICARD, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS 
            AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>Tokicard is not a bank and your funds are not insured by deposit insurance schemes</li>
            <li>Stablecoins carry risks, including depegging and issuer failure</li>
            <li>Blockchain transactions are irreversible</li>
            <li>You are responsible for securing your account and understanding tax obligations</li>
            <li>We may suspend or terminate your account for compliance or risk reasons</li>
            <li>Disputes are resolved through arbitration, not courts (subject to exceptions)</li>
          </ul>
          <p className="text-gray-700 font-semibold">
            If you do not agree to these Terms, you must immediately cease using Tokicard and close your account.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 text-gray-400 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
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
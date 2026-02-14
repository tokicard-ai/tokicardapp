import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Tokicard?",
          a: "Tokicard is a crypto spending platform that allows Africans to convert cryptocurrency into spendable Naira instantly. You can pay bills, withdraw cash, and use our virtual dollar card for everyday transactions."
        },
        {
          q: "How do I create an account?",
          a: "Download the Tokicard app from Google Play Store or Apple App Store. Click 'Sign Up', enter your email and create a password, verify your email address, and complete KYC verification by uploading a valid ID and proof of address."
        },
        {
          q: "Is Tokicard available in my country?",
          a: "Tokicard is currently available in Nigeria, with plans to expand to other African countries soon. Stay tuned for updates!"
        },
        {
          q: "Is Tokicard safe to use?",
          a: "Yes! We use bank-level security including end-to-end encryption, multi-factor authentication, and comply with international KYC/AML standards to protect your funds and data."
        }
      ]
    },
    {
      category: "Account & Verification",
      questions: [
        {
          q: "Why do I need to verify my identity (KYC)?",
          a: "KYC (Know Your Customer) verification is required by law to prevent fraud, money laundering, and ensure the security of all users. It helps us comply with Nigerian financial regulations."
        },
        {
          q: "What documents do I need for verification?",
          a: "You'll need: Government-issued ID (National ID, Driver's License, or International Passport), Proof of address (utility bill or bank statement less than 3 months old), and a clear selfie photo."
        },
        {
          q: "How long does verification take?",
          a: "Most verifications are completed within 24 hours. During peak periods, it may take up to 48-72 hours."
        },
        {
          q: "I forgot my password. What do I do?",
          a: "Click 'Forgot Password' on the login screen, enter your registered email, and follow the instructions to reset your password."
        }
      ]
    },
    {
      category: "Cryptocurrency & Conversions",
      questions: [
        {
          q: "Which cryptocurrencies does Tokicard support?",
          a: "We currently support Bitcoin (BTC), Ethereum (ETH), USDT (Tether), Solana (SOL), Polygon (MATIC), and Base Network tokens."
        },
        {
          q: "How do I deposit cryptocurrency?",
          a: "Go to 'Deposit' in the app, select your preferred cryptocurrency, copy your unique deposit address, send crypto from your external wallet to this address, and wait for blockchain confirmation (usually 10-30 minutes)."
        },
        {
          q: "What are the fees for converting crypto to Naira?",
          a: "Our conversion fees are transparent and competitive: 1.5% - 2.5% depending on volume, with no hidden charges and real-time exchange rates."
        },
        {
          q: "How long does it take to convert crypto to Naira?",
          a: "Conversions are instant once your cryptocurrency deposit is confirmed on the blockchain. Bitcoin takes 10-60 minutes, Ethereum 5-15 minutes, USDT/Stablecoins 5-15 minutes, and Solana 1-2 minutes."
        }
      ]
    },
    {
      category: "Virtual Dollar Card",
      questions: [
        {
          q: "What is the Virtual Dollar Card?",
          a: "Our Virtual Dollar Card is a USD-denominated card you can use for international online payments, subscriptions (Netflix, Spotify, Amazon), and shopping on global websites."
        },
        {
          q: "How do I get a Virtual Dollar Card?",
          a: "Complete KYC verification, go to 'Cards' section in the app, click 'Create Virtual Card', fund your card with cryptocurrency, and start using it immediately!"
        },
        {
          q: "What can I use the Virtual Dollar Card for?",
          a: "Netflix, Spotify, Apple Music subscriptions, Amazon, eBay, AliExpress shopping, international flight bookings, PayPal funding, and any website that accepts Mastercard/Visa."
        },
        {
          q: "What are the card fees?",
          a: "Card creation: ₦500 (one-time), Monthly maintenance: ₦200, Transaction fee: 1% per transaction, with no hidden charges."
        }
      ]
    },
    {
      category: "Bill Payments",
      questions: [
        {
          q: "What bills can I pay with Tokicard?",
          a: "You can pay for Airtime (MTN, Glo, Airtel, 9mobile), Data bundles (all Nigerian networks), Electricity (IKEDC, EKEDC, AEDC, and other DISCOs), TV subscriptions (DSTV, GOtv, Startimes), and Internet (Smile, Spectranet, and more)."
        },
        {
          q: "How do I pay bills?",
          a: "Select 'Pay Bills' in the app, choose your bill category, enter the required details (phone number, meter number, smartcard number), confirm the amount, and pay instantly from your Naira balance."
        },
        {
          q: "Is there a fee for bill payments?",
          a: "Most bill payments have no additional fees. You pay the exact amount charged by the service provider."
        },
        {
          q: "Can I pay bills for someone else?",
          a: "Yes! You can pay bills for any phone number, meter number, or smartcard number in Nigeria."
        }
      ]
    },
    {
      category: "Withdrawals",
      questions: [
        {
          q: "How do I withdraw money to my bank account?",
          a: "Go to 'Withdraw' in the app, enter your bank details (or select from saved accounts), enter the amount you want to withdraw, confirm the transaction, and funds arrive in your bank account within minutes."
        },
        {
          q: "What is the withdrawal fee?",
          a: "Withdrawals under ₦50,000: ₦50. Withdrawals above ₦50,000: Free."
        },
        {
          q: "What is the minimum withdrawal amount?",
          a: "The minimum withdrawal is ₦1,000."
        },
        {
          q: "How long do withdrawals take?",
          a: "Most withdrawals are instant. In some cases, it may take up to 30 minutes depending on your bank."
        }
      ]
    },
    {
      category: "Security & Safety",
      questions: [
        {
          q: "How is my money protected?",
          a: "Funds are secured with bank-grade encryption, multi-factor authentication (2FA), cold storage for cryptocurrency, regular security audits, and compliance with financial regulations."
        },
        {
          q: "What should I do if I suspect unauthorized activity?",
          a: "Immediately change your password, enable 2FA if not already active, and contact support@tokicardai.com urgently. We'll investigate and secure your account."
        },
        {
          q: "Do you have 2-Factor Authentication (2FA)?",
          a: "Yes! We strongly recommend enabling 2FA in your account settings for additional security."
        },
        {
          q: "Will Tokicard ever ask for my password?",
          a: "Never! We will never ask for your password via email, phone, or any other channel. Beware of phishing attempts."
        }
      ]
    },
    {
      category: "Fees & Limits",
      questions: [
        {
          q: "What are Tokicard's fees?",
          a: "Crypto conversion: 1.5% - 2.5%, Virtual card creation: ₦500, Virtual card monthly fee: ₦200, Withdrawal fee: ₦50 (under ₦50,000), Bill payments: No additional fees."
        },
        {
          q: "Are there any hidden charges?",
          a: "No. We believe in transparency. All fees are clearly displayed before you confirm any transaction."
        },
        {
          q: "What are the transaction limits?",
          a: "Unverified accounts: ₦100,000 daily. Verified accounts (Tier 1): ₦500,000 daily. Verified accounts (Tier 2): ₦2,000,000 daily."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen  text-white hostfont">
      {/* Header */}
      <div className="bg-black py-8 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          {/* <a href="/" className="text-purple-500 hover:text-purple-400 inline-flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">Everything you need to know about Tokicard</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {faqs.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-purple-600 flex items-center gap-3">
              <span className="bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                {sectionIndex + 1}
              </span>
              {section.category}
            </h2>
            
            <div className="space-y-4">
              {section.questions.map((item, qIndex) => {
                const questionId = `${sectionIndex}-${qIndex}`;
                const isOpen = openQuestion === questionId;
                
                return (
                  <div 
                    key={qIndex} 
                    className="text-black border border-purple-400 rounded-lg overflow-hidden hover:border-purple-800 transition-colors"
                  >
                    {/* Question Header - Clickable */}
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full flex items-center justify-between p-6 text-left  transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-black pr-4">
                        {item.q}
                      </h3>
                      <svg 
                        className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Answer - Collapsible */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-800">
                        <p className="text-black leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Still Have Questions */}
        <div className=" border border-purple-800 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-black mb-6">
            If your question isn't answered here, please don't hesitate to reach out to our support team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="mailto:support@tokicardai.com" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Email Support
            </a>
            {/* <a 
              href="/" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Back to Home
            </a> */}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-black text-sm">
              <strong>Email:</strong> <a href="mailto:support@tokicardai.com" className="text-purple-400 hover:text-purple-300">support@tokicardai.com</a>
            </p>
            <p className="text-black text-sm mt-2">
              <strong>Website:</strong> <a href="https://tokicardai.com" className="text-purple-400 hover:text-purple-300">https://tokicardai.com</a>
            </p>
            <p className="text-black text-sm mt-2">
              <strong>Response Time:</strong> Within 24 hours (usually much faster!)
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 text-gray-400 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms</a>
            {/* <a href="mailto:support@tokicardai.com" className="hover:text-white">Contact</a> */}
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Oracle Digital Service LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="bg-black py-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/" className="text-purple-500 hover:text-purple-400 inline-flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {/* Back to Home */}
          </a>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-4">
            <strong>Effective Date:</strong> February 13, 2026 | <strong>Last Updated:</strong> February 13, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Introduction</h2>
          <p className="text-black leading-relaxed mb-4">
            Welcome to Tokicard. This Privacy Policy explains how Oracle Digital Service LTD ("we," "us," or "our") 
            collects, uses, discloses, and protects your personal information when you use our mobile application, 
            website (tokicardai.com), and services (collectively, the "Service").
          </p>
          <p className="text-black leading-relaxed">
            By using Tokicard, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">1. Information We Collect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li><strong>Identity Information:</strong> Full name, date of birth, nationality</li>
                <li><strong>Contact Information:</strong> Email address, phone number, physical address</li>
                <li><strong>Financial Information:</strong> Bank account details, cryptocurrency wallet addresses, transaction history</li>
                <li><strong>Verification Documents:</strong> Government-issued ID, proof of address for KYC verification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.2 Transaction Information</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Cryptocurrency deposits and conversions</li>
                <li>Bill payments (airtime, data, electricity, TV)</li>
                <li>Withdrawal requests and history</li>
                <li>Virtual dollar card transactions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.3 Usage Information</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Device information (type, operating system, identifiers)</li>
                <li>IP address and location data</li>
                <li>App usage patterns</li>
                <li>Log files and error reports</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">2. How We Use Your Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Service Delivery</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Process crypto-to-cash conversions</li>
                <li>Enable bill payments</li>
                <li>Issue and manage virtual dollar cards</li>
                <li>Execute withdrawals and transfers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Compliance and Security</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Verify identity (KYC/AML)</li>
                <li>Prevent fraud and illegal activities</li>
                <li>Comply with Nigerian regulations</li>
                <li>Monitor security threats</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Communication</h3>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Transaction confirmations</li>
                <li>Account notifications</li>
                <li>Customer support</li>
                <li>Service updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Share Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">3. How We Share Your Information</h2>
          
          <div className=" border border-purple-800 rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-purple-500">
              We do not sell your personal information.
            </p>
          </div>

          <div className="space-y-4 text-black">
            <p><strong>We share information with:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service providers:</strong> Payment processors, KYC verification, cloud storage</li>
              <li><strong>Legal authorities:</strong> When required by law</li>
              <li><strong>Business partners:</strong> With your consent</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">4. Data Security</h2>
          
          <p className="text-black mb-4">We protect your information using:</p>
          <ul className="list-disc list-inside text-black space-y-2 ml-4">
            <li>End-to-end encryption</li>
            <li>SSL technology</li>
            <li>Multi-factor authentication</li>
            <li>Regular security audits</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">5. Your Rights</h2>
          
          <div className="space-y-4">
            <p className="text-black font-semibold">You have the right to:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Access & Correction</h4>
                <p className="text-gray-400 text-sm">Request a copy of your personal information and correct inaccuracies</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Deletion</h4>
                <p className="text-gray-400 text-sm">Request deletion of your information (subject to legal obligations)</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Opt-Out</h4>
                <p className="text-gray-400 text-sm">Unsubscribe from marketing communications</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Data Portability</h4>
                <p className="text-gray-400 text-sm">Request your data in a portable format</p>
              </div>
            </div>
            
            <p className="text-black mt-6">
              <strong>To exercise these rights, contact us at:</strong> 
              <a href="mailto:privacy@tokicardai.com" className="text-purple-400 hover:text-purple-300 ml-2">
                privacy@tokicardai.com
              </a>
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">6. Contact Us</h2>
          
          <div className="border border-purple-800 rounded-lg p-6">
            <p className="text-black mb-4">For privacy-related questions or concerns:</p>
            
            <div className="space-y-2 text-black">
              <p><strong>Oracle Digital Service LTD</strong></p>
              <p>
                Email: 
                <a href="mailto:privacy@tokicardai.com" className="text-purple-400 hover:text-purple-300 ml-2">
                  privacy@tokicardai.com
                </a>
              </p>
              <p>
                Support: 
                <a href="mailto:support@tokicardai.com" className="text-purple-400 hover:text-purple-300 ml-2">
                  support@tokicardai.com
                </a>
              </p>
              <p>
                Website: 
                <a href="https://tokicardai.com" className="text-purple-400 hover:text-purple-300 ml-2">
                  https://tokicardai.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-purple-900/30 to-transparent border-l-4 border-purple-500 p-6 rounded">
          <p className="text-black text-lg">
            <strong>By using Tokicard, you acknowledge that you have read and understood this Privacy Policy.</strong>
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 text-gray-400 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/faq" className="hover:text-white">FAQ</a>
            <a href="mailto:support@tokicardai.com" className="hover:text-white">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Oracle Digital Service LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
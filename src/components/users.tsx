import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getDb } from "../lib/firebase";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, Download, Copy, Check, Lock, LogOut } from "lucide-react";
import { toast } from "sonner@2.0.3";
import './landingpage.css'

// 🔐 SET YOUR PASSWORD HERE - CHANGE THIS!
const ADMIN_PASSWORD = "THEFAMILY";

export default function BulkExportPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [copiedEmails, setCopiedEmails] = useState(false);
  const [copiedPhones, setCopiedPhones] = useState(false);

  // 🔐 Check password
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("✅ Access granted!");
      setPasswordInput("");
    } else {
      toast.error("❌ Wrong password!");
      setPasswordInput("");
    }
  };

  // 🚪 Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setTotalUsers(null);
    toast.info("Logged out");
  };

  // 📧 SMART: Only load emails, don't render anything
  const handleCopyAllEmails = async () => {
    if (loading) return;
    
    setLoading(true);
    setCopiedEmails(false);
    
    try {
      toast.info('📧 Fetching all emails from database...');
      
      const db = await getDb();
      const waitlistRef = collection(db, "waitlist");
      
      console.log('⏳ Fetching documents...');
      const snapshot = await getDocs(waitlistRef);
      
      console.log(`✅ Got ${snapshot.size} users`);
      setTotalUsers(snapshot.size);
      
      // Extract ONLY emails (don't store full user objects!)
      const emails: string[] = [];
      snapshot.forEach(doc => {
        const email = doc.data().email;
        if (email) emails.push(email);
      });
      
      console.log(`📧 Extracted ${emails.length} emails`);
      
      // Join and copy
      const emailString = emails.join(', ');
      await navigator.clipboard.writeText(emailString);
      
      setCopiedEmails(true);
      toast.success(`✅ Copied ${emails.length.toLocaleString()} emails!`);
      
      setTimeout(() => setCopiedEmails(false), 3000);
      
    } catch (error: any) {
      console.error('❌ Error:', error);
      
      if (error.message?.includes('quota') || error.message?.includes('RESOURCE_EXHAUSTED')) {
        toast.error('❌ Firebase quota exceeded! Upgrade to Blaze plan.');
      } else {
        toast.error('Failed to fetch emails: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // 📞 SMART: Only load phone numbers, don't render anything
  const handleCopyAllPhones = async () => {
    if (loading) return;
    
    setLoading(true);
    setCopiedPhones(false);
    
    try {
      toast.info('📞 Fetching all phone numbers from database...');
      
      const db = await getDb();
      const waitlistRef = collection(db, "waitlist");
      
      console.log('⏳ Fetching documents...');
      const snapshot = await getDocs(waitlistRef);
      
      console.log(`✅ Got ${snapshot.size} users`);
      setTotalUsers(snapshot.size);
      
      // Extract ONLY phone numbers (don't store full user objects!)
      const phones: string[] = [];
      snapshot.forEach(doc => {
        const phone = doc.data().phoneNumber;
        if (phone) phones.push(phone);
      });
      
      console.log(`📞 Extracted ${phones.length} phone numbers`);
      
      // Join and copy
      const phoneString = phones.join(', ');
      await navigator.clipboard.writeText(phoneString);
      
      setCopiedPhones(true);
      toast.success(`✅ Copied ${phones.length.toLocaleString()} phone numbers!`);
      
      setTimeout(() => setCopiedPhones(false), 3000);
      
    } catch (error: any) {
      console.error('❌ Error:', error);
      
      if (error.message?.includes('quota') || error.message?.includes('RESOURCE_EXHAUSTED')) {
        toast.error('❌ Firebase quota exceeded! Upgrade to Blaze plan.');
      } else {
        toast.error('Failed to fetch phones: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // 📥 Download full CSV
  const handleDownloadCSV = async () => {
    if (loading) return;
    
    setLoading(true);
    
    try {
      toast.info('📥 Preparing CSV download...');
      
      const db = await getDb();
      const waitlistRef = collection(db, "waitlist");
      
      const snapshot = await getDocs(waitlistRef);
      setTotalUsers(snapshot.size);
      
      // Create CSV
      let csv = 'Full Name,Email,Phone Number\n';
      
      snapshot.forEach(doc => {
        const data = doc.data();
        const name = (data.fullName || '').replace(/"/g, '""');
        const email = (data.email || '').replace(/"/g, '""');
        const phone = (data.phoneNumber || 'N/A').replace(/"/g, '""');
        csv += `"${name}","${email}","${phone}"\n`;
      });
      
      // Download
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `tokicard-all-users-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success(`✅ Downloaded ${snapshot.size.toLocaleString()} users as CSV!`);
      
    } catch (error: any) {
      console.error('❌ Error:', error);
      
      if (error.message?.includes('quota') || error.message?.includes('RESOURCE_EXHAUSTED')) {
        toast.error('❌ Firebase quota exceeded! Upgrade to Blaze plan.');
      } else {
        toast.error('Failed to download CSV: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔐 LOGIN SCREEN (if not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md "
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
            
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
              Secure Access Required
            </h1>
            <p className="text-gray-600 text-center mb-8 text-sm">
              Enter password to access bulk export tools
            </p>

            {/* Password Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="ddf w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Enter</span>
                <span className="text-xs opacity-75">(or press Enter ↵)</span>
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-800 text-center">
                🔒 This page contains sensitive user data. Only authorized personnel should access it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // 📊 MAIN EXPORT PAGE (After successful login)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center p-4 sm:p-6 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl "
      >
        {/* Logout Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-12">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Bulk Export Tool
            </h1>
            <p className="text-gray-600 text-[15px]">
              Copy all emails, phone numbers, or download as CSV
            </p>
            {totalUsers && (
              <p className="text-purple-600 font-semibold mt-2">
                📊 {totalUsers.toLocaleString()} users in database
              </p>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong> Smart Loading:</strong> Click a button below to fetch and copy data instantly. 
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            
            {/* Copy All Emails */}
            <button
              onClick={handleCopyAllEmails}
              disabled={loading}
              className="ddf w-full flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                {loading && !copiedEmails && !copiedPhones ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : copiedEmails ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <Mail className="w-6 h-6" />
                )}
                <div className="text-left">
                  <p className="text-lg">Copy All Emails</p>
                </div>
              </div>
              {copiedEmails && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Copied!
                </span>
              )}
            </button>

            {/* Copy All Phones */}
            <button
              onClick={handleCopyAllPhones}
              disabled={loading}
              className="ddf w-full flex items-center justify-between bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                {loading && copiedEmails && !copiedPhones ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : copiedPhones ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <Phone className="w-6 h-6" />
                )}
                <div className="text-left">
                  <p className="text-lg">Copy All Phone Numbers</p>
                </div>
              </div>
              {copiedPhones && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Copied!
                </span>
              )}
            </button>

            {/* Download CSV */}
            <button
              onClick={handleDownloadCSV}
              disabled={loading}
              className="ddf w-full flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                {loading && copiedEmails && copiedPhones ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Download className="w-6 h-6" />
                )}
                <div className="text-left">
                  <p className="text-lg">Download Full CSV</p>
                </div>
              </div>
            </button>
          </div>

          {/* Loading Status */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-gray-50 rounded-xl p-4 text-center"
            >
              <Loader2 className="w-6 h-6 text-purple-600 animate-spin mx-auto mb-2" />
              <p className="text-sm text-gray-600">Processing... This may take 1-3 minutes for all users</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
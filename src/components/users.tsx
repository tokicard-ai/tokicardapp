import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getDb } from "../lib/firebase";
import { motion } from "framer-motion";
import { Loader2, Users, Search, Phone, Mail, User, Copy, Check } from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function UsersListPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  
  // Track what was just copied
  const [copiedEmails, setCopiedEmails] = useState(false);
  const [copiedPhones, setCopiedPhones] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const db = await getDb();
      const waitlistRef = collection(db, "waitlist");
      const q = query(waitlistRef, orderBy("timestamp", "desc"));

      //  Real-time updates
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
        setFilteredUsers(userList);
        setTotal(userList.length);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchUsers();
  }, []);

  // 🔍 Search logic
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.fullName?.toLowerCase().includes(term) ||
        user.email?.toLowerCase().includes(term) ||
        user.phoneNumber?.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // 📧 Copy ALL emails to clipboard
  const handleCopyAllEmails = async () => {
    try {
      // Get all emails from filtered users (respects search)
      const emails = filteredUsers
        .map(user => user.email)
        .filter(email => email) // Remove any undefined/null
        .join(', '); // Separate with commas

      if (!emails) {
        toast.error('No emails to copy');
        return;
      }

      await navigator.clipboard.writeText(emails);
      setCopiedEmails(true);
      toast.success(`✅ Copied ${filteredUsers.length} emails!`);

      // Reset the checkmark after 2 seconds
      setTimeout(() => setCopiedEmails(false), 2000);
    } catch (error) {
      toast.error('Failed to copy emails');
      console.error('Copy error:', error);
    }
  };

  // 📞 Copy ALL phone numbers to clipboard
  const handleCopyAllPhones = async () => {
    try {
      // Get all phone numbers from filtered users (respects search)
      const phones = filteredUsers
        .map(user => user.phoneNumber)
        .filter(phone => phone) // Remove any undefined/null
        .join(', '); // Separate with commas

      if (!phones) {
        toast.error('No phone numbers to copy');
        return;
      }

      await navigator.clipboard.writeText(phones);
      setCopiedPhones(true);
      toast.success(`✅ Copied ${filteredUsers.filter(u => u.phoneNumber).length} phone numbers!`);

      // Reset the checkmark after 2 seconds
      setTimeout(() => setCopiedPhones(false), 2000);
    } catch (error) {
      toast.error('Failed to copy phone numbers');
      console.error('Copy error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center sm:text-left">
            Users Contact List
          </h1>
          {/* <div className="flex justify-center sm:justify-end">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">Total: {total}</span>
            </div>
          </div> */}
        </div>

        {/* Search Bar */}
        {/* <div className="relative max-w-md mx-auto sm:mx-0 mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-[14px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-white"
          />
        </div> */}

        {/* 🎯 BULK COPY BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Copy All Emails Button */}
          <button
            onClick={handleCopyAllEmails}
            disabled={loading || filteredUsers.length === 0}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
          >
            {copiedEmails ? (
              <>
                <Check className="w-5 h-5" />
                <span>Emails Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                <span>Copy All Emails ({filteredUsers.length})</span>
              </>
            )}
          </button>

          {/* Copy All Phone Numbers Button */}
          <button
            onClick={handleCopyAllPhones}
            disabled={loading || filteredUsers.length === 0}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
          >
            {copiedPhones ? (
              <>
                <Check className="w-5 h-5" />
                <span>Phones Copied!</span>
              </>
            ) : (
              <>
                <Phone className="w-5 h-5" />
                <span>Copy All Phones ({filteredUsers.filter(u => u.phoneNumber).length})</span>
              </>
            )}
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-[13px] text-blue-800">
            <strong>💡 Tip:</strong> Use the buttons above to copy all emails or phone numbers at once. 
            {searchTerm && <span className="ml-1">Currently showing filtered results for "{searchTerm}".</span>}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
              <span className="ml-2 text-gray-500">Loading...</span>
            </div>
          ) : filteredUsers.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No users found {searchTerm && `for "${searchTerm}"`}.
            </p>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100 text-left text-gray-600 text-sm uppercase">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Full Name</th>
                      <th className="px-6 py-3 font-semibold">Email</th>
                      <th className="px-6 py-3 font-semibold">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 border-b border-gray-100"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">{user.fullName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 break-words">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{user.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{user.phoneNumber || 'N/A'}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="block md:hidden p-4 space-y-4">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-all duration-300"
                  >
                    {/* Name */}
                    <div className="flex items-start gap-2 mb-3">
                      <User className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase font-medium">Name</p>
                        <p className="font-semibold text-gray-800 text-[15px]">
                          {user.fullName}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-2 mb-3">
                      <Mail className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase font-medium">Email</p>
                        <p className="text-[13px] text-gray-700 break-words">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase font-medium">Phone</p>
                        <p className="text-[13px] text-gray-700">
                          {user.phoneNumber || 'Not provided'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-[13px] text-gray-500">
          Showing {filteredUsers.length} of {total} users
        </div>
      </motion.div>
    </div>
  );
}
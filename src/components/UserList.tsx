import { useEffect, useState, useCallback } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getDb } from "../lib/firebase";
import { motion } from "framer-motion";
import { 
  Loader2, 
  Contact, 
  Mail, 
  Phone, 
  Copy, 
  Check 
} from "lucide-react";

// Define an interface for better type safety
interface UserContact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string; 
}

// Custom hook to manage the clipboard copy state
const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers or non-secure contexts
      alert("Failed to copy. Your browser may not support the clipboard API.");
    }
  }, []);

  return { copied, copyToClipboard };
};

export default function UserList() {
  const [users, setUsers] = useState<UserContact[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Custom states for tracking which button was clicked
  const [copyEmailStatus, setCopyEmailStatus] = useState<'idle' | 'copied'>('idle');
  const [copyPhoneStatus, setCopyPhoneStatus] = useState<'idle' | 'copied'>('idle');

  // 📦 Data Fetching Logic
  useEffect(() => {
    // ... (Your existing fetch logic remains the same)
    const fetchUserContacts = async () => {
      try {
        const db = await getDb();
        const waitlistRef = collection(db, "waitlist");
        const q = query(waitlistRef, orderBy("timestamp", "desc")); 

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const userList: UserContact[] = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              fullName: data.fullName || "N/A",
              email: data.email || "N/A",
              phoneNumber: data.phoneNumber,
            };
          });

          setUsers(userList);
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching user contacts:", error);
        setLoading(false);
      }
    };

    fetchUserContacts();
  }, []);

  // 🖱️ Copy Functionality Handlers
  const handleCopyEmails = async () => {
    const emails = users.map(u => u.email).join(', ');
    if (emails) {
        try {
            await navigator.clipboard.writeText(emails);
            setCopyEmailStatus('copied');
            setTimeout(() => setCopyEmailStatus('idle'), 2000);
        } catch (err) {
            console.error('Failed to copy emails:', err);
        }
    }
  };

  const handleCopyPhones = async () => {
    // Filter out users without a phone number before joining
    const phones = users.map(u => u.phoneNumber).filter(p => p).join(', '); 
    if (phones) {
        try {
            await navigator.clipboard.writeText(phones);
            setCopyPhoneStatus('copied');
            setTimeout(() => setCopyPhoneStatus('idle'), 2000);
        } catch (err) {
            console.error('Failed to copy phone numbers:', err);
        }
    }
  };

  // Helper component for the copy button
  const CopyButton = ({ onClick, status, label, icon: Icon, colorClass }: {
    onClick: () => void;
    status: 'idle' | 'copied';
    label: string;
    icon: React.ElementType;
    colorClass: string;
  }) => (
    <button
      onClick={onClick}
      disabled={status === 'copied'}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${colorClass} ${
        status === 'copied' 
          ? 'bg-green-500 text-white cursor-not-allowed' 
          : 'hover:opacity-90'
      } shadow-sm border border-gray-200`}
    >
      {status === 'copied' ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Icon className="w-4 h-4" />
          {label} ({users.length})
        </>
      )}
    </button>
  );

  // 🎨 Component Render
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header and Copy Buttons */}
        <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center sm:text-left mb-4">
                User Contact List
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Copy All Emails Button */}
                <CopyButton
                    onClick={handleCopyEmails}
                    status={copyEmailStatus}
                    label="Copy All Emails"
                    icon={Mail}
                    colorClass="bg-yellow-500 text-white"
                />

                {/* Copy All Phones Button */}
                <CopyButton
                    onClick={handleCopyPhones}
                    status={copyPhoneStatus}
                    label="Copy All Phones"
                    icon={Phone}
                    colorClass="bg-blue-600 text-white"
                />

                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                    <Contact className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">
                        Total Users: {users.length}
                    </span>
                 </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* ... (Loading and No Users logic remains the same) ... */}
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
              <span className="ml-2 text-gray-500">Loading contacts...</span>
            </div>
          ) : users.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No users found in the waitlist.
            </p>
          ) : (
            <>
                {/* Desktop/Tablet View (Table) */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                    <thead className="bg-gray-100 text-left text-gray-600 text-sm uppercase">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Name</th>
                            <th className="px-6 py-3 font-semibold">Email</th>
                            <th className="px-6 py-3 font-semibold">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 border-b border-gray-100">
                            <td className="px-6 py-3">{user.fullName}</td>
                            <td className="px-6 py-3 break-words">
                                <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                                    {user.email}
                                </a>
                            </td>
                            <td className="px-6 py-3 whitespace-nowrap">
                                {user.phoneNumber ? (
                                    <a href={`tel:${user.phoneNumber}`} className="text-gray-700 hover:text-green-600 transition-colors">
                                        {user.phoneNumber}
                                    </a>
                                ) : (
                                    <span className="text-gray-400 italic">None provided</span>
                                )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                {/* Mobile View (Cards) */}
                <div className="block md:hidden p-4 space-y-3">
                    {users.map((user) => (
                        <div key={user.id} className="border border-gray-200 rounded-lg p-3 shadow-sm bg-white">
                            <div className="flex items-center gap-2 mb-1">
                                <Contact className="w-4 h-4 text-green-600" />
                                <h2 className="font-semibold text-gray-800 text-[15px]">
                                    {user.fullName}
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-[13px] text-gray-600 mb-1">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <a href={`mailto:${user.email}`} className="hover:underline">
                                    {user.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-[13px] text-gray-600">
                                <Phone className="w-4 h-4 text-gray-400" />
                                {user.phoneNumber ? (
                                    <a href={`tel:${user.phoneNumber}`} className="hover:text-green-600 transition-colors">
                                        {user.phoneNumber}
                                    </a>
                                ) : (
                                    <span className="text-gray-400 italic">No Phone</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
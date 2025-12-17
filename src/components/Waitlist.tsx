import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "../lib/firebase";
import { toast } from "sonner"; // Changed import to 'sonner' for simplicity
import { User, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion"; // Changed import to 'framer-motion' for simplicity
import tokilogo from "../assets/tokilogo.png";
import cardImage from "../assets/customercard.png";
import institutionfund from "../assets/institutionfund.png";
import "./landingpage.css";

// ✅ Generate lowercase referral codes for consistency
const generateReferralCode = (name: string) => {
  const random = Math.random().toString(36).substring(2, 6);
  return `${name.split(" ")[0].toLowerCase()}-${random}`;
};

// ✅ Get referral from URL query
const getReferralFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("ref");
};

interface WaitlistFormProps {
  onSuccess: (name: string) => void;
  onLoadingStart?: () => void;
}

export function WaitlistForm({ onSuccess, onLoadingStart }: WaitlistFormProps) {
  const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  contentWrapper: {
    // width: '100%',
    // maxWidth: '28rem',
    // margin: '0 auto',
    
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoText: {
    color: '#2C5F7C',
  },
  logoLine: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    lineHeight: '1',
  },
  announcementsection: {
    
  },
  announcementBox: {
    // border: '2px dashed #9CA3AF',
    // borderRadius: '10px',
    // padding: '19px',
    textAlign: 'center',
    
    
  },
  announcementContent: {
    display: 'flex',
    flexDirection: 'column',
    // gap: '1rem',
     border: '2px dashed #9CA3AF',
     borderRadius: '10px',
      padding: '19px',
       marginBottom: '10px',
  },
  announcementText: {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    color: '#111827',
    margin: 0,
  },
  semibold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
  launchInfo: {
    paddingTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    // gap: '0.40rem',
  },
  launchText: {
    fontSize: '1.125rem',
    color: '#111827',
    margin: 0,
  },
};
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [existingUserName, setExistingUserName] = useState<string | null>(null);
  const [existingReferralId, setExistingReferralId] = useState<string | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referrer, setReferrer] = useState<string | null>(null);

  // ✅ OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // ✅ Persist referral between pages (KEEP THIS AS IS)
  useEffect(() => {
    // ... (Your existing useEffect logic)
    const ref = getReferralFromUrl();

    if (ref) {
      const lowerRef = ref.toLowerCase();
      setReferrer(lowerRef);
      localStorage.setItem("referrer", lowerRef);
    } else {
      const savedRef = localStorage.getItem("referrer");
      if (savedRef) setReferrer(savedRef);
    }
  }, []);

  // ✅ Handle "copy link" button (KEEP THIS AS IS)
  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      toast.success("Copied successfully!");
    } catch {
      toast.error("Failed to copy. Please try again.");
    }
  };


  // **NEW** Step 1A: Check Firestore for existing user
  const checkExistingUser = async (): Promise<boolean> => {
    if (!isFirebaseConfigured) {
      toast.error("Firebase not configured — please add credentials.");
      return true; // Prevent submission if config is bad
    }

    try {
      const db = await getDb();
      if (!db) {
        toast.error("Firebase initialization failed.");
        return true; 
      }

      const waitlistRef = collection(db, "waitlist");
      const q = query(waitlistRef, where("email", "==", email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // *** USER ALREADY EXISTS: Show their card and stop the flow ***
        const userData = querySnapshot.docs[0].data();
        const referralId = userData.referralId;
        const name = userData.fullName;
        
        setExistingUserName(name);
        setExistingReferralId(referralId);
        toast.info("Welcome back! This email is already on the waitlist.");
        return true; // Signal that the user was found
      }

      return false; // Signal that the user is NEW
    } catch (error) {
      console.error("❌ Error checking waitlist:", error);
      toast.error("Error checking waitlist status. Please try again.");
      return true; // Prevent further submission on error
    }
  };

  // ✅ Step 1B: Send OTP (Extracted from old handleSubmit)
  const sendOtp = async () => {
      try {
          const response = await fetch("https://tokibackend-otp.onrender.com/send-otp", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
          });

          const data = await response.json();

          if (response.ok) {
              toast.success("OTP sent to your email!");
              setOtpSent(true);
          } else {
              toast.error(data.error || "Failed to send OTP");
          }
      } catch (error) {
          console.error(error);
          toast.error("Error connecting to verification server");
      }
  }


  // 🔑 PRIMARY SUBMISSION HANDLER: Check for existing user first
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Reset existing user state before starting a new check
    setExistingUserName(null); 
    setExistingReferralId(null);
    setIsSubmitting(true);
    
    // 1. CHECK FIREBASE
    const userExists = await checkExistingUser();

    if (userExists) {
        setIsSubmitting(false);
        return; // Stop here if user was found (card is now visible)
    }

    // 2. IF USER IS NEW, SEND OTP
    await sendOtp();
    setIsSubmitting(false);
  };


  // ✅ Step 2: Verify OTP (KEEP THIS AS IS)
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    // ... (verification logic remains the same) ...
    try {
      const response = await fetch("https://tokibackend-otp.onrender.com/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email verified successfully!");
        await addUserToFirestore();
        setOtpSent(false);
        setOtp("");
      } else {
        toast.error(data.error || "Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error during verification");
    } finally {
      setIsVerifying(false);
    }
  };


  // ✅ Step 3: Add verified user to Firestore (KEEP THIS AS IS)
  const addUserToFirestore = async () => {
    // ... (logic remains the same, but the existing user check is now handled earlier) ...
    if (!isFirebaseConfigured) {
      toast.error("Firebase not configured — please add credentials.");
      return;
    }

    try {
      const db = await getDb();
      if (!db) {
        toast.error("Firebase initialization failed.");
        return;
      }

      const waitlistRef = collection(db, "waitlist");
      
      // We don't need the check here anymore, as it's done in handleSubmit.
      // However, for safety/concurrency, let's keep the core logic clean:
      
      const referralId = generateReferralCode(fullName);

      await addDoc(waitlistRef, {
        fullName,
        phoneNumber,
        email: email.toLowerCase(),
        referralId,
        referredBy: referrer || null,
        points: 0,
        timestamp: new Date().toISOString(),
      });

      toast.success("Successfully joined the waitlist!");

      if (referrer) {
        const normalizedRef = referrer.toLowerCase();
        const refQuery = query(waitlistRef, where("referralId", "==", normalizedRef));
        const refSnap = await getDocs(refQuery);
        if (!refSnap.empty) {
          const referrerDoc = refSnap.docs[0];
          await updateDoc(referrerDoc.ref, { points: increment(1) });
        }
      }

      if (onLoadingStart) onLoadingStart();
      setTimeout(() => {
        onSuccess(fullName);
        localStorage.setItem("userReferralId", referralId);
      }, 200);
    } catch (error) {
      console.error("❌ Error adding to waitlist:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  const referralLink = existingReferralId
    ? `${window.location.origin}/?ref=${existingReferralId}`
    : "";


  // 🎨 RENDER SECTION
  return (
    <div className="bg-[#f5f5f5]  relative ">
            <div className=" flex-1 flex items-center justify-center  mt-4">
            <img src={institutionfund}  alt="Logo" width={208} className="rdt" />
          </div>
  <div  className="flex-1 flex items-center justify-center p-4 sm:p-6 overflow-y-auto gdh">
 
 <div style={styles.announcementBox}>
      <div style={styles.announcementContent} className="contentwrap">
        <p style={styles.announcementText}>
          <span style={styles.semibold}>TokiCard</span> is partnering with <span style={styles.semibold}>Institutional Funding,</span>
        </p>
        <p style={styles.announcementText}>
          a global proprietary trading firm,
        </p>
        <p style={styles.announcementText}>
          to give early users exclusive access to a <span style={styles.bold}>$10,000</span>
        </p>
        <p style={styles.announcementText}>
          2-Step Trading Challenge account (worth $70).
        </p>
        
        <div style={styles.launchInfo}>
          <p style={{...styles.launchText, ...styles.semibold}}>
            Launching the second week of January.
          </p>
          <p style={styles.launchText}>
            Limited spots. Only early users qualify.
          </p>
        </div>
      </div>
        <button onClick={() => window.open('https://app.institutional-funding.com/login', '_blank')}
                  
                  style={{ fontWeight: 400 }}
                            className="institutionbtn w-full bg-black text-white rounded-[12px] py-3 text-[14px] hover:bg-black/90 transition-colors disabled:opacity-50"
                        >
                           Join Early Access
                        </button>
      <button onClick={() => window.open('https://www.instagram.com/institutionalfunding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                 
                  style={{ fontWeight: 400 }}
                            className="institutionbtn w-full bg-black text-white rounded-[12px] py-3 text-[14px] hover:bg-black/90 transition-colors disabled:opacity-50 btntwo"
                        >
                           Follow On Instagram
                        </button>
    </div>
    </div>
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="w-full max-w-[572px] flex flex-col items-center px-4 sm:px-0">
          {/* Logo, Heading, and Referrer Info (No Change) */}
          <div className="mb-2 sm:mb-2">
            <img src={tokilogo} alt="Logo" width={118} />
          </div>
          <h1 className="text-[28px] sm:text-[32px] leading-[1.2] mb-2 text-center text-black">
            {/* Show different heading based on state */}
            {existingReferralId ? `Welcome Back, ${existingUserName}!` : "Get Early Access"}
          </h1>
          
          <p className="text-[13px] sm:text-[14px] text-center text-[#666666] mb-6 max-w-[420px]">
            {existingReferralId ? 
                "Share your link below to earn more points." : 
                "Be among the first to experience the future of global payments"
            }
          </p>

          {referrer && !existingReferralId && (
            <p className="text-[14px] text-gray-600 mb-4">
              You were referred by{" "}
              <span className="font-semibold text-black">{referrer}</span> 🎉
            </p>
          )}

          
          {/* 🔑 MAIN FORM / OTP / CARD DISPLAY LOGIC */}
          
          {/* Display Card & Referral Link if user exists or was just added */}
          {existingReferralId ? (
             <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1, duration: 0.5 }}
                 className="w-full mt-3 text-center"
             >
                 {/* Card Display Block */}
                 <motion.div
                    initial={{ opacity: 0, y: -20, rotateY: -15 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[340px] sm:max-w-[380px] mb-8 sm:mb-10 mx-auto"
                 >
                     <div className="relative w-full">
                         <img
                             src={cardImage}
                             alt="Tokicard Virtual Card"
                             className="w-full h-auto rounded-[16px] sm:rounded-[20px] shadow-2xl"
                         />
                         <div>
                             <p
                                 className="text-white text-[11px] sm:text-[13px] md:text-[15px] tracking-wide leading-none cardname"
                                 style={{
                                     fontWeight: 600,
                                     textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                                 }}
                             >
                                 {existingUserName}
                             </p>
                         </div>
                     </div>
                 </motion.div>

                 

                 {/* Referral Link Block */}
                 <p className="text-[14px] text-[#444] mb-3 font-medium">
                     This is your referral link:
                 </p>
                 <div className="flex items-center justify-between w-full max-w-[480px] bg-[#F8F8F8] border border-[#E5E5E5] rounded-full px-4 py-2 shadow-sm mx-auto overflow-hidden">
                     <p
                         className="text-[11px] sm:text-[13px] text-gray-700 font-medium truncate"
                         title={referralLink}
                     >
                         {referralLink}
                     </p>
                     <button
                         onClick={() => handleCopyLink(referralLink)}
                         className="ml-3 sm:ml-4 bg-black text-white text-[13px] sm:text-[14px] font-medium rounded-full px-4 sm:px-5 sm:py-2 hover:bg-[#222] active:scale-[0.97] transition-all duration-200"
                     >
                         Copy
                     </button>

                     
                 </div>
                       <div className="followxbtn">
               {/* Follow Us on X */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://x.com/tokicardAI', '_blank')}
                  className="w-full bg-black text-white text-[14px] sm:text-[15px] rounded-full py-3 hover:bg-black/90 transition-colors disabled:opacity-60 "
                  style={{ fontWeight: 400 }}
                >
                  
                  Follow Us on X
                </motion.button>
          </div>
             </motion.div>
          ) : (
            <>
                {/* Step 1: Main Form (Only visible if OTP not sent AND no existing user) */}
                {!otpSent && (
                    <form onSubmit={handleSubmit} className="w-full mb-8">
                        {/* ... Full Name Input ... (Keep as is) */}
                        <div className="relative mb-3">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                            <input
                                type="text"
                                placeholder="Full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full bg-white rounded-[12px] px-10 py-3 text-[14px] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>

                        {/* ... Email Input ... (Keep as is) */}
                        <div className="relative mb-3">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white rounded-[12px] px-10 py-3 text-[14px] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>

                        {/* ... Phone Input ... (Keep as is) */}
                        <div className="relative mb-1">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                            <input
                                type="tel"
                                placeholder="Whatsapp phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                pattern="^\+?\d{11,15}$"
                                title="Phone number must be between 11 and 15 digits (start with your country code)"
                                className="w-full bg-white rounded-[12px] px-10 py-3 text-[14px] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>

                        <p className="text-[11px] text-gray-500 mb-4 leading-tight">
                            Include country code, e.g. <span className="font-semibold">+2348123456789</span>
                        </p>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="institutionbtn w-full bg-black text-white rounded-[12px] py-3 text-[14px] hover:bg-black/90 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? "Checking status..." : "Join Waitlist"}
                        </button>
                              <div className="followxbtn">
                                       {/* Follow Us on X */}
                                        <motion.button
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: 1.0, duration: 0.5 }}
                                          whileHover={{ scale: 1.02 }}
                                          whileTap={{ scale: 0.98 }}
                                          onClick={() => window.open('https://x.com/tokicardAI', '_blank')}
                                         className="institutionbtn w-full bg-black text-white rounded-[12px] py-3 text-[14px] hover:bg-black/90 transition-colors disabled:opacity-50"
                                          style={{ fontWeight: 400 }}
                                        >
                                          
                                          Follow Us on X
                                        </motion.button>
                                  </div>
                    </form>
                )}

                {/* Step 2: OTP Form (Only visible if OTP is sent) */}
                {otpSent && (
                    <form onSubmit={handleVerifyOtp} className="w-full mb-8 mt-4">
                        <div className="otpdiv">
                            <p className="text-[13px] sm:text-[14px] text-center text-[#666666] max-w-[420px] text-bold otptext">
                                Check your email for the OTP.
                            </p>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength={6}
                            className="w-full bg-white rounded-[12px] mb-4 px-10 py-3 text-[14px] text-center placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                        <button
                            type="submit"
                            disabled={isVerifying}
                            className="w-full bg-black text-white rounded-[12px] py-3 mt-8 text-[14px] hover:bg-black/90 transition-colors disabled:opacity-50"
                        >
                            {isVerifying ? "Verifying..." : "Verify OTP"}
                        </button>
                    </form>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

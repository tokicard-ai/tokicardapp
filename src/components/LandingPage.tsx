import { motion } from 'motion/react';
import tokilogo from '../assets/tokilogo.png';
import { CheckCircle2 } from 'lucide-react';
import './landingpage.css';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4 py-10">
      {/* Tokicard Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <img src={tokilogo} alt="Tokicard" className="w-[120px]" />
      </motion.div>

      {/* Icon */}
      <CheckCircle2 className="text-[#C502E8] w-12 h-12 mb-4" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[24px] sm:text-[32px] font-semibold text-center text-black mb-3"
      >
        Waitlist Closed
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-[#666] text-[14px] sm:text-[16px] mb-6 max-w-[420px] leading-relaxed"
      >
        Thank you for your interest in Tokicard! Our waitlist has now closed.
      </motion.p>

      {/* Additional Info Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm max-w-[420px] w-full"
      >
        <p className="text-center text-[#666] text-[13px] sm:text-[14px]">
          We've received an overwhelming response and are no longer accepting new signups at this time.
        </p>
      </motion.div>
    </div>
  );
}
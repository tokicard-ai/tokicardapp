import React from "react";
import { motion } from "motion/react";
import { 
  Download, ChevronRight, Bell, Shield, Smartphone, 
  ArrowUpRight, ArrowDownLeft, Home, CreditCard, 
  History, User, Sparkles, Trophy, Wallet, ShieldCheck, 
  Globe, Users 
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Tokicard from './components/figma/Tokicard.svg';
import Playstoreicon from './components/figma/playstoreicon.svg';
import iphone from './components/figma/iphone.png';
import familyman from './components/figma/familyman.png';
import makedeposit from './components/figma/makedeposit.png';
import airtime from './components/figma/airtime.png';
import chat from './components/figma/chat.png';
import crypto from './components/figma/crypto.png';
import darktheme from './components/figma/darktheme.png';
import virtualcard from './components/figma/virtualcard.png';
import comission from './components/figma/comission.png';
import footerimg from './components/figma/footerimg.png';
import Solana from './components/figma/solana.svg';
import Eth from './components/figma/eth.svg';
import Polygon from './components/figma/polygon.svg';
import Usdt from './components/figma/usdt.svg';
import Base from './components/figma/base.svg';
import Googleplay from './components/figma/googleplay.svg';
import Apple from './components/figma/apple.svg';
import { useState, useEffect } from 'react';
import './style.css';
// --- Components ---

const Logo = () => (
  <div className="tokicardlogo">
   
    <img src={Tokicard} alt="Tokicard Logo" />
  </div>
);

const chains = [
    { id: 1, name: 'Solana', icon: Solana },
    { id: 2, name: 'Ethereum', icon: Eth },
    { id: 3, name: 'Tether', icon: Usdt },
    { id: 4, name: 'Tether', icon: Usdt },
    { id: 5, name: 'Base', icon: Base },
    { id: 6, name: 'Solana', icon: Solana },
    { id: 7, name: 'Ethereum', icon: Eth },
    { id: 8, name: 'Tether', icon: Usdt },
    { id: 9, name: 'Polygon', icon: Polygon },
  ];
  // Duplicate chains for seamless loop
  const duplicatedChains = [...chains, ...chains];

const AppStoreBadge = ({ type }: { type: "apple" | "google" }) => (
  <button className="flex items-center gap-3 btn bg-white border border-gray-100 rounded-2xl  md:py-0 shadow-sm  transition-shadow ">
    {type === "apple" ? (
      <>
        {/* <svg className="w-8 h-8" viewBox="0 0 384 512">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
       <div className="text-left whitespace-nowrap">
                  <div className="text-xs text-gray-600 tinyfont">Download on the</div>
                  <div className="text-sm font-semibold text-gray-900">App Store</div>
                </div> */}
                <img src={Apple} alt="Apple App Store" className="applestore"/>
      </>
    ) : (
      <>
      
         {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5C3 2.67 3.84 2.24 4.5 2.63L16.5 12L4.5 21.37C3.84 21.76 3 21.33 3 20.5Z" fill="#00D9FF"/>
                  <path d="M16.5 12L4.5 2.63L18.23 10.38L16.5 12Z" fill="#FFCE00"/>
                  <path d="M4.5 21.37L18.23 13.62L16.5 12L4.5 21.37Z" fill="#00AB4E"/>
                  <path d="M18.23 10.38L20.91 11.94C21.64 12.35 21.64 13.65 20.91 14.06L18.23 13.62V10.38Z" fill="#FF3E00"/>
                </svg> */}
                {/* <img src={Playstoreicon} alt="Google Play Store" />
         <div className="text-left whitespace-nowrap ">
                  <div className="text-xs text-gray-600 tinyfont">GET IT ON</div>
                  <div className="text-sm font-semibold text-gray-900">Google Play</div>
                </div> */}
                <img src={Googleplay} alt="Google Play Store"  className="googleplay"/>
      </>
    )}
  </button>
);




// --- Sub-components for LightSection ---






const LightSection = () => (
  <section className="py-2 md:py-0 px-4 md:px-6  overflow-hidden lightsection">

    <div className=" mx-auto marque">
       <div className="w-full overflow-hidden py-8 bg-white">
      {/* Title */}
      <h3 className="text-gray-400 text-sm font-normal text-center mb-6">
        Available chains
      </h3>

   {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-container flex gap-3 hover:[animation-play-state:paused]">
          {duplicatedChains.map((chain, index) => (
            <div
              key={index}
              className="chain-badge flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 whitespace-nowrap cursor-pointer transition-colors flex-shrink-0"
            >
              <img src={chain.icon} alt={chain.name} className="w-5 h-5" />
              <span className="text-gray-500 text-sm font-medium">{chain.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          animation: marquee 10s linear infinite;
          will-change: transform;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }

        /* Faster on mobile */
        @media (max-width: 768px) {
          .marquee-container {
            animation: marquee 8s linear infinite;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div> 
     </div> 

    <div className="max-w-7xl mx-auto pt-8">
         {/* Section Heading */}
            <div className="text-center mb-8 md:mb-26">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bolder text-gray-900 leading-tight hostfont convertcrypto">
                Convert crypto to Naira automatically <br className="mobile-only"/>
                fast secure and without middlemen
              </h2>
            </div>

      <div className="grid md:grid-cols-2  items-center mb-32 whitebg gap-12 md:gap-16 rmd">
        <div className=" makedeposit">
          <img src={makedeposit} alt="" />
        </div>

        <div className="max-w-lg   sendmoneydiv">
          <h4 className="text-3xl md:text-5xl mb-2 md:mb-6 leading-tight sendmoneyhr hostfont">Send money <br className="mobile-only"/> to loved ones <br className="mobile-only"/> in an instant.</h4>
          <p className="text-gray-500 mb-12  sendmoneytext hostfont">Crypto shouldn't be complicated. We remove friction <br className="md:d-none"/> so you can spend your crypto with ease.</p>
          <img 
                  src={familyman}
                    alt="People using app" 
                    className="w-full max-w-md h-auto rounded-3xl"
                  />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-8 card-section">
        <div className="px-4 py-10 rounded-[3rem] border border-gray-300 flex flex-col justify-between hostfont">
          <div className="mb-10 ">
             <img src={crypto} alt="" />
          </div>
          <div>
           <h4 className="md:text-lg text-2xl font-bold text-gray-900 mb-2  ">Crypto In. Naira Out.</h4>
                <p className="text-sm text-gray-600">
                  Receive Crypto payments and have them automatically converted to Naira in real time. No middlemen, no delays
                </p>
          </div>
        </div>

        <div className=" px-4 py-10 rounded-[3rem] border border-gray-300 flex flex-col justify-between  hostfont">
          <div className="mb-10">
           <img src={airtime} alt="" />
          </div>
          <div>
           <h4 className="md:text-lg text-2xl font-bold text-gray-900 mb-2">Pay Bills</h4>
                <p className="text-sm text-gray-600">
                  Pay your everyday bills easily using your Naira balance. From airtime to utilities, complete payments instantly without stress or delays.
                </p>
          </div>
        </div>

        <div className=" px-4 py-10 rounded-[3rem] border border-gray-300 flex flex-col justify-between hostfont">
          <div className="mb-10">
          <img src={chat} alt="" />
          </div>
          <div>
             <h4 className="md:text-lg text-2xl font-bold text-gray-900 mb-2">Track Digital Payment</h4>
                <p className="text-sm text-gray-600">
                  Track all your digital payments in one place. Monitor transaction status, view history and stay in control of your finances effortlessly
                </p>
          </div>
        </div>
      </div>
    </div>
  
  </section>
);

// --- Sub-components for DarkSection ---

const DarkSection = () => (
  <section className="bg-black py-16 md:py-16  px-2 md:px-6 mx-2 md:mx-0 bg-[#0a0a0a] text-white overflow-hidden rounded-[1rem] md:rounded-[3rem] hostfont darksection">
    <div className="max-w-7xl mx-auto px-2 md:px-16 darktwo">
      <div className="text-center mb-8 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 ">And that is not all</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-center tokiwallet">Your Tokicard wallet is packed with neat features that <br className="hidden md:block"/> further assist you in <br className="md:hidden"/> operating your daily finances</p>
      </div>

      <div className="bg-[#141414] rounded-[1rem] md:rounded-[3rem] p-4 md:p-16 mb-8 border border-white/5 relative overflow-hidden group">
        <div className="grid md:grid-cols-2 md:gap-12 items-center ratefeaturediv ">
          <div className="ratefeature">
            <h5 className="text-1xl md:text-2xl font-bold md:mb-8 leading-tight text-[#A0A0A0] myfont ratefeatureh mt-4 md:mt-0">
              Our rate feature helps you check and compare token prices quickly so you always get the <span className="text-[#ffffff]">best deal.</span>
            </h5>
           
          </div>
          <div className="relative  text-end darkthemediv">
             <img src={darktheme} alt="" className="darktheme "/>
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8b2cf5]/10 blur-[100px] rounded-full pointer-events-none" /> */}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className=" bg-[#141414] rounded-[1rem] md:rounded-[3rem] p-8 md:p-10 border border-white/5 group overflow-hidden px-4 py-8 md:p-8">
          <h4 className="text-2xl font-bold mb-4">Virtual Card</h4>
          <p className="text-gray-400 mb-12 greyfont">Create virtual cards instantly, load with your <br className="hidden md:block"/>  local currency, and shop online worldwide.</p>
          <div className="relative ">
            <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="  rounded-[2rem] p-0 md:p-8 shadow-2xl flex flex-col justify-between  virtualcard">
           
              <img src={virtualcard} alt=""  className=""/>
            </motion.div>
            
          </div>
        </div>

        <div className="bg-[#141414] rounded-[1rem] md:rounded-[3rem] md:p-10 border border-white/5 group overflow-hidden flex flex-col justify-between px-4 py-8 md:p-8 mdn">
          <div >
            <h4 className="text-2xl font-bold mb-4">Commissions</h4>
            <p className="text-gray-400 mb-12 greyfont">Share Tokicard with others and get rewarded <br className="hidden md:block"/> with commissions for every referral.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="comissiondiv mdn">
            <img src={comission} alt="Commissions" className=" object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll('.dark-section, .bg-black, .bg-gray-900');
      const navHeight = 80;
      
      let isDark = false;
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < navHeight && rect.bottom > 0) {
          isDark = true;
        }
      });
      
      setIsOverDark(isDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className=" min-h-screen  text-[#1a1a1a] font-sans selection:bg-[#8b2cf5]/20 overflow-x-hidden w-full ">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-[#8b2cf5]/5 to-transparent pointer-events-none mynav" />

  <nav className={`mynav fixed top-0 left-0 right-0 z-50  backdrop-blur-md border-b border-purple-200/30 transition-colors duration-300 ${isOverDark ? 'bg-white/30 shadow-sm' : ''}`}>
      <div className=" mx-auto px-4 md:px-12 h-20 flex items-center justify-between w-full py-4 md:py-3 navdiv">
        <Logo />
        <button className="download bg-[#8b2cf5] text-white md:px-8 py-2.5 rounded-full hover:bg-[#7a25d9] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#8b2cf5]/20">
          Download
        </button>
      </div>
    </nav>

     <main className="pt-26 pb-20 px-6 relative  bg-gradient-to-br from-white to-[#ECDFFB] maindiv ">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-0 relative z-10 better-div">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  betterafrica text-gray-900 mb-2  leading-tight">
              A Better Way for Africans <br className="mobile-only"/>
               to Spend Crypto
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-8 text-center securedirect mt-4 hostfont">
              A secure and direct way to turn crypto into <br className="md:hidden"/> spendable Naira, built for <br className="hidden md:block" />
              everyday use across Africa
            </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-nowrap justify-center gap-2 md:gap-6 mb-0 md:mb-12 btn-div"
          >
            <AppStoreBadge type="google" />
            <AppStoreBadge type="apple" />
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto flex justify-center items-center  iphone-div object-contain">
          <img src={iphone} alt="iPhone with Tokicard App" className="iphone-img" />
      
        </div>
      </main>

      <LightSection /> 
      
      <DarkSection />

    <div className="relative  purplesection hostfont ">
      {/* Main Purple Sections */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl rounded-[1rem] md:rounded-[3rem] pt-8 pb-16 md:py-16 px-4 md:px-6 mx-2 md:mx-0 hostfont bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight myfont">
              Get paid in crypto, convert <br className="mobile-only "/>
              automatically, and stay in control
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 withtokicard">
              With Tokicard, African professionals can get <br className="md:hidden"/> paid  in crypto from anyone and have it <br className="hidden md:block" />
              automatically converted to Naira—quick, <br className="md:hidden"/> simple, and No middle man.
            </p>

           
              <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center mb-20 btn-div gap-2 "
          >
            <AppStoreBadge type="google" />
            <AppStoreBadge type="apple" />
          </motion.div>
            
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative footerimgdiv">
              {/* Repl ace this src with your actual phone mockup image */}
              <img 
                src={footerimg}
                alt="Toldcard App" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-600 hostfont">
            Oracle Digital Services LTD, All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

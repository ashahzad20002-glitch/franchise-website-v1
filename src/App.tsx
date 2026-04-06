/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  Users, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Target, 
  Filter, 
  CalendarCheck, 
  MessageSquare,
  Briefcase,
  Building2,
  LineChart,
  XCircle,
  BarChart3,
  Zap,
  LayoutDashboard,
  Settings,
  AlertCircle,
  MousePointerClick,
  Bell,
  Mail,
  TrendingUp,
  Globe,
  Lock,
  X
} from 'lucide-react';

import ReviewsSection from './components/ReviewsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ROICalculatorSection from './components/ROICalculatorSection';
import PerformanceChartSection from './components/PerformanceChartSection';
import CaseStudyBento from './components/CaseStudyBento';
import LiveActivityFeed from './components/LiveActivityFeed';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const NumberTicker = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span>{prefix}{count}{suffix}</span>;
};

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState<{id: number, size: number, left: string, duration: number, delay: number, xOffset: number}[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 10,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 20,
      xOffset: Math.random() * 100 - 50
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-100px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-blue-400/10 blur-[2px] border border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: ['0px', `${bubble.xOffset}px`, '0px'],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: bubble.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            },
            opacity: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            },
            rotate: {
              duration: bubble.duration * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            }
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [isFulfillmentModalOpen, setIsFulfillmentModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    { q: "What if I already get leads from portals", a: "That is fine. This is not about replacing every source overnight. It is about helping you build a direct buyer pipeline you control so you are not fully dependent on shared traffic sources." },
    { q: "What if buyers are interested but not ready yet", a: "That is exactly why nurture matters. Some buyers are interested now but move later. Without follow up those leads disappear." },
    { q: "What if I only care about quality", a: "Good. That is the point. This system is designed around qualification not cheap lead volume." },
    { q: "What if my market is competitive", a: "That is why the angle qualification and follow up process matter so much. Most consultants are not losing because there is no demand. They are losing because the buyer journey is too loose." },
    { q: "Do you only run ads", a: "No. Ads are only one part. The real value is in the full system attraction screening follow up booking and nurture." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 relative pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Ambient Parallax Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }} 
          animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }} 
          animate={{ x: [0, -60, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y3 }} 
          animate={{ x: [0, 40, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[20%] left-[15%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      </div>

      <FloatingBubbles />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none flex justify-center"
          >
            <div className="bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/60 rounded-2xl p-3 md:p-4 flex items-center gap-4 md:gap-8 pointer-events-auto max-w-3xl w-full justify-between">
              <div className="hidden md:block">
                <p className="font-bold text-slate-900 text-lg tracking-tight">Ready to upgrade your pipeline?</p>
                <p className="text-sm text-slate-500 font-medium">Stop chasing weak leads and start closing.</p>
              </div>
              <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap group">
                Request a Pipeline Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B0F19]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            style={{ y: y1 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.3)_0%,_rgba(11,15,25,0)_70%)] blur-[120px]"
          />
          <motion.div 
            style={{ y: y2 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.25)_0%,_rgba(11,15,25,0)_70%)] blur-[100px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Floating Glass Cards in Hero */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <motion.div 
            animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[8%] w-32 h-32 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center transform -rotate-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <Target className="w-10 h-10 text-indigo-400 relative z-10" />
          </motion.div>
          <motion.div 
            animate={{ y: [20, -20, 20], rotate: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[35%] right-[8%] w-40 h-40 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(255,255,255,0.08)] flex items-center justify-center transform rotate-12 overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-60"></div>
            <TrendingUp className="w-12 h-12 text-blue-400 relative z-10 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
          </motion.div>
          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] left-[18%] w-24 h-24 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-50"></div>
            <Users className="w-8 h-8 text-indigo-400 relative z-10" />
          </motion.div>
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [-10, 10, -10] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[15%] right-[20%] w-28 h-28 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center transform -rotate-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <ShieldCheck className="w-10 h-10 text-emerald-400 relative z-10" />
          </motion.div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 [text-shadow:0_0_30px_rgba(255,255,255,0.15)]">
                  Stop Chasing Shared Portal Leads. Start Closing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 [text-shadow:0_0_30px_rgba(96,165,250,0.4)]">Capital-Qualified Buyers.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl [text-shadow:0_0_20px_rgba(255,255,255,0.1)]">
                  We help franchise consultants build a direct buyer acquisition system that attracts serious buyers screens them before the call follows up fast and nurtures them into booked conversations
                </p>
                <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium [text-shadow:0_0_20px_rgba(255,255,255,0.1)]">
                  So you spend less time chasing weak inquiries and more time speaking to people who are actually in a position to invest
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Pre screen buyers before they hit your calendar",
                    "Reduce wasted time on weak inquiries",
                    "Follow up fast before leads go cold",
                    "Book more qualified conversations not just more leads"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 font-medium group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500 transition-colors border border-indigo-500/30">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="relative group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-lg overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Buyer Pipeline Audit 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 text-lg">
                    See How the System Works
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-lg mx-auto lg:ml-auto group"
              >
                <motion.div 
                  animate={{ y: [-8, 8, -8] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 rounded-[2rem] transform rotate-3 scale-105 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 p-8 hover:-translate-y-1 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">New Candidate</h3>
                        <p className="text-sm text-slate-400 font-medium">Just booked a consultation</p>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/5 shadow-sm hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 ring-1 ring-indigo-500/30">
                          <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Liquid Capital</p>
                          <p className="text-white font-bold text-lg tracking-tight">
                            <NumberTicker value={150} prefix="$" suffix=",000+" />
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/5 shadow-sm hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0 ring-1 ring-blue-500/30">
                          <Target className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Intent Score</p>
                          <p className="text-white font-bold text-lg tracking-tight">
                            <NumberTicker value={98} suffix="%" /> Match
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    animate={{ y: [0, -12, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 md:-right-12 -top-8 bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 flex items-center gap-3 z-20"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0 ring-1 ring-emerald-500/30">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-tight">Meeting Booked</p>
                      <p className="text-xs text-slate-400 font-medium">Tomorrow, 10:00 AM</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Proof */}
      <section className="py-16 border-y border-slate-200/60 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-50"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Metrics / Proof of Service */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-slate-900 mb-2">$120M+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Capital Placed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-slate-900 mb-2">45%</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">No-Show Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-slate-900 mb-2">15k+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Buyers Vetted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-slate-900 mb-2">14 Days</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Avg. Time to First Deal</p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12"></div>

          {/* Trusted By Logos */}
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by top franchise consultants & brokerages
          </p>
          
          {/* Infinite Logo Ticker */}
          <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex whitespace-nowrap gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all font-bold text-xl">
                    <Building2 className="w-6 h-6" /> Apex Franchise Group
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all font-bold text-xl">
                    <TrendingUp className="w-6 h-6" /> Vanguard Advisors
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all font-bold text-xl">
                    <ShieldCheck className="w-6 h-6" /> NextGen Franchising
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all font-bold text-xl">
                    <Target className="w-6 h-6" /> Pinnacle Brokerage
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all font-bold text-xl">
                    <Users className="w-6 h-6" /> Elevate Advisory
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Performance Chart Section */}
      <PerformanceChartSection />

      {/* 3. Problem section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-500/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">The problem is not lead volume<br/>It is lead quality follow up and buyer readiness</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Most franchise consultants do not need more random names in a CRM. They need more conversations with buyers who actually have capital a real timeline and genuine intent.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Too many weak leads", icon: Users },
              { title: "Too many buyers with no clear capital", icon: DollarSign },
              { title: "Too much dependence on shared portals", icon: Building2 },
              { title: "Too many inquiries go cold before the call", icon: Clock }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 h-full hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-50/50 text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto ring-1 ring-red-100 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">{item.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. Qualification & Differentiation */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Part 1: Pain Points */}
            <FadeIn>
              <div className="pr-8">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">The reality of franchise lead generation</h3>
                <p className="text-xl text-indigo-600 font-semibold mb-10">Lead quality and buyer readiness are the real problems.</p>
                <ul className="space-y-6">
                  {[
                    "Weak leads that never become real conversations",
                    "Curious buyers with no real intent",
                    "No capital clarity",
                    "Slow follow-up",
                    "Too much manual sorting",
                    "Dependence on shared portals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 shrink-0"><XCircle className="w-6 h-6 text-slate-300" /></div>
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Part 2: Differentiators */}
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">How we shift the focus</h3>
                  <ul className="space-y-6">
                    {[
                      "We do not help franchise consultants get more leads. We help them get more qualified buyer conversations.",
                      "Most agencies optimize for form fills. We optimize for qualified conversations.",
                      "Most lead gen stops at the inquiry. Our system continues through qualification follow-up booking and nurture.",
                      "Better filtering upfront means less time wasted later.",
                      "Shared portals can create volume. They do not always create control."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 shrink-0"><CheckCircle2 className="w-6 h-6 text-indigo-600" /></div>
                        <span className="text-slate-800 font-medium text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Part 3: Qualification Questions */}
          <FadeIn delay={0.4}>
            <div className="bg-[#0A0A0B] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.2)]">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-indigo-400/30">
                    <Filter className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">The Qualification Standard</h3>
                  <p className="text-xl text-indigo-200/80 leading-relaxed">Every prospect is filtered through these exact questions before they ever reach your calendar.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    "How much liquid capital do you currently have available to invest?",
                    "When are you looking to invest in a franchise?",
                    "What type of ownership are you looking for?",
                    "Which markets are you most interested in?",
                    "What types of franchise opportunities are you most interested in?",
                    "Are you open to reviewing multiple franchise concepts if they fit your goals and budget?"
                  ].map((q, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                      <p className="text-white font-medium text-lg leading-relaxed flex gap-5 items-start">
                        <span className="text-indigo-400 font-bold opacity-50 group-hover:opacity-100 transition-opacity mt-0.5">0{i + 1}</span>
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* New Section 1: Why most franchise lead gen fails */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Why most franchise lead gen never turns into enough real buyer conversations
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                More leads do not fix a weak buyer journey. When buyer qualification is weak, the pipeline looks full but stays unproductive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/80 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all duration-500 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-500">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Illusion of Volume</h3>
                <p className="text-slate-600 leading-relaxed">
                  Too many franchise consultants are paying for inquiries that never become serious buyer conversations. The problem is usually not the ad alone.
                </p>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/80 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all duration-500 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-500">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Real Bottleneck</h3>
                <p className="text-slate-600 leading-relaxed">
                  The real problem is weak screening, slow follow-up, and no real nurture after the inquiry. A lead without a process is just a wasted click.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Cost of current way */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-100 to-transparent opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <FadeIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] transform -rotate-2 scale-105 border border-slate-200/60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Frustrated professional" 
                    className="relative rounded-[2.5rem] shadow-[0_20px_50px_rgb(0,0,0,0.1)] object-cover h-[500px] w-full border border-slate-200/50" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">What this costs franchise consultants</h2>
                <ul className="space-y-6">
                  {[
                    "Time lost chasing unqualified prospects",
                    "Pipeline feels full but weak",
                    "Slow follow up kills warm leads",
                    "Too much manual sorting",
                    "Good buyers slip away because nobody nurtures them",
                    "Revenue becomes inconsistent because quality is inconsistent"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <XCircle className="w-6 h-6 text-red-500" />
                      </div>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Layered Divider */}
      <div className="relative h-24 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#0A0A0B] [clip-path:polygon(0_100%,100%_100%,100%_0,0_100%)]"></div>
      </div>

      {/* 5. Solution reveal */}
      <section className="py-32 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0A0A0B] to-[#0A0A0B]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Introducing the Qualified Franchise Buyer Engine</h2>
            <p className="text-xl md:text-2xl text-indigo-200 mb-8 font-medium">
              A direct buyer acquisition system built to attract better fit buyers screen them before the call and move them into real conversations
            </p>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              This is not just ads. This is the full path from buyer interest to pre qualification to follow up to booking to nurture.
            </p>
            <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 mx-auto text-lg group w-fit">
              See How the System Works 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] rounded-full bg-indigo-500/5 blur-[60px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">How the system works</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { step: 'Step 1', title: 'Attract serious buyers', desc: 'Meta and Instagram campaigns built around real franchise ownership interest', icon: Target },
              { step: 'Step 2', title: 'Pre qualify before the call', desc: 'Filter by capital timeline market and fit', icon: Filter },
              { step: 'Step 3', title: 'Follow up immediately', desc: 'Fast contact while intent is still high', icon: Zap },
              { step: 'Step 4', title: 'Nurture buyers who are not ready yet', desc: 'Stay in front of them until timing improves', icon: MessageSquare },
              { step: 'Step 5', title: 'Optimize for qualified conversations', desc: 'Track booked calls buyer quality and show up rate', icon: BarChart3 },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 relative h-full hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3 block">{item.step}</span>
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.5}>
            <div className="flex justify-center">
              <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="relative group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgb(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  See If Your Market Is a Fit 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* New Section 2: What happens after a lead comes in */}
      <section className="py-24 bg-[#FAFAFA] border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                What happens after a buyer enters the pipeline
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                A lead should not just be collected and forgotten. Serious buyers need a clear next step, not a delayed reply. We help build the path from inquiry to booked consultation.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
              {[
                { step: "01", title: "Ad click", icon: MousePointerClick },
                { step: "02", title: "Qualification", icon: Filter },
                { step: "03", title: "Instant follow-up", icon: Zap },
                { step: "04", title: "Booked call", icon: CalendarCheck },
                { step: "05", title: "Reminder flow", icon: Bell },
                { step: "06", title: "Nurture if not ready", icon: Mail },
                { step: "07", title: "Qualified conversation", icon: MessageSquare },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 flex flex-col items-center text-center h-full relative group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 ring-4 ring-white group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 mb-1 tracking-wider">STEP {item.step}</span>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.title}</h4>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.8}>
              <div className="mt-16 text-center">
                <p className="text-lg font-medium text-slate-700 bg-indigo-50 inline-block px-6 py-3 rounded-full text-indigo-900">
                  Better buyer handling creates better booking economics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Why this is different */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Why this works better than generic lead gen</h2>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)]">
            <div className="grid md:grid-cols-2">
              <div className="p-10 lg:p-16 border-b md:border-b-0 md:border-r border-slate-200/60 bg-[#FAFAFA]">
                <h3 className="text-2xl font-bold text-slate-400 mb-10 tracking-tight">Most agencies</h3>
                <ul className="space-y-6">
                  {[
                    "optimize for cheap leads",
                    "stop at form fills",
                    "weak screening",
                    "slow handoff",
                    "no nurture",
                    "vanity reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-600 items-center group/item hover:translate-x-2 transition-transform">
                      <div className="text-red-400 shrink-0 group-hover/item:scale-110 group-hover/item:text-red-500 transition-all"><XCircle className="w-6 h-6"/></div> 
                      <span className="font-medium text-lg group-hover/item:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 lg:p-16 bg-[#0A0A0B] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
                <h3 className="text-2xl font-bold mb-10 relative z-10 tracking-tight text-white">Your system</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "optimize for qualified buyer conversations",
                    "screen before the calendar",
                    "faster speed to lead",
                    "better booking flow",
                    "nurture warm but delayed buyers",
                    "reporting based on real pipeline quality"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-indigo-50 items-center group/item hover:translate-x-2 transition-transform">
                      <div className="text-indigo-400 shrink-0 group-hover/item:scale-110 group-hover/item:text-indigo-300 transition-all"><CheckCircle2 className="w-6 h-6"/></div> 
                      <span className="font-medium text-lg group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. What is included */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Everything needed to build a cleaner more qualified buyer pipeline</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Direct response campaign setup', icon: Target },
              { title: 'Buyer angle and creative development', icon: LayoutDashboard },
              { title: 'Qualification funnel build', icon: Filter },
              { title: 'Instant follow up setup', icon: Zap },
              { title: 'Booking flow and reminders', icon: CalendarCheck },
              { title: 'Nurture sequence', icon: MessageSquare },
              { title: 'Reporting dashboard', icon: BarChart3 },
              { title: 'Ongoing optimization', icon: Settings },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 tracking-tight">{item.title}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Who this is for */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <div className="bg-[#FAFAFA] p-10 lg:p-16 rounded-[2.5rem] border border-slate-200/60 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">Built for franchise consultants who care about buyer quality</h2>
                
                <ul className="space-y-6">
                  {[
                    "You want more control over buyer quality",
                    "You are tired of weak portal leads",
                    "You want more booked conversations not just more leads",
                    "You want less time wasted on low intent inquiries",
                    "You want a system that handles follow up better"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group/item hover:translate-x-2 transition-transform">
                      <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-7 h-7 text-indigo-600" /></div>
                      <span className="text-slate-700 font-medium text-xl leading-relaxed group-hover/item:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* New Section 5: What we actually optimize for */}
      <section className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -right-[20%] w-[100%] h-[100%] rounded-full bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(79,70,229,0.1)_360deg)] blur-3xl"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0B] to-[#0A0A0B]"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
                What we actually optimize for
              </h2>
              <p className="text-xl text-indigo-200/80 leading-relaxed">
                We do not judge success by cheap leads alone.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Qualified buyer conversations",
              "Capital quality",
              "Booking rate",
              "Show-up rate",
              "Buyer fit",
              "Speed to lead",
              "Cost per qualified conversation"
            ].map((metric, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 h-full flex items-center justify-center text-center group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <span className="font-bold text-lg text-indigo-50 group-hover:text-white transition-colors">{metric}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Pilot / Pricing */}
      <section className="py-24 bg-[#0A0A0B] text-white relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0B] to-[#0A0A0B]"></div>
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">Start with a controlled pilot</h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  We start with a focused test to validate buyer quality and conversation potential before scaling
                </p>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  That means lower risk upfront clearer performance visibility and better decision making before moving into ongoing management
                </p>
                
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-10 backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-4 text-indigo-300 tracking-tight">Initial phase</h4>
                  <p className="text-lg mb-2 font-medium text-white">$500 test budget funded by the client</p>
                  <p className="text-slate-400 leading-relaxed">If qualified buyer conversations start coming in ongoing management is $1400 per month on the basic plan</p>
                </div>

                <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="relative group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgb(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg w-fit overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Request the Pilot Breakdown 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 text-slate-900 shadow-[0_20px_50px_rgb(0,0,0,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                  <h3 className="text-2xl font-extrabold mb-10 tracking-tight">Pilot includes</h3>
                  <ul className="space-y-6">
                    {[
                      "campaign setup",
                      "qualification build",
                      "follow up structure",
                      "booking flow",
                      "launch and optimization",
                      "performance review"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="font-bold text-lg capitalize text-slate-800 group-hover/item:text-indigo-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 10.5. Pricing Plans */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none"></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Choose the level of buyer pipeline support you need</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                All plans are built to help franchise consultants improve buyer quality, reduce wasted time on weak leads, and generate more qualified buyer conversations.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Plan A */}
            <FadeIn delay={0.1}>
              <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-900 transition-colors">Qualified Buyer Engine</h3>
                  <div className="text-3xl font-extrabold text-indigo-600 mb-6">$1,400 <span className="text-lg text-slate-500 font-medium">/ month</span></div>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">Built for franchise consultants who want a cleaner buyer pipeline and more qualified buyer conversations without wasting time on weak leads</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {[
                      "Meta and Instagram buyer acquisition campaigns",
                      "Buyer-focused messaging and creative direction",
                      "Pre-qualification funnel build",
                      "High-intent buyer qualifying question strategy",
                      "Speed-to-lead follow-up structure",
                      "Nurture flow for interested but not ready buyers",
                      "Booking flow and reminder logic",
                      "Reporting focused on qualified conversations",
                      "Ongoing optimization for buyer quality, not vanity metrics"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                        <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-indigo-500" /></div>
                        <span className="text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-4 rounded-xl font-bold transition-all text-lg block text-center">
                    Request a Buyer Pipeline Audit
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Plan B */}
            <FadeIn delay={0.2}>
              <div className="bg-[#0A0A0B] rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.2)] transform lg:-translate-y-4 flex flex-col h-full border border-indigo-500/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Authority + Buyer Engine</h3>
                    <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full ring-1 ring-indigo-400/30 uppercase tracking-wider shrink-0 ml-2">Most Popular</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-6">$2,400 <span className="text-lg text-indigo-200/60 font-medium">/ month</span></div>
                  <p className="text-indigo-100/80 mb-8 leading-relaxed font-medium">Built for franchise consultants who want qualified buyer acquisition plus stronger trust, authority, and conversion before the call</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                      <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-indigo-400" /></div>
                      <span className="text-white font-bold">Everything in Qualified Buyer Engine</span>
                    </li>
                    {[
                      "Personal branding strategy",
                      "Social content planning",
                      "Content creation using their AI twin",
                      "Trust-building social media content",
                      "Ongoing authority-focused content ideas",
                      "Social presence support",
                      "Website build or website refinement",
                      "Website messaging improvements for higher conversion",
                      "Better positioning across their online presence"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                        <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-indigo-400/70" /></div>
                        <span className="text-indigo-50/90 font-medium group-hover/item:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-4 rounded-xl font-bold transition-all text-lg shadow-[0_4px_14px_0_rgb(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] block text-center">
                    See If This Plan Fits
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Plan C */}
            <FadeIn delay={0.3}>
              <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-900 transition-colors">Full Growth Engine</h3>
                  <div className="text-3xl font-extrabold text-indigo-600 mb-6">$3,400 <span className="text-lg text-slate-500 font-medium">/ month</span></div>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">Built for franchise consultants who want paid acquisition, authority building, and long-term Google visibility working together</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                      <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-indigo-600" /></div>
                      <span className="text-slate-900 font-bold">Everything in Authority + Buyer Engine</span>
                    </li>
                    {[
                      "SEO strategy",
                      "On-page SEO improvements",
                      "Website refinement for organic growth",
                      "Ranking strategy based on the market",
                      "Google visibility improvements",
                      "Search-focused content direction",
                      "Long-term positioning for stronger discoverability",
                      "A more complete growth system across paid and organic"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                        <div className="mt-1 shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-indigo-500" /></div>
                        <span className="text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-4 rounded-xl font-bold transition-all text-lg block text-center">
                    Book a Strategy Call
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* New Section 6: Optional proof / example outcomes section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                What better pipeline control can look like
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Better quality inquiries instead of just more inquiries",
              "More booked conversations from the leads already coming in",
              "Faster response times and fewer warm leads going cold",
              "Better fit buyers reaching the calendar",
              "Less time wasted on weak inquiries"
            ].map((outcome, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-indigo-100 hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-lg font-bold text-slate-800 leading-relaxed">{outcome}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <ROICalculatorSection />

      {/* 11. FAQ */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-[30%] left-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center tracking-tight leading-tight">FAQ</h2>
          </FadeIn>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-500 group">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-900 transition-colors">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyBento />

      <ReviewsSection />

      {/* 12. Final CTA */}
      <section className="py-32 bg-[#0A0A0B] text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[20%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.2)_0%,_rgba(10,10,11,0)_70%)] blur-3xl"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-[#0A0A0B] to-[#0A0A0B]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">If too many of your leads are weak unqualified or going cold the pipeline needs fixing</h2>
            <p className="text-xl md:text-2xl text-indigo-200/80 mb-12 leading-relaxed">
              We help franchise consultants build a direct buyer acquisition system that brings in more serious buyers filters them before the call and turns more inquiries into booked conversations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="relative group bg-white text-slate-900 hover:bg-slate-50 px-10 py-5 rounded-xl font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-lg overflow-hidden">
                <div className="absolute inset-0 bg-indigo-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Request a Buyer Pipeline Audit 
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:border-white/20 hover:-translate-y-0.5">
                See If Your Market Is a Fit
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0A0F1C] text-slate-400 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Top section */}
          <div className="border-b border-white/10 pb-8 mb-12 flex flex-wrap gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-slate-300">Verified Business</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-slate-300">Global Reach</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-slate-300">Secure Payments</span>
            </div>
          </div>

          {/* Middle section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-6">ePulse</h3>
              <p className="text-slate-400">Copyright &copy; {new Date().getFullYear()} ePulse. All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-8 md:max-w-md">
              <div>
                <h4 className="text-white font-bold mb-2">Business Address:</h4>
                <p className="text-slate-400 leading-relaxed">3801 N Capital of Texas Hwy Ste E240 Unit #3344 Austin, TX 78746</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Dubai Business Address:</h4>
                <p className="text-slate-400 leading-relaxed">IFZA Business Park, DDP, Premises Number 66873- 001, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-wrap gap-6">
            <button onClick={() => setIsFulfillmentModalOpen(true)} className="text-blue-500 hover:text-blue-400 font-medium transition-colors">Fulfillment Policy</button>
            <button onClick={() => setIsTermsModalOpen(true)} className="text-blue-500 hover:text-blue-400 font-medium transition-colors">Terms and Conditions</button>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={`fixed right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] hover:scale-110 transition-all z-50 duration-300 ${showStickyCTA ? 'bottom-24 md:bottom-6' : 'bottom-6'}`}>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      {/* Fulfillment Policy Modal */}
      {isFulfillmentModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 md:px-10 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Fulfillment Policy</h2>
                <p className="text-slate-500 font-medium">ePulse Digital LLC</p>
              </div>
              <button onClick={() => setIsFulfillmentModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Service Delivery</h3>
                <p>ePulse Digital LLC offers digital marketing services, which includes, but is not limited to, TikTok, Facebook, Instagram and other marketing solutions, delivered on a subscription basis. All services are rendered online and billed in US Dollars ($). No physical goods are shipped.</p>
                <p className="mt-3">Once payment is received and confirmed, service activation begins immediately, and clients are granted access to the subscribed marketing service(s). A confirmation email will be sent within 24 hours of payment completion.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Refund Policy</h3>
                <p>All Service fees shall be invoiced and payable in full, in advance, in US Dollar ($) amounts. Payment must be cleared prior to the commencement of any work, and all sums remitted under this clause are non-refundable.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cancellation Policy</h3>
                <p>Clients may cancel their subscription at any time. Cancellation will take effect at the end of the current billing cycle. No partial refunds will be provided for unused portions of the subscription period.</p>
              </section>
            </div>
          </motion.div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 md:px-10 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Terms and Conditions</h2>
                <p className="text-slate-500 font-medium">ePulse Digital LLC</p>
              </div>
              <button onClick={() => setIsTermsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Introduction</h3>
                <p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agree to accept all terms and conditions written here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intellectual Property Rights</h3>
                <p>Other than the content you own, under these Terms, ePulse Digital LLC and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                <p className="mt-3">You are granted limited license only for purposes of viewing the material contained on this Website.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Restrictions</h3>
                <p className="mb-3">You are specifically restricted from all of the following:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Publishing any Website material in any other media;</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                  <li>Publicly performing and/or showing any Website material;</li>
                  <li>Using this Website in any way that is or may be damaging to this Website;</li>
                  <li>Using this Website in any way that impacts user access to this Website;</li>
                  <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                  <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                  <li>Using this Website to engage in any advertising or marketing.</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">No warranties</h3>
                <p>This Website is provided "as is," with all faults, and ePulse Digital LLC express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Limitation of liability</h3>
                <p>In no event shall ePulse Digital LLC, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. ePulse Digital LLC, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liabilities arising out of or in any way related to your use of this Website.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Indemnification</h3>
                <p>You hereby indemnify to the fullest extent ePulse from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Severability</h3>
                <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Variation of Terms</h3>
                <p>ePulse Digital LLC is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Assignment</h3>
                <p>ePulse Digital LLC is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Entire Agreement</h3>
                <p>These Terms constitute the entire agreement between ePulse and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dispute Resolution</h3>
                <p className="mb-3">Every card and wallet payment uses 3‑D Secure, biometric authentication, or the relevant wallet sign‑in where applicable.</p>
                <p className="mb-3">All Service fees shall be invoiced and payable in full, in advance, in US Dollar ($) amounts. Payment must be cleared prior to the commencement of any work, and all sums remitted under this clause are non-refundable.</p>
                <p>Any payment disputes (e.g., chargebacks or PayPal claims) are handled through Stripe's built-in resolution process. We reserve the right to provide documentation and evidence of service delivery in such cases.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Governing Law & Jurisdiction</h3>
                <p>These Terms will be governed by and interpreted in accordance with the laws of Texas, and you submit to the non-exclusive jurisdiction of the state and federal courts located in United States of America for the resolution of any disputes.</p>
              </section>
            </div>
          </motion.div>
        </div>
      )}

      {/* Live Activity Feed */}
      <LiveActivityFeed />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, UserPlus, Zap, CheckCircle2 } from 'lucide-react';

const activities = [
  { 
    id: 1, 
    title: "New Placement", 
    desc: "Marcus T. just closed a $150k deal in TX", 
    icon: DollarSign, 
    color: "text-emerald-400", 
    bg: "bg-emerald-400/10",
    border: "border-emerald-500/20"
  },
  { 
    id: 2, 
    title: "Qualified Buyer Vetted", 
    desc: "Consultant in FL received a lead with $300k liquid", 
    icon: UserPlus, 
    color: "text-blue-400", 
    bg: "bg-blue-400/10",
    border: "border-blue-500/20"
  },
  { 
    id: 3, 
    title: "System Milestone", 
    desc: "Over $2.5M in capital placed this week across the network", 
    icon: Zap, 
    color: "text-indigo-400", 
    bg: "bg-indigo-400/10",
    border: "border-indigo-500/20"
  },
  { 
    id: 4, 
    title: "Meeting Booked", 
    desc: "High-intent buyer scheduled for tomorrow at 10 AM", 
    icon: CheckCircle2, 
    color: "text-purple-400", 
    bg: "bg-purple-400/10",
    border: "border-purple-500/20"
  }
];

export default function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first toast
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Hide the toast after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Move to the next activity after it hides, then show it again
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 4000); // Wait 4 seconds before showing the next one
      
    }, 5000); // Show for 5 seconds

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentIndex]);

  const currentActivity = activities[currentIndex];
  const Icon = currentActivity.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`bg-slate-900/90 backdrop-blur-xl border ${currentActivity.border} shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl p-4 flex items-center gap-4 max-w-sm w-full pointer-events-auto`}
          >
            <div className={`w-12 h-12 rounded-full ${currentActivity.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-6 h-6 ${currentActivity.color}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-0.5">{currentActivity.title}</p>
              <p className="text-xs text-slate-400 leading-tight">{currentActivity.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Clock, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudyBento() {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Real Results. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Real Capital.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            See how one franchise consultant transformed their pipeline from unpredictable portal leads to a highly-qualified, closed deal in just 45 days.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Story Block (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <Target className="w-3.5 h-3.5" /> Case Study: The $1.2M Placement
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  "I spent $2,400 on ads and closed a multi-unit deal that netted $45,000 in commissions."
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-xl">
                  Marcus was tired of competing with 5 other brokers for the same portal lead. We built him a direct funnel targeting corporate executives looking to exit. Within 45 days, he placed a highly-qualified buyer into a 3-unit fitness franchise.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Marcus T." className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div>
                  <p className="text-white font-bold">Marcus Thorne</p>
                  <p className="text-slate-400 text-sm">Managing Director, Thorne Franchise Group</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROI Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Return on Ad Spend</p>
              <p className="text-5xl font-extrabold text-white mb-2">1,775%</p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> Verified Result
              </div>
            </div>
          </motion.div>

          {/* Metrics Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Ad Spend</p>
                <p className="text-3xl font-bold text-white">$2,400</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Commission Earned</p>
                <p className="text-3xl font-bold text-emerald-400">$45,000</p>
              </div>
            </div>
          </motion.div>

          {/* Speed Block (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-indigo-600 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 blur-[60px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Speed to Placement</h3>
              <p className="text-indigo-100 max-w-md">From the moment the ad went live to the signed franchise agreement and funded capital.</p>
            </div>
            
            <div className="relative z-10 flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <Clock className="w-10 h-10 text-indigo-200" />
              <div>
                <p className="text-4xl font-extrabold text-white">45 Days</p>
                <p className="text-indigo-200 font-medium">Start to Finish</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Target, ArrowRight, TrendingUp, Zap } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function ROICalculatorSection() {
  const [adSpendStr, setAdSpendStr] = useState<string>("3000");
  const [avgCommissionStr, setAvgCommissionStr] = useState<string>("25000");
  
  // Assumptions based on system performance
  const costPerLead = 100; // Estimated CPL for high-intent
  const qualificationRate = 0.40; // 40% of leads are qualified
  const closeRate = 0.15; // 15% close rate on qualified leads

  const handleAdSpendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      setAdSpendStr(val);
    }
  };

  const handleCommissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      setAvgCommissionStr(val);
    }
  };

  const handleAdSpendBlur = () => {
    if (adSpendStr === '' || Number(adSpendStr) < 0) setAdSpendStr("0");
  };

  const handleCommissionBlur = () => {
    if (avgCommissionStr === '' || Number(avgCommissionStr) < 0) setAvgCommissionStr("0");
  };

  const results = useMemo(() => {
    const safeAdSpend = Math.max(0, Number(adSpendStr) || 0);
    const safeCommission = Math.max(0, Number(avgCommissionStr) || 0);

    const leads = Math.floor(safeAdSpend / costPerLead);
    const qualifiedLeads = Math.floor(leads * qualificationRate);
    
    // Use exact expected value for placements to avoid 0 revenue on small budgets
    const placements = Number((qualifiedLeads * closeRate).toFixed(2));
    const revenue = placements * safeCommission;
    
    // Handle division by zero and negative ROI gracefully
    let roi = 0;
    if (safeAdSpend > 0) {
      roi = Math.round(((revenue - safeAdSpend) / safeAdSpend) * 100);
    }

    return {
      leads,
      qualifiedLeads,
      placements,
      revenue,
      roi
    };
  }, [adSpendStr, avgCommissionStr]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2
    }).format(value);
  };

  const adSpendNum = Number(adSpendStr) || 0;
  const avgCommissionNum = Number(avgCommissionStr) || 0;

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.4)_0%,_rgba(0,0,0,0)_70%)] blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.3)_0%,_rgba(0,0,0,0)_70%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-sm mb-6">
              <Calculator className="w-4 h-4" />
              Interactive ROI Calculator
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Calculate Your Pipeline Potential
            </h2>
            <p className="text-lg text-slate-400">
              Stop guessing. See exactly what a predictable, capital-qualified pipeline could mean for your bottom line based on our average system performance.
            </p>
          </div>
        </FadeIn>

        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Inputs */}
            <div className="space-y-10">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <label className="text-lg font-bold text-white flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-indigo-400" />
                    Monthly Ad Spend
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={adSpendStr}
                      onChange={handleAdSpendChange}
                      onBlur={handleAdSpendBlur}
                      className="bg-slate-800/80 border border-slate-700 text-white font-extrabold text-xl rounded-xl py-2.5 pl-8 pr-4 w-full sm:w-40 text-right focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                    />
                  </div>
                </div>
                <div className="relative pt-2">
                  <input 
                    type="range" 
                    min="0" 
                    max={Math.max(20000, adSpendNum)} 
                    step="100"
                    value={adSpendNum}
                    onChange={(e) => setAdSpendStr(e.target.value)}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs font-medium text-slate-500 mt-2">
                    <span>$0</span>
                    <span>{formatCurrency(Math.max(20000, adSpendNum))}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <label className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Avg. Commission per Placement
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={avgCommissionStr}
                      onChange={handleCommissionChange}
                      onBlur={handleCommissionBlur}
                      className="bg-slate-800/80 border border-slate-700 text-white font-extrabold text-xl rounded-xl py-2.5 pl-8 pr-4 w-full sm:w-40 text-right focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>
                <div className="relative pt-2">
                  <input 
                    type="range" 
                    min="0" 
                    max={Math.max(100000, avgCommissionNum)} 
                    step="1000"
                    value={avgCommissionNum}
                    onChange={(e) => setAvgCommissionStr(e.target.value)}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-xs font-medium text-slate-500 mt-2">
                    <span>$0</span>
                    <span>{formatCurrency(Math.max(100000, avgCommissionNum))}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/5">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">System Assumptions</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex justify-between">
                    <span>Avg. Cost Per Lead:</span>
                    <span className="font-bold text-white">{formatCurrency(costPerLead)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualification Rate:</span>
                    <span className="font-bold text-white">{qualificationRate * 100}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Close Rate (on qualified):</span>
                    <span className="font-bold text-white">{closeRate * 100}%</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-4 italic">
                  *These are conservative baseline metrics based on historical data. Actual results vary by market and consultant sales skill.
                </p>
              </div>
            </div>

            {/* Outputs */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-center">
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/5 hover:bg-slate-800 hover:border-white/10 transition-colors">
                    <p className="text-sm font-bold text-slate-400 mb-1">Total Leads</p>
                    <p className="text-3xl font-extrabold text-white">
                      {formatNumber(results.leads)}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/5 hover:bg-slate-800 hover:border-indigo-500/30 transition-colors">
                    <p className="text-sm font-bold text-slate-400 mb-1">Qualified Leads</p>
                    <p className="text-3xl font-extrabold text-indigo-400">
                      {formatNumber(results.qualifiedLeads)}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-8 shadow-xl relative overflow-hidden mb-8 group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-500"></div>
                  <p className="text-indigo-100 font-bold mb-2 text-lg">Expected Monthly Revenue</p>
                  <p className="text-5xl md:text-6xl font-extrabold text-white tracking-tight break-words">
                    {formatCurrency(results.revenue)}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 group-hover:bg-white/30 transition-colors">
                      <Zap className="w-4 h-4 text-amber-300" />
                      <span className="text-white font-bold">{formatNumber(results.placements)} Placements</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 group-hover:bg-white/30 transition-colors">
                      <TrendingUp className="w-4 h-4 text-green-300" />
                      <span className="text-white font-bold">{formatNumber(results.roi)}% ROI</span>
                    </div>
                  </div>
                </div>

                <a href="https://calendly.com/adil_shahzad_khawaja/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold transition-all text-lg flex items-center justify-center gap-2 group">
                  Build My Custom Pipeline
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

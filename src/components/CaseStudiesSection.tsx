import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Clock, Target, ArrowRight, CheckCircle2, Building2, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

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

const caseStudies = [
  {
    id: 1,
    clientType: "Independent Franchise Broker",
    location: "Texas, USA",
    challenge: "Relying entirely on shared portal leads that were highly competitive, resulting in a 15% contact rate and massive time wasted on unqualified calls.",
    solution: "Implemented a direct-to-buyer funnel targeting high-net-worth individuals, coupled with a strict automated pre-call qualification survey.",
    outcome: "Increased contact rate to 65%, eliminated calls with buyers under $100k liquidity, and closed 2 multi-unit deals in 90 days.",
    timeline: "90 Days",
    metric: "2 Multi-Unit Deals",
    metricLabel: "Closed in 90 days"
  },
  {
    id: 2,
    clientType: "Boutique Advisory Firm",
    location: "Florida, USA",
    challenge: "High volume of leads but terrible conversion. Consultants were burning out doing 20+ intro calls a week with people who were 'just looking'.",
    solution: "Built a robust email and SMS nurture sequence to educate buyers before the call, positioning the consultants as premium advisors, not salespeople.",
    outcome: "Reduced weekly intro calls to 8, but increased actual placements by 40% because the buyers showing up were educated and ready.",
    timeline: "6 Months",
    metric: "40% Increase",
    metricLabel: "In actual placements"
  },
  {
    id: 3,
    clientType: "Senior Franchise Consultant",
    location: "Ontario, Canada",
    challenge: "Struggling to break into the B2B service franchise niche. Leads were mostly interested in low-cost, owner-operator food concepts.",
    solution: "Launched highly targeted LinkedIn and Meta campaigns specifically calling out corporate executives looking for B2B investments.",
    outcome: "Shifted pipeline entirely. Placed 3 executives into B2B service franchises with average investments over $250k.",
    timeline: "4 Months",
    metric: "$750k+",
    metricLabel: "Total capital placed"
  },
  {
    id: 4,
    clientType: "Franchise Development Agency",
    location: "California, USA",
    challenge: "Needed to scale lead generation for a specific emerging fitness brand but traditional channels were too expensive and yielding low intent.",
    solution: "Created a hyper-specific landing page highlighting the unit economics of the fitness brand, driving targeted traffic through YouTube ads.",
    outcome: "Generated 45 highly qualified inquiries at a 30% lower CPA than portals, resulting in 4 awarded territories.",
    timeline: "5 Months",
    metric: "4 Territories",
    metricLabel: "Awarded to new buyers"
  },
  {
    id: 5,
    clientType: "Solo Franchise Consultant",
    location: "London, UK",
    challenge: "Inconsistent deal flow. Would close a deal, then have an empty pipeline because prospecting stopped during the closing process.",
    solution: "Deployed an 'always-on' automated lead generation and booking system that ran in the background while the consultant focused on active deals.",
    outcome: "Created a predictable baseline of 3 qualified appointments per week, smoothing out revenue and eliminating the 'feast or famine' cycle.",
    timeline: "Ongoing",
    metric: "3 Appts/Week",
    metricLabel: "Consistent qualified flow"
  },
  {
    id: 6,
    clientType: "Multi-Consultant Firm",
    location: "New York, USA",
    challenge: "Lead distribution was inefficient, and consultants were complaining about lead quality from their existing marketing agency.",
    solution: "Overhauled the entire ad strategy, moving away from generic 'be your own boss' messaging to specific financial and lifestyle outcomes.",
    outcome: "Consultant satisfaction skyrocketed. The firm saw a 2.5x increase in leads progressing to the FDD review stage.",
    timeline: "60 Days",
    metric: "2.5x Increase",
    metricLabel: "Leads reaching FDD stage"
  },
  {
    id: 7,
    clientType: "Veteran Transition Specialist",
    location: "Virginia, USA",
    challenge: "Wanted to exclusively help military veterans transition into franchise ownership but couldn't reliably target them.",
    solution: "Built a dedicated funnel speaking directly to veteran pain points, utilizing specific targeting parameters and veteran-focused ad copy.",
    outcome: "Built a highly engaged list of 500+ veteran prospects and placed 5 veterans into service-based franchises within the first year.",
    timeline: "12 Months",
    metric: "5 Placements",
    metricLabel: "In veteran-owned businesses"
  },
  {
    id: 8,
    clientType: "Franchise Brokerage Network",
    location: "National (USA)",
    challenge: "High drop-off rate after the initial consultation. Buyers would get overwhelmed and go dark.",
    solution: "Implemented a post-call automated nurture sequence that dripped out educational content, case studies, and funding options over 30 days.",
    outcome: "Re-engaged 22% of 'dead' leads, turning them back into active conversations and ultimately closing 6 additional deals from old pipeline.",
    timeline: "6 Months",
    metric: "22% Revival",
    metricLabel: "Of previously dead leads"
  },
  {
    id: 9,
    clientType: "High-Ticket Franchise Consultant",
    location: "Illinois, USA",
    challenge: "Only wanted to work with buyers capable of $500k+ investments. Standard lead gen was bringing in too many undercapitalized prospects.",
    solution: "Created a 'premium investor' funnel with high-friction forms, requiring proof of liquidity ranges and detailed investment timelines.",
    outcome: "Lead volume dropped by 80%, but closing rate quadrupled. Placed a $1.2M multi-territory deal in month 3.",
    timeline: "3 Months",
    metric: "$1.2M Deal",
    metricLabel: "Multi-territory placement"
  }
];

export default function CaseStudiesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 pointer-events-none transform skew-x-12 translate-x-20"></div>
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Proof of Performance.
            </h2>
            <p className="text-lg text-slate-600">
              We don't just generate leads; we build systems that result in actual placements. Explore how we've solved complex pipeline challenges for consultants across the industry.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* List of Case Studies */}
          <div className="lg:col-span-5 space-y-3">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.05}>
                <button
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    expandedId === study.id 
                      ? 'bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-200' 
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                  }`}
                >
                  <div>
                    <h4 className={`font-bold text-lg mb-1 transition-colors ${expandedId === study.id ? 'text-white' : 'text-slate-900 group-hover:text-indigo-900'}`}>
                      {study.clientType}
                    </h4>
                    <div className={`flex items-center gap-2 text-sm font-medium transition-colors ${expandedId === study.id ? 'text-indigo-200' : 'text-slate-500'}`}>
                      <MapPin className="w-4 h-4" />
                      {study.location}
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    expandedId === study.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                  }`}>
                    {expandedId === study.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Expanded Detail View (Sticky on Desktop) */}
          <div className="lg:col-span-7 lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              {expandedId && (
                <motion.div
                  key={expandedId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  {/* Header Metric */}
                  <div className="bg-slate-900 p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-4">
                          <Clock className="w-4 h-4" />
                          Timeline: {caseStudies.find(s => s.id === expandedId)?.timeline}
                        </div>
                        <h3 className="text-4xl font-extrabold text-white tracking-tight">
                          {caseStudies.find(s => s.id === expandedId)?.metric}
                        </h3>
                        <p className="text-slate-400 font-medium mt-1 text-lg">
                          {caseStudies.find(s => s.id === expandedId)?.metricLabel}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <Target className="w-5 h-5 text-red-500" />
                        The Challenge
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {caseStudies.find(s => s.id === expandedId)?.challenge}
                      </p>
                    </div>
                    
                    <div className="w-full h-px bg-slate-100"></div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Our Solution
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {caseStudies.find(s => s.id === expandedId)?.solution}
                      </p>
                    </div>

                    <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mt-6">
                      <h4 className="font-bold text-indigo-900 mb-2">The Outcome</h4>
                      <p className="text-indigo-800 leading-relaxed font-medium">
                        {caseStudies.find(s => s.id === expandedId)?.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

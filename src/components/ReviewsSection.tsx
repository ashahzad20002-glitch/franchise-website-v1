import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, Building, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

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

const reviews = [
  {
    id: 1,
    name: "Marcus Thorne",
    role: "Managing Director",
    company: "Thorne Franchise Group",
    location: "Austin, TX",
    rating: 5,
    result: "Closed 3 high-ticket deals in 60 days",
    shortText: "The quality of conversations shifted completely.",
    text: "Before working with this system, I was spending 20 hours a week chasing down leads who either didn't have the capital or stopped responding after the first call. The screening process they implemented changed everything. In the last 60 days, I've had fewer total calls, but closed 3 high-ticket placements because the people showing up are actually qualified and ready to move.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Senior Franchise Consultant",
    company: "Elevate Advisory",
    location: "Denver, CO",
    rating: 5,
    result: "Reduced no-show rate by 45%",
    shortText: "Finally, a system that actually filters out the tire-kickers.",
    text: "I was skeptical because I've bought 'exclusive leads' before that turned out to be garbage. This isn't just lead gen; it's a pipeline filter. The automated follow-up and pre-call qualification dropped my no-show rate by 45% in the first month. I'm finally talking to serious buyers with actual liquidity.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Julian Vance",
    role: "Principal Broker",
    company: "Vance & Associates",
    location: "Charlotte, NC",
    rating: 5,
    result: "$2.5M in placed capital",
    shortText: "The ROI has been undeniable.",
    text: "We needed a predictable way to get in front of buyers with $150k+ in liquid capital. The targeted approach and the nurture sequences have been phenomenal. We've placed over $2.5M in capital across 5 different concepts this quarter alone. It's the most consistent our pipeline has ever been.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "Isabella Rossi",
    role: "Franchise Development Partner",
    company: "NextGen Franchising",
    location: "Scottsdale, AZ",
    rating: 5,
    result: "Doubled qualified appointments",
    shortText: "I stopped wasting time on unqualified calls.",
    text: "The biggest win for me isn't even the new deals—it's the time I got back. I used to dread my calendar because it was full of people who were just 'exploring' with zero capital. Now, when I get on a Zoom call, I know the person has been vetted. It makes the sales process so much more enjoyable and effective.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    name: "Nathaniel Brooks",
    role: "Director of Expansion",
    company: "Brooks Brokerage",
    location: "Nashville, TN",
    rating: 5,
    result: "Consistent 4-5 qualified calls/week",
    shortText: "Predictable, high-quality deal flow.",
    text: "What impressed me most was the onboarding and how quickly they understood the specific buyer profile we needed. We aren't looking for hundreds of leads; we need 4-5 solid, well-capitalized conversations a week. They delivered exactly that, and the lead nurture system keeps the longer-term prospects engaged without me lifting a finger.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 6,
    name: "Clara Hughes",
    role: "Independent Franchise Advisor",
    company: "Hughes Consulting",
    location: "Tampa, FL",
    rating: 5,
    result: "Closed a multi-unit deal in month 2",
    shortText: "The follow-up system is a game changer.",
    text: "I always knew I was losing deals because my follow-up was inconsistent. Having a system that automatically nurtures inquiries until they are ready to book a call is incredible. I just closed a multi-unit deal with a buyer who was in the nurture sequence for 6 weeks before they finally booked a call.",
    image: "https://randomuser.me/api/portraits/women/31.jpg"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Don't just take our word for it.
            </h2>
            <p className="text-lg text-slate-400">
              See how franchise consultants are transforming their pipelines, eliminating tire-kickers, and closing more deals with capital-qualified buyers.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.1}>
              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(79,70,229,0.15)] hover:border-indigo-500/30">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <div className="mb-6 flex-grow">
                  <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-3 leading-snug">"{review.shortText}"</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {review.text}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover shadow-inner border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="text-white font-bold">{review.name}</h5>
                      <p className="text-indigo-400 text-sm font-medium">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-500" />
                      {review.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {review.location}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-green-400 bg-green-400/10 w-fit px-2.5 py-1 rounded-md border border-green-400/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Result: {review.result}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

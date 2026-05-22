import React from "react";
import { Star, MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";
import { REVIEWS } from "../data";

export default function SocialProof() {
  return (
    <section id="proof" className="py-16 bg-bk-cream text-bk-burgundy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Metrics Aggregator Header */}
        <div className="bg-white border-4 border-bk-burgundy rounded-[32px] p-6 lg:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_24px_rgba(80,35,20,0.06)] relative overflow-hidden">
          {/* Flame background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-bk-orange/5 rounded-full blur-xl pointer-events-none" />

          <div className="text-center md:text-left space-y-2">
            <span className="bg-bk-burgundy text-white font-sans text-[10px] font-black uppercase px-3 py-1.5 rounded-full border border-bk-orange">
              TRUSTPILOT & GOOGLE RECOGNIZED
            </span>
            <h3 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-bk-burgundy mt-1 leading-none">
              FLAME-GRILLED BY THE CROWD
            </h3>
            <p className="text-xs sm:text-sm text-bk-burgundy/70 font-semibold max-w-lg leading-relaxed">
              Real opinions, real ratings, and genuine tweets from burger enthusiasts who refuses flat-top greasy frying. Verified user snippets updated in real time.
            </p>
          </div>

          {/* Rating aggregate display */}
          <div className="flex items-center gap-4 bg-bk-cream border-2 border-bk-burgundy p-4 sm:p-5 rounded-2xl shrink-0 shadow-sm">
            <div className="text-center">
              <span className="block text-4xl font-extrabold font-mono text-bk-burgundy leading-none">4.7 / 5</span>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-bk-burgundy/60 font-black mt-1">Excellent Score</span>
            </div>
            
            <div className="h-10 w-0.5 bg-bk-burgundy/15" />
            
            <div className="text-left space-y-1">
              {/* Stars representation */}
              <div className="flex gap-0.5 text-bk-orange animate-pulse">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[10px] uppercase font-black text-bk-burgundy">
                ★ 4.7/5 from Google Reviews
              </p>
              <p className="text-[9px] text-bk-burgundy/60 font-medium font-sans">
                Based on 45,210 online submissions
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border-4 border-bk-burgundy rounded-[24px] p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(80,35,20,0.08)] transition duration-300 relative group"
            >
              {/* Quote visual element design representation */}
              <div className="absolute top-4 right-4 text-bk-orange opacity-40 font-display text-4xl leading-none select-none">
                “
              </div>

              <div className="space-y-4">
                {/* Rating row */}
                <div className="flex gap-0.5 text-bk-orange text-xs">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {review.rating < 5 && (
                    <Star className="w-4 h-4 text-gray-300" />
                  )}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-bk-burgundy font-medium leading-relaxed italic z-10 relative">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-bk-burgundy/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-bk-burgundy/10 flex items-center justify-center text-xl shadow-inner">
                    {review.avatar}
                  </div>
                  <div className="text-left leading-tight">
                    <h5 className="font-bold text-xs uppercase text-bk-burgundy">
                      {review.author}
                    </h5>
                    <span className="text-[10px] text-bk-orange font-bold">
                      {review.handle}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-[8px] font-black uppercase text-bk-burgundy/50">
                    {review.platform}
                  </span>
                  <span className="block text-[8px] text-bk-burgundy/45 font-medium font-sans mt-0.5">
                    {review.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Conversion Trust Signals footer bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-black uppercase tracking-wider text-bk-burgundy/60">
          <div className="flex items-center gap-1.5 bg-bk-cream/50 px-3.5 py-1.5 rounded-full">
            <ThumbsUp className="w-4 h-4 text-bk-orange" />
            <span>100% Satisfaction Checked</span>
          </div>
          <div className="flex items-center gap-1.5 bg-bk-cream/50 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-bk-orange" />
            <span>Secure Checkout Pipeline</span>
          </div>
          <div className="flex items-center gap-1.5 bg-bk-cream/50 px-3.5 py-1.5 rounded-full">
            <MessageSquare className="w-4 h-4 text-bk-orange" />
            <span>Live Chat Support Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}

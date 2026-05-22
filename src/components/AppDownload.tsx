import React from "react";
import { CheckCircle2, Gift, Sparkles, Award, Smartphone } from "lucide-react";

interface AppDownloadProps {
  onSimulateDownload: () => void;
  hasDownloaded: boolean;
}

export default function AppDownload({ onSimulateDownload, hasDownloaded }: AppDownloadProps) {
  const coreBenefits = [
    {
      title: "Earn 10 Points for Every $1",
      desc: "Turn every single crown-grilled dollar into royal perks and redeem them for free food.",
    },
    {
      title: "Skip the Line & Mobile Order",
      desc: "Select curbside pickup, dine-in, or contactless drive-thru access in seconds.",
    },
    {
      title: "Whopper Wednesday Exclusives",
      desc: "Unlock secret member-only prices on signature meals, sides, and drinks every week.",
    },
    {
      title: "Unlock Born-Sizzling Badges",
      desc: "Complete fun flavor challenges to multiply your Perks balance and win crown rewards.",
    },
  ];

  return (
    <section id="loyalty" className="py-10 bg-bk-cream text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-bk-burgundy border-4 border-bk-burgundy rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(80,35,20,0.12)] relative overflow-hidden">
          {/* Decorative vector overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff872e12,transparent_60%)] pointer-events-none" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-bk-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Premium Floating Mockup */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Splendid Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-bk-orange to-amber-500 rounded-[48px] blur-xl opacity-40 animate-pulse" />

              {/* Core Smartphone Frame Layout */}
              <div className="relative bg-black rounded-[44px] p-3.5 shadow-2xl border-4 border-neutral-800">
                
                {/* Speaker Grill / Dynamic Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-neutral-900 rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                  <div className="w-10 h-1 bg-neutral-800 rounded-full" />
                </div>

                {/* Simulated Screen */}
                <div className="bg-bk-cream text-bk-burgundy rounded-[32px] overflow-hidden min-h-[460px] flex flex-col justify-between font-sans border border-black/10 select-none pb-4">
                  
                  {/* Smartphone In-App Header */}
                  <div className="bg-bk-burgundy text-bk-cream px-4 pt-7 pb-4 rounded-b-3xl relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-5 h-5 text-bk-orange animate-bounce" />
                        <span className="font-display uppercase text-xs tracking-wider">ROYAL PERKS</span>
                      </div>
                      <div className="bg-bk-orange text-bk-burgundy text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                        VIP GOLD
                      </div>
                    </div>

                    {/* Smartphone Balance UI Mockup */}
                    <div className="mt-4 text-center">
                      <p className="text-[10px] uppercase text-bk-cream/70 tracking-widest font-bold">Your Balance</p>
                      <h4 id="simulate-pts-display" className="text-3xl font-black font-display text-bk-orange mt-0.5">
                        {hasDownloaded ? "750" : "0"} <span className="text-xs text-white">POINTS</span>
                      </h4>
                    </div>

                    {/* Dynamic coupon reward ticker */}
                    <div className="mt-3 bg-bk-dark/60 border border-bk-orange/30 p-2 rounded-xl text-center">
                      <p className="text-[9px] text-bk-orange uppercase tracking-wider font-extrabold flex items-center justify-center gap-1">
                        <Gift className="w-3 h-3 text-bk-orange" />
                        <span>ACTIVE COUPON REWARD</span>
                      </p>
                      <p className="text-xs font-black text-white uppercase mt-0.5 tracking-wider font-display">
                        ★ FREE FLAME-GRILLED WHOPPER ★
                      </p>
                    </div>
                  </div>

                  {/* Smartphone Body Mock Card */}
                  <div className="px-4 py-3 flex-1 flex flex-col justify-center">
                    
                    {/* Visual QR Code Scanner Container */}
                    <div className="bg-white rounded-2xl p-4 border-2 border-bk-burgundy text-center flex flex-col items-center justify-center shadow-md">
                      <div className="w-24 h-24 bg-bk-cream rounded-xl flex items-center justify-center border border-bk-burgundy/10 mb-2 relative">
                        {/* Fake QR barcode bars */}
                        <div className="grid grid-cols-5 gap-1.5 w-16 h-16 opacity-80">
                          {[...Array(25)].map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-sm ${(i % 2 === 0 && i !== 12) || i % 7 === 0 ? "bg-bk-burgundy" : "bg-transparent"}`}
                            />
                          ))}
                        </div>
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-red-500 animate-pulse" />
                      </div>
                      <p className="text-[11px] font-black uppercase text-bk-burgundy tracking-wide leading-none">
                        SCAN IN RESTAURANT TO SAVE
                      </p>
                      <p className="text-[9px] text-bk-burgundy/60 mt-1 font-bold font-sans">
                        Taps directly into the Drive-Thru checkout
                      </p>
                    </div>

                  </div>

                  {/* smartphone footer rewards tracker */}
                  <div className="px-4 space-y-2">
                    <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 border border-bk-burgundy/5 flex items-center gap-2">
                      <div className="bg-bk-orange/20 p-1.5 rounded text-bk-burgundy">
                        <Sparkles className="w-4.5 h-4.5 text-bk-orange fill-bk-orange" />
                      </div>
                      <div className="text-left text-xs leading-tight">
                        <p className="font-extrabold uppercase">Next Free Whopper</p>
                        <div className="w-full bg-bk-burgundy/15 h-1.5 rounded-full mt-1 overflow-hidden">
                          <div className="bg-bk-orange h-full rounded-full" style={{ width: hasDownloaded ? "100%" : "0%" }} />
                        </div>
                        <p className="text-[9px] text-bk-burgundy/60 mt-1">
                          {hasDownloaded ? "750/750 PTS (REDEEMABLE!)" : "Download app first (+750 PTS)"}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Simulated Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-bk-orange border-2 border-white text-bk-burgundy p-2.5 rounded-2xl shadow-xl z-20 flex gap-1.5 items-center justify-center font-display uppercase tracking-widest text-xs font-black transform -rotate-3">
                <span className="text-xl">👑</span>
                <span className="leading-tight">ROYALTY<br />APPROVED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Badges with simulate button */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left self-center">
            <div className="inline-flex items-center gap-1.5 bg-bk-orange text-bk-burgundy px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mx-auto lg:mx-0 w-max">
              <Sparkles className="w-4 h-4 text-bk-burgundy" />
              <span>THE ROYAL PERKS LOYALTY CLUB</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-none">
              JOIN ROYAL PERKS & GET <span className="text-bk-orange">750 FREE POINTS</span>
            </h2>
            
            <p className="text-sm sm:text-base text-bk-cream/80 leading-relaxed font-sans font-medium">
              Join millions of Royal Perks members saving big every meal. Download today and receive enough immediate points to claim a free flame-grilled hamburger, sides, or custom drink upgrades on us.
            </p>

            {/* Feature Bullet List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {coreBenefits.map((b, idx) => (
                <div key={idx} className="flex gap-2 p-3 bg-bk-dark/30 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-bk-orange shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-xs sm:text-sm uppercase text-bk-orange tracking-wider font-sans">
                      {b.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-bk-cream/75 mt-0.5 leading-snug">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* HIGH-CONVERSION: APP STORES CONVERSION LINKS */}
            <div className="space-y-4 pt-2">
              <p className="text-xs text-bk-cream/60 font-black uppercase tracking-widest">
                Download Apps Directly
              </p>
              
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                {/* Apple Badge Mock */}
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    onSimulateDownload();
                  }}
                  className="bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 transition shadow-md w-44 hover:scale-[1.02] transform duration-200"
                >
                  <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.15.67-2.87 1.49-.6.67-1.13 1.81-.99 2.9 1.09.08 2.21-.52 2.87-1.33z" />
                  </svg>
                  <div className="text-left leading-none font-sans">
                    <span className="block text-[9px] uppercase font-semibold text-neutral-400">Download on the</span>
                    <span className="block text-sm font-bold mt-0.5 font-sans leading-none">App Store</span>
                  </div>
                </a>

                {/* Google Play Mock */}
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    onSimulateDownload();
                  }}
                  className="bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 transition shadow-md w-44 hover:scale-[1.02] transform duration-200"
                >
                  <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M5 3.25c-.24.03-.48.15-.66.34l11.41 11.41 3.21-3.21L5 3.25M3.63 4.25C3.39 4.54 3.25 4.93 3.25 5.38v13.24c0 .45.14.84.38 1.13L15.34 11.7 3.63 4.25m12.46 8.16L4.69 19.81c.18.19.42.31.66.34l13.91-7.95-3.17-3.79M19.78 11.7l3.21-1.83c.35-.2.51-.57.41-.94-.1-.37-.42-.63-.8-.63H5.83l13.95 3.4" />
                  </svg>
                  <div className="text-left leading-none font-sans">
                    <span className="block text-[9px] uppercase font-semibold text-neutral-400">Get it on</span>
                    <span className="block text-sm font-bold mt-0.5 font-sans leading-none">Google Play</span>
                  </div>
                </a>
              </div>

              {/* Simulation CTA Block */}
              <div className="pt-2">
                <button
                  id="simulate-download-loyalty-btn"
                  onClick={onSimulateDownload}
                  className={`px-5 py-3.5 rounded-full font-sans uppercase text-xs tracking-wider font-extrabold shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer focus:outline-none ${
                    hasDownloaded
                      ? "bg-green-600 border border-white text-white"
                      : "bg-bk-orange border border-white text-bk-burgundy animate-pulse"
                  }`}
                >
                  {hasDownloaded ? "✓ Royal Perks Joined (Points Added!)" : "🎁 Link Simulation: Pre-load 750 Bonus Perks Points"}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
  );
}

import React, { useState, useEffect } from "react";
import { Clock, Flame, ArrowRight, MapPin } from "lucide-react";
import whopperImg from "../assets/images/flame_grilled_whopper_1779476290426.png";

interface HeroProps {
  onOrderNowClick: () => void;
  onFindLocationClick: () => void;
}

export default function Hero({ onOrderNowClick, onFindLocationClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14 mins, 59 seconds in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 14 * 60 + 59; // Loop back for persistent simulation of flash urgency
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="hero"
      className="relative bg-bk-cream py-6 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Flame & Hearth Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#ff872e10,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Bento Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Cell 1: Master Promo block (Spans 7 columns) */}
          <div className="lg:col-span-7 bg-bk-burgundy text-bk-cream p-6 sm:p-10 lg:p-12 rounded-[32px] border-4 border-bk-burgundy shadow-[0_12px_36px_rgba(80,35,20,0.12)] flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Background elements inside this specific tile */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-bk-orange/10 rounded-full blur-3xl animate-flicker pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-bk-orange/10 rounded-full blur-3xl animate-flicker pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              {/* Urgent Countdown Ticket inside the Bento box */}
              <div className="inline-flex items-center gap-2 bg-bk-orange font-sans font-extrabold text-bk-burgundy text-xs px-4 py-2 rounded-full border border-white shadow-md uppercase tracking-wider animate-bounce">
                <Clock className="w-4 h-4 animate-spin-slow" />
                <span>FLASH OFFER EXPIRES IN: </span>
                <span className="font-mono text-base bg-bk-burgundy text-white px-2.5 py-0.5 rounded ml-1 tracking-widest font-black leading-none">
                  {formatTime(timeLeft)}
                </span>
              </div>

              {/* Headline Title */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white uppercase leading-[0.95] drop-shadow-md">
                FLAME-GRILLED <br />
                <span className="text-bk-orange">BUY 1 GET 1</span> <br />
                FREE!
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-bk-cream/95 max-w-xl font-semibold leading-relaxed font-sans mt-2">
                Taste the difference 100% flame-grilled beef makes. No frying, no shortcuts. Order any signature Whopper today and get a second Whopper entirely free. Just have it your way!
              </p>

              {/* Interactive Customization Features list */}
              <div className="flex flex-wrap gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-sans text-bk-orange pt-1">
                <div className="flex items-center gap-1.5 bg-bk-dark/60 px-3 py-1.5 rounded-xl border border-bk-orange/30">
                  <Flame className="w-4 h-4 fill-bk-orange" />
                  <span>100% Pure Beef</span>
                </div>
                <div className="flex items-center gap-1.5 bg-bk-dark/60 px-3 py-1.5 rounded-xl border border-bk-orange/30">
                  <Flame className="w-4 h-4 fill-bk-orange" />
                  <span>Fresh Cut Vegetables</span>
                </div>
                <div className="flex items-center gap-1.5 bg-bk-dark/60 px-3 py-1.5 rounded-xl border border-bk-orange/30">
                  <Flame className="w-4 h-4 fill-bk-orange" />
                  <span>Flame-Seared Daily</span>
                </div>
              </div>
            </div>

            {/* High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 relative z-10">
              <button
                id="hero-order-now-btn"
                onClick={onOrderNowClick}
                className="w-full sm:w-auto bg-bk-orange text-bk-burgundy hover:bg-white hover:text-bk-burgundy font-display uppercase tracking-wider font-extrabold text-lg px-8 py-4.5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-find-location-btn"
                onClick={onFindLocationClick}
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:border-bk-orange hover:text-bk-orange font-display uppercase tracking-wider font-extrabold text-lg px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <MapPin className="w-5 h-5 text-bk-orange" />
                <span>Find a Location</span>
              </button>
            </div>

            {/* Sub-CTA Conversion Guarantee */}
            <p className="text-[10px] sm:text-xs text-white/50 pt-2 font-sans relative z-10 text-left">
              *App-exclusive deal. Limit 1 per customer. While supplies last. Registered trademarks applied.
            </p>
          </div>

          {/* Bento Cell 2: Image Showcase block (Spans 5 columns) */}
          <div className="lg:col-span-5 bg-white rounded-[32px] border-4 border-bk-burgundy p-6 sm:p-8 shadow-[0_12px_36px_rgba(80,35,20,0.12)] flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-tr from-bk-cream to-white min-h-[400px]">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff872e15,transparent_65%)] animate-pulse" />
            
            <div className="relative group w-full flex flex-col items-center">
              {/* Spinning/pulsing grill badge */}
              <div className="absolute -top-6 -right-2 bg-bk-orange border-4 border-bk-burgundy text-bk-burgundy rounded-full w-24 h-24 flex flex-col items-center justify-center font-display uppercase tracking-tighter leading-none transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-xl z-20">
                <span className="text-[10px] font-black">Flame</span>
                <span className="text-xl font-black">Grill</span>
                <span className="text-[10px] font-black">Since 1954</span>
              </div>

              {/* Burger high-res image visual container */}
              <div className="relative z-10 max-w-[280px] sm:max-w-[340px] lg:max-w-none transform md:hover:scale-105 transition-all duration-500 my-auto">
                <img
                  src={whopperImg}
                  alt="Burger King Flame Grilled Whopper"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(80,35,20,0.4)] filter saturate-110"
                />
              </div>

              {/* Flame shadow reflection */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-black/10 filter blur-lg rounded-full" />
            </div>

            {/* Small subtle branding footnote on the bento tile */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-bk-burgundy text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
              <span className="text-bk-orange">★</span>
              <span>100% Real Beef Patty</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

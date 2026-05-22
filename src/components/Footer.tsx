import React, { useState } from "react";
import { Mail, Shield, ShieldAlert, X, Eye, FileText, ArrowUp } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  // State-controlled text email input
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Simulate high-conversion confirmation message
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-bk-burgundy text-bk-cream relative border-t-8 border-bk-orange pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* UPPER: Branding & Email Capture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-orange-950">
          
          <div className="lg:col-span-5 text-center lg:text-left space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white leading-none">
              STAY CRIPT & FRESHLY DETAILED
            </h3>
            <p className="text-xs sm:text-sm text-bk-cream/70 font-semibold leading-relaxed">
              Subscribe to the Burger King loyalty newsletter list to get secret BOGO coupons, Whopper codes, and birthday treats delivered directly to your inbox.
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* Form state-controlled capture */}
            {isSubmitted ? (
              <div className="bg-bk-orange text-bk-burgundy border-2 border-white rounded-2xl p-5 text-center animate-in fade-in duration-300">
                <p className="font-display uppercase text-lg sm:text-xl font-black tracking-tight flex items-center justify-center gap-2">
                  <span>✓ Check your inbox!</span>
                </p>
                <p className="text-xs font-bold font-sans mt-1">
                  Your exclusive discount voucher is on its way. Use it on your next flame-grilled Whopper checkout!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for free Whopper deal..."
                    className="w-full bg-bk-dark text-white border-2 border-bk-orange rounded-xl py-3.5 px-4 text-sm font-semibold placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Mail className="absolute right-4 top-4 w-5 h-5 text-white/30" />
                </div>
                <button
                  type="submit"
                  id="footer-subscribe-btn"
                  className="bg-bk-orange hover:bg-white text-bk-burgundy font-display font-black uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Get Coupon Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* MID: Site Navigation and Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* BK Identity */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-display uppercase text-lg text-white font-black tracking-widest">
              BURGER KING®
            </h4>
            <p className="text-[11px] text-bk-cream/60 leading-relaxed font-sans max-w-xs">
              Every single beef patty we cook in our kitchens is seared over real, open-flame ceramic grates. Taste our legacy in every bite.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 text-lg">
              <span className="p-2 bg-bk-dark rounded-full hover:bg-bk-orange transition cursor-pointer select-none">🍔</span>
              <span className="p-2 bg-bk-dark rounded-full hover:bg-bk-orange transition cursor-pointer select-none">👑</span>
              <span className="p-2 bg-bk-dark rounded-full hover:bg-bk-orange transition cursor-pointer select-none">🍟</span>
              <span className="p-2 bg-bk-dark rounded-full hover:bg-bk-orange transition cursor-pointer select-none">🥤</span>
            </div>
          </div>

          {/* Quick Nav links */}
          <div className="text-center sm:text-left space-y-3">
            <h5 className="font-display uppercase text-xs font-black tracking-widest text-bk-orange">
              Our Food Menu
            </h5>
            <ul className="text-xs font-bold space-y-2 text-bk-cream/80 uppercase tracking-wider">
              <li>
                <button onClick={() => scrollToSection("menu")} className="hover:text-white hover:underline transition">
                  Flame-Grilled Burgers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("menu")} className="hover:text-white hover:underline transition">
                  Crispy Chicken Fries
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("menu")} className="hover:text-white hover:underline transition">
                  Onion Rings & Sides
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("menu")} className="hover:text-white hover:underline transition">
                  Frozen Fanta Drinks
                </button>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="text-center sm:text-left space-y-3">
            <h5 className="font-display uppercase text-xs font-black tracking-widest text-bk-orange">
              Royal loyalty perks
            </h5>
            <ul className="text-xs font-bold space-y-2 text-bk-cream/80 uppercase tracking-wider">
              <li>
                <button onClick={() => scrollToSection("loyalty")} className="hover:text-white hover:underline transition">
                  Join Royal Perks
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("deals")} className="hover:text-white hover:underline transition">
                  Exclusive App Coupons
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("stories")} className="hover:text-white hover:underline transition">
                  Flame-Grilled Heritage
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("locations")} className="hover:text-white hover:underline transition">
                  BK Mobile Store Finder
                </button>
              </li>
            </ul>
          </div>

          {/* Partner & Corporate */}
          <div className="text-center sm:text-left space-y-3">
            <h5 className="font-display uppercase text-xs font-black tracking-widest text-bk-orange">
              Parting & Careers
            </h5>
            <ul className="text-xs font-bold space-y-2 text-bk-cream/80 uppercase tracking-wider">
              <li>
                <button onClick={() => scrollToSection("opportunities")} className="hover:text-white hover:underline transition">
                  Become a Franchisee
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("opportunities")} className="hover:text-white hover:underline transition">
                  Crew member jobs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("opportunities")} className="hover:text-white hover:underline transition">
                  Corporate office routes
                </button>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white hover:underline transition">
                  Nutritional guide calculator
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM: Legal Details */}
        <div className="pt-8 border-t border-orange-950 flex flex-col md:flex-row items-center justify-between text-center gap-4 text-[10px] text-bk-cream/40 font-semibold uppercase tracking-wider">
          <p>© 2026 Burger King Corporation. All Rights Reserved. Flame-grilled since 1954.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-white transition">Privacy Commitment</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-white transition">Manage Cookies Code</a>
            <span>•</span>
            <button
              onClick={() => scrollToSection("hero")}
              className="bg-bk-dark text-bk-cream hover:bg-bk-orange p-1.5 rounded-full flex items-center justify-center transition border border-white/5 cursor-pointer focus:outline-none"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* INLINE COOKIE CONSENT LAYOUT NOTICE */}
      {!cookieConsentAccepted && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-40 bg-bk-cream text-bk-burgundy border-4 border-bk-burgundy rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-start gap-3">
            <div className="bg-bk-orange text-bk-burgundy p-2 rounded-xl mt-0.5">
              <Eye className="w-5 h-5 shrink-0" />
            </div>
            
            <div className="text-left space-y-1">
              <h6 className="font-display uppercase text-sm font-black leading-tight">
                CROWN COOKIE PRIVACY NOTICE
              </h6>
              <p className="text-[10px] sm:text-xs text-bk-burgundy/80 leading-normal font-sans">
                We utilize essential cookies to keep your dynamic shopping cart saved and map results persistent across visits.
              </p>
              
              <div className="flex items-center gap-2 pt-2">
                <button
                  id="accept-cookie-btn"
                  onClick={() => setCookieConsentAccepted(true)}
                  className="bg-bk-burgundy hover:bg-bk-orange text-white hover:text-bk-burgundy font-display uppercase text-[10px] font-black py-1.5 px-3 rounded-lg transition cursor-pointer"
                >
                  Accept Royal Terms
                </button>
                <button
                  onClick={() => setCookieConsentAccepted(true)}
                  className="text-[10px] text-bk-burgundy/50 hover:text-bk-burgundy font-bold uppercase tracking-wider"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}

import React, { useState } from "react";
import { Building, Users, Briefcase, ChevronRight, X, Sparkles } from "lucide-react";

export default function FranchiseCareers() {
  const [activeFormType, setActiveFormType] = useState<"franchise" | "career" | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Form states
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [extraInput, setExtraInput] = useState(""); // capital or shift role preference

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setActiveFormType(null);
      setNameInput("");
      setEmailInput("");
      setExtraInput("");
    }, 3000);
  };

  return (
    <section id="opportunities" className="py-16 bg-bk-cream text-bk-burgundy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-bk-orange font-bold uppercase tracking-widest text-xs">
            GROW WITH THE QUEEN & KING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-bk-burgundy mt-1">
            PARTNER & JOBS OPPORTUNITIES
          </h2>
          <p className="text-xs sm:text-sm text-bk-burgundy/70 font-semibold mt-2">
            Whether you are looking to invest in a multi-unit territory or launch your career in restaurant management, we support your progress at every milestone.
          </p>
        </div>

        {/* Balanced two-card split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card A: Franchise */}
          <div className="bg-white border-4 border-bk-burgundy rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group shadow-[0_8px_24px_rgba(80,35,20,0.06)]">
            <div className="space-y-4">
              <div className="bg-bk-burgundy text-white w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-bk-orange shadow-md group-hover:scale-105 transition-transform duration-300">
                <Building className="w-7 h-7 text-bk-orange" />
              </div>
              
              <span className="text-xs font-black uppercase text-bk-orange tracking-widest block">
                GLOBAL OPERATIONS
              </span>

              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-bk-burgundy">
                FRANCHISE GROWTH
              </h3>

              <p className="text-xs sm:text-sm text-bk-burgundy/80 font-medium leading-relaxed font-sans">
                Become a territorial owner in a world-recognized franchise legacy. We provide robust operational playbooks, active supply chains, and extensive marketing power representing Burger King's iconic flame-grilled brand.
              </p>

              <div className="bg-white/80 border border-bk-burgundy/10 p-3 rounded-xl text-[11px] font-semibold text-bk-burgundy/80 space-y-1">
                <p>• Initial Capital requirement: $500,000 liquid assets</p>
                <p>• Co-operative national marketing network support</p>
                <p>• Real Estate acquisition & site selection support</p>
              </div>
            </div>

            <button
              id="franchise-request-btn"
              onClick={() => {
                setSubmittedMessage(false);
                setActiveFormType("franchise");
              }}
              className="mt-6 w-full bg-bk-burgundy hover:bg-bk-orange text-white hover:text-bk-burgundy font-display font-black uppercase tracking-wider text-xs py-3.5 px-5 rounded-xl shadow-md transition duration-300 flex items-center justify-between cursor-pointer focus:outline-none"
            >
              <span>Request Investor Prospectus</span>
              <ChevronRight className="w-4 h-4 text-bk-orange" />
            </button>
          </div>

          {/* Card B: Careers */}
          <div className="bg-white border-4 border-bk-burgundy rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group shadow-[0_8px_24px_rgba(80,35,20,0.06)]">
            <div className="space-y-4">
              <div className="bg-bk-orange text-bk-burgundy w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <Briefcase className="w-7 h-7" />
              </div>

              <span className="text-xs font-black uppercase text-bk-burgundy/60 tracking-widest block">
                JOIN THE CREW
              </span>

              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-bk-burgundy">
                CAREERS & JOBS
              </h3>

              <p className="text-xs sm:text-sm text-bk-burgundy/80 font-medium leading-relaxed font-sans">
                Ready to wear the crown? Join our kitchen crews as open-flame specialists or hospitality leaders on the frontlines. We offer competitive wages, flexible shifts, free meals, and swift career advancement channels.
              </p>

              <div className="bg-white/80 border border-bk-burgundy/10 p-3 rounded-xl text-[11px] font-semibold text-bk-burgundy/80 space-y-1">
                <p>• Shift leaders, Crew Grillers, & Managers needed</p>
                <p>• Flexible hours matching high-school/college schedules</p>
                <p>• Premium 50% discount & daily free meals on shift</p>
              </div>
            </div>

            <button
              id="career-apply-btn"
              onClick={() => {
                setSubmittedMessage(false);
                setActiveFormType("career");
              }}
              className="mt-6 w-full bg-bk-burgundy hover:bg-bk-orange text-white hover:text-bk-burgundy font-display font-black uppercase tracking-wider text-xs py-3.5 px-5 rounded-xl shadow-md transition duration-300 flex items-center justify-between cursor-pointer focus:outline-none"
            >
              <span>Apply Online in 60 Seconds</span>
              <ChevronRight className="w-4 h-4 text-bk-orange" />
            </button>
          </div>

        </div>

      </div>

      {/* Career or Franchise interactive form modal */}
      {activeFormType && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-bk-cream border-4 border-bk-burgundy max-w-md w-full rounded-3xl p-6 text-left space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setActiveFormType(null)}
              className="absolute top-4 right-4 bg-bk-burgundy text-white hover:bg-bk-orange hover:text-bk-burgundy p-1.5 rounded-full transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submittedMessage ? (
              <div className="text-center py-8 space-y-3">
                <div className="bg-green-100 text-green-800 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="text-xl font-black font-display uppercase tracking-tight">
                  APPLICATION RECIEVED!
                </h4>
                <p className="text-xs text-bk-burgundy/70 font-sans">
                  Thank you! Our recruitment core team will follow up on your submission in 24 hours. Get ready to sizzle!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-bk-orange">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeFormType === "franchise" ? "Investor Application" : "Express Job Application"}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-bk-burgundy">
                  {activeFormType === "franchise" ? "Inquire Franchise" : "Get a Shift Job"}
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-bk-burgundy/60 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="e.g. Terry Whooper"
                      className="w-full bg-white border-2 border-bk-burgundy rounded-xl p-3 text-sm font-semibold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-bk-burgundy/60 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="e.g. terry@example.com"
                      className="w-full bg-white border-2 border-bk-burgundy rounded-xl p-3 text-sm font-semibold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-bk-burgundy/60 mb-1">
                      {activeFormType === "franchise" ? "Estimated Liquid Capital" : "Preferred Shift Type"}
                    </label>
                    <input
                      type="text"
                      required
                      value={extraInput}
                      onChange={(e) => setExtraInput(e.target.value)}
                      placeholder={activeFormType === "franchise" ? "e.g. $600,000 Liquid" : "e.g. Part-Time Weekends"}
                      className="w-full bg-white border-2 border-bk-burgundy rounded-xl p-3 text-sm font-semibold focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bk-orange text-bk-burgundy border-2 border-bk-burgundy hover:bg-bk-burgundy hover:text-white text-sm font-display font-extrabold uppercase py-3.5 rounded-xl transition duration-200 cursor-pointer focus:outline-none"
                >
                  Send Express Submission
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from "react";
import { History, Trees, Award, Globe, Leaf, ChevronRight, X } from "lucide-react";

export default function BrandStory() {
  const [activeModalTopic, setActiveModalTopic] = useState<string | null>(null);

  const modalContents: Record<string, { title: string; content: string; bullet: string }> = {
    history: {
      title: "Our Heritage: Born Sizzling",
      content: "Since our very first restaurant opened in Miami, Florida in 1954, Burger King has pioneered the open-flame grill method. While other chains chose flat-top griddles, we committed to real fire. Over 70 years later, we still sear every single burger over red-hot ceramic flames, preserving the smoky barbecue flavor that makes a Whopper a Whopper.",
      bullet: "Founded: 1954 • Over 18,000 global restaurants today",
    },
    beef: {
      title: "Real Beef, Real Ingredients",
      content: "Having it your way means staying honest. Our beef patties are made with 100% real beef, with absolutely zero fillers, zero preservatives, and zero artificial colorings. We slice fresh tomatoes, crispy lettuce, yellow onions, and crunchy pickles daily in-house to make sure you get authentic backyard barbecue freshness in every single bite.",
      bullet: "100% Pure Beef • Freshly cut local produce daily",
    },
    ecology: {
      title: "Ecology & Sustainable Commitment",
      content: "We believe in burgers that protect our home planet. Burger King is actively transitioning to 100% recycled packaging across all global sites by 2028. We are committed to responsibly sourcing beef, partnering with local ranchers adhering to deforestation-free practices, and reducing greenhouse gas indices across our supply chains.",
      bullet: "Eco-friendly recyclable packaging • Ethical ranches",
    },
  };

  return (
    <section id="stories" className="py-16 md:py-24 bg-bk-cream text-bk-burgundy border-y-4 border-bk-burgundy overflow-hidden relative">
      {/* Decorative fire back glows */}
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-bk-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Bold Copy Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-bk-burgundy text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              <History className="w-4 h-4 text-bk-orange" />
              <span>ESTABLISHED IN MIAMI, 1954</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-display uppercase tracking-tight text-bk-burgundy leading-none">
              FLAME-GRILLED <span className="text-bk-orange">SINCE 1954</span>
            </h2>

            <p className="text-sm sm:text-base text-bk-burgundy/85 leading-relaxed font-sans font-medium">
              For over seven decades, we have held fast to a single, sacred rule: **fire makes it taste better**. While others take shortcuts with high-speed commercial frying griddles, we fire-grill our beef on custom rolling grates. This locks in authentic smoky juices and filters away excess fats, giving you the backyard grill experience you crave, on demand.
            </p>

            <div className="border-l-4 border-bk-orange pl-4 py-1 bg-white/50 rounded-r-xl">
              <p className="text-xs sm:text-sm font-bold text-bk-burgundy italic">
                “We don't fry it. We grill it. And we let you have it your way, every single day.”
              </p>
            </div>

            {/* Interactive dummy hyperlinks targeting our content topics */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => setActiveModalTopic("history")}
                className="bg-white hover:bg-bk-burgundy hover:text-white border-2 border-bk-burgundy font-display uppercase text-xs font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-between gap-2 cursor-pointer focus:outline-none"
              >
                <span>Read Our History</span>
                <ChevronRight className="w-4 h-4 text-bk-orange" />
              </button>

              <button
                onClick={() => setActiveModalTopic("beef")}
                className="bg-white hover:bg-bk-burgundy hover:text-white border-2 border-bk-burgundy font-display uppercase text-xs font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-between gap-2 cursor-pointer focus:outline-none"
              >
                <span>Pure Recipe Trust</span>
                <ChevronRight className="w-4 h-4 text-bk-orange" />
              </button>

              <button
                onClick={() => setActiveModalTopic("ecology")}
                className="bg-white hover:bg-bk-burgundy hover:text-white border-2 border-bk-burgundy font-display uppercase text-xs font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-between gap-2 cursor-pointer focus:outline-none"
              >
                <span>Eco & Sustainability</span>
                <ChevronRight className="w-4 h-4 text-bk-orange" />
              </button>
            </div>
          </div>

          {/* Right Block: Asymmetric Visual Value Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Value Card 1 */}
            <div className="bg-white border-4 border-bk-burgundy rounded-[24px] p-5 space-y-3 shadow-md hover:scale-[1.02] transform transition duration-300">
              <div className="bg-bk-orange/20 w-12 h-12 rounded-xl flex items-center justify-center text-bk-burgundy">
                <Award className="w-6 h-6 text-bk-orange fill-bk-orange" />
              </div>
              <h4 className="font-display uppercase text-lg font-black tracking-tight">100% Real Beef</h4>
              <p className="text-xs text-bk-burgundy/80 leading-relaxed font-semibold">
                No fillers, no preservatives, and absolutely zero artificial colors. Pure beef flame-cooked on our signature hearths.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-bk-orange border-4 border-bk-burgundy rounded-[24px] p-5 space-y-3 shadow-md hover:scale-[1.02] transform transition duration-300 sm:translate-y-6">
              <div className="bg-white/30 w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <Trees className="w-6 h-6 text-bk-burgundy" />
              </div>
              <h4 className="font-display uppercase text-lg font-black tracking-tight text-bk-burgundy">Green Pledges</h4>
              <p className="text-xs text-bk-burgundy/90 leading-relaxed font-semibold">
                Our global packaging roadmap leads to 100% recycled or certified sustainable packages to decrease carbon indices.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white border-4 border-bk-burgundy rounded-[24px] p-5 space-y-3 shadow-md hover:scale-[1.02] transform transition duration-300">
              <div className="bg-bk-burgundy/10 w-12 h-12 rounded-xl flex items-center justify-center text-bk-burgundy">
                <Leaf className="w-6 h-6 text-bk-burgundy" />
              </div>
              <h4 className="font-display uppercase text-lg font-black tracking-tight">Fresh Produce</h4>
              <p className="text-xs text-bk-burgundy/80 leading-relaxed font-semibold">
                Whole onions, fresh lettuce, and tomatoes delivered and sliced by hands inside our kitchens every single sunrise.
              </p>
            </div>

            {/* Value Card 4 */}
            <div className="bg-bk-darkcream border-4 border-bk-burgundy rounded-[24px] p-5 space-y-3 shadow-md hover:scale-[1.02] transform transition duration-300 sm:translate-y-6">
              <div className="bg-white/40 w-12 h-12 rounded-xl flex items-center justify-center text-bk-burgundy">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-display uppercase text-lg font-black tracking-tight text-bk-burgundy">Local Sourcing</h4>
              <p className="text-xs text-bk-burgundy/80 leading-relaxed font-semibold">
                Partnered directly with trusted American cattle farms and valley farming cooperatives for premium local taste.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Modal Overlay for Brand details */}
      {activeModalTopic && modalContents[activeModalTopic] && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-bk-cream border-4 border-bk-burgundy max-w-xl w-full rounded-3xl p-6 sm:p-8 text-left space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setActiveModalTopic(null)}
              className="absolute top-4 right-4 bg-bk-burgundy text-white hover:bg-bk-orange hover:text-bk-burgundy p-1.5 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="bg-bk-orange text-bk-burgundy font-sans text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
              Verified Brand detail
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-bk-burgundy">
              {modalContents[activeModalTopic].title}
            </h3>

            <p className="text-sm font-semibold text-bk-burgundy/90 leading-relaxed">
              {modalContents[activeModalTopic].content}
            </p>

            <div className="bg-white border border-bk-burgundy/15 p-3 rounded-lg text-xs font-black uppercase tracking-wider text-bk-orange">
              {modalContents[activeModalTopic].bullet}
            </div>

            <div className="pt-4 border-t border-bk-burgundy/10 text-right">
              <button
                onClick={() => setActiveModalTopic(null)}
                className="bg-bk-burgundy hover:bg-bk-orange hover:text-bk-burgundy text-white text-xs font-display font-bold py-2.5 px-5 rounded-lg uppercase tracking-wider cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

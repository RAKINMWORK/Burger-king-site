import React, { useState } from "react";
import { Plus, Check, Flame, Star, Award } from "lucide-react";
import { MenuItem } from "../types";

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, extraCheese: boolean) => void;
}

export default function MenuSection({ items, onAddToCart }: MenuSectionProps) {
  // Category state
  const [activeCategory, setActiveCategory] = useState<"Burgers" | "Chicken" | "Sides" | "Drinks">("Burgers");
  
  // Customization state for each item (id -> double extra cheese boolean)
  const [cheeseMap, setCheeseMap] = useState<Record<string, boolean>>({});

  const categories: ("Burgers" | "Chicken" | "Sides" | "Drinks")[] = [
    "Burgers",
    "Chicken",
    "Sides",
    "Drinks",
  ];

  // Filter items based on active tab
  const filteredItems = items.filter((item) => item.category === activeCategory);

  const toggleCheese = (itemId: string) => {
    setCheeseMap((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-bk-cream text-bk-burgundy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Flame Branding */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-bk-burgundy text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 fill-bk-orange text-bk-orange" />
            <span>CRISP & FRESH MENU</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display uppercase tracking-tight text-bk-burgundy leading-none">
            EXPLORE THE FLAME-GRILLED MENU
          </h2>
          <p className="text-sm sm:text-base text-bk-burgundy/80 mt-3 font-semibold">
            Every burger is seared over real open flames. Every side is crisped to perfection. Customize each item to your exact specifications.
          </p>
        </div>

        {/* Centered Tab Selection Filter System */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2.5 sm:p-3 border-4 border-bk-burgundy rounded-[40px] flex flex-wrap justify-center gap-1.5 shadow-[0_8px_20px_rgba(80,35,20,0.06)] max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-[30px] font-display uppercase tracking-wider text-xs sm:text-sm font-black transition-all duration-300 ${
                    isActive
                      ? "bg-bk-burgundy text-white shadow-md border-b-4 border-bk-orange"
                      : "bg-transparent text-bk-burgundy hover:bg-bk-cream hover:text-bk-burgundy"
                  } focus:outline-none cursor-pointer`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic responsive grid system (1 on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const hasCheeseCustomization = cheeseMap[item.id] || false;
            const extraCheesePrice = 0.6;
            const finalPrice = hasCheeseCustomization ? item.price + extraCheesePrice : item.price;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border-4 border-bk-burgundy p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Special Bestseller or New Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                  {item.isBestseller && (
                    <span className="bg-bk-orange text-bk-burgundy text-[10px] sm:text-xs font-black uppercase px-3 py-1.5 rounded-full border border-white flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-bk-burgundy" />
                      <span>BESTSELLER</span>
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-bk-burgundy text-white text-[10px] sm:text-xs font-black uppercase px-3 py-1.5 rounded-full border border-bk-orange flex items-center gap-1 shadow-md animate-pulse">
                      <Award className="w-3 h-3 text-bk-orange" />
                      <span>NEW FAVORITE</span>
                    </span>
                  )}
                </div>

                {/* Card Visual Body */}
                <div>
                  {/* Image render using premium emojis inside stylized concentric BK flame circles */}
                  <div className="relative h-44 w-full bg-bk-cream rounded-2xl flex items-center justify-center mb-5 overflow-hidden group-hover:bg-bk-darkcream/50 transition-colors duration-300 border-2 border-dashed border-bk-burgundy/10">
                    {/* Ring Accents */}
                    <div className="absolute inset-2 border border-bk-burgundy/5 rounded-full animate-spin-slow pointer-events-none" />
                    
                    {/* Huge centered illustration/emoji */}
                    <span className="text-7xl sm:text-8xl drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 select-none">
                      {item.image}
                    </span>

                    {/* Calorie Count Label */}
                    <div className="absolute bottom-3 right-3 bg-bk-dark/80 text-white font-mono font-bold text-[11px] px-2.5 py-1 rounded-md opacity-90">
                      {item.calories} KCAL
                    </div>
                  </div>

                  {/* Item Text Information */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-bk-burgundy truncate leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-bk-burgundy/60 font-semibold uppercase tracking-wider">
                      {item.category === "Burgers" ? "Flame-Grilled Patty" : item.category === "Chicken" ? "Premium Crispy Breast" : item.category === "Sides" ? "Fresh Golden Basket" : "Ice Cold Refreshment"}
                    </p>
                  </div>
                </div>

                {/* Customization controls & Add to Cart button */}
                <div className="mt-5 pt-4 border-t border-bk-burgundy/10 space-y-4">
                  {/* HIGH IMPACT: Custom interactive checkbox toggle preview for extra cheese */}
                  <label
                    className="flex items-center gap-3 cursor-pointer select-none bg-bk-cream hover:bg-bk-darkcream/60 py-2.5 px-3 rounded-lg border border-bk-burgundy/15 transition-all w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={hasCheeseCustomization}
                        onChange={() => toggleCheese(item.id)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 border-bk-burgundy flex items-center justify-center transition-colors ${
                        hasCheeseCustomization ? "bg-bk-orange" : "bg-white"
                      }`}>
                        {hasCheeseCustomization && <Check className="w-3.5 h-3.5 text-bk-burgundy stroke-[3.5]" />}
                      </div>
                    </div>
                    <div className="text-left leading-none">
                      <span className="font-bold text-xs uppercase tracking-wider text-bk-burgundy block">
                        Have It Your Way
                      </span>
                      <span className="text-[10px] text-bk-burgundy/70 mt-0.5 block font-bold font-sans">
                        +Extra Cheese (+$0.60)
                      </span>
                    </div>
                  </label>

                  {/* Actions & Price display row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-left">
                      <p className="text-[10px] text-bk-burgundy/60 font-extrabold uppercase tracking-widest leading-none">Price</p>
                      <p className="text-2xl font-black text-bk-burgundy font-mono leading-tight mt-0.5">
                        ${finalPrice.toFixed(2)}
                      </p>
                    </div>

                    {/* Direct Add To Cart button */}
                    <button
                      id={`add-to-cart-${item.id}`}
                      onClick={() => onAddToCart(item, hasCheeseCustomization)}
                      className="flex-1 bg-bk-burgundy hover:bg-bk-orange text-white hover:text-bk-burgundy font-display font-black uppercase tracking-wider text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md space-x-1.5 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center cursor-pointer focus:outline-none"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Direct Add To Cart</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

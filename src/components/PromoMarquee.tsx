import React from "react";

export default function PromoMarquee() {
  const promoItems = [
    "🔥 APP EXCLUSIVE: $3 WHOPPER WEDNESDAY!",
    "🍟 FLASH SALE: FREE LARGE FRIES WITH ANY $1 PURCHASE!",
    "👑 REGISTER FOR ROYAL PERKS: GET 750 BONUS POINTS INSTANTLY!",
    "🥤 ICE COLD FROZEN FANTA WILD CHERRY ONLY $2!",
    "🥓 GET THE BACON KING MEAL BUNDLE FOR JUST $8.49!",
    "🍗 BK ROYAL CRISPY CHICKEN: HAVE IT YOUR WAY!",
  ];

  // Double the list to ensure seamless transition in horizontal looping scroll spacing
  const doubleList = [...promoItems, ...promoItems];

  return (
    <section id="deals" className="mx-4 sm:mx-6 lg:mx-8 my-4 bg-bk-orange border-4 border-bk-burgundy text-bk-burgundy py-4 rounded-[24px] overflow-hidden select-none relative z-20 shadow-[0_4px_12px_rgba(80,35,20,0.08)]">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-display text-sm sm:text-base font-black uppercase tracking-widest leading-none">
          {doubleList.map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="text-white">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

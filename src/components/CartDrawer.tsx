import React, { useState } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2, Flame, Gift, ArrowRight } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  userPoints: number;
  onAddPoints: (amount: number) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  userPoints,
  onAddPoints,
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "cooking" | "complete">("cart");
  const [cookingProgress, setCookingProgress] = useState(0);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // High conviction deals
  const hasFreeFriesDeal = subtotal >= 1.0; // matched our $1 threshold coupon
  const deliveryFee = subtotal > 15 || subtotal === 0 ? 0.0 : 3.49;
  const royalDiscount = subtotal > 10 ? 1.5 : 0.0;
  const total = Math.max(0, subtotal + deliveryFee - royalDiscount);

  // Simulate real-time open-grill cooking flow
  const handleCheckout = () => {
    setCheckoutStep("cooking");
    setCookingProgress(0);

    const interval = setInterval(() => {
      setCookingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCheckoutStep("complete");
          // Award 150 points for completing a purchase! High converting action rewards!
          onAddPoints(150);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const resetFlow = () => {
    onClearCart();
    setCheckoutStep("cart");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Drawer Backdrop Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={checkoutStep === "cooking" ? undefined : onClose}
      />

      {/* Drawer Container Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-bk-cream border-l-4 border-bk-burgundy text-bk-burgundy shadow-2xl flex flex-col justify-between">
          
          {/* Header Panel */}
          <div className="p-6 bg-bk-burgundy text-white border-b-4 border-bk-orange flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-bk-orange" />
              <h3 className="text-xl font-black font-display uppercase tracking-wider">
                {checkoutStep === "cart" ? "YOUR ROYAL BASKET" : checkoutStep === "cooking" ? "Open-Grill Cooking" : "ORDER SEARED!"}
              </h3>
            </div>
            {checkoutStep !== "cooking" && (
              <button
                onClick={onClose}
                className="text-white hover:text-bk-orange p-1 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Body content based on checkout step state */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {checkoutStep === "cart" && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <span className="text-6xl block select-none">🍔</span>
                    <h4 className="text-xl font-black font-display uppercase tracking-wider text-bk-burgundy/50">
                      YOUR BASKET IS STARVING
                    </h4>
                    <p className="text-xs text-bk-burgundy/60 max-w-xs mx-auto font-medium">
                      You haven't added any flame-grilled premium burgers or snacks yet. Visit our interactive order menu below and load up!
                    </p>
                    <button
                      onClick={onClose}
                      className="inline-block bg-bk-orange text-bk-burgundy font-display font-extrabold uppercase text-xs py-3 px-6 rounded-full border border-white"
                    >
                      Browse Menu Now
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-black uppercase text-bk-burgundy/60 border-b border-bk-burgundy/10 pb-2">
                      <span>Item Details</span>
                      <span>Total Price</span>
                    </div>

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border-2 border-bk-burgundy rounded-2xl p-4 flex gap-4 justify-between relative group shadow-sm"
                      >
                        {/* Remove item button */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-3 right-3 text-bk-burgundy/40 hover:text-red-600 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="flex gap-3 text-left">
                          <span className="text-4xl select-none bg-bk-cream rounded-xl p-2 h-14 w-14 flex items-center justify-center border border-bk-burgundy/10 shrink-0">
                            {item.menuItem.image}
                          </span>
                          
                          <div>
                            <h5 className="font-display uppercase text-base font-black text-bk-burgundy truncate max-w-[170px] leading-tight">
                              {item.menuItem.name}
                            </h5>
                            
                            <p className="text-[10px] text-bk-burgundy/50 font-bold uppercase tracking-wider mt-0.5">
                              Base: ${item.menuItem.price.toFixed(2)}
                            </p>

                            {/* Options list */}
                            {item.customized.extraCheese && (
                              <span className="inline-block bg-bk-orange/20 text-bk-burgundy text-[9px] font-black uppercase px-2 py-0.5 rounded border border-bk-orange mt-1">
                                +EXTRA CHEESE (+0.60)
                              </span>
                            )}

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-3 bg-bk-cream w-max rounded-lg border border-bk-burgundy/10 p-1">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="bg-white text-bk-burgundy rounded hover:bg-bk-darkcream p-1 text-xs font-extrabold focus:outline-none"
                              >
                                <Minus className="w-3.5 h-3.5 stroke-[3]" />
                              </button>
                              <span className="font-mono text-xs font-bold px-2">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="bg-white text-bk-burgundy rounded hover:bg-bk-darkcream p-1 text-xs font-extrabold focus:outline-none"
                              >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                              </button>
                            </div>

                          </div>
                        </div>

                        <div className="text-right flex flex-col justify-end">
                          <p className="font-mono font-bold text-sm text-bk-burgundy pr-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* FREE FRIES PROMOTION BANNER */}
                    {hasFreeFriesDeal && (
                      <div className="bg-bk-orange/15 border-2 border-dashed border-bk-orange p-3 rounded-2xl flex items-center gap-2.5 text-bk-burgundy">
                        <Gift className="w-5 h-5 text-bk-orange shrink-0 fill-bk-orange" />
                        <div className="text-left text-[11px] font-semibold leading-normal">
                          <p className="font-extrabold uppercase">✓ FREE LARGE FRIES UNLOCKED!</p>
                          <p className="opacity-80">You exceeded $1 in online basket subtotal. Free Large Fries added to delivery order.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {checkoutStep === "cooking" && (
              <div className="text-center py-16 space-y-6">
                <div className="relative inline-block">
                  <span className="text-8xl block select-none animate-bounce">🔥</span>
                  <div className="absolute inset-0 bg-bk-orange/30 rounded-full filter blur-xl animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-black font-display uppercase tracking-tight">
                    CROWN HEARTH COOKING...
                  </h4>
                  <p className="text-xs text-bk-burgundy/70 max-w-xs mx-auto font-medium font-sans">
                    We are searing your pure beef patties over red-hot ceramic flames. Flipping bun grids to lock in born-sizzling smokey juices!
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1 max-w-xs mx-auto">
                  <div className="flex justify-between text-[10px] font-black uppercase text-bk-burgundy/60">
                    <span>Grill Heat: 700°F</span>
                    <span>{cookingProgress}%</span>
                  </div>
                  <div className="w-full bg-bk-burgundy/15 h-3 rounded-full overflow-hidden border border-bk-burgundy/10">
                    <div
                      className="bg-bk-orange h-full rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${cookingProgress}%` }}
                    />
                  </div>
                </div>

                <div className="bg-white border-2 border-bk-burgundy p-3.5 rounded-xl inline-block max-w-[240px] text-left text-[10px] font-mono whitespace-pre text-neutral-600 shadow-inner">
                  <span>[SYSTEM COMMENCED...]</span><br />
                  <span>&gt; PATTY FED TO HEARTH GRID</span><br />
                  <span>&gt; MELTING CHEDDAR CHEESE</span><br />
                  <span>&gt; BUN SEARING APPLIED</span>
                </div>
              </div>
            )}

            {checkoutStep === "complete" && (
              <div className="text-center py-12 space-y-6">
                <div className="bg-green-600 border-4 border-bk-burgundy p-3 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-4xl shadow-lg relative">
                  <span className="animate-pulse">👑</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-3xl font-black font-display uppercase tracking-tight text-green-700">
                    DIAL SIZZLED!
                  </h4>
                  <p className="text-xs text-bk-burgundy/90 max-w-xs mx-auto font-bold font-sans">
                    Order has been processed successfully. Your burger is wrapped in foil to keep the flame heat trapped!
                  </p>
                </div>

                {/* Receipt simulation */}
                <div className="bg-white border-4 border-bk-burgundy rounded-2xl p-4 text-left max-w-xs mx-auto space-y-3 font-mono text-[11px] shadow-md relative">
                  {/* Jagged paper cut effect decoration */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-bk-cream to-white opacity-40" />
                  
                  <div className="text-center pb-2 border-b-2 border-dashed border-bk-burgundy/20">
                    <p className="font-bold text-xs uppercase font-display select-none">BURGER KING OFFICIAL</p>
                    <p className="text-[9px] text-gray-500 font-sans mt-0.5">KITCHEN SLIP #1954-BK</p>
                  </div>

                  <div className="space-y-1.5 py-1">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between font-semibold">
                        <span>{item.quantity}x {item.menuItem.name.split(" ")[0]}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    {hasFreeFriesDeal && (
                      <div className="flex justify-between text-bk-orange font-bold">
                        <span>1x DEAL: Large Fries</span>
                        <span>FREE</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-dashed border-bk-burgundy/20 space-y-1 text-gray-600 text-[10px]">
                    <div className="flex justify-between">
                      <span>Delivery Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Store Tax (8.25%):</span>
                      <span>${(subtotal * 0.0825).toFixed(2)}</span>
                    </div>
                    {royalDiscount > 0 && (
                      <div className="flex justify-between text-green-700 font-bold">
                        <span>Royal Gold Promo:</span>
                        <span>-${royalDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-bk-burgundy text-xs pt-1 border-t border-bk-burgundy/10">
                      <span>TOTAL BILLED:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-bk-orange/15 text-bk-burgundy p-2.5 rounded text-center border border-bk-orange font-sans leading-none">
                    <p className="font-extrabold text-[10px] uppercase">👑 VIP PERKS POINTS EARNED</p>
                    <p className="text-sm font-black mt-1">+150 POINTS!</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetFlow}
                    className="w-full bg-bk-burgundy hover:bg-bk-orange hover:text-bk-burgundy text-white font-display font-black uppercase tracking-wider text-xs py-4 px-6 rounded-xl shadow-md transition cursor-pointer"
                  >
                    Start A New Fresh Order
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Footer block holding total calculations (visible only in cart mode) */}
          {checkoutStep === "cart" && cart.length > 0 && (
            <div className="bg-white border-t-4 border-bk-burgundy p-6 space-y-4">
              <div className="space-y-1.5 text-xs font-semibold uppercase tracking-wider text-bk-burgundy/80">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-mono text-sm h-none">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Simulated Delivery Fee</span>
                  <span className="font-mono text-sm">
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                {royalDiscount > 0 && (
                  <div className="flex justify-between text-green-700 font-extrabold">
                    <span>Royal Perks Gold Discount</span>
                    <span className="font-mono text-sm">-${royalDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-bk-burgundy/10 flex justify-between text-bk-burgundy font-black text-sm">
                  <span>ESTIMATED TOTAL</span>
                  <span className="font-mono text-lg text-bk-burgundy">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order CTA Button */}
              <button
                id="place-order-checkout-btn"
                onClick={handleCheckout}
                className="w-full bg-bk-orange text-bk-burgundy hover:bg-bk-burgundy hover:text-white font-display font-black uppercase tracking-wider text-sm py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <span>Flame-Grill My Order Now</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              
              <p className="text-[10px] text-center text-gray-500 font-sans font-medium">
                Payments are simulated for development test mode. No real money charged.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { ShoppingBag, MapPin, Menu, X, Flame, Award } from "lucide-react";
import { CartItem, RestaurantLocation } from "../types";

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  selectedStore: RestaurantLocation | null;
  scrollToSection: (id: string) => void;
  userPoints: number;
}

export default function Header({
  cart,
  onOpenCart,
  selectedStore,
  scrollToSection,
  userPoints,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate total items in cart
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-4 z-40 mx-4 sm:mx-6 lg:mx-8 my-4 bg-bk-burgundy text-bk-cream border-4 border-bk-orange rounded-[24px] shadow-[0_12px_32px_rgba(80,35,20,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Design */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-left focus:outline-none group"
            >
              <div className="bg-bk-orange p-2 rounded-full border-2 border-white shadow-md transform group-hover:scale-110 transition duration-300">
                <Flame className="w-8 h-8 text-bk-burgundy fill-bk-burgundy animate-pulse" />
              </div>
              <div>
                <span className="block text-2xl font-black tracking-bolder text-white font-display uppercase leading-none">
                  BURGER KING
                </span>
                <span className="block text-xs uppercase tracking-wider text-bk-orange font-bold font-sans">
                  Flame-Grill Platform
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 font-display uppercase text-sm tracking-widest font-bold">
            <button
              onClick={() => scrollToSection("deals")}
              className="hover:text-bk-orange transition duration-200"
            >
              Deals
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="hover:text-bk-orange transition duration-200"
            >
              Order Menu
            </button>
            <button
              onClick={() => scrollToSection("loyalty")}
              className="hover:text-bk-orange transition duration-200"
            >
              Royal Perks
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="hover:text-bk-orange transition duration-200"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="hover:text-bk-orange transition duration-200"
            >
              Our Story
            </button>
          </nav>

          {/* Utilities Panel */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Realtime Selected Store Indicator */}
            <div className="hidden lg:flex items-center gap-2 bg-bk-dark/60 px-3 py-1.5 rounded-full border border-bk-orange/30 text-xs">
              <MapPin className="w-4 h-4 text-bk-orange" />
              <div className="text-left">
                <p className="text-bk-orange font-bold uppercase tracking-wider text-[10px] leading-none">Your Restaurant</p>
                <p className="font-semibold text-white truncate max-w-[140px] leading-tight mt-0.5">
                  {selectedStore ? selectedStore.address : "Select Store Below"}
                </p>
              </div>
            </div>

            {/* Perks Balance */}
            <div className="hidden sm:flex items-center gap-1.5 bg-bk-orange text-bk-burgundy px-3 py-1.5 rounded-full font-display font-medium text-xs border border-white">
              <Award className="w-4 h-4" />
              <span>{userPoints} PTS</span>
            </div>

            {/* HIGH-CONVERSION: Cart Indicator Icon */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative bg-bk-orange text-bk-burgundy p-3 rounded-full hover:bg-white hover:text-bk-burgundy transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5 font-bold" />
              {cartItemCount > 0 ? (
                <span className="absolute -top-1 -right-1 bg-white text-bk-burgundy border-2 border-bk-burgundy text-xs font-black rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItemCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-bk-cream hover:text-bk-orange p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-bk-orange/30 bg-bk-burgundy px-4 py-4 space-y-3">
          {selectedStore && (
            <div className="flex items-center gap-2 bg-bk-dark text-xs p-2.5 rounded-lg text-bk-cream">
              <MapPin className="w-4.5 h-4.5 text-bk-orange" />
              <div>
                <p className="text-[10px] text-bk-orange uppercase tracking-wider">Your Restaurant</p>
                <p className="font-bold">{selectedStore.address}</p>
                <p className="text-[10px] text-gray-400">{selectedStore.hours}</p>
              </div>
            </div>
          )}

          <div className="flex sm:hidden items-center gap-1.5 bg-bk-orange text-bk-burgundy p-2 rounded-lg font-display text-sm justify-center">
            <Award className="w-5 h-5" />
            <span>Royal Perks Balance: {userPoints} Perks Points</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-sm font-display font-bold uppercase tracking-wider">
            <button
              onClick={() => {
                scrollToSection("deals");
                setMobileMenuOpen(false);
              }}
              className="bg-bk-dark/40 hover:bg-bk-orange hover:text-bk-burgundy text-white p-3 rounded transition"
            >
              Deals
            </button>
            <button
              onClick={() => {
                scrollToSection("menu");
                setMobileMenuOpen(false);
              }}
              className="bg-bk-dark/40 hover:bg-bk-orange hover:text-bk-burgundy text-white p-3 rounded transition"
            >
              Order Menu
            </button>
            <button
              onClick={() => {
                scrollToSection("loyalty");
                setMobileMenuOpen(false);
              }}
              className="bg-bk-dark/40 hover:bg-bk-orange hover:text-bk-burgundy text-white p-3 rounded transition"
            >
              Royal Perks
            </button>
            <button
              onClick={() => {
                scrollToSection("locations");
                setMobileMenuOpen(false);
              }}
              className="bg-bk-dark/40 hover:bg-bk-orange hover:text-bk-burgundy text-white p-3 rounded transition"
            >
              Locations
            </button>
            <button
              onClick={() => {
                scrollToSection("stories");
                setMobileMenuOpen(false);
              }}
              className="bg-bk-dark/40 hover:bg-bk-orange hover:text-bk-burgundy text-white col-span-2 p-3 rounded transition"
            >
              Our Brand History
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

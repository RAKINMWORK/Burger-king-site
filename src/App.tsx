import React, { useState } from "react";
import { MENU_ITEMS, MOCK_RESTAURANTS } from "./data";
import { CartItem, MenuItem, RestaurantLocation } from "./types";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromoMarquee from "./components/PromoMarquee";
import MenuSection from "./components/MenuSection";
import AppDownload from "./components/AppDownload";
import LocationFinder from "./components/LocationFinder";
import SocialProof from "./components/SocialProof";
import BrandStory from "./components/BrandStory";
import FranchiseCareers from "./components/FranchiseCareers";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  // Website state engine
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<RestaurantLocation | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add Item inside cart workflow
  const handleAddToCart = (menuItem: MenuItem, extraCheese: boolean) => {
    const subitemId = `${menuItem.id}-${extraCheese ? "cheese" : "plain"}`;
    const targetPrice = extraCheese ? menuItem.price + 0.6 : menuItem.price;

    setCart((prev) => {
      const exists = prev.find((item) => item.id === subitemId);
      if (exists) {
        return prev.map((item) =>
          item.id === subitemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: subitemId,
          menuItem,
          customized: { extraCheese },
          quantity: 1,
          price: targetPrice,
        },
      ];
    });

    // Instant interactive feedback popup: Open cart drawer automatically
    setIsCartDrawerOpen(true);
  };

  // Update quantity adjuster
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove individual row
  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Simulate download and unlock points
  const handleSimulateDownload = () => {
    if (!hasDownloaded) {
      setHasDownloaded(true);
      setUserPoints((prev) => prev + 750);
    }
  };

  // Directly award points upon custom events (inside checkout completion)
  const handleAddPoints = (amount: number) => {
    setUserPoints((prev) => prev + amount);
  };

  // Fallback selector binding
  const handleSelectStore = (store: RestaurantLocation) => {
    setSelectedStore(store);
  };

  return (
    <div className="min-h-screen bg-bk-cream text-bk-burgundy selection:bg-bk-orange selection:text-bk-burgundy font-sans">
      
      {/* Dynamic Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        selectedStore={selectedStore}
        scrollToSection={scrollToSection}
        userPoints={userPoints}
      />

      {/* Main Sections Assembly */}
      <main>
        {/* Section 01: Hero / Above the Fold */}
        <Hero
          onOrderNowClick={() => scrollToSection("menu")}
          onFindLocationClick={() => scrollToSection("locations")}
        />

        {/* Section 02: Deals & Promotions Strip */}
        <PromoMarquee />

        {/* Section 03: Signature Menu Showcase */}
        <MenuSection items={MENU_ITEMS} onAddToCart={handleAddToCart} />

        {/* Section 04: App Download & Loyalty CTA */}
        <AppDownload
          onSimulateDownload={handleSimulateDownload}
          hasDownloaded={hasDownloaded}
        />

        {/* Section 05: Location Finder */}
        <LocationFinder
          onSelectStore={handleSelectStore}
          selectedStore={selectedStore}
        />

        {/* Section 06: Social Proof & Reviews */}
        <SocialProof />

        {/* Section 07: Brand Story & Values */}
        <BrandStory />

        {/* Section 08: Franchise & Careers */}
        <FranchiseCareers />
      </main>

      {/* Section 09: Footer with Email Capture & cookie notice */}
      <Footer scrollToSection={scrollToSection} />

      {/* Slide-out Cart Drawer Simulator Component */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        userPoints={userPoints}
        onAddPoints={handleAddPoints}
      />

    </div>
  );
}

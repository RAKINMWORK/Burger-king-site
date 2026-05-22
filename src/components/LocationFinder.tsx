import React, { useState } from "react";
import { MapPin, Search, Navigation, Clock, Phone, Layers, CheckCircle2 } from "lucide-react";
import { RestaurantLocation } from "../types";
import { MOCK_RESTAURANTS } from "../data";

interface LocationFinderProps {
  onSelectStore: (store: RestaurantLocation) => void;
  selectedStore: RestaurantLocation | null;
}

export default function LocationFinder({ onSelectStore, selectedStore }: LocationFinderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typedStoreResult, setTypedStoreResult] = useState<RestaurantLocation | null>(null);
  const [mapZoom, setMapZoom] = useState(13);
  const [selectedDotId, setSelectedDotId] = useState("st1");

  // Auto detect sets the primary store requested by user
  const handleAutoDetect = () => {
    const primaryStore = MOCK_RESTAURANTS[0]; // 744 Flame-Grill Way
    onSelectStore(primaryStore);
    setSelectedDotId(primaryStore.id);
    setTypedStoreResult(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Simulate looking up store based on query
    const terms = searchQuery.toLowerCase();
    const matched = MOCK_RESTAURANTS.find(
      (store) =>
        store.address.toLowerCase().includes(terms) ||
        store.city.toLowerCase().includes(terms)
    );

    if (matched) {
      setTypedStoreResult(matched);
      onSelectStore(matched);
      setSelectedDotId(matched.id);
    } else {
      // Return a random one or falls back to showing all
      const fallbackStore: RestaurantLocation = {
        id: "st_searched",
        address: `${searchQuery} Plaza Blvd`,
        city: "Local District",
        distance: "1.2 miles away",
        hours: "Lobby: 6AM - 11PM • Drive-Thru: Open 24/7",
        phone: "(555) 300-3000",
        features: ["Mobile Ordering", "Drive-Thru", "Royal Perks Accepted"],
      };
      setTypedStoreResult(fallbackStore);
      onSelectStore(fallbackStore);
    }
  };

  const handleDotClick = (storeId: string) => {
    setSelectedDotId(storeId);
    const matched = MOCK_RESTAURANTS.find((s) => s.id === storeId);
    if (matched) {
      onSelectStore(matched);
      setTypedStoreResult(null);
    }
  };

  return (
    <section id="locations" className="py-16 md:py-24 bg-bk-cream text-bk-burgundy border-t-4 border-bk-burgundy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-black font-display uppercase tracking-tight text-bk-burgundy leading-none">
            FIND A BURGER KING NEAR YOU
          </h2>
          <p className="text-sm sm:text-base text-bk-burgundy/80 font-bold mt-2">
            Enter your city, state, or ZIP code to find freshly grilled Whoppers near you. Select a restaurant below to start your order.
          </p>
        </div>

        {/* Split grid for workflows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Input Panel */}
          <div className="lg:col-span-5 bg-white border-4 border-bk-burgundy p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Auto-Detect Near Me CTA */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-bk-burgundy/60 mb-2">
                  Fastest Option
                </p>
                <button
                  id="geolocation-auto-detect-btn"
                  onClick={handleAutoDetect}
                  className="w-full bg-bk-orange text-bk-burgundy border-2 border-bk-burgundy hover:bg-bk-burgundy hover:text-white font-display font-black uppercase tracking-wider text-sm py-4 px-6 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <Navigation className="w-5 h-5 fill-current animate-bounce" />
                  <span>Auto-Detect Near Me</span>
                </button>
              </div>

              {/* Or divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-bk-burgundy/20" />
                <span className="flex-shrink mx-4 text-xs font-black uppercase tracking-wider text-bk-burgundy/40">OR SEARCH LOCALLY</span>
                <div className="flex-grow border-t border-bk-burgundy/20" />
              </div>

              {/* State-controlled search form */}
              <form onSubmit={handleSearch} className="space-y-3">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-bk-burgundy/60">
                  Search by City or Zip Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Downtown Core, 90210"
                      className="w-full bg-bk-cream border-2 border-bk-burgundy rounded-xl py-3.5 px-4 text-sm font-sans font-semibold text-bk-burgundy placeholder-bk-burgundy/40 focus:outline-none focus:ring-2 focus:ring-bk-orange/50"
                    />
                    <Search className="absolute right-3.5 top-3.5 w-5 h-5 text-bk-burgundy/40 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="bg-bk-burgundy hover:bg-bk-orange text-white hover:text-bk-burgundy font-display font-bold uppercase px-6 rounded-xl transition duration-300 cursor-pointer focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Displaying Live Store Results Panel */}
            <div className="mt-8 pt-6 border-t border-bk-burgundy/15 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-bk-burgundy/60">
                Selected / Simulated Store:
              </h4>

              {selectedStore ? (
                <div className="bg-bk-cream border-2 border-bk-burgundy rounded-2xl p-4 space-y-3 relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-bk-orange text-bk-burgundy text-[9px] font-black uppercase px-2.5 py-1 rounded-full border border-white">
                    {selectedStore.distance}
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-bk-burgundy shrink-0 mt-0.5 fill-bk-orange" />
                    <div>
                      <h5 className="font-display uppercase text-lg font-black tracking-tight leading-none text-bk-burgundy">
                        {selectedStore.address}
                      </h5>
                      <span className="text-[10px] uppercase font-bold text-bk-burgundy/75 block mt-1 tracking-wider">
                        {selectedStore.city}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-semibold text-bk-burgundy/85 pl-7">
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-bk-burgundy/60" />
                      <span>{selectedStore.hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-bk-burgundy/60" />
                      <span>{selectedStore.phone}</span>
                    </p>
                  </div>

                  <div className="pl-7 pt-2 flex flex-wrap gap-1">
                    {selectedStore.features.map((f, i) => (
                      <span
                        key={i}
                        className="bg-white text-[9px] font-extrabold uppercase text-bk-burgundy border border-bk-burgundy/10 px-2 py-0.5 rounded"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  <div className="bg-green-100 border border-green-300 text-green-800 text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded text-center">
                    ✓ THIS IS YOUR SELECTION FOR ONLINE CHECKOUT
                  </div>
                </div>
              ) : (
                <div className="bg-bk-cream/50 border border-dashed border-bk-burgundy/25 rounded-2xl p-6 text-center text-xs font-bold text-bk-burgundy/60">
                  <p>No store selected yet.</p>
                  <p className="font-sans font-medium text-[11px] mt-1">
                    Click "Auto-Detect Near Me" or use lookup to find a slot!
                  </p>
                </div>
              )}

              {/* Hardcoded result from the user workflow request if nothing is clicked yet */}
              {!selectedStore && (
                <div className="bg-bk-cream border border-bk-orange p-3 rounded-xl text-[11px] font-bold text-left">
                  <p className="text-bk-orange uppercase tracking-wider text-[9px] font-black">Simulation Standard</p>
                  <p className="text-bk-burgundy mt-0.5">
                    Click "Auto-Detect" to instantly bind: <span className="underline">744 Flame-Grill Way (0.8 miles away) • Drive-Thru Open 24/7</span>.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps API Simulation Panel Container */}
          <div className="lg:col-span-7 bg-bk-dark border-4 border-bk-burgundy rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            
            {/* Top map control widget */}
            <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur shadow-lg border-2 border-bk-burgundy rounded-xl px-3 py-1.5 text-bk-burgundy flex items-center gap-3">
              <Layers className="w-4 h-4 text-bk-burgundy" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                Google Maps API Simulator Mode
              </span>
            </div>

            {/* Map UI graphics panel with location dots */}
            <div className="flex-1 bg-neutral-900 relative p-4 flex items-center justify-center overflow-hidden">
              {/* Mock Grid Lines representing city streets */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Mock rivers / blocks as colored vectors */}
              <div className="absolute top-1/4 left-10 w-44 h-8 bg-blue-900/30 rounded-full blur-xl transform -rotate-12" />
              <div className="absolute bottom-1/4 right-10 w-52 h-12 bg-lime-900/10 rounded-full blur-xl transform rotate-45" />

              {/* Coordinate indicator bottom right */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-80 select-none">
                34.0522° N, 118.2437° W (Zoom: {mapZoom}x)
              </div>

              {/* Map Zoom Controls */}
              <div className="absolute right-4 top-1/3 flex flex-col gap-1.5 z-20">
                <button
                  onClick={() => setMapZoom(Math.min(18, mapZoom + 1))}
                  className="bg-white hover:bg-bk-cream text-bk-burgundy font-black px-2.5 py-1 rounded-md border border-bk-burgundy shadow-md cursor-pointer text-xs"
                >
                  +
                </button>
                <button
                  onClick={() => setMapZoom(Math.max(10, mapZoom - 1))}
                  className="bg-white hover:bg-bk-cream text-bk-burgundy font-black px-3 py-1 rounded-md border border-bk-burgundy shadow-md cursor-pointer text-xs"
                >
                  -
                </button>
              </div>

              {/* Location Pins mapping */}
              {MOCK_RESTAURANTS.map((st, index) => {
                const isActive = selectedDotId === st.id;
                // Hardcode some grid positions to distribute them elegantly
                const positions = [
                  { top: "45%", left: "35%" },
                  { top: "30%", left: "65%" },
                  { top: "70%", left: "55%" },
                ];
                const pos = positions[index] || { top: "50%", left: "50%" };

                return (
                  <button
                    key={st.id}
                    onClick={() => handleDotClick(st.id)}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none z-10"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    {/* Ring aura */}
                    <div className={`absolute -inset-2.5 rounded-full blur-sm transition-all duration-300 ${
                      isActive ? "bg-bk-orange opacity-60 animate-ping" : "bg-white opacity-0 group-hover/pin:opacity-30"
                    }`} />
                    
                    {/* Pin element */}
                    <div className={`p-2 rounded-full border-2 transform transition-transform duration-300 ${
                      isActive ? "bg-bk-orange text-bk-burgundy border-white scale-110" : "bg-bk-burgundy text-white border-bk-orange hover:scale-105"
                    }`}>
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>

                    {/* Compact layout tag tooltip */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-bk-burgundy border border-bk-orange text-white font-sans text-[10px] whitespace-nowrap bg-opacity-95 font-bold py-1 px-2 rounded shadow-md pointer-events-none opacity-85 group-hover/pin:opacity-100 transition-opacity">
                      <span>{st.address.split(" ")[0]} BK ({st.distance})</span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Simulated navigation instructions */}
            <div className="p-4 bg-bk-burgundy border-t-2 border-bk-orange/30 text-xs text-bk-cream/90 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="font-bold flex items-center gap-1.5 font-sans uppercase">
                <Navigation className="w-4 h-4 text-bk-orange animate-pulse" />
                <span>Selected Store active within online ordering pipeline</span>
              </span>
              <button
                onClick={handleAutoDetect}
                className="text-bk-orange font-bold font-display hover:underline uppercase tracking-wider text-xs"
              >
                Reset Location Coordinates
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

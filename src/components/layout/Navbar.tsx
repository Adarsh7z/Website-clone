import React, { useState, useEffect } from "react";
import { clinicData } from "@/data/dentalData";

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ onOpenBooking, activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Doctor" },
    { id: "services", label: "Specialisations" },
    { id: "testimonials", label: "Testimonials" },
    { id: "location", label: "Location & Hours" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E1416]/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5"
          : "bg-transparent backdrop-blur-sm py-5"
      }`}
    >
      <div className="shell flex items-center justify-between">
        {/* Left Slot: Brand Logo + Text Stack */}
        <div
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Minimalist Single-Line Tooth Graphic */}
          <div className="w-10 h-10 rounded-xl bg-[#142226] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] shadow-cyan-glow transition-all duration-300 group-hover:border-[#14B8A6] group-hover:scale-105">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8 2 6 5 6 8c0 4 2 9 3 13 0 .5.5 1 1 1h.5c.5 0 1-.5 1.5-3 .5-2 1-3 2-3s1.5 1 2 3c.5 2.5 1 3 1.5 3h.5c.5 0 1-.5 1-1 1-4 3-9 3-13 0-3-2-6-6-6Z" />
              <path d="M9.5 8c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
            </svg>
          </div>

          {/* Typography: Crisp sans-serif tracking */}
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-[#14B8A6] transition-colors">
              {clinicData.name}
            </span>
            <span className="font-sans text-[0.58rem] sm:text-[0.62rem] font-semibold text-[#14B8A6] tracking-[0.18em] mt-1 uppercase leading-none">
              DR. CHANDRA SEKAR ANAM, MDS
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {/* Smooth Underline Fade Animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14B8A6] transition-all duration-300 origin-left ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Slot: High-contrast Primary Action "Call Now" Tab */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${clinicData.phoneRaw}`}
            className="btn-cyan-square flex items-center gap-2 group"
            aria-label={`Call Now: ${clinicData.phone}`}
          >
            <svg
              className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:${clinicData.phoneRaw}`}
            className="btn-cyan-square text-xs py-2 px-3 sm:hidden flex items-center gap-1.5"
            aria-label={`Call ${clinicData.phone}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#142226] text-white border border-white/10"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E1416]/98 border-b border-white/10 px-6 py-6 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-medium py-1.5 transition-colors ${
                  activeSection === item.id ? "text-[#14B8A6] font-semibold" : "text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="btn-cyan w-full justify-center flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: {clinicData.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

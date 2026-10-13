import React, { useEffect, useState } from "react";
import { SearchIcon, WhatsAppIcon, MenuIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({
  onOpenSearch,
  onOpenMenu,
  activeSection = "home",
  onNavigate,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !scrolled;

  const leftNav = [
    { id: "home", label: "HOME" },
    { id: "office-casuals", label: "OFFICE CASUALS" },
    { id: "blazers", label: "BLAZERS" },
  ];

  const rightNav = [
    { id: "kurta-pajama", label: "KURTA PAJAMA" },
    { id: "our-story", label: "OUR STORY" },
    { id: "pricing", label: "PRICING" },
  ];

  return (
    <header
      className={`w-full transition-all duration-500 z-50 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white/95 text-ink backdrop-blur-md border-b border-silver-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="shell flex items-center justify-between h-20">
        {/* Left Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {leftNav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`label text-[0.7rem] tracking-[0.2em] relative py-1 transition-colors duration-300 ${
                  isTransparent
                    ? isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                    ? "text-ink font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-300 ${
                      isTransparent ? "bg-white" : "bg-ink"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Center Brand Logo */}
        <div className="flex flex-col items-center justify-center cursor-pointer select-none" onClick={() => onNavigate("home")}>
          <span
            className={`font-display text-2xl sm:text-3xl font-normal tracking-wide transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-ink"
            }`}
          >
            {store.name}
          </span>
          <span
            className={`label text-[0.6rem] tracking-[0.35em] -mt-0.5 transition-colors duration-300 ${
              isTransparent ? "text-silver-300" : "text-muted"
            }`}
          >
            {store.tagline}
          </span>
        </div>

        {/* Right Nav (Desktop) + Actions */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <nav className="hidden lg:flex items-center gap-8 mr-2">
            {rightNav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`label text-[0.7rem] tracking-[0.2em] relative py-1 transition-colors duration-300 ${
                    isTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : isActive
                      ? "text-ink font-semibold"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-300 ${
                        isTransparent ? "bg-white" : "bg-ink"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSearch}
              aria-label="Search collection"
              className={`p-2 rounded-full transition-colors duration-300 hover:scale-105 ${
                isTransparent
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-ink/80 hover:text-ink hover:bg-black/5"
              }`}
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${store.whatsappNumber}?text=Hello%20${encodeURIComponent(store.name)}%2C%20I%20would%20like%20to%20enquire%20about%20your%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiries"
              className={`p-2 rounded-full transition-colors duration-300 hover:scale-105 ${
                isTransparent
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-ink/80 hover:text-ink hover:bg-black/5"
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={onOpenMenu}
              aria-label="Open mobile menu"
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-ink hover:bg-black/5"
              }`}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

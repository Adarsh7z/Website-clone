import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { MarqueeBand } from "@/components/home/MarqueeBand";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeaturedRow } from "@/components/home/FeaturedRow";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { HowOrdering } from "@/components/home/HowOrdering";
import { StoryBand } from "@/components/home/StoryBand";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSection } from "@/components/home/PricingSection";
import { VisitStore } from "@/components/home/VisitStore";
import { SearchModal } from "@/components/ui/SearchModal";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { FloatingMenu } from "@/components/ui/FloatingMenu";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ScrollTrigger } from "@/lib/gsap";

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Refresh ScrollTrigger when fonts and resources finish loading per GSAP rules
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: "home", el: document.getElementById("home") },
        { id: "collections", el: document.getElementById("collections") },
        { id: "featured-rail", el: document.getElementById("featured-rail") },
        { id: "our-story", el: document.getElementById("our-story") },
        { id: "pricing", el: document.getElementById("pricing") },
        { id: "visit-store", el: document.getElementById("visit-store") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && sec.el.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element =
      document.getElementById(sectionId) ||
      document.getElementById("collections");

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleExploreCategory = (_categorySlug: string) => {
    const el = document.getElementById("featured-rail");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink relative">
      {/* Fixed top Header & Announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <AnnouncementBar />
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">
        <div id="home">
          <HeroCarousel
            onSelectProduct={setSelectedProduct}
            onExploreCategory={handleExploreCategory}
          />
        </div>

        <MarqueeBand />

        <CategoryTiles
          onSelectCategory={(slug) => {
            const el = document.getElementById("featured-rail");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <FeaturedRow
          onSelectProduct={setSelectedProduct}
          onExploreAll={() => {
            const el = document.getElementById("featured-rail");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <Craftsmanship />

        <HowOrdering />

        <StoryBand
          onReadStory={() => {
            const el = document.getElementById("our-story");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <Testimonials />

        <PricingSection
          onSelectTier={(_tierId) => {
            const el = document.getElementById("visit-store");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <VisitStore />
      </main>

      {/* Comprehensive Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Concierge Action */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={setSelectedProduct}
      />

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <FloatingMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;

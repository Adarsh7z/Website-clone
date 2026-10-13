import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SplitHero } from "@/components/home/SplitHero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ClinicalExcellence } from "@/components/home/ClinicalExcellence";
import { SpecialistsSection } from "@/components/home/SpecialistsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClinicLocation } from "@/components/home/ClinicLocation";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/ui/BookingModal";
import { ServiceDetailModal } from "@/components/ui/ServiceDetailModal";
import { ScrollTrigger } from "@/lib/gsap";
import { ServiceItem } from "@/data/dentalData";

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    // Refresh ScrollTrigger after fonts load per GSAP rule 39
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const onScroll = () => {
      const scrollPos = window.scrollY + 250;
      const sections = [
        { id: "hero", el: document.getElementById("hero") },
        { id: "services", el: document.getElementById("services") },
        { id: "about", el: document.getElementById("about") },
        { id: "testimonials", el: document.getElementById("testimonials") },
        { id: "location", el: document.getElementById("location") },
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
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
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

  return (
    <div className="min-h-screen flex flex-col bg-[#0E1416] text-[#F8FAFC] selection:bg-[#14B8A6] selection:text-[#0E1416]">
      {/* Sticky Global Navigation Header */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Healthcare Content Engine */}
      <main className="flex-1">
        {/* The Split Hero Engine */}
        <SplitHero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExploreServices={() => handleNavigate("services")}
        />

        {/* Clinical Services */}
        <ServicesSection
          onSelectService={setSelectedService}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Clinical Excellence & Hardware Innovations */}
        <ClinicalExcellence />

        {/* Lead Medical Specialists */}
        <SpecialistsSection
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Verified Patient Reviews */}
        <TestimonialsSection />

        {/* Clinic Location & Hours */}
        <ClinicLocation />
      </main>

      {/* Comprehensive Healthcare Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => {
          setSelectedService(null);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}

export default App;

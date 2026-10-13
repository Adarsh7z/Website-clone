import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE, DURATION } from "@/lib/gsap";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

export function VisitStore() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.from(".store-info", {
        x: -35,
        autoAlpha: 0,
        duration: DURATION.base,
        ease: EASE,
      }).from(
        ".store-map",
        {
          x: 35,
          autoAlpha: 0,
          duration: DURATION.base,
          ease: EASE,
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${store.address.line1}, ${store.address.line2}, ${store.address.city}, ${store.address.state} ${store.address.postcode}`
  )}`;

  return (
    <section ref={containerRef} id="visit-store" className="section-y bg-paper border-b border-silver-100">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Info Column */}
          <div className="store-info flex flex-col justify-center max-w-lg">
            <p className="label text-muted text-xs tracking-[0.2em] mb-4">
              VISIT THE STORE
            </p>

            <h2 className="t-head text-ink font-light mb-6">
              Come in and try it on.
            </h2>

            <p className="t-body text-muted text-base mb-10 font-light leading-relaxed">
              Everything on this site is on the rail in store. If you are within
              driving distance of {store.city}, come and see the fabric in person
              before you order.
            </p>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-muted mt-1">
                  <MapPinIcon className="w-5 h-5 text-silver-500" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-ink">
                    {store.address.line1}
                  </p>
                  <p className="font-sans text-sm text-muted">
                    {store.address.line2}
                  </p>
                  <p className="font-sans text-sm text-muted">
                    {store.address.city}, {store.address.state} {store.address.postcode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="text-muted mt-1">
                  <ClockIcon className="w-5 h-5 text-silver-500" />
                </div>
                <div className="text-sm">
                  {store.hours.map((h, i) => (
                    <p key={i} className="text-muted">
                      <span className="font-medium text-ink">{h.days}</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-muted">
                  <PhoneIcon className="w-5 h-5 text-silver-500" />
                </div>
                <a
                  href={`tel:${store.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-sans text-sm text-ink hover:underline"
                >
                  {store.phone}
                </a>
              </div>
            </div>

            <div>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink"
              >
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Map Column (Styled OpenStreetMap grayscale filter) */}
          <div className="store-map w-full h-[400px] sm:h-[480px] rounded-sm overflow-hidden border border-silver-200/90 shadow-md relative bg-silver-100">
            <iframe
              title="Atelier Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.5300%2C23.0100%2C72.6300%2C23.0700&layer=mapnik&marker=23.0295%2C72.5714"
              className="w-full h-full border-0 filter grayscale contrast-[1.15] brightness-[0.98]"
              loading="lazy"
            />

            {/* Custom Location Overlay Pin Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-silver-200 shadow-md flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
              <span className="label text-[0.62rem] text-ink tracking-wider">
                {store.name} — {store.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

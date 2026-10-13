import React, { useState } from "react";
import { store } from "@/data/store.config";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-12 border-t border-white/10 select-none">
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Manifesto (2 cols) */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="mb-4">
              <span className="font-display text-3xl font-light text-bone block">
                {store.name}
              </span>
              <span className="label text-[0.65rem] tracking-[0.3em] text-silver-400 block mt-1">
                {store.tagline} • BESPOKE MENSWEAR
              </span>
            </div>

            <p className="t-body text-silver-300 text-sm font-light max-w-sm mb-6 leading-relaxed">
              Honest fabrics and true-to-measure tailoring. Sold from our shop in {store.city},
              and delivered nationwide via personal WhatsApp consultation.
            </p>

            {/* Direct WhatsApp link */}
            <a
              href={`https://wa.me/${store.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs text-bone hover:text-white bg-white/10 hover:bg-white/15 px-4 py-2.5 rounded-full transition-colors border border-white/15"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Message Master Tailor</span>
            </a>
          </div>

          {/* Column: Collections */}
          <div>
            <p className="label text-[0.68rem] tracking-[0.2em] text-silver-400 mb-5">
              COLLECTIONS
            </p>
            <ul className="space-y-3 text-sm font-light text-silver-300">
              <li>
                <button
                  onClick={() => onNavigate("office-casuals")}
                  className="hover:text-white transition-colors"
                >
                  Office Casuals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blazers")}
                  className="hover:text-white transition-colors"
                >
                  Blazers & Suiting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("kurta-pajama")}
                  className="hover:text-white transition-colors"
                >
                  Kurta Pajama Sets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("featured-rail")}
                  className="hover:text-white transition-colors"
                >
                  Picked For You Rail
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Atelier & Services */}
          <div>
            <p className="label text-[0.68rem] tracking-[0.2em] text-silver-400 mb-5">
              ATELIER
            </p>
            <ul className="space-y-3 text-sm font-light text-silver-300">
              <li>
                <button
                  onClick={() => onNavigate("our-story")}
                  className="hover:text-white transition-colors"
                >
                  Our Story & Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("pricing")}
                  className="hover:text-white transition-colors"
                >
                  Bespoke Pricing Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("testimonials")}
                  className="hover:text-white transition-colors"
                >
                  Patron Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("visit-store")}
                  className="hover:text-white transition-colors"
                >
                  Visit The Store
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Trunk Show Signup */}
          <div>
            <p className="label text-[0.68rem] tracking-[0.2em] text-silver-400 mb-5">
              PRIVATE TRUNK SHOWS
            </p>
            <p className="text-xs text-silver-400 font-light mb-4">
              Receive private notices when new seasonal bolts of linen and wool arrive.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-white/5 border border-white/20 rounded-full px-4 py-2 text-xs text-white placeholder-silver-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="btn btn-paper text-[0.65rem] py-2 px-4 w-full"
              >
                {subscribed ? "Invited ✓" : "Join Invitation List"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-500 font-light">
          <p>
            © {store.copyrightYear} {store.name} {store.tagline}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-silver-400">{store.placeLine}</span>
            <button
              onClick={scrollToTop}
              className="label text-[0.65rem] tracking-wider text-silver-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

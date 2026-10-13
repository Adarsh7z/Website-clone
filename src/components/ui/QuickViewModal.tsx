import React, { useState, useEffect } from "react";
import { CloseIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

interface QuickViewModalProps {
  product: any | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || "");
      setSelectedColor(product.colours?.[0]?.name || "");
      setActiveImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ${store.name},\nI would like to order the *${product.name}* (${product.priceFormatted}).\nSelected Size: ${selectedSize}\nSelected Colour: ${selectedColor}\nCould you please check availability and alteration options?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-paper rounded-sm shadow-2xl border border-silver-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-ink transition-colors shadow-sm"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Left Column: Image & Thumbnails */}
        <div className="w-full md:w-1/2 bg-silver-100 flex flex-col">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-silver-200">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-2 p-3 bg-paper border-t border-silver-100">
              {product.images.map((imgUrl: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-16 rounded overflow-hidden border-2 transition-all ${
                    idx === activeImageIndex
                      ? "border-ink"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Specs & Ordering */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category & Fabric */}
            <div className="flex items-center gap-2 mb-2">
              <span className="label bg-bone text-muted px-2.5 py-1 rounded-sm text-[0.6rem] tracking-wider">
                {product.category.toUpperCase()}
              </span>
              <span className="label text-silver-500 text-[0.62rem] tracking-wider">
                {product.fabric}
              </span>
            </div>

            {/* Title & Price */}
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-2">
              {product.name}
            </h2>
            <p className="text-xl font-medium text-ink mb-6">
              {product.priceFormatted}
            </p>

            {/* Description */}
            <p className="t-body text-muted text-sm font-light mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="label text-[0.65rem] tracking-wider text-ink">
                    SELECT SIZE
                  </span>
                  <span className="text-xs text-muted">Free alteration in-store</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[42px] h-10 px-3 flex items-center justify-center text-xs font-medium rounded border transition-all ${
                        selectedSize === size
                          ? "bg-ink text-white border-ink"
                          : "bg-paper text-ink border-silver-200 hover:border-silver-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colour Selector */}
            {product.colours && (
              <div className="mb-6">
                <span className="label text-[0.65rem] tracking-wider text-ink block mb-2">
                  COLOUR: <span className="font-normal text-muted">{selectedColor}</span>
                </span>
                <div className="flex gap-2.5">
                  {product.colours.map((col: any) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`w-7 h-7 rounded-full border-2 p-0.5 transition-all ${
                        selectedColor === col.name
                          ? "border-ink scale-110"
                          : "border-transparent"
                      }`}
                      title={col.name}
                    >
                      <span
                        className="block w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: col.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Key Tailoring Details */}
            {product.details && (
              <div className="mb-8 pt-4 border-t border-silver-100">
                <span className="label text-[0.65rem] tracking-wider text-muted block mb-2">
                  CONSTRUCTION & DETAILS
                </span>
                <ul className="space-y-1.5 text-xs text-muted font-light">
                  {product.details.map((d: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-silver-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-silver-100 flex flex-col gap-3">
            <a
              href={`https://wa.me/${store.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink w-full flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Order on WhatsApp (Size {selectedSize})</span>
            </a>

            <p className="text-center text-[0.7rem] text-muted font-light">
              Complimentary in-store alterations & nationwide doorstep delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { SearchIcon, CloseIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import productsData from "@/data/products.json";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: any) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = productsData.products.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-ink/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-paper rounded-sm shadow-2xl border border-silver-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-silver-100 bg-[#fbfbfa]">
          <SearchIcon className="w-5 h-5 text-silver-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blazers, kurtas, suits, linens..."
            className="flex-1 bg-transparent text-ink placeholder-silver-400 text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted hover:text-ink text-xs uppercase tracking-wider"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-muted hover:text-ink transition-colors ml-2"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Suggestion Chips */}
        {!query && (
          <div className="p-6">
            <p className="label text-[0.65rem] tracking-[0.2em] text-muted mb-3">
              SUGGESTED SEARCHES
            </p>
            <div className="flex flex-wrap gap-2">
              {["Camel Blazer", "Black Suit", "Linen Shirt", "Silk Kurta", "Wool"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="label text-[0.68rem] tracking-wider bg-bone hover:bg-silver-200 text-ink px-3 py-1.5 rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 flex-1">
          {query && results.length === 0 ? (
            <div className="py-12 text-center text-muted text-sm font-light">
              No garments found matching "{query}". Try searching "blazer", "linen" or "kurta".
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 rounded hover:bg-bone cursor-pointer transition-colors group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-16 object-cover rounded-sm bg-silver-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg text-ink font-normal truncate group-hover:text-black">
                      {product.name}
                    </p>
                    <p className="label text-[0.62rem] text-muted tracking-wider">
                      {product.fabric.toUpperCase()} • {product.priceFormatted}
                    </p>
                  </div>
                  <div className="text-silver-400 group-hover:text-ink pr-2">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

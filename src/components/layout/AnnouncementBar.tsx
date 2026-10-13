import React from "react";
import { store } from "@/data/store.config";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/10 text-white py-2 px-4 select-none">
      <div className="shell flex items-center justify-center">
        <p className="label text-[0.65rem] tracking-[0.2em] text-silver-200 text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>VISIT OUR ATELIER IN {store.city.toUpperCase()}</span>
          <span className="text-silver-500 hidden sm:inline">•</span>
          <span>ORDER EASILY ON WHATSAPP</span>
          <span className="text-silver-500 hidden sm:inline">•</span>
          <span>COMPLIMENTARY ALTERATIONS IN STORE</span>
        </p>
      </div>
    </div>
  );
}

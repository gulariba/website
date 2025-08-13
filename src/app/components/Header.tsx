"use client";

import { Check } from "lucide-react";

export default function PromoHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-[#b10000] to-[#8b0000] text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-2 px-4 text-center sm:text-left">
        
        {/* Free Shipping */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm leading-tight">
            <span className="font-bold">Free Shipping</span> on Orders over $119
          </span>
        </div>

        {/* Discreet Packages */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm leading-tight">
            Always <span className="font-bold">Discreet Packages</span>
          </span>
        </div>

        {/* KINK Promise */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm leading-tight">
            101 Day{" "}
            <span className="font-bold text-red-300">KINK Promise</span> Return Policy
          </span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { IMPACT_METRICS } from '../data/products';
import { ShieldCheck, Flame, Leaf } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A3D4A]/30 border-b seam-border" id="impact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#4FB8B4] text-xs uppercase font-semibold tracking-widest">
              Verifiable Footprint
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#E2F4F0] leading-tight">
              Circularity directly measured from the print mill floor.
            </h2>
            <p className="text-[#98D8D0] text-sm leading-relaxed">
              Every piece keeps resilient monofilament mesh out of landfills and open burning pits, preserving the energy embedded in every meter of polymer fabric.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#98D8D0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4FB8B4] shrink-0" />
                <span>Zero open burning: Eliminates hydrogen cyanide &amp; dioxin toxins</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#4FB8B4] shrink-0" />
                <span>Thermal wash recycle loop re-uses 92% of sanitizing water</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#4FB8B4] shrink-0" />
                <span>Direct financial returns to local artisan tailors in Gujarat</span>
              </div>
            </div>
          </div>

          {/* 3 Verified Metric Tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#0A3D4A] border seam-border text-center sm:text-left transition-transform hover:-translate-y-1">
              <span className="text-xs text-[#98D8D0] uppercase tracking-wider block">Stencils Diverted</span>
              <div className="font-headline text-3xl font-bold text-[#4FB8B4] mt-2 tabular-nums">
                {IMPACT_METRICS.stencilsDiverted.toLocaleString()}+
              </div>
              <p className="text-[#98D8D0] text-xs mt-1">Units saved from scrap</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A3D4A] border seam-border text-center sm:text-left transition-transform hover:-translate-y-1">
              <span className="text-xs text-[#98D8D0] uppercase tracking-wider block">Mesh Reclaimed</span>
              <div className="font-headline text-3xl font-bold text-[#E2F4F0] mt-2 tabular-nums">
                {IMPACT_METRICS.meshReclaimedSqm.toLocaleString()} m²
              </div>
              <p className="text-[#98D8D0] text-xs mt-1">High-density nylon fabric</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A3D4A] border seam-border text-center sm:text-left transition-transform hover:-translate-y-1">
              <span className="text-xs text-[#98D8D0] uppercase tracking-wider block">Circulating Carry</span>
              <div className="font-headline text-3xl font-bold text-[#98D8D0] mt-2 tabular-nums">
                {IMPACT_METRICS.circulatingCarryUnits.toLocaleString()}
              </div>
              <p className="text-[#98D8D0] text-xs mt-1">Functional active items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

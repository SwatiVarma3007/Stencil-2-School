import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onOpenHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onOpenHowItWorks }) => {
  const [showMatrixInfo, setShowMatrixInfo] = useState(false);

  return (
    <section className="relative pt-24 pb-16 md:pb-24 overflow-hidden border-b seam-border" id="story">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#10606F]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#98D8D0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FB8B4]"></span>
              Textile Industrial Stencils Repurposed
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#E2F4F0] tracking-tight">
              Waste has <br />
              <span className="italic font-normal text-[#4FB8B4]">another story.</span>
            </h1>

            <p className="text-[#98D8D0] text-base md:text-lg max-w-xl leading-relaxed">
              From textile scrap to everyday purpose. We intercept discarded industrial nylon screen-printing stencils from mills and transform them into durable, water-resistant daily bags and pouches.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4FB8B4] text-[#04222B] font-semibold text-sm uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenHowItWorks}
                className="px-6 py-3 rounded-xl border seam-border text-[#E2F4F0] font-medium text-sm hover:bg-[#0A3D4A] transition-colors cursor-pointer"
              >
                How It Works
              </button>
            </div>

            {/* Quick Provenance Badges (Unboxed clean metadata with subtle border) */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t seam-border text-xs">
              <div>
                <p className="text-[#98D8D0]/70 uppercase tracking-widest text-[10px]">ORIGIN</p>
                <p className="font-semibold text-[#E2F4F0] mt-1">Screen Mills</p>
                <p className="text-[#98D8D0]">Surat &amp; Gujarat Hubs</p>
              </div>
              <div>
                <p className="text-[#98D8D0]/70 uppercase tracking-widest text-[10px]">MATERIAL</p>
                <p className="font-semibold text-[#E2F4F0] mt-1">Nylon Mesh</p>
                <p className="text-[#98D8D0]">High-tenacity weave</p>
              </div>
              <div>
                <p className="text-[#98D8D0]/70 uppercase tracking-widest text-[10px]">EDITIONS</p>
                <p className="font-semibold text-[#E2F4F0] mt-1">One-Of-A-Kind</p>
                <p className="text-[#98D8D0]">Original dye patinas</p>
              </div>
            </div>
          </div>

          {/* Hero Product Image with Interactive Provenance Badge */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden p-2.5 bg-[#0A3D4A]/80 border seam-border teal-glow">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#04222B] group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtwymJVyqvknutZ1stx77xoMDTvjh-t-vzGiVGgmKu1-XlOGgs2R7tIELzr5LEErBtken3dLYP9c3VanB8_mbYLnaTDTZP-AlhQ-bT0tv9FhDnD3PVHwSwY48os275uybeumbipVjMHeIj7mlpI9PxGWwZeEmvyLW98Z7fLdMhOvbTIeEKubHzz8fIWordZmwvp9EfZI9W7jf4hD19Uu1gCaBEZV7UBSh7garprrD5OOw-6lFX_JYJkNWVw_wLMCH4bQ"
                  alt="Stencil 2 School upcycled bags and pencil pouches collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Interactive Material Callout Overlay Toggle */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setShowMatrixInfo(!showMatrixInfo)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#04222B]/85 backdrop-blur-md border seam-border text-[#98D8D0] text-xs hover:text-[#E2F4F0] transition-colors cursor-pointer"
                    aria-label="Inspect Material Properties"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#4FB8B4]" />
                    <span>{showMatrixInfo ? 'Hide Specs' : 'Inspect Mesh'}</span>
                  </button>
                </div>

                {showMatrixInfo && (
                  <div className="absolute inset-0 bg-[#04222B]/90 backdrop-blur-sm p-6 flex flex-col justify-center animate-fadeIn text-xs space-y-3">
                    <div className="flex items-center justify-between border-b seam-border pb-2">
                      <span className="font-headline font-semibold text-sm text-[#4FB8B4]">Industrial Matrix Specifications</span>
                      <button 
                        onClick={() => setShowMatrixInfo(false)}
                        className="text-[#98D8D0] hover:text-[#E2F4F0]"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="bg-[#0A3D4A]/60 p-2.5 rounded-lg border seam-border">
                        <span className="text-[#98D8D0]/70 text-[10px] block uppercase">Thread Count</span>
                        <strong className="text-[#E2F4F0] text-sm">120–140 T/inch</strong>
                      </div>
                      <div className="bg-[#0A3D4A]/60 p-2.5 rounded-lg border seam-border">
                        <span className="text-[#98D8D0]/70 text-[10px] block uppercase">Tensile Resilience</span>
                        <strong className="text-[#E2F4F0] text-sm">&gt; 35 N/cm Tension</strong>
                      </div>
                      <div className="bg-[#0A3D4A]/60 p-2.5 rounded-lg border seam-border">
                        <span className="text-[#98D8D0]/70 text-[10px] block uppercase">Water Ingress</span>
                        <strong className="text-[#E2F4F0] text-sm">Hydrophobic Polymer</strong>
                      </div>
                      <div className="bg-[#0A3D4A]/60 p-2.5 rounded-lg border seam-border">
                        <span className="text-[#98D8D0]/70 text-[10px] block uppercase">Sanitization</span>
                        <strong className="text-[#E2F4F0] text-sm">100% Food-Safe Wash</strong>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#98D8D0] italic pt-1">
                      Originally engineered to withstand 50,000+ rotary squeegee passes with reactive dyes.
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3.5 flex items-center justify-between text-xs text-[#98D8D0] font-medium">
                <span className="tracking-wide">CIRCULAR UP-CYCLED ARCHIVE #2025</span>
                <span className="text-[#4FB8B4] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  100% RECLAIMED STENCILS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

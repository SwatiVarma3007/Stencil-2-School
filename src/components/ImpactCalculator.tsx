import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, School } from 'lucide-react';

interface ImpactCalculatorProps {
  onPreFillInquiry: (count: number, packageType: string) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onPreFillInquiry }) => {
  const [studentCount, setStudentCount] = useState<number>(75);
  const [selectedKit, setSelectedKit] = useState<'stationery' | 'combo' | 'totes'>('combo');

  // Multipliers based on kit type:
  // - stationery (pouch): 0.5 stencil per unit, 0.4 m²
  // - totes: 1.2 stencils per unit, 1.1 m²
  // - combo: 1.7 stencils per unit, 1.5 m²
  const kitConfigs = {
    stationery: {
      name: 'Classroom Stationery Pouch Kit (P1/P2)',
      stencilMultiplier: 0.5,
      meshMultiplier: 0.4,
      unitPrice: 28, // slight bulk discount from ₹30
    },
    combo: {
      name: 'Full Student Carry (Tote + Stationery Pouch)',
      stencilMultiplier: 1.7,
      meshMultiplier: 1.5,
      unitPrice: 70, // discounted combo from ₹80
    },
    totes: {
      name: 'Campus Tote Library Kit',
      stencilMultiplier: 1.2,
      meshMultiplier: 1.1,
      unitPrice: 46, // discounted from ₹50
    }
  };

  const currentConfig = kitConfigs[selectedKit];
  const stencilsDiverted = Math.round(studentCount * currentConfig.stencilMultiplier);
  const meshSqm = Math.round(studentCount * currentConfig.meshMultiplier);
  const estTotal = studentCount * currentConfig.unitPrice;

  return (
    <section className="py-16 md:py-20 bg-[#04222B] border-b seam-border" id="calculator">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 md:p-12 rounded-3xl bg-[#0A3D4A]/60 border seam-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4FB8B4]">
                <Calculator className="w-4 h-4" />
                <span>Interactive Circularity Estimator</span>
              </div>

              <h3 className="font-headline text-2xl md:text-3xl font-semibold text-[#E2F4F0]">
                Measure Your School or Organization’s Footprint
              </h3>

              <p className="text-[#98D8D0] text-sm leading-relaxed">
                Estimate how many discarded industrial screens you will divert from Surat dump heaps by equipping your school grade or team.
              </p>

              {/* Kit Selection Segmented Control */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#98D8D0]/80">
                  Select Educational Package
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedKit('combo')}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                      selectedKit === 'combo'
                        ? 'border-[#4FB8B4] bg-[#10606F] text-[#E2F4F0]'
                        : 'seam-border bg-[#04222B] text-[#98D8D0] hover:text-[#E2F4F0]'
                    }`}
                  >
                    <span className="block font-semibold">Tote + Pouch</span>
                    <span className="text-[10px] text-[#98D8D0]">Complete Kit</span>
                  </button>
                  <button
                    onClick={() => setSelectedKit('stationery')}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                      selectedKit === 'stationery'
                        ? 'border-[#4FB8B4] bg-[#10606F] text-[#E2F4F0]'
                        : 'seam-border bg-[#04222B] text-[#98D8D0] hover:text-[#E2F4F0]'
                    }`}
                  >
                    <span className="block font-semibold">Stationery</span>
                    <span className="text-[10px] text-[#98D8D0]">Utility Pouch</span>
                  </button>
                  <button
                    onClick={() => setSelectedKit('totes')}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                      selectedKit === 'totes'
                        ? 'border-[#4FB8B4] bg-[#10606F] text-[#E2F4F0]'
                        : 'seam-border bg-[#04222B] text-[#98D8D0] hover:text-[#E2F4F0]'
                    }`}
                  >
                    <span className="block font-semibold">Library Totes</span>
                    <span className="text-[10px] text-[#98D8D0]">Carrying Bags</span>
                  </button>
                </div>
              </div>

              {/* Slider for count */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#98D8D0]">Students / Team Members:</span>
                  <span className="font-headline font-bold text-lg text-[#4FB8B4] tabular-nums">
                    {studentCount} units
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full accent-[#4FB8B4] bg-[#04222B] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#98D8D0]/60">
                  <span>10 units (Classroom)</span>
                  <span>250 units (Grade)</span>
                  <span>500+ units (Campus)</span>
                </div>
              </div>
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6 bg-[#04222B] p-6 md:p-8 rounded-2xl border seam-border flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#4FB8B4] font-semibold block mb-1">
                  PROJECTED DIVERSION VALUE
                </span>
                <h4 className="font-headline text-lg font-semibold text-[#E2F4F0] mb-6">
                  {currentConfig.name}
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#0A3D4A]/50 border seam-border">
                    <span className="text-[10px] text-[#98D8D0] uppercase block">Matrices Diverted</span>
                    <span className="font-headline text-2xl font-bold text-[#4FB8B4] tabular-nums">
                      ~{stencilsDiverted}
                    </span>
                    <span className="text-[10px] text-[#98D8D0]/80 block mt-0.5">Discarded stencils saved</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0A3D4A]/50 border seam-border">
                    <span className="text-[10px] text-[#98D8D0] uppercase block">Polymer Recovered</span>
                    <span className="font-headline text-2xl font-bold text-[#E2F4F0] tabular-nums">
                      {meshSqm} m²
                    </span>
                    <span className="text-[10px] text-[#98D8D0]/80 block mt-0.5">High-tenacity nylon</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A3D4A]/30 border seam-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#98D8D0] block">Estimated Institutional Cost</span>
                    <span className="text-[11px] text-[#4FB8B4]">Includes subsidized educational grant rate</span>
                  </div>
                  <span className="font-headline font-bold text-xl text-[#E2F4F0] tabular-nums">
                    ₹{estTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t seam-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#98D8D0]">
                  <Check className="w-4 h-4 text-[#4FB8B4]" />
                  <span>GST invoice &amp; tax exemption certificate provided</span>
                </div>
                <button
                  onClick={() => onPreFillInquiry(studentCount, currentConfig.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4FB8B4] text-[#04222B] font-semibold text-xs uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer w-full sm:w-auto justify-center"
                >
                  <School className="w-4 h-4" />
                  <span>Request Official School Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

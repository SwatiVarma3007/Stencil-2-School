import React, { useState } from 'react';
import { Factory, Sparkles, Scissors, Recycle, ChevronRight } from 'lucide-react';

export const ProblemJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'COLLECT',
      icon: Factory,
      shortDesc: 'Intercepted directly from textile printing facilities before entering scrap heaps or incinerators.',
      detailTitle: 'Direct Mill Interception in Gujarat Hubs',
      detailProse: 'Surat produces over 30 million meters of printed fabric daily. Rotary screen matrices have a finite run life of 5–10 batch cycles before design changeovers render them obsolete. Our logistics loop picks up screens directly from 14 partner mills before they are dumped or burned.',
      metric: '250+ Stencils Salvaged / Week'
    },
    {
      step: '02',
      title: 'SORT & SANITIZE',
      icon: Sparkles,
      shortDesc: 'Meticulously cleansed, screened for tension strength, and curated by authentic printed motifs.',
      detailTitle: 'Thermal Neutral Wash & Mesh Grading',
      detailProse: 'Screens undergo a 3-step closed-circuit wash removing all non-toxic pigment residues. Each mesh roll is then tension-tested to ensure thread integrity meets our rigorous 15-kg burst requirement for student and daily bags.',
      metric: 'Zero Residual Chemical Residue'
    },
    {
      step: '03',
      title: 'DESIGN & CRAFT',
      icon: Scissors,
      shortDesc: 'Tailored by local artisans along pattern borders, reinforced with heavy zippers and clean edge piping.',
      detailTitle: 'Fair-Wage Artisan Guild Stitching',
      detailProse: 'Because each stencil retains its original screen-printed motifs (paisleys, botanical florals, geometric borders), master tailors hand-align patterns along the bag seams. Every piece is bound with industrial poly-thread and self-repairing nylon coil zippers.',
      metric: '38 Local Artisans Employed'
    },
    {
      step: '04',
      title: 'SECOND LIFE',
      icon: Recycle,
      shortDesc: 'Transformed into tactile, washable, water-repellent stationery and lifestyle bags for everyday utility.',
      detailTitle: 'Circulating in Classrooms & Daily Commutes',
      detailProse: 'Monofilament nylon that would have lasted 500 years in a landfill now serves students and creators for years. It repels rain, rinses clean with water, and preserves genuine Indian textile printing heritage in a functional form.',
      metric: '500 Years Landfill Decomp Replaced'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A3D4A]/40 border-b seam-border" id="transformation">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <span className="text-[#4FB8B4] text-xs uppercase font-semibold tracking-widest">
            Problem to Intervention
          </span>
          <h2 className="font-headline text-2xl md:text-4xl font-semibold text-[#E2F4F0] mt-2">
            200–300 stencils discarded daily.<br />
            <span className="text-[#98D8D0] font-normal">We turn industrial scrap into functional carry.</span>
          </h2>
          <p className="text-[#98D8D0] text-sm md:text-base mt-4 leading-relaxed">
            In fabric mills, monofilament nylon screens are discarded once precision runs conclude. Because industrial nylon takes up to 500 years to decompose and produces toxins if burned, our circular loop recovers and hand-tailors this high-strength mesh instead.
          </p>
        </div>

        {/* 4-Stage Streamlined Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl bg-[#0A3D4A] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#4FB8B4] shadow-lg shadow-[#4FB8B4]/10 bg-[#0A3D4A]'
                    : 'seam-border hover:border-[#98D8D0]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-headline font-semibold text-2xl ${isSelected ? 'text-[#4FB8B4]' : 'text-[#98D8D0]'}`}>
                      {item.step}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-[#4FB8B4]' : 'text-[#98D8D0]'}`} />
                  </div>
                  <h3 className="font-headline font-semibold text-[#E2F4F0] text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#98D8D0] text-xs leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t seam-border flex items-center justify-between text-[11px] text-[#98D8D0]">
                  <span>{isSelected ? 'Viewing Details' : 'Click to inspect'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#4FB8B4] rotate-90' : ''} transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Technical Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-[#04222B] border seam-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[11px] uppercase tracking-wider text-[#4FB8B4] font-semibold">
              Deep Dive · Stage {steps[activeStep].step}
            </span>
            <h4 className="font-headline text-lg font-semibold text-[#E2F4F0]">
              {steps[activeStep].detailTitle}
            </h4>
            <p className="text-xs md:text-sm text-[#98D8D0] leading-relaxed">
              {steps[activeStep].detailProse}
            </p>
          </div>
          <div className="bg-[#0A3D4A] px-5 py-3 rounded-xl border seam-border shrink-0 text-right md:text-center w-full md:w-auto">
            <span className="text-[10px] text-[#98D8D0]/70 uppercase tracking-widest block">AUDITED METRIC</span>
            <span className="font-headline font-bold text-base text-[#4FB8B4]">{steps[activeStep].metric}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface FinalCTAProps {
  onChooseProduct: () => void;
  onOpenSchoolInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onChooseProduct, onOpenSchoolInquiry }) => {
  return (
    <section className="py-16 md:py-24 bg-[#04222B] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0A3D4A] to-[#04222B] border seam-border teal-glow">
          <span className="text-[#4FB8B4] text-xs uppercase font-semibold tracking-widest">
            Join the Movement
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-semibold text-[#E2F4F0] mt-3 max-w-2xl mx-auto leading-tight">
            Before it becomes waste, <br />
            <span className="italic font-normal text-[#4FB8B4]">give it another purpose.</span>
          </h2>
          <p className="text-[#98D8D0] text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Support circular stewardship. Own an authentic piece of textile printing heritage tailored for everyday utility.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onChooseProduct}
              className="px-8 py-3.5 rounded-xl bg-[#4FB8B4] text-[#04222B] font-semibold text-sm uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
            >
              Choose Your Product
            </button>
            <button
              onClick={onOpenSchoolInquiry}
              className="px-8 py-3.5 rounded-xl border seam-border text-[#E2F4F0] font-medium text-sm hover:bg-[#0A3D4A] transition-colors cursor-pointer"
            >
              Inquire for Bulk &amp; Schools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

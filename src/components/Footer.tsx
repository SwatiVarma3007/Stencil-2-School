import React from 'react';

interface FooterProps {
  onOpenSchoolInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchoolInquiry }) => {
  return (
    <footer className="border-t seam-border bg-[#04222B] py-12 text-xs text-[#98D8D0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b seam-border">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4FB8B4]"></span>
              <span className="font-headline font-semibold text-lg text-[#E2F4F0] tracking-wider">
                STENCIL 2 SCHOOL
              </span>
            </div>
            <p className="text-xs text-[#98D8D0]/80 mt-1 max-w-sm">
              Circular material systems and archival upcycling from Gujarat rotary printing mills to classroom desks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#98D8D0]">
            <a href="#story" className="hover:text-[#E2F4F0] transition-colors">Story</a>
            <a href="#transformation" className="hover:text-[#E2F4F0] transition-colors">Transformation</a>
            <a href="#collection" className="hover:text-[#E2F4F0] transition-colors">Collection</a>
            <a href="#impact" className="hover:text-[#E2F4F0] transition-colors">Impact</a>
            <a href="#calculator" className="hover:text-[#E2F4F0] transition-colors">Circularity Estimator</a>
            <button
              onClick={onOpenSchoolInquiry}
              className="hover:text-[#E2F4F0] transition-colors cursor-pointer"
            >
              School Partnerships
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#98D8D0]/60">
          <p>© {new Date().getFullYear()} STENCIL 2 SCHOOL. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Surat · Ahmedabad · Mumbai</span>
            <span>·</span>
            <span>Crafted with Reclaimed Monofilament Nylon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

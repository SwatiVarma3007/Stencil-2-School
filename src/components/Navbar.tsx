import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSchoolInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenSchoolInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#04222B]/90 backdrop-blur-md border-b seam-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#story" 
          className="font-headline font-semibold text-lg uppercase tracking-wider text-[#E2F4F0] flex items-center gap-2.5 hover:text-[#4FB8B4] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#4FB8B4] animate-pulse"></span>
          STENCIL 2 SCHOOL
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#98D8D0]">
          <a href="#story" className="hover:text-[#E2F4F0] transition-colors">Story</a>
          <a href="#transformation" className="hover:text-[#E2F4F0] transition-colors">Transformation</a>
          <a href="#collection" className="hover:text-[#E2F4F0] transition-colors">Collection</a>
          <a href="#impact" className="hover:text-[#E2F4F0] transition-colors">Impact</a>
          <button 
            onClick={onOpenSchoolInquiry}
            className="hover:text-[#E2F4F0] transition-colors cursor-pointer"
          >
            Schools &amp; Bulk
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Bag"
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A3D4A] border seam-border text-[#E2F4F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#10606F] transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#4FB8B4]" />
            <span className="hidden sm:inline">Bag</span>
            <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#4FB8B4] text-[#04222B] text-[11px] font-bold">
              {cartCount}
            </span>
          </button>

          <a
            href="#collection"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors"
          >
            Shop Editions
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#98D8D0] hover:text-[#E2F4F0] rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b seam-border bg-[#04222B] px-6 py-4 space-y-3 animate-fadeIn">
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#98D8D0] hover:text-[#E2F4F0]"
          >
            Story
          </a>
          <a
            href="#transformation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#98D8D0] hover:text-[#E2F4F0]"
          >
            Transformation
          </a>
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#98D8D0] hover:text-[#E2F4F0]"
          >
            Collection
          </a>
          <a
            href="#impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#98D8D0] hover:text-[#E2F4F0]"
          >
            Impact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSchoolInquiry();
            }}
            className="block w-full text-left text-sm font-medium text-[#98D8D0] hover:text-[#E2F4F0]"
          >
            Schools &amp; Bulk Inquiries
          </button>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Product } from '../types';
import { X, Plus, ShieldCheck, Droplets, MapPin, Tag } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04222B]/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0A3D4A] border seam-border overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#04222B]/80 text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#04222B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Showcase */}
          <div className="p-6 bg-[#04222B] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 w-auto object-contain transition-transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-semibold text-[#4FB8B4] uppercase tracking-wider block">
                {product.subtitle}
              </span>
              <h3 className="font-headline font-semibold text-2xl text-[#E2F4F0] mt-1">
                {product.name}
              </h3>
              <p className="font-headline font-bold text-2xl text-[#4FB8B4] mt-2 tabular-nums">
                ₹{product.price}
              </p>
              <p className="text-xs text-[#98D8D0] mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-4 pt-4 border-t seam-border space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#98D8D0]">
                  <MapPin className="w-3.5 h-3.5 text-[#4FB8B4] shrink-0" />
                  <span><strong>Provenance:</strong> {product.patinaOrigin}</span>
                </div>
                <div className="flex items-center gap-2 text-[#98D8D0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4FB8B4] shrink-0" />
                  <span><strong>Matrix Grade:</strong> {product.meshGrade}</span>
                </div>
                <div className="flex items-center gap-2 text-[#98D8D0]">
                  <Droplets className="w-3.5 h-3.5 text-[#4FB8B4] shrink-0" />
                  <span><strong>Care:</strong> Washable with cold water &amp; mild soap</span>
                </div>
                <div className="flex items-center gap-2 text-[#98D8D0]">
                  <Tag className="w-3.5 h-3.5 text-[#4FB8B4] shrink-0" />
                  <span><strong>Dimensions:</strong> {product.dimensions}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t seam-border flex items-center justify-between gap-3">
              <span className="text-[11px] text-[#98D8D0]">100% Repurposed Nylon</span>
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add To Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

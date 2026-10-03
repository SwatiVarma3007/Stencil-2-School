import React, { useState } from 'react';
import { Product } from '../types';
import { Eye, Plus, Check } from 'lucide-react';

interface CollectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({ products, onAddToCart, onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Editions' },
    { id: 'totes', label: 'Lifestyle Totes' },
    { id: 'travel', label: 'Travel & Storage' },
    { id: 'stationery', label: 'Stationery Desk' },
    { id: 'pouches', label: 'Everyday Pouches' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  return (
    <section className="py-16 md:py-24 border-b seam-border" id="collection">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[#4FB8B4] text-xs uppercase font-semibold tracking-widest">
              Available Goods
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-[#E2F4F0] mt-1">
              The Upcycled Collection
            </h2>
            <p className="text-[#98D8D0] text-sm max-w-lg mt-2 leading-relaxed">
              Authentic, one-of-a-kind everyday pieces crafted from salvaged printing matrices. Hand-finished with industrial zip enclosures.
            </p>
          </div>
          <div className="text-xs text-[#98D8D0] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4FB8B4]"></span>
            <span>Direct Artisan Pricing · Zero Markups</span>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4FB8B4] text-[#04222B]'
                  : 'bg-[#0A3D4A] text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#10606F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 5-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedProductId === product.id;
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between p-4 rounded-2xl bg-[#0A3D4A] border seam-border hover:border-[#4FB8B4] transition-all duration-300"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative aspect-square rounded-xl bg-[#04222B] p-3 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Quick View Floating Button */}
                    <button
                      onClick={() => onQuickView(product)}
                      title="Quick View Specifications"
                      aria-label={`Quick view ${product.name}`}
                      className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-[#04222B]/85 text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#10606F] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clean unboxed metadata */}
                  <span className="text-[11px] font-semibold text-[#4FB8B4] uppercase tracking-wider block">
                    {product.subtitle}
                  </span>
                  <h3 className="font-headline font-semibold text-[#E2F4F0] text-base mt-0.5">
                    {product.name}
                  </h3>
                  <p className="text-[#98D8D0] text-xs mt-1.5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-[#98D8D0]/80">
                    <span>{product.dimensions}</span>
                    <span>·</span>
                    <span>{product.meshGrade.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Footer with Tabular Price & Acquire Action */}
                <div className="mt-5 pt-3 border-t seam-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#98D8D0]/70 uppercase tracking-widest block">PRICE</span>
                    <p className="font-headline font-semibold text-xl text-[#E2F4F0] tabular-nums">
                      ₹{product.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      isJustAdded
                        ? 'bg-[#98D8D0] text-[#04222B]'
                        : 'bg-[#4FB8B4] text-[#04222B] hover:bg-[#98D8D0]'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Acquire</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

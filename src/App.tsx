import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemJourney } from './components/ProblemJourney';
import { Collection } from './components/Collection';
import { ImpactStats } from './components/ImpactStats';
import { ImpactCalculator } from './components/ImpactCalculator';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SchoolInquiryModal } from './components/SchoolInquiryModal';
import { Check } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('stencil2school_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('stencil2school_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [cart]);

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSchoolInquiryOpen, setIsSchoolInquiryOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Inquiry prefill values from calculator
  const [inquiryPrefill, setInquiryPrefill] = useState({
    count: 75,
    package: 'Classroom Stationery Pouch Kit (P1/P2)'
  });

  // Brief toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to your bag`);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    // Clear cart on successful order
    setCart([]);
  };

  const handlePreFillInquiry = (count: number, packageType: string) => {
    setInquiryPrefill({ count, package: packageType });
    setIsSchoolInquiryOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#04222B] text-[#E2F4F0]">
      {/* Top compact navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSchoolInquiry={() => {
          setInquiryPrefill({ count: 75, package: 'Classroom Stationery Pouch Kit (P1/P2)' });
          setIsSchoolInquiryOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCollection={() => {
            const el = document.getElementById('collection');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenHowItWorks={() => {
            const el = document.getElementById('transformation');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Problem to Intervention / Transformation Journey */}
        <ProblemJourney />

        {/* Upcycled Collection */}
        <Collection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Verifiable Impact & Footprint */}
        <ImpactStats />

        {/* Interactive Stencil Circularity Calculator */}
        <ImpactCalculator onPreFillInquiry={handlePreFillInquiry} />

        {/* Final CTA */}
        <FinalCTA
          onChooseProduct={() => {
            const el = document.getElementById('collection');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSchoolInquiry={() => {
            setInquiryPrefill({ count: 100, package: 'Student Combo (Tote + Pouch)' });
            setIsSchoolInquiryOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSchoolInquiry={() => {
          setInquiryPrefill({ count: 75, package: 'Classroom Stationery Pouch Kit (P1/P2)' });
          setIsSchoolInquiryOpen(true);
        }}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* School / Bulk Inquiry Modal */}
      <SchoolInquiryModal
        isOpen={isSchoolInquiryOpen}
        onClose={() => setIsSchoolInquiryOpen(false)}
        preFilledCount={inquiryPrefill.count}
        preFilledPackage={inquiryPrefill.package}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#10606F] text-[#E2F4F0] border seam-border shadow-xl text-xs font-semibold animate-slideUp">
          <Check className="w-4 h-4 text-[#4FB8B4]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

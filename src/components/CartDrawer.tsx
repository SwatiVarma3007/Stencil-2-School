import React from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 200;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#04222B]/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0A3D4A] border-l seam-border flex flex-col justify-between shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="p-6 border-b seam-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#4FB8B4]" />
              <h3 className="font-headline font-semibold text-lg text-[#E2F4F0]">
                Upcycled Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart drawer"
              className="p-1.5 rounded-lg text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#10606F] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-[#04222B]/60 border-b seam-border text-xs">
            {remainingForFreeShipping > 0 ? (
              <p className="text-[#98D8D0]">
                Add <strong className="text-[#4FB8B4]">₹{remainingForFreeShipping}</strong> more for free standard delivery!
              </p>
            ) : (
              <p className="text-[#4FB8B4] font-semibold">
                ✓ You have qualified for Free Delivery across India!
              </p>
            )}
            <div className="w-full bg-[#0A3D4A] h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-[#4FB8B4] h-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#04222B] flex items-center justify-center border seam-border">
                  <ShoppingBag className="w-8 h-8 text-[#98D8D0]/60" />
                </div>
                <h4 className="font-headline text-base font-semibold text-[#E2F4F0]">
                  Your bag is empty
                </h4>
                <p className="text-xs text-[#98D8D0] max-w-xs">
                  Discover our selection of upcycled totes, travel folios, and stationery pouches.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-xl bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
                >
                  Explore Editions
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-xl bg-[#04222B]/70 border seam-border flex items-center gap-3.5"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain rounded-lg bg-[#0A3D4A] p-1 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-headline font-semibold text-sm text-[#E2F4F0] truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-xs text-[#98D8D0] mt-0.5">
                      ₹{item.product.price} each
                    </p>
                    {/* Quantity Selector */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center bg-[#0A3D4A] rounded-lg border seam-border">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:text-[#4FB8B4] text-[#98D8D0] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#E2F4F0] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:text-[#4FB8B4] text-[#98D8D0] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#98D8D0]/60 hover:text-red-400 p-1 transition-colors cursor-pointer ml-auto"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline font-semibold text-sm text-[#E2F4F0] tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t seam-border bg-[#04222B]/90 space-y-4">
              <div className="space-y-1.5 text-xs text-[#98D8D0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-headline font-semibold text-[#E2F4F0] text-sm tabular-nums">
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span>{subtotal >= freeShippingThreshold ? 'FREE' : '₹40'}</span>
                </div>
                <div className="pt-2 border-t seam-border flex justify-between font-headline font-bold text-base text-[#E2F4F0]">
                  <span>Total Due</span>
                  <span className="text-[#4FB8B4] tabular-nums">
                    ₹{subtotal + (subtotal >= freeShippingThreshold ? 0 : 40)}
                  </span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4FB8B4] text-[#04222B] font-semibold text-xs uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
              >
                <span>Proceed To Delivery Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

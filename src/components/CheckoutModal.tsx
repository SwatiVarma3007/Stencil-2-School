import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { X, CheckCircle, Package, Truck, ArrowLeft, Printer, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod' as 'cod' | 'upi' | 'card' | 'school-po'
  });

  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 200 ? 0 : 40;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order: OrderDetails = {
        orderId: `STN-2025-${Math.floor(1000 + Math.random() * 9000)}`,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        paymentMethod: formData.paymentMethod,
        items: [...items],
        subtotal,
        shipping,
        total,
        timestamp: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      };
      setConfirmedOrder(order);
      setIsSubmitting(false);
      onOrderSuccess();
    }, 700);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04222B]/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0A3D4A] border seam-border p-6 md:p-8 shadow-2xl animate-scaleUp my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          aria-label="Close checkout modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#04222B]/80 text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#04222B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedOrder ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold text-[#4FB8B4] uppercase tracking-wider block">
                Direct Artisan Checkout
              </span>
              <h3 className="font-headline font-semibold text-2xl text-[#E2F4F0] mt-1">
                Dispatch Details
              </h3>
              <p className="text-xs text-[#98D8D0] mt-1">
                Your order directly supports waste diversion and fair wages for local Gujarat tailors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swati Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                  Street Address &amp; Landmark *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Flat / House No., Society or Campus Road"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surat / Ahmedabad / Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    pattern="[0-9]{6}"
                    placeholder="395003"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#98D8D0] mb-2">
                  Select Payment Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-[#4FB8B4] bg-[#10606F]' : 'border-white/10 bg-[#04222B]'}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-xs text-[#E2F4F0]">Cash on Delivery</span>
                    <span className="text-[10px] text-[#98D8D0] mt-1">Pay upon handoff</span>
                  </label>

                  <label className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'upi' ? 'border-[#4FB8B4] bg-[#10606F]' : 'border-white/10 bg-[#04222B]'}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-xs text-[#E2F4F0]">UPI / QR Pay</span>
                    <span className="text-[10px] text-[#98D8D0] mt-1">GPay, PhonePe, Paytm</span>
                  </label>

                  <label className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'school-po' ? 'border-[#4FB8B4] bg-[#10606F]' : 'border-white/10 bg-[#04222B]'}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="school-po"
                      checked={formData.paymentMethod === 'school-po'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'school-po' })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-xs text-[#E2F4F0]">School PO</span>
                    <span className="text-[10px] text-[#98D8D0] mt-1">Institutional invoice</span>
                  </label>
                </div>
              </div>

              {/* Order Summary Recap */}
              <div className="mt-4 p-4 rounded-xl bg-[#04222B] border seam-border space-y-1.5 text-xs text-[#98D8D0]">
                <div className="flex justify-between">
                  <span>Selected Pieces ({items.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="text-[#E2F4F0] font-semibold tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="pt-2 border-t seam-border flex justify-between font-headline font-bold text-sm text-[#E2F4F0]">
                  <span>Total Amount</span>
                  <span className="text-[#4FB8B4] text-base tabular-nums">₹{total}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#98D8D0]">
                  <ShieldCheck className="w-4 h-4 text-[#4FB8B4]" />
                  <span>Verified 100% circular monofilament nylon</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-[#4FB8B4] text-[#04222B] font-semibold text-xs uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Order...' : `Confirm Order (₹${total})`}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt Screen */
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#10606F] text-[#4FB8B4] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#4FB8B4] font-semibold">
                ORDER SUCCESSFUL &amp; LOGGED
              </span>
              <h3 className="font-headline font-semibold text-2xl text-[#E2F4F0] mt-1">
                Thank You, {confirmedOrder.customerName}!
              </h3>
              <p className="text-xs text-[#98D8D0] mt-1">
                Your order <strong className="text-[#E2F4F0]">{confirmedOrder.orderId}</strong> has been allocated to our Surat stitching cluster.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="p-5 rounded-2xl bg-[#04222B] border seam-border text-left text-xs space-y-3">
              <div className="flex justify-between border-b seam-border pb-2">
                <span className="text-[#98D8D0]">Order Number</span>
                <span className="font-mono text-[#4FB8B4] font-bold">{confirmedOrder.orderId}</span>
              </div>

              <div className="flex justify-between border-b seam-border pb-2">
                <span className="text-[#98D8D0]">Delivery To</span>
                <span className="text-[#E2F4F0] text-right font-medium">
                  {confirmedOrder.address}, {confirmedOrder.city} - {confirmedOrder.pincode}
                </span>
              </div>

              <div className="flex justify-between border-b seam-border pb-2">
                <span className="text-[#98D8D0]">Estimated SpeedPost Delivery</span>
                <span className="text-[#E2F4F0] font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#4FB8B4]" />
                  3–5 Business Days
                </span>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-semibold text-[#98D8D0] block mb-2 uppercase tracking-wider">
                  Itemized Pieces
                </span>
                <div className="space-y-1.5">
                  {confirmedOrder.items.map((i) => (
                    <div key={i.product.id} className="flex justify-between text-[#E2F4F0]">
                      <span>{i.product.name} × {i.quantity}</span>
                      <span className="tabular-nums">₹{i.product.price * i.quantity}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 border-t seam-border font-bold text-sm text-[#4FB8B4]">
                    <span>Total Paid ({confirmedOrder.paymentMethod.toUpperCase()})</span>
                    <span className="tabular-nums">₹{confirmedOrder.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Certificate Badge */}
            <div className="p-3.5 rounded-xl bg-[#10606F]/40 border seam-border flex items-center justify-center gap-2 text-xs text-[#98D8D0]">
              <Package className="w-4 h-4 text-[#4FB8B4]" />
              <span>
                By acquiring this batch, you diverted approximately <strong className="text-[#E2F4F0]">{Math.max(1, Math.round(confirmedOrder.items.reduce((a, b) => a + b.quantity, 0) * 0.8))} industrial stencils</strong> from municipal scrap.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border seam-border text-[#E2F4F0] text-xs font-semibold hover:bg-[#04222B] transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Save / Print Receipt</span>
              </button>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
              >
                <span>Continue Exploring</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, School, Check, Send } from 'lucide-react';

interface SchoolInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFilledCount?: number;
  preFilledPackage?: string;
}

export const SchoolInquiryModal: React.FC<SchoolInquiryModalProps> = ({
  isOpen,
  onClose,
  preFilledCount = 75,
  preFilledPackage = 'Classroom Stationery Pouch Kit (P1/P2)'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    cityState: '',
    studentCount: preFilledCount,
    kitType: preFilledPackage,
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04222B]/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0A3D4A] border seam-border p-6 md:p-8 shadow-2xl animate-scaleUp my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#04222B]/80 text-[#98D8D0] hover:text-[#E2F4F0] hover:bg-[#04222B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4FB8B4]">
              <School className="w-4 h-4" />
              <span>Educational &amp; Institutional Program</span>
            </div>
            <h3 className="font-headline font-semibold text-2xl text-[#E2F4F0] mt-1">
              Bulk &amp; School Inquiries
            </h3>
            <p className="text-xs text-[#98D8D0] mt-1 leading-relaxed">
              Equip entire classrooms or campus drives with durable, upcycled pencil pouches and totes. Subsidized pricing and educational workshops included.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                  Institution or School Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Xavier's High School / Delhi Public School"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Coordinator / Principal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. / Mr. / Ms. Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Contact Phone *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="admin@school.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    City &amp; State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surat, Gujarat"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Estimated Student Count (Units)
                  </label>
                  <input
                    type="number"
                    min="15"
                    max="5000"
                    value={formData.studentCount}
                    onChange={(e) => setFormData({ ...formData, studentCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] focus:outline-none focus:border-[#4FB8B4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                    Edition of Interest
                  </label>
                  <select
                    value={formData.kitType}
                    onChange={(e) => setFormData({ ...formData, kitType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] focus:outline-none focus:border-[#4FB8B4]"
                  >
                    <option value="Stationery Pouch Class Pack">Pouch Class Pack (₹28/unit)</option>
                    <option value="Student Combo (Tote + Pouch)">Student Combo Tote + Pouch (₹70/unit)</option>
                    <option value="Campus Carry Bags">Campus Carry Bags (₹46/unit)</option>
                    <option value="Custom Exhibition / Workshop">Custom Workshop &amp; Education Kit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#98D8D0] mb-1">
                  Specific Requests or Delivery Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Needed for World Environment Day assembly or annual student kit distribution..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] placeholder-[#98D8D0]/40 focus:outline-none focus:border-[#4FB8B4]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#98D8D0]">
                  80G Tax Exemption receipts supported.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-[#10606F] text-[#4FB8B4] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-headline font-semibold text-xl text-[#E2F4F0]">
              Inquiry Received!
            </h4>
            <p className="text-xs text-[#98D8D0] max-w-sm mx-auto leading-relaxed">
              Thank you for partnering with <strong>STENCIL 2 SCHOOL</strong>. Our institutional program team will reach out to <strong>{formData.contactPerson}</strong> at <strong>{formData.email}</strong> within 24 hours with an official quote and material samples.
            </p>
            <div className="p-4 rounded-xl bg-[#04222B] border seam-border text-xs text-[#E2F4F0] max-w-sm mx-auto">
              <span>Projected batch: <strong>{formData.studentCount} units</strong> of {formData.kitType}</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-2 px-6 py-2 rounded-xl bg-[#4FB8B4] text-[#04222B] text-xs font-semibold uppercase tracking-wider hover:bg-[#98D8D0] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

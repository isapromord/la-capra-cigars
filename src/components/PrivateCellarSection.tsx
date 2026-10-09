import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const PrivateCellarSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryTier, setInquiryTier] = useState('Personal Cedar Vault Locker');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="private-cellar" className="py-24 bg-[#181615] border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
            Private Member Society
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9] mb-4">
            The Santiago Vault Concierge
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel leading-relaxed">
            By invitation and private allocation application. Gain access to private Spanish cedar vitrines in our Santiago vaults and commissioned personal vitola rollings.
          </p>
        </div>

        {/* 3 Pillars of Membership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-[#141312] border border-[#d4af37]/20 p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37] font-cinzel block">
              I. Vault Storage
            </span>
            <h3 className="text-xl font-serif font-medium text-[#ede6d9]">
              Personal Cedar Vitrine
            </h3>
            <p className="text-xs text-[#d0c5af] font-cinzel leading-relaxed">
              Store your acquired vintage batches in custom numbered Spanish cedar lockers in Santiago de los Caballeros at strict 69% RH and 19.5°C with bi-monthly rotation reports.
            </p>
          </div>

          <div className="bg-[#141312] border border-[#d4af37]/20 p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37] font-cinzel block">
              II. Private Commission
            </span>
            <h3 className="text-xl font-serif font-medium text-[#ede6d9]">
              Master Torcedor Session
            </h3>
            <p className="text-xs text-[#d0c5af] font-cinzel leading-relaxed">
              Commission bespoke vitola lengths and ring gauges using our 10-year fermented wrapper archives, personalized with custom crimson and gold foil band embossing.
            </p>
          </div>

          <div className="bg-[#141312] border border-[#d4af37]/20 p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37] font-cinzel block">
              III. Archival Pre-Release
            </span>
            <h3 className="text-xl font-serif font-medium text-[#ede6d9]">
              Annual Cellar Extraction
            </h3>
            <p className="text-xs text-[#d0c5af] font-cinzel leading-relaxed">
              First right of acquisition on rare annual vintage harvests and single-farm Cibao valley lots before any public salon release.
            </p>
          </div>

        </div>

        {/* Inquiry Card Form */}
        <div className="max-w-2xl mx-auto bg-[#141312] border border-[#d4af37]/35 p-8 sm:p-10 font-cinzel">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 mx-auto border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Check size={22} />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-[#ede6d9]">
                Application Received
              </h4>
              <p className="text-xs text-[#d0c5af] leading-relaxed max-w-md mx-auto">
                Our Private Cellar Steward will reach out to confidential address {inquiryEmail} within 24 business hours to review locker availability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center pb-4 border-b border-[#d4af37]/20">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                  Confidential Inquiry
                </span>
                <h4 className="text-2xl font-serif font-semibold text-[#ede6d9]">
                  Request Cellar Vault Membership
                </h4>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    Connoisseur Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord Sterling Hayes"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors placeholder:text-[#99907c]/40 font-cinzel"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    Confidential Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sterling@hayescellars.com"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors placeholder:text-[#99907c]/40 font-cinzel"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    Program Preference
                  </label>
                  <select
                    value={inquiryTier}
                    onChange={(e) => setInquiryTier(e.target.value)}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors cursor-pointer uppercase font-cinzel"
                  >
                    <option value="Personal Cedar Vault Locker">Personal Cedar Vault Locker (Santiago)</option>
                    <option value="Private Bespoke Vitola Rolling">Private Bespoke Vitola Commission</option>
                    <option value="Annual Vintage Pre-Release Allocation">Annual Vintage Pre-Release Allocation</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="gold-foil-btn w-full py-3.5 text-xs text-center uppercase tracking-[0.16em]"
              >
                Submit Confidential Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

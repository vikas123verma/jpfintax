import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '@jpfintax/ui';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DDE4E0] py-2 px-3 sm:hidden shadow-lg transition-transform"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#F0F6F3] text-[#0F4D3A] active:bg-[#DDECE4] text-[11px] font-medium transition-colors"
          aria-label="Call JP FinTax"
        >
          <Phone className="w-4 h-4 mb-1" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#0F4D3A] text-white active:bg-[#1B4E3E] text-[11px] font-medium transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-1" />
          <span>WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${BRAND_INFO.email}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#F0F6F3] text-[#17201D] active:bg-[#E4E8E6] text-[11px] font-medium transition-colors"
          aria-label="Email JP FinTax"
        >
          <Mail className="w-4 h-4 mb-1" />
          <span>Email</span>
        </a>
      </div>
    </aside>
  );
};

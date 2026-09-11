import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Phone, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '@jpfintax/ui';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0F4D3A] text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#1B4E3E] text-[#DDECE4] border border-[#285C4D] mb-5">
            Partner With JP FinTax
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white mb-5 leading-tight">
            Let's Simplify Your Tax &amp; Compliance Needs
          </h2>

          <p className="text-base sm:text-lg text-[#DDECE4] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Speak with our team about your tax, accounting or compliance requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="white"
              size="lg"
              className="w-full sm:w-auto font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-medium text-white bg-[#1B4E3E] hover:bg-[#285C4D] border border-[#285C4D] transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2.5 text-[#C29B38]" />
              <span>Call {BRAND_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#BFDACD] mt-6">
            Consultation available Monday – Saturday &bull; Inquiries answered promptly
          </p>
        </div>
      </Container>
    </section>
  );
};

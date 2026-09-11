import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Check, ArrowRight, ShieldCheck, Landmark, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '@jpfintax/ui';

export const AboutPreview: React.FC = () => {
  const commitments = [
    {
      title: 'Precision & Accuracy',
      desc: 'Meticulous verification of books, returns, and vouchers against statutory disclosures.',
    },
    {
      title: 'Timely Compliance Execution',
      desc: 'Proactive calendar management to prevent late fees, interest, and compliance lapses.',
    },
    {
      title: 'Financial Organization',
      desc: 'Clean ledgers and organized records that prepare your business for credit and growth.',
    },
    {
      title: 'Practical Tax Guidance',
      desc: 'Pragmatic, lawful optimization strategies suited to everyday commercial decisions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F8F6] border-b border-[#DDE4E0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text / Content */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="About Our Firm"
              title={BRAND_INFO.tagline}
              subtitle={`${BRAND_INFO.name} provides professional, reliable tax, accounting, and regulatory compliance services for individuals, entrepreneurs, and corporate entities.`}
              className="mb-8"
            />

            <p className="text-sm sm:text-base text-[#66736D] leading-relaxed mb-6">
              In an evolving Indian taxation framework, maintaining statutory hygiene is vital. We assist our clients across Income Tax, GST, TDS, ROC, and systematic bookkeeping—translating intricate compliance mandates into straightforward, structured processes.
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {commitments.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-[#DDE4E0]">
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <h4 className="text-xs font-semibold text-[#17201D] uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66736D] pl-7 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/about" variant="primary" size="md">
                <span>Read Full Profile</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Contact Firm
              </Button>
            </div>
          </div>

          {/* Right Professional Card Composition */}
          <div className="lg:col-span-5">
            <div className="bg-[#17201D] text-white rounded-xl p-8 shadow-premium border border-[#242C28] relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 bg-[#0F4D3A]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0F4D3A] text-white flex items-center justify-center font-serif text-lg font-bold border border-[#285C4D]">
                    JP
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white tracking-wide">
                      {BRAND_INFO.name}
                    </h3>
                    <p className="text-xs text-[#A0ACA5]">Tax &bull; Accounts &bull; Compliance</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#242C28] text-xs">
                  <div className="flex items-center space-x-3 text-[#DDE4E0]">
                    <ShieldCheck className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Statutory compliance adhering to Indian legal frameworks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#DDE4E0]">
                    <Landmark className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Direct coordination for MCA, ROC &amp; GST portals</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#DDE4E0]">
                    <FileText className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Structured reconciliations across 26AS, AIS &amp; GSTR-2B</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#DDE4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Direct advisor accountability for all clients</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#242C28] bg-[#0F4D3A]/30 -mx-8 -mb-8 p-6">
                  <div className="text-[11px] uppercase tracking-widest text-[#A0ACA5] mb-1 font-medium">
                    Corporate Office
                  </div>
                  <div className="text-xs text-white leading-relaxed">
                    {BRAND_INFO.address.line1}, {BRAND_INFO.address.line2}, {BRAND_INFO.address.line3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

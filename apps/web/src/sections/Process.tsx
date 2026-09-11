import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We examine your business model, previous tax filings, source vouchers, and specific statutory requirements in detail.',
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We map out the appropriate tax strategy, reconcile books with departmental registers (AIS, 26AS, GSTR-2B), and set clear timelines.',
    },
    {
      step: '03',
      title: 'Execute',
      desc: 'Our team computes figures with rigorous accuracy, validates file formats (JSON, XML, FVU), and completes seamless official e-filings.',
    },
    {
      step: '04',
      title: 'Stay Compliant',
      desc: 'We archive official acknowledgements, deliver signed returns, and monitor upcoming recurring statutory deadlines for your firm.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F8F6] border-b border-[#DDE4E0]">
      <Container>
        <SectionHeading
          badge="Our Methodology"
          title="How We Work"
          subtitle="A systematic, structured four-stage process engineered to ensure total clarity, error-free computations, and punctual regulatory submissions."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
          {/* Subtle horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#DDE4E0] -z-0" />

          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-start bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none border lg:border-none border-[#DDE4E0]">
              {/* Step indicator circle */}
              <div className="w-14 h-14 rounded-full bg-[#0F4D3A] text-white flex items-center justify-center font-heading text-lg font-semibold shadow-sm mb-6 border-4 border-white lg:border-[#F7F8F6]">
                {item.step}
              </div>

              <h3 className="text-xl font-heading font-medium text-[#17201D] mb-2.5">
                {item.title}
              </h3>

              <p className="text-sm text-[#66736D] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

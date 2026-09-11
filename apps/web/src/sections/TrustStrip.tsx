import React from 'react';
import { Container } from '../components/Container';
import { ShieldCheck, Scale, Briefcase, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Reliable Guidance',
      description: 'Systematic advice rooted in current Indian statutory provisions and regulatory updates.',
    },
    {
      icon: Scale,
      title: 'Compliance Focused',
      description: 'Strict adherence to Income Tax, GST, MCA, and ROC statutory deadlines.',
    },
    {
      icon: Briefcase,
      title: 'Business Friendly',
      description: 'Streamlined documentation and pragmatic communication designed for busy founders.',
    },
    {
      icon: Award,
      title: 'Professional Service',
      description: 'Dedicated financial diligence, accurate reconciliations, and absolute confidentiality.',
    },
  ];

  return (
    <section className="bg-white border-b border-[#DDE4E0] py-8 sm:py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0 mt-0.5 border border-[#BFDACD]/50">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#17201D] mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#66736D] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

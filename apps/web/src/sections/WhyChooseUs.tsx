import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import {
  Briefcase,
  CheckCheck,
  MessageCircle,
  TrendingUp,
  FileCheck2,
  Building,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: 'Professional Approach',
      desc: 'Disciplined consulting ethics, strict confidentiality of financial records, and prompt communication on every engagement.',
    },
    {
      icon: CheckCheck,
      title: 'Compliance Focus',
      desc: 'Deep vigilance regarding current Income Tax regulations, GST rules, MCA circulars, and departmental filing notifications.',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      desc: 'Transparent explanations devoid of obscure tax jargon, ensuring you understand the rationale behind every return and computation.',
    },
    {
      icon: TrendingUp,
      title: 'Practical Tax Guidance',
      desc: 'Legitimate strategies designed to optimize deductions, preserve legitimate cash flows, and safeguard business viability.',
    },
    {
      icon: FileCheck2,
      title: 'Organized Accounting Support',
      desc: 'Systematic voucher categorization, balanced ledgers, and reconciled accounts ready for banking, investor, and audit reviews.',
    },
    {
      icon: Building,
      title: 'Business-Focused Solutions',
      desc: 'Scalable services adaptable to freelancers, proprietors, emerging startups, and established corporate companies.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#DDE4E0]">
      <Container>
        <SectionHeading
          badge="Why Work With Us"
          title="Built on Trust, Precision, &amp; Compliance"
          subtitle="We focus on dependable financial practices, disciplined adherence to timelines, and clarity for business owners."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F8F6] border border-[#DDE4E0] hover:border-[#0F4D3A] rounded-lg p-7 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-md bg-[#0F4D3A] text-white flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-heading font-medium text-[#17201D] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#66736D] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

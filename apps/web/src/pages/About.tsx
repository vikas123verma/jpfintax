import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { CTA } from '../sections/CTA';
import { useSEO } from '../hooks/useSEO';
import { BRAND_INFO } from '@jpfintax/ui';
import {
  ShieldCheck,
  Target,
  Scale,
  Compass,
  FileSpreadsheet,
  CheckCircle,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

export const About: React.FC = () => {
  useSEO({
    title: 'About Us | JP FIN TAX SERVICES LLP',
    description:
      'Learn about JP FIN TAX SERVICES LLP — your trusted partner for tax, accounting, and statutory compliance in India.',
  });

  const corePillars = [
    {
      icon: ShieldCheck,
      title: 'Accuracy & Verification',
      desc: 'Double-entry rigor, cross-reconciliation with departmental records, and meticulous verification of invoices and tax credits.',
    },
    {
      icon: Clock,
      title: 'Timely Compliance',
      desc: 'Scheduled filing workflows designed to eliminate eleventh-hour scrambles and safeguard clients against severe late filing fees.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Financial Organization',
      desc: 'Systematic chart of accounts, clean ledger classifications, and up-to-date trial balances ready for management and statutory scrutiny.',
    },
    {
      icon: Target,
      title: 'Practical Tax Guidance',
      desc: 'Clear, legitimate tax optimization advice tailored to real-world business scenarios under the Income Tax Act.',
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Breadcrumb navigation */}
        <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-8" />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="green" className="mb-4">
            About Our Advisory
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#17201D] tracking-tight leading-tight mb-6">
            {BRAND_INFO.tagline}
          </h1>
          <p className="text-lg text-[#66736D] leading-relaxed font-light">
            {BRAND_INFO.name} is a professional consulting practice providing dedicated tax, accounting, and compliance solutions for individuals, sole proprietors, firms, and companies across India.
          </p>
        </div>

        {/* Mission & Orientation Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-[#46524C] leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#17201D]">
              Our Operating Philosophy
            </h2>
            <p>
              Navigating India's dynamic regulatory environment—from the complexities of GST to multifaceted Income Tax slabs and corporate ROC disclosures—demands continuous attentiveness and disciplined accounting.
            </p>
            <p>
              At {BRAND_INFO.name}, we operate with a singular purpose: to deliver dependable, transparent, and timely financial guidance that frees business founders to focus on operational expansion with complete peace of mind.
            </p>
            <p>
              We treat every return, reconciliation, and audit requirement with institutional diligence. Our advisory focuses strictly on legitimate, defensible tax positions, rigorous documentation, and clear communication at every milestone.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#17201D]">
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Zero tolerance for filing delays</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Complete data confidentiality</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Transparent, responsive communication</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Thorough departmental reconciliations</span>
              </div>
            </div>
          </div>

          {/* Right Card: Institutional Brand Overview */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-card">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-[#F0F3F1]">
                <div className="w-12 h-12 rounded-lg bg-[#0F4D3A] text-white flex items-center justify-center font-serif text-xl font-bold">
                  JP
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#17201D]">
                    {BRAND_INFO.name}
                  </h3>
                  <p className="text-xs text-[#66736D]">Limited Liability Partnership</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#46524C]">
                <div>
                  <span className="font-semibold text-[#17201D] block mb-1 uppercase tracking-wider text-[11px]">
                    Primary Practice Sectors
                  </span>
                  <p className="text-[#66736D]">
                    Direct Taxation &bull; Indirect Tax (GST) &bull; Corporate Governance (MCA/ROC) &bull; Financial Bookkeeping &bull; Wage Compliance (EPF/ESIC)
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F3F1]">
                  <span className="font-semibold text-[#17201D] block mb-1 uppercase tracking-wider text-[11px]">
                    Registered Location
                  </span>
                  <p className="text-[#66736D] leading-relaxed">
                    {BRAND_INFO.address.fullText}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F3F1]">
                  <span className="font-semibold text-[#17201D] block mb-1 uppercase tracking-wider text-[11px]">
                    Advisory Channels
                  </span>
                  <div className="space-y-1 text-[#17201D]">
                    <div>Phone: {BRAND_INFO.phoneDisplay}</div>
                    <div>Email: {BRAND_INFO.email}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F0F3F1]">
                <Button to="/contact" variant="primary" size="sm" className="w-full justify-center">
                  Schedule an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-medium text-[#17201D] mb-3">
              Principles Guiding Our Practice
            </h2>
            <p className="text-sm text-[#66736D]">
              Our service model is grounded in statutory exactness, punctual delivery, and business clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white border border-[#DDE4E0] p-6 rounded-lg">
                  <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-heading font-medium text-[#17201D] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#66736D] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* CTA section at bottom */}
      <CTA />
    </div>
  );
};

import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Badge } from '../components/Badge';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BRAND_INFO } from '@jpfintax/ui';

export const Contact: React.FC = () => {
  useSEO({
    title: 'Contact Us | JP FIN TAX SERVICES LLP',
    description:
      'Contact JP FIN TAX SERVICES LLP for professional tax, accounting and compliance advisory. Phone: 9717246385, Email: jpfin.taxservicesllp@gmail.com',
  });

  return (
    <div className="py-8 md:py-12">
      <Container>
        <Breadcrumbs items={[{ label: 'Contact' }]} className="mb-8" />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="green" className="mb-4">
            Connect With Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#17201D] tracking-tight leading-tight mb-5">
            Contact JP FIN TAX SERVICES LLP
          </h1>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed font-light">
            Whether you require an Income Tax assessment, GST registration, quarterly TDS filing, or ongoing corporate compliance, our advisors are ready to assist.
          </p>
        </div>

        {/* 2-Column Split: Info & Cards on left, Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Direct coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-white border border-[#DDE4E0] rounded-xl p-6 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-lg bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Call Our Advisors
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="text-lg font-semibold text-[#17201D] hover:text-[#0F4D3A] transition-colors block mb-1"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#66736D]">
                    Direct telephone line for consultations and urgent compliance queries.
                  </p>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="inline-flex items-center text-xs font-semibold text-[#0F4D3A] mt-3 hover:underline"
                  >
                    <span>Click to Call</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-[#DDE4E0] rounded-xl p-6 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-lg bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-sm font-semibold text-[#17201D] hover:text-[#0F4D3A] transition-colors block mb-1 break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                  <p className="text-xs text-[#66736D]">
                    Share statements, Form 16, or queries directly for confidential review.
                  </p>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="inline-flex items-center text-xs font-semibold text-[#0F4D3A] mt-3 hover:underline"
                  >
                    <span>Compose Email</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-white border border-[#DDE4E0] rounded-xl p-6 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-lg bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Visiting Office Address
                  </span>
                  <address className="not-italic text-sm font-medium text-[#17201D] leading-relaxed mb-2">
                    {BRAND_INFO.address.line1},<br />
                    {BRAND_INFO.address.line2},<br />
                    {BRAND_INFO.address.line3},<br />
                    {BRAND_INFO.address.state}
                  </address>
                  <p className="text-[11px] text-[#66736D]">
                    Located near B.D. International School on Brahma Mandir Road.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="bg-[#17201D] text-white rounded-xl p-6 border border-[#242C28]">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="w-5 h-5 text-[#C29B38]" />
                <h3 className="font-heading font-medium text-base text-white">
                  Chat on WhatsApp
                </h3>
              </div>
              <p className="text-xs text-[#A0ACA5] leading-relaxed mb-4">
                Prefer messaging? You can initiate a direct WhatsApp conversation with our tax advisory desk.
              </p>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-md bg-[#0F4D3A] hover:bg-[#1B4E3E] text-white text-xs font-semibold transition-colors"
              >
                <span>Open WhatsApp (+91 9717246385)</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Confidentiality notice */}
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-[#F0F6F3] border border-[#BFDACD] text-xs text-[#0F4D3A]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>
                All inquiries and tax documents are strictly safeguarded under Indian client confidentiality standards.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

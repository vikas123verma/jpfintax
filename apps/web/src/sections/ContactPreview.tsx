import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { BRAND_INFO } from '@jpfintax/ui';

export const ContactPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F8F6]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <SectionHeading
              badge="Connect With Us"
              title="Speak Directly With Our Advisors"
              subtitle="Have questions regarding upcoming filings, GST reconciliation, or company compliance? Reach out to us directly."
              className="mb-8"
            />

            <div className="space-y-6 text-sm text-[#46524C]">
              {/* Phone Card */}
              <div className="bg-white border border-[#DDE4E0] p-5 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="text-base font-semibold text-[#17201D] hover:text-[#0F4D3A] transition-colors"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#66736D] mt-0.5">Available for calls and direct tax inquiries</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white border border-[#DDE4E0] p-5 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Email Desk
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-sm font-semibold text-[#17201D] hover:text-[#0F4D3A] transition-colors break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                  <p className="text-xs text-[#66736D] mt-0.5">Send documents and statement queries</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white border border-[#DDE4E0] p-5 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Visiting Office
                  </span>
                  <p className="text-xs leading-relaxed text-[#17201D] font-medium">
                    {BRAND_INFO.address.fullText}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white border border-[#DDE4E0] p-5 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#66736D] block mb-1">
                    Business Hours
                  </span>
                  <p className="text-xs text-[#17201D] font-medium">
                    {BRAND_INFO.businessHours}
                  </p>
                </div>
              </div>

              {/* WhatsApp direct prompt */}
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#0F4D3A] text-white font-medium text-xs hover:bg-[#1B4E3E] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C29B38]" />
                <span>Instant Consultation on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

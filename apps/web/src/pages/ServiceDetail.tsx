import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { ServiceIcon } from '../components/ServiceIcon';
import { getServiceBySlug, SERVICES_DATA } from '../data/services';
import { useSEO } from '../hooks/useSEO';
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  FileText,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { BRAND_INFO } from '@jpfintax/ui';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useSEO({
    title: service ? `${service.title} | JP FIN TAX SERVICES LLP` : 'Service Details',
    description: service?.shortDescription,
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get other services for sidebar recommendations
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 5);

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
          className="mb-8"
        />

        {/* Header Banner */}
        <div className="bg-white border border-[#DDE4E0] rounded-xl p-8 sm:p-10 mb-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center">
                  <ServiceIcon name={service.iconName} className="w-6 h-6 stroke-[1.8]" />
                </div>
                <Badge variant="green">{service.categoryLabel}</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-semibold text-[#17201D] tracking-tight leading-tight mb-4">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#66736D] max-w-3xl leading-relaxed font-light">
                {service.fullOverview}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
              <Button to="/contact" variant="primary" size="md">
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold bg-[#F0F6F3] text-[#0F4D3A] hover:bg-[#DDECE4] border border-[#BFDACD] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>Call Advisor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* What We Help With */}
            <section className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-xs">
              <h2 className="text-2xl font-heading font-medium text-[#17201D] mb-6 flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-[#0F4D3A]" />
                <span>Scope of Services &amp; Advisory</span>
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatWeHelpWith.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#46524C]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4D3A] shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Benefits */}
            <section className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-xs">
              <h2 className="text-2xl font-heading font-medium text-[#17201D] mb-6 flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-[#0F4D3A]" />
                <span>Client Benefits &amp; Risk Protection</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#F7F8F6] border border-[#EAECE9]">
                    <span className="text-xs font-semibold text-[#0F4D3A] uppercase tracking-wider block mb-1">
                      Advantage {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#17201D] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-xs">
              <h2 className="text-2xl font-heading font-medium text-[#17201D] mb-6">
                Our Compliance &amp; Execution Process
              </h2>

              <div className="space-y-6">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-9 h-9 rounded-md bg-[#0F4D3A] text-white flex items-center justify-center shrink-0 font-heading text-sm font-semibold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#17201D] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#66736D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents (if specified) */}
            {service.requiredDocuments && (
              <section className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-xs">
                <h2 className="text-2xl font-heading font-medium text-[#17201D] mb-4 flex items-center gap-2.5">
                  <FileText className="w-6 h-6 text-[#0F4D3A]" />
                  <span>Documentation Typically Needed</span>
                </h2>
                <p className="text-xs text-[#66736D] mb-6">
                  To expedite verification and processing, keep the following records accessible:
                </p>

                <ul className="space-y-2.5">
                  {service.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-[#46524C]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F4D3A] shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && (
              <section className="bg-white border border-[#DDE4E0] rounded-xl p-8 shadow-xs">
                <h2 className="text-2xl font-heading font-medium text-[#17201D] mb-6 flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-[#0F4D3A]" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#F0F3F1] pb-5 last:border-none last:pb-0">
                      <h3 className="text-base font-semibold text-[#17201D] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-[#66736D] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Widget */}
            <div className="bg-[#17201D] text-white rounded-xl p-6 border border-[#242C28] shadow-card">
              <h3 className="font-heading text-xl font-medium text-white mb-2">
                Need Assistance With {service.shortTitle || service.title}?
              </h3>
              <p className="text-xs text-[#A0ACA5] leading-relaxed mb-6">
                Consult with JP FIN TAX SERVICES LLP to evaluate your filing dates, tax calculations, and required documents.
              </p>

              <div className="space-y-3 mb-6 text-xs text-[#DDE4E0]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                  <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white font-medium">
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#C29B38] font-bold">@</span>
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white break-all">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <Button
                to="/contact"
                variant="white"
                size="sm"
                className="w-full justify-center"
              >
                Inquire About This Service
              </Button>
            </div>

            {/* Related Services Navigation */}
            <div className="bg-white border border-[#DDE4E0] rounded-xl p-6 shadow-xs">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#17201D] mb-4">
                Other Practice Verticals
              </h3>
              <ul className="space-y-2">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to={`/services/${other.slug}`}
                      className="block p-2.5 rounded-md text-xs font-medium text-[#46524C] hover:bg-[#F0F6F3] hover:text-[#0F4D3A] transition-colors"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#F0F3F1]">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#0F4D3A] hover:underline flex items-center"
                >
                  <span>View all 8 services</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

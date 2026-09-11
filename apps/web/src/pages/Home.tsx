import React from 'react';
import { Hero } from '../sections/Hero';
import { TrustStrip } from '../sections/TrustStrip';
import { AboutPreview } from '../sections/AboutPreview';
import { ServicesPreview } from '../sections/ServicesPreview';
import { Process } from '../sections/Process';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { CTA } from '../sections/CTA';
import { ContactPreview } from '../sections/ContactPreview';
import { useSEO } from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: 'JP FIN TAX SERVICES LLP | Tax, Accounting & Compliance Services',
    description:
      'JP FIN TAX SERVICES LLP provides professional tax, accounting, GST, TDS, ROC, payroll and compliance solutions for individuals and businesses.',
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <Process />
      <WhyChooseUs />
      <CTA />
      <ContactPreview />
    </>
  );
};

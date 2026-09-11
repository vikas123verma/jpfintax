import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#DDE4E0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Practices &amp; Solutions"
            title="Comprehensive Financial &amp; Compliance Services"
            subtitle="Explore our specialized advisory verticals designed to keep your individual or business affairs compliant, structured, and tax-efficient."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Button to="/services" variant="outline" size="sm">
              <span>View All 8 Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

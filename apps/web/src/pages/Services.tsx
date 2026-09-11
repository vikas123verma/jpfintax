import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Badge } from '../components/Badge';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { CTA } from '../sections/CTA';
import { useSEO } from '../hooks/useSEO';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tax' | 'accounting' | 'compliance'>('all');

  useSEO({
    title: 'Financial & Compliance Services | JP FIN TAX SERVICES LLP',
    description:
      'Explore comprehensive tax, accounting, GST, TDS, ROC, and corporate compliance services offered by JP FIN TAX SERVICES LLP.',
  });

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'All 8 Services' },
    { key: 'tax', label: 'Taxation Services' },
    { key: 'accounting', label: 'Accounting & Bookkeeping' },
    { key: 'compliance', label: 'Corporate & Regulatory' },
  ] as const;

  return (
    <div className="py-8 md:py-12">
      <Container>
        <Breadcrumbs items={[{ label: 'Services' }]} className="mb-8" />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="green" className="mb-4">
            Practice Verticals
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#17201D] tracking-tight leading-tight mb-5">
            Comprehensive Financial &amp; Compliance Services
          </h1>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed font-light">
            We provide structured, deadline-driven advisory across Income Tax, GST, TDS, corporate governance, and day-to-day accounting for enterprises and individuals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 border-b border-[#DDE4E0] pb-4 mb-10 overflow-x-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#0F4D3A] text-white'
                    : 'bg-white text-[#66736D] hover:text-[#17201D] hover:bg-[#F0F6F3] border border-[#DDE4E0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>

      <CTA />
    </div>
  );
};

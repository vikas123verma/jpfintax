import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '@jpfintax/types';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white border border-[#DDE4E0] hover:border-[#0F4D3A] rounded-lg p-7 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between">
      <div>
        {/* Top bar with Icon & Category tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-md bg-[#F0F6F3] text-[#0F4D3A] flex items-center justify-center group-hover:bg-[#0F4D3A] group-hover:text-white transition-colors duration-200">
            <ServiceIcon name={service.iconName} className="w-6 h-6 stroke-[1.75]" />
          </div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#66736D] bg-[#F7F8F6] px-2.5 py-1 rounded">
            {service.categoryLabel}
          </span>
        </div>

        {/* Service Name */}
        <h3 className="text-xl font-heading font-medium text-[#17201D] group-hover:text-[#0F4D3A] transition-colors duration-200 mb-3 line-clamp-2">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm leading-relaxed text-[#66736D] mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Learn More link */}
      <div className="pt-4 border-t border-[#F0F3F1] mt-auto">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#0F4D3A] group-hover:text-[#1B4E3E] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

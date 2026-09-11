import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { BRAND_INFO } from '@jpfintax/ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17201D] text-[#E4E8E6] pt-16 pb-24 sm:pb-16 border-t border-[#242C28]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#242C28]">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src="/logo.svg" alt="JP FinTax Logo" className="w-9 h-9" />
              <span className="font-heading font-semibold text-lg text-white tracking-tight">
                JP FIN TAX SERVICES LLP
              </span>
            </Link>
            <p className="text-sm italic text-[#A0ACA5] mb-6 font-serif">
              "{BRAND_INFO.tagline}"
            </p>
            <p className="text-xs leading-relaxed text-[#9EAAA3] mb-6 max-w-sm">
              Professional Indian tax, accounts, and regulatory compliance advisory dedicated to maintaining accuracy, timely filings, and structured financial governance for businesses and individuals.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#242C28] text-[11px] text-[#BFDACD] border border-[#323C37]">
              <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
              <span>Tax &bull; Accounting &bull; Compliance Solutions</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#A0ACA5] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A0ACA5] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A0ACA5] hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A0ACA5] hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[#A0ACA5] hover:text-white transition-colors flex items-center group"
                  >
                    <span className="truncate">{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Firm Coordinates
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A0ACA5]">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-[#C29B38] mr-2.5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BRAND_INFO.address.line1}, {BRAND_INFO.address.line2}, {BRAND_INFO.address.line3}, {BRAND_INFO.address.state}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-[#C29B38] mr-2.5 shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-[#C29B38] mr-2.5 shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#242C28]">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-3 py-2 rounded text-xs font-medium bg-[#242C28] hover:bg-[#285C4D] text-white border border-[#323C37] transition-colors"
              >
                Chat on WhatsApp (+91 9717246385)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#66736D] gap-4">
          <p>
            &copy; {currentYear} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-[#55615B] text-center sm:text-right max-w-lg">
            Professional tax and regulatory compliance advisory. Information provided on this website is for general orientation purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
};

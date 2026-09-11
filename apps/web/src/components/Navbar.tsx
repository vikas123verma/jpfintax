import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { BRAND_INFO } from '@jpfintax/ui';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollPosition > 20;

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top micro-bar for direct contact details */}
      <div className="bg-[#17201D] text-[#DDE4E0] text-xs py-1.5 hidden md:block border-b border-[#242C28]">
        <Container className="flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[11px] font-medium tracking-wide">
            <span className="text-[#A0ACA5]">
              {BRAND_INFO.categories}
            </span>
            <span className="text-[#323C37]">|</span>
            <span className="text-[#A0ACA5]">
              A-40, B.D. Enclave, G. N. West, U.P.
            </span>
          </div>
          <div className="flex items-center space-x-5 text-[11px]">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center text-[#DDE4E0] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-1.5 text-[#C29B38]" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#323C37]">|</span>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="text-[#A0ACA5] hover:text-white transition-colors"
            >
              {BRAND_INFO.email}
            </a>
          </div>
        </Container>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDE4E0] py-3'
            : 'bg-[#F7F8F6]/90 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.svg"
              alt="JP FIN TAX Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-heading font-semibold text-[#17201D] tracking-tight group-hover:text-[#0F4D3A] transition-colors">
                JP FIN TAX SERVICES LLP
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-[#66736D] font-medium hidden sm:block">
                Tax &bull; Accounts &bull; Compliance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 ${
                    active
                      ? 'text-[#0F4D3A] font-semibold'
                      : 'text-[#1C2421] hover:text-[#0F4D3A]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F4D3A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Consultation CTA & Quick Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button to="/contact" variant="primary" size="sm" className="shadow-sm">
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#17201D] hover:text-[#0F4D3A] hover:bg-[#F0F6F3] focus:outline-none focus:ring-2 focus:ring-[#0F4D3A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col justify-between p-6 border-l border-[#DDE4E0]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#DDE4E0]">
                <div className="flex items-center space-x-2.5">
                  <img src="/logo.svg" alt="JP FinTax" className="w-8 h-8" />
                  <span className="font-heading font-semibold text-sm text-[#17201D]">
                    JP FIN TAX SERVICES
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-[#66736D] hover:text-[#17201D] hover:bg-[#F0F6F3]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                        active
                          ? 'bg-[#F0F6F3] text-[#0F4D3A] font-semibold'
                          : 'text-[#1C2421] hover:bg-[#F7F8F6] hover:text-[#0F4D3A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#DDE4E0]">
                <div className="text-xs text-[#66736D] space-y-3">
                  <div>
                    <span className="block font-medium text-[#17201D] mb-1">Office Contact</span>
                    <a href={`tel:${BRAND_INFO.phone}`} className="text-[#0F4D3A] font-medium block">
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="block font-medium text-[#17201D] mb-1">Office Address</span>
                    <p className="text-[11px] leading-relaxed text-[#66736D]">
                      {BRAND_INFO.address.fullText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DDE4E0]">
              <Button to="/contact" variant="primary" size="md" className="w-full justify-center">
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

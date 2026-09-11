import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, FileSpreadsheet, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#DDE4E0] bg-gradient-to-b from-[#F7F8F6] via-white to-[#F7F8F6]">
      {/* Subtle decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F4D3A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-block mb-4">
              <Badge variant="green" className="py-1 px-3">
                TAX &bull; ACCOUNTING &bull; COMPLIANCE
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-[#17201D] tracking-tight leading-[1.15] mb-6">
              Smart Tax &amp; Compliance Solutions for Your Business
            </h1>

            <p className="text-lg sm:text-xl text-[#66736D] leading-relaxed mb-8 max-w-2xl font-light">
              Reliable tax, accounting and compliance services designed to help individuals and businesses stay financially organized and compliant.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button to="/contact" variant="primary" size="lg">
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Micro value reassurance bullets */}
            <div className="pt-6 border-t border-[#DDE4E0] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#46524C]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Statutory Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Zero Late Penalty Focus</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0F4D3A] shrink-0" />
                <span>Confidential Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Sophisticated Institutional Financial Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0F4D3A]/10 to-[#C29B38]/10 rounded-2xl blur-xl" />

              {/* Main Card */}
              <div className="relative bg-white border border-[#DDE4E0] rounded-xl shadow-premium p-6 sm:p-7 overflow-hidden">
                {/* Header of mock card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0F3F1] mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#0F4D3A] text-white flex items-center justify-center font-serif text-sm font-semibold">
                      JP
                    </div>
                    <div>
                      <h2 className="text-xs font-semibold text-[#17201D] uppercase tracking-wider">
                        Compliance Health Overview
                      </h2>
                      <span className="text-[11px] text-[#66736D]">Fiscal Year 2024-25 &bull; Regulated Entity</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0F4D3A] bg-[#F0F6F3] px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3 text-[#0F4D3A]" />
                    Compliant
                  </span>
                </div>

                {/* Service Status List */}
                <div className="space-y-3.5 mb-6">
                  {/* Item 1 */}
                  <div className="p-3 rounded-lg bg-[#F7F8F6] border border-[#EAECE9] flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-white text-[#0F4D3A] shadow-xs">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17201D]">Income Tax Filing</div>
                        <div className="text-[11px] text-[#66736D]">AIS / 26AS Reconciled</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#0F4D3A] bg-[#DDECE4] px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 rounded-lg bg-[#F7F8F6] border border-[#EAECE9] flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-white text-[#0F4D3A] shadow-xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17201D]">GST Monthly Return</div>
                        <div className="text-[11px] text-[#66736D]">GSTR-1 &amp; GSTR-3B Synced</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#0F4D3A] bg-[#DDECE4] px-2 py-0.5 rounded">
                      On Track
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3 rounded-lg bg-[#F7F8F6] border border-[#EAECE9] flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-white text-[#0F4D3A] shadow-xs">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17201D]">TDS Challan &amp; TRACES</div>
                        <div className="text-[11px] text-[#66736D]">Quarterly Form 26Q Status</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#0F4D3A] bg-[#DDECE4] px-2 py-0.5 rounded">
                      Ready
                    </span>
                  </div>
                </div>

                {/* Bottom summary indicator */}
                <div className="pt-4 border-t border-[#F0F3F1] flex items-center justify-between text-xs">
                  <div className="text-[#66736D]">
                    Advisory Partner: <span className="text-[#17201D] font-medium">JP FIN TAX LLP</span>
                  </div>
                  <Link
                    to="/about"
                    className="font-medium text-[#0F4D3A] hover:underline flex items-center text-[11px]"
                  >
                    <span>View Practices</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

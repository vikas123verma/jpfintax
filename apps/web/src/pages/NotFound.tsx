import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="py-20 md:py-32 text-center">
      <Container size="narrow">
        <div className="w-16 h-16 rounded-full bg-[#F0F6F3] text-[#0F4D3A] font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-6">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-[#17201D] mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-[#66736D] leading-relaxed mb-8 max-w-md mx-auto">
          The page or service you are seeking may have moved or is temporarily unavailable. Return to our homepage to explore our tax and compliance services.
        </p>
        <Button to="/" variant="primary" size="md">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Homepage</span>
        </Button>
      </Container>
    </div>
  );
};

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';

// Lazy load other routes for performance
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-8 h-8 border-2 border-[#0F4D3A] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs text-[#66736D] tracking-wide">Loading JP FinTax...</span>
      </div>
    </div>
  );
}

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

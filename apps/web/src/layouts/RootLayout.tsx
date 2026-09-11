import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Ensure scroll reset on navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F6] text-[#1C2421]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

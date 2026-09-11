import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-[#66736D] ${className}`}>
      <ol className="flex items-center space-x-2 flex-wrap">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-[#66736D] hover:text-[#0F4D3A] transition-colors"
            title="Home"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#A0ACA5] shrink-0" />
              {isLast || !item.href ? (
                <span className="font-medium text-[#17201D] truncate max-w-[220px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-[#66736D] hover:text-[#0F4D3A] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

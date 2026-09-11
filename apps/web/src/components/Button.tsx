import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none text-center';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 tracking-wide',
    md: 'text-sm px-5 py-2.5 tracking-normal',
    lg: 'text-base px-7 py-3.5 tracking-normal shadow-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#0F4D3A] text-white hover:bg-[#1B4E3E] active:bg-[#0C3E2F] focus:ring-[#0F4D3A] border border-[#0F4D3A]',
    secondary:
      'bg-[#285C4D] text-white hover:bg-[#1F483C] active:bg-[#16362C] focus:ring-[#285C4D] border border-transparent',
    dark:
      'bg-[#17201D] text-white hover:bg-[#242C28] active:bg-[#0D1311] focus:ring-[#17201D] border border-[#17201D]',
    outline:
      'bg-transparent text-[#17201D] border border-[#DDE4E0] hover:bg-white hover:border-[#0F4D3A] hover:text-[#0F4D3A] focus:ring-[#0F4D3A]',
    ghost:
      'bg-transparent text-[#1C2421] hover:bg-[#F0F3F1] hover:text-[#0F4D3A] focus:ring-[#0F4D3A]',
    white:
      'bg-white text-[#0F4D3A] hover:bg-[#F7F8F6] active:bg-[#EAECE9] focus:ring-white shadow-sm border border-white',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

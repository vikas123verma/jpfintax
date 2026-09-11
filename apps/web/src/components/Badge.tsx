import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'gold' | 'charcoal' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  className = '',
}) => {
  const variantStyles = {
    green: 'bg-[#F0F6F3] text-[#0F4D3A] border-[#BFDACD]',
    gold: 'bg-[#FDFBF2] text-[#8E7022] border-[#E8DCB8]',
    charcoal: 'bg-[#F5F7F6] text-[#17201D] border-[#DDE4E0]',
    neutral: 'bg-white text-[#66736D] border-[#DDE4E0]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};

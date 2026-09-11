import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-theme',
    wide: 'max-w-7xl',
  }[size];

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

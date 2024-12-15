import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${className}`}>
      {children}
    </h2>
  );
}
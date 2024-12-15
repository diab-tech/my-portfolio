import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
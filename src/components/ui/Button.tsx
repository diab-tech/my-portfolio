import React from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  icon?: LucideIcon;
  className?: string;
};

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  icon: Icon, 
  className = '' 
}: ButtonProps) {
  const baseStyles = "flex items-center gap-2 px-6 py-3 rounded-lg transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
  };

  const Element = href ? 'a' : 'button';
  
  return (
    <Element
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </Element>
  );
}
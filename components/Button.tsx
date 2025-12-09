import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full 
        shadow-lg transform transition hover:scale-105 duration-200 
        flex items-center justify-center gap-2 text-xl uppercase tracking-wide
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
      <ArrowRight className="w-6 h-6" />
    </button>
  );
};

export default Button;
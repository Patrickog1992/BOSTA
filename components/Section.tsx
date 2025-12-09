import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'green' | 'rose';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '', bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    green: 'bg-emerald-50',
    rose: 'bg-rose-50'
  };

  return (
    <section id={id} className={`py-12 md:py-20 ${bgColors[bg]} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {children}
      </div>
    </section>
  );
};

export default Section;
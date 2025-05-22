
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 ${titleClassName}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

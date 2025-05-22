
import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <Section id="about" title="Tentang Saya" className="bg-gray-800">
      <div className="text-center md:text-left">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;

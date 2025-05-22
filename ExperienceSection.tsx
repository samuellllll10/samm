
import React from 'react';
import Section from './Section';
import { ExperienceItem } from '../types';
import { BriefcaseIcon } from './Icons'; // Using BriefcaseIcon as a default

interface ExperienceCardProps {
  item: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-teal-500/20 transition-all duration-300 flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
    {item.logoUrl ? (
      <img src={item.logoUrl} alt={`${item.title} logo`} className="w-16 h-16 rounded-lg mb-4 md:mb-0 object-contain bg-white p-1" />
    ) : (
      <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center mb-4 md:mb-0">
        <BriefcaseIcon className="w-8 h-8 text-teal-400" />
      </div>
    )}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
      <p className="text-blue-400 font-medium text-sm mb-1">{item.role}</p>
      <p className="text-gray-500 text-xs mb-3">{item.period}</p>
      <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
    </div>
  </div>
);

const ExperienceSection: React.FC<{ experiences: ExperienceItem[] }> = ({ experiences }) => {
  return (
    <Section id="experience" title="Pengalaman Organisasi & Kegiatan" className="bg-gray-800">
      <div className="space-y-12">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;

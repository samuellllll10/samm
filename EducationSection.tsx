
import React from 'react';
import Section from './Section';
import { EducationItem } from '../types';
import { AcademicCapIcon } from './Icons';

interface EducationCardProps {
  item: EducationItem;
}

const EducationCard: React.FC<EducationCardProps> = ({ item }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300 flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
        <AcademicCapIcon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
      <p className="text-blue-300">{item.major}</p>
      <p className="text-gray-400 text-sm mb-2">{item.years}</p>
      {item.description && <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>}
    </div>
  </div>
);

const EducationSection: React.FC<{ educationHistory: EducationItem[] }> = ({ educationHistory }) => {
  return (
    <Section id="education" title="Riwayat Pendidikan" className="bg-gray-900">
      <div className="space-y-8">
        {educationHistory.map((edu, index) => (
          <EducationCard key={index} item={edu} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;

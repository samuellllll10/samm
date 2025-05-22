
import React from 'react';
import Section from './Section';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-center mb-4">
      <skill.icon className="w-10 h-10 text-blue-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
    </div>
    <p className="text-gray-400 text-sm flex-grow">{skill.description}</p>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section id="skills" title="Keahlian Utama" className="bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;

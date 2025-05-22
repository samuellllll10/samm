
import React from 'react';

interface HeroSectionProps {
  name: string;
  tagline: string;
  profileImageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, tagline, profileImageUrl }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white pt-20">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src={profileImageUrl}
            alt={name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">{name.split(' ')[0]}</span> {name.substring(name.indexOf(' ') + 1)}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {tagline}
          </p>
          <a
            href="#about"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
       {/* Subtle animated chevron to indicate scrollability */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#about" aria-label="Scroll to about section">
            <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
    </section>
  );
};

export default HeroSection;

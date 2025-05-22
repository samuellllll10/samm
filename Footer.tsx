
import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} {name}. Hak Cipta Dilindungi.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Dibuat dengan <span role="img" aria-label="love">❤️</span> menggunakan React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

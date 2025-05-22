
import React from 'react';
import Section from './Section';
import { ContactInfo } from '../types';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './Icons';

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const contactItems = [
    { icon: PhoneIcon, label: "Telepon", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, '')}` },
    { icon: EnvelopeIcon, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPinIcon, label: "Alamat", value: contactInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}` },
  ];

  return (
    <Section id="contact" title="Hubungi Saya" className="bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-12">
          Saya selalu terbuka untuk diskusi, peluang, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya.
        </p>
        <div className="space-y-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-2 sm:mb-0 sm:mr-4 group-hover:text-blue-300 transition-colors" />
              <div>
                <h4 className="font-semibold text-white text-lg">{item.label}</h4>
                <p className="text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">Temukan Saya Di</h3>
          <div className="flex justify-center space-x-6">
            {contactInfo.social.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

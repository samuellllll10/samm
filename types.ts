
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  social: SocialLink[];
}

export interface EducationItem {
  years: string;
  institution: string;
  major: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  profileImageUrl: string;
  about: string;
  contact: ContactInfo;
  education: EducationItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  navLinks: NavLink[];
}

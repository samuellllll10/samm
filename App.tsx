
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ProfileData } from './types';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, AcademicCapIcon, BriefcaseIcon, SparklesIcon, CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from './components/Icons'; // Assuming Icons.tsx exists

const profileData: ProfileData = {
  name: "Samuel Marten Nainggolan",
  tagline: "Lulusan SMA Dinamis | Calon Profesional Pemasaran & Penjualan | Pembelajar Cepat & Pemain Tim",
  profileImageUrl: "https://i.imgur.com/KboVvfJ.jpg", // Updated image URL to the new Imgur link
  about: `Saya adalah Samuel Marten Nainggolan, 19 tahun, lulusan SMAN 28 Jakarta jurusan IPS, dengan semangat dan motivasi tinggi. Saya memiliki pengetahuan yang cukup tentang dunia marketing karena saya aktif mempelajarinya secara mandiri, baik melalui konten digital, pengalaman pribadi, maupun studi kasus bisnis. Saya memahami pentingnya membangun hubungan dengan pelanggan, memahami kebutuhan pasar, serta menciptakan strategi yang efektif dan humanis dalam pemasaran. Saya dikenal sebagai individu yang kreatif, peka terhadap situasi, serta mampu mengatasi masalah dengan baik. Saya siap belajar dan berkontribusi secara maksimal dalam lingkungan kerja yang dinamis. Saya sangat ingin belajar lebih banyak dan berkembang, percaya bahwa pengalaman langsung akan sangat berarti bagi pertumbuhan saya.`,
  contact: {
    phone: "+62 813 8929 2230",
    email: "maherconstantine9@gmail.com",
    address: "Jl. Gg. M. Saleh RT14/RW06, Jatipadang Baru, Jakarta Selatan, Indonesia",
    social: [
      { name: 'LinkedIn', url: '#', icon: BriefcaseIcon }, // Placeholder Link
      { name: 'GitHub', url: '#', icon: CodeBracketIcon } // Placeholder Link
    ]
  },
  education: [
    {
      years: "2021-2024",
      institution: "SMAN 28 JAKARTA",
      major: "Jurusan IPS (Ilmu Pengetahuan Sosial)",
      description: "Lulus dengan pemahaman yang kuat dalam ilmu sosial dan dinamika masyarakat, siap menerapkan pengetahuan dalam konteks profesional."
    }
  ],
  skills: [
    { name: "Komunikasi Efektif", icon: LightBulbIcon, description: "Mampu menyampaikan ide dengan jelas dan persuasif." },
    { name: "Microsoft Office & Canva", icon: PaintBrushIcon, description: "Mahir dalam penggunaan perangkat lunak produktivitas dan desain." },
    { name: "Kreativitas & Problem Solving", icon: SparklesIcon, description: "Mampu berpikir kreatif dan menemukan solusi inovatif untuk berbagai tantangan." },
    { name: "Riset & Analisis", icon: AcademicCapIcon, description: "Familiar dengan tools AI untuk riset dan pembuatan konten." },
    { name: "Kerja Tim & Mandiri", icon: BriefcaseIcon, description: "Dapat berkolaborasi secara efektif dalam tim maupun bekerja secara independen dengan target." }
  ],
  experiences: [
    {
      id: 1,
      title: "Pengurus Ekstrakurikuler Sekolah",
      role: "Anggota Aktif & Koordinator",
      period: "2022-2023",
      description: "Terlibat aktif dalam perencanaan dan pelaksanaan berbagai kegiatan ekstrakurikuler. Mengembangkan kemampuan kepemimpinan, koordinasi tim, dan manajemen acara.",
      logoUrl: "https://picsum.photos/seed/school/40/40"
    },
    {
      id: 2,
      title: "Relawan di Panti Asuhan",
      role: "Tutor & Pendamping",
      period: "Selama Masa SMA",
      description: "Membantu anak-anak dalam kegiatan belajar dan bermain. Meningkatkan empati, kesabaran, dan kemampuan komunikasi interpersonal dengan berbagai kalangan.",
      logoUrl: "https://picsum.photos/seed/orphanage/40/40"
    },
    {
      id: 3,
      title: "Panitia Lomba Sekolah",
      role: "Koordinator Acara",
      period: "Event Tahunan Sekolah",
      description: "Bertanggung jawab dalam koordinasi peserta, persiapan teknis acara, dan memastikan kelancaran jalannya perlombaan. Memperkuat keterampilan organisasi, manajemen waktu, dan kerja sama tim dalam lingkungan yang dinamis.",
      logoUrl: "https://picsum.photos/seed/competition/40/40"
    }
  ],
  navLinks: [
    { name: "Tentang Saya", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Pendidikan", href: "#education" },
    { name: "Kontak", href: "#contact" },
  ]
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      <Navbar navLinks={profileData.navLinks} siteName={profileData.name.split(' ')[0]} />
      <main className="flex-grow">
        <HeroSection name={profileData.name} tagline={profileData.tagline} profileImageUrl={profileData.profileImageUrl} />
        <AboutSection content={profileData.about} />
        <SkillsSection skills={profileData.skills} />
        <ExperienceSection experiences={profileData.experiences} />
        <EducationSection educationHistory={profileData.education} />
        <ContactSection contactInfo={profileData.contact} />
      </main>
      <Footer name={profileData.name} />
    </div>
  );
};

export default App;

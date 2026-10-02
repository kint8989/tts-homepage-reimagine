import React from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Standout Animation & Interactive Features
import CustomCursor from './components/animation/CustomCursor';
import ScrollProgress from './components/animation/ScrollProgress';

// Storytelling Homepage Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyTIS from './components/sections/WhyTIS';
import Academics from './components/sections/Academics';
import StudentLife from './components/sections/StudentLife';
import Sports from './components/sections/Sports';
import Facilities from './components/sections/Facilities';
import Statistics from './components/sections/Statistics';
import Recognition from './components/sections/Recognition';
import Testimonials from './components/sections/Testimonials';
import AdmissionCTA from './components/sections/AdmissionCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#B90124] selection:text-white">
      {/* Feature 3: Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Feature 1: Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Top Header & Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Storytelling Narrative */}
      <main id="main-content">
        <Hero />
        <About />
        <WhyTIS />
        <Academics />
        <StudentLife />
        <Sports />
        <Facilities />
        <Statistics />
        <Recognition />
        <Testimonials />
        <AdmissionCTA />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

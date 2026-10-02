import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, schoolInfo } from '../../data/schoolData';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to highlight active navigation link on scroll
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking backdrop or escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#B90124] to-[#7a0017] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 text-[#BEE2E4]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900 leading-none group-hover:text-[#B90124] transition-colors">
              TULA'S
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#60BAB1] uppercase leading-tight">
              International School
            </span>
            <span className="text-[10px] text-gray-500 hidden sm:block">Dehradun • Modern Gurukul</span>
          </div>
        </a>

        {/* Desktop Links with Active Section Highlighting */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all relative ${
                  isActive
                    ? 'text-[#B90124] bg-red-50/70 font-semibold'
                    : 'text-gray-700 hover:text-[#B90124] hover:bg-gray-50'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B90124] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            className="hidden sm:inline-flex"
            icon={ChevronRight}
          >
            Enquire Now
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#B90124] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B90124]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto lg:hidden"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#B90124] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      TIS
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Navigation Menu</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav items list */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-xl transition-colors flex items-center justify-between group ${
                          isActive
                            ? 'text-[#B90124] bg-red-50 font-bold'
                            : 'text-gray-800 hover:text-[#B90124] hover:bg-gray-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#B90124] group-hover:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-gray-100 mt-6 space-y-3">
                <a
                  href={`tel:${schoolInfo.helpline}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#BEE2E4] text-[#007A83] font-semibold rounded-xl text-sm hover:bg-[#90CCD0] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {schoolInfo.helpline}</span>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  Apply / Enquire Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

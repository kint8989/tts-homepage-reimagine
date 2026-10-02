import React from 'react';
import { Phone, Mail, MapPin, GraduationCap, ChevronRight, Heart } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/schoolData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#121417] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B90124] rounded-xl flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-[#BEE2E4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  TULA'S INTERNATIONAL SCHOOL
                </span>
                <span className="text-xs font-semibold text-[#60BAB1] tracking-wider uppercase mt-0.5">
                  The Modern Gurukul • Dehradun
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Established in 2012 under the aegis of Rishabh Educational Trust, Tula's International School is one of India's premier CBSE co-educational boarding schools, combining traditional Indian Gurukul values with world-class academic and sports infrastructure.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#60BAB1] animate-pulse" />
                <span>CBSE Affiliated Boarding & Day Boarding (Class IV to XII)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#60BAB1] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#60BAB1] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Highlights Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              School Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#60BAB1] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#60BAB1] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Contact Helpline
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B90124] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Admissions Mobile:</span>
                  <a href={`tel:${schoolInfo.helpline}`} className="text-white hover:text-[#60BAB1] font-medium">
                    {schoolInfo.helpline}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#60BAB1] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Landline:</span>
                  <span className="text-gray-300">{schoolInfo.landlines.join(', ')}</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C09D59] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Email Us:</span>
                  <a href={`mailto:${schoolInfo.email}`} className="text-white hover:text-[#60BAB1] font-medium">
                    {schoolInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#60BAB1] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Campus Address:</span>
                  <span className="text-gray-300 text-xs leading-relaxed">{schoolInfo.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {CURRENT_YEAR} Tula's International School. All rights reserved. Managed by Rishabh Educational Trust.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Redesigned for Frontend Assessment with</span>
            <Heart className="w-3.5 h-3.5 text-[#B90124] fill-[#B90124]" />
            <span>in Dehradun, Uttarakhand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

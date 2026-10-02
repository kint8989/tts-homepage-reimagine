import React from 'react';
import { Phone, ArrowRight, Award } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#B90124] text-white py-2 px-4 text-xs md:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
            <Award className="w-3 h-3 text-[#C09D59]" /> Admissions 2026-27 Open
          </span>
          <span className="hidden md:inline text-white/80">•</span>
          <span className="text-white/90 hidden md:inline">Classes IV to XII (CBSE Residential Co-Ed Boarding)</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${schoolInfo.helpline}`}
            className="flex items-center gap-1.5 hover:text-[#BEE2E4] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#60BAB1]" />
            <span>Admissions Helpline: {schoolInfo.helpline}</span>
          </a>

          <a
            href={schoolInfo.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-[#BEE2E4] hover:text-white underline underline-offset-2"
          >
            <span>Apply Online</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

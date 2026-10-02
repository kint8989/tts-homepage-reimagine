import React, { useState } from 'react';
import { Trophy, Activity } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { sportsList } from '../../data/schoolData';

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState(sportsList[0]);

  return (
    <section id="sports" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sports & Athletic Excellence"
          title="16+ Olympic & Curated Sports Facilities"
          subtitle="At Tula's, sports is not just an extracurricular activity—it is the foundation of physical vitality, discipline, and competitive spirit."
        />

        {/* Featured Sport Banner Card */}
        <ScrollReveal variant="scaleIn" className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 h-[360px] md:h-[420px] group">
            <img
              src={selectedSport.image}
              onError={(e) => { e.target.src = "/images/archery.png"; }}
              alt={`TIS ${selectedSport.name}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="px-3 py-1 bg-[#B90124] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedSport.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {selectedSport.name} Facility
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Professional NIS-certified coaches, floodlit grounds, and state championship preparation programs.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-semibold text-[#BEE2E4]">
                <Trophy className="w-4 h-4 text-[#C09D59]" />
                <span>Inter-School Championships</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Sports Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sportsList.map((sport) => (
            <button
              key={sport.id}
              type="button"
              onClick={() => setSelectedSport(sport)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-28 group ${
                selectedSport.id === sport.id
                  ? 'bg-[#121417] text-white border-[#B90124] shadow-xl scale-105'
                  : 'bg-gray-50 text-gray-800 border-gray-100 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <Activity className={`w-4 h-4 ${selectedSport.id === sport.id ? 'text-[#60BAB1]' : 'text-gray-400 group-hover:text-[#B90124]'}`} />
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${selectedSport.id === sport.id ? 'bg-white/10 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                  TIS
                </span>
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm truncate">{sport.name}</h4>
                <p className={`text-[10px] truncate ${selectedSport.id === sport.id ? 'text-gray-400' : 'text-gray-500'}`}>
                  {sport.tag}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

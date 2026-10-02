import React, { useState } from 'react';
import { CheckCircle2, GraduationCap, Brain, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { academicLevels } from '../../data/schoolData';
import Button from '../ui/Button';

export default function Academics() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Spectrum"
          title="CBSE Curriculum & Future-Ready Pedagogy"
          subtitle="Empowering students from Class IV to XII through structured academic rigor, competitive exam coaching, and global career guidance."
        />

        {/* Level Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {academicLevels.map((level, index) => (
            <button
              key={level.level}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-[#B90124] text-white shadow-lg shadow-[#B90124]/20 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeTab === index ? 'text-[#BEE2E4]' : 'text-gray-500'}`} />
              <span>{level.level}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === index ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {level.grades}
              </span>
            </button>
          ))}
        </div>

        {/* Active Tab Content Card */}
        <ScrollReveal key={activeTab} variant="scaleIn">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tab Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60BAB1]/15 text-[#007A83] text-xs font-bold uppercase tracking-wider">
                <Brain className="w-3.5 h-3.5" />
                <span>{academicLevels[activeTab].grades}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {academicLevels[activeTab].level}: {academicLevels[activeTab].tagline}
              </h3>

              <div className="space-y-3 pt-2">
                {academicLevels[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B90124] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button variant="primary" size="md" href="#contact">
                  Enquire For {academicLevels[activeTab].level}
                </Button>
              </div>
            </div>

            {/* Visual Stream Highlight Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#121417] to-[#1a1d24] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C09D59] flex items-center justify-center text-white">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Integrated Career Cell</h4>
                  <p className="text-xs text-gray-400">On-Campus Preparation</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Senior Secondary students receive in-house coaching for JEE, NEET, CUET, SAT, and CLAT alongside customized university portfolio building for top Indian & overseas institutions.
              </p>

              <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span>Science • Commerce • Humanities</span>
                <span className="font-bold text-[#60BAB1]">20%+ Global Reach</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import React from 'react';
import { Trees, Trophy, Users, Award, Globe } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { keyStatistics } from '../../data/schoolData';

const iconMap = {
  Trees: Trees,
  Trophy: Trophy,
  Users: Users,
  Award: Award,
  Globe: Globe
};

export default function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#121417] via-[#1a1d24] to-[#121417] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,186,177,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Institutional Reach"
          title="Tula's International School by the Numbers"
          subtitle="Empirical proof of academic rigor, sports development, and residential excellence."
          theme="dark"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {keyStatistics.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Award;
            return (
              <ScrollReveal key={stat.label} variant="scaleIn" delay={idx * 0.1}>
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-[#60BAB1]/50 transition-all duration-300 text-center space-y-3 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#60BAB1]/20 text-[#60BAB1] mx-auto flex items-center justify-center group-hover:bg-[#B90124] group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#60BAB1] transition-colors">
                    {stat.value}
                  </div>

                  <div className="text-xs font-bold text-[#C09D59] uppercase tracking-wider">
                    {stat.suffix}
                  </div>

                  <p className="text-xs text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

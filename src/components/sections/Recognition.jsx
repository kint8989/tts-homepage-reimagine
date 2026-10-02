import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { awardsAndRankings } from '../../data/schoolData';

export default function Recognition() {
  return (
    <section id="recognition" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Awards & Accreditations"
          title="National Recognition & Institutional Honors"
          subtitle="Validated by India's top educational rating bodies and environmental councils."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardsAndRankings.map((item, idx) => (
            <ScrollReveal key={item.rank} variant="fadeUp" delay={idx * 0.1}>
              <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between h-full group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C09D59]/15 text-[#8c6c2b]">
                      {item.year}
                    </span>
                    <Award className="w-6 h-6 text-[#C09D59] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight group-hover:text-[#B90124] transition-colors">
                    {item.rank}
                  </h3>

                  <p className="text-xs font-bold text-[#007A83] uppercase tracking-wider">
                    {item.body}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center gap-1 text-[11px] font-semibold text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-[#60BAB1]" />
                  <span>Verified TIS Achievement</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

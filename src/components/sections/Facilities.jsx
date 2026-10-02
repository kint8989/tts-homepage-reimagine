import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { facilitiesList } from '../../data/schoolData';

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus & Infrastructure"
          title="World-Class Facilities on a 22-Acre Green Campus"
          subtitle="Designed to support active learning, artistic expression, scientific experimentation, and residential safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility, idx) => (
            <ScrollReveal key={facility.title} variant="fadeUp" delay={idx * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    onError={(e) => { e.target.src = "/images/about.png"; }}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#007A83] shadow-sm">
                    {facility.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#B90124] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500 mt-auto">
                    <CheckCircle className="w-4 h-4 text-[#60BAB1]" />
                    <span>Maintained to International Standards</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { testimonials } from '../../data/schoolData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Testimonials"
          title="What Parents & Alumni Say About Tula's"
          subtitle="Real experiences from families who chose Tula's International School for holistic residential education."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={item.author} variant="fadeUp" delay={idx * 0.15}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full space-y-6 relative group">
                <Quote className="w-10 h-10 text-[#60BAB1]/30 absolute top-6 right-6" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-1 text-[#C09D59]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C09D59]" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B90124] to-[#007A83] text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-[#007A83] font-semibold">{item.role}</p>
                    <span className="text-[10px] text-gray-400 block">{item.location}</span>
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

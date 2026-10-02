import React from 'react';
import { Cpu, Sparkles, Heart, Sprout, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { differentiators } from '../../data/schoolData';
import Button from '../ui/Button';

const iconMap = {
  gurukul: Sparkles,
  stem: Cpu,
  pastoral: Heart,
  organic: Sprout
};

export default function WhyTIS() {
  return (
    <section id="why-tis" className="py-16 md:py-24 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Key Differentiators"
          title="Why Leading Parents Choose Tula's"
          subtitle="What sets Tula's International School apart as one of North India's premier residential institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const IconComponent = iconMap[item.id] || Sparkles;
            return (
              <ScrollReveal key={item.id} variant="fadeUp" delay={index * 0.1}>
                <div className="h-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#BEE2E4]/40 text-[#007A83] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#B90124] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#B90124] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-100 flex items-center gap-1 text-xs font-semibold text-[#007A83] group-hover:text-[#B90124] transition-colors">
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Feature Highlight Callout Box */}
        <ScrollReveal variant="scaleIn" delay={0.4} className="mt-12">
          <div className="bg-gradient-to-r from-[#121417] via-[#1a1d24] to-[#121417] rounded-3xl p-8 md:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <span className="px-3 py-1 bg-[#60BAB1]/20 text-[#60BAB1] text-xs font-bold rounded-full uppercase tracking-wider">
                IIT Ropar Collaboration
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                AWaDH Tinkering & Innovation Laboratory
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our students don't just learn theory; they engineer real-world IoT solutions, robotics modules, and AI programs under faculty trained by IIT Ropar experts.
              </p>
            </div>

            <Button variant="secondary" size="md" href="#academics" icon={ArrowRight}>
              Explore Academics
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

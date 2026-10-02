import React from 'react';
import { Home, Shield, Utensils } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { houses } from '../../data/schoolData';

export default function StudentLife() {
  return (
    <section id="student-life" className="py-16 md:py-24 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Boarding Life & Pastoral Care"
          title="A Second Home Nestled in the Shivalik Foothills"
          subtitle="TIS offers a safe, nurturing, and vibrant residential environment designed to instil camaraderie, leadership, and emotional independence."
        />

        {/* House System Grid */}
        <div className="mb-16">
          <ScrollReveal variant="fadeUp">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
              The Four Houses of Tula's International School
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, idx) => (
              <ScrollReveal key={house.name} variant="fadeUp" delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-3 group">
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: house.color }}
                  >
                    {house.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{house.name} House</h4>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{house.ethos}</p>
                  <p className="text-xs text-gray-600">Inter-house debates, sports championships, and cultural pageantry.</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Residential Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B90124]/10 text-[#B90124] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Modern Boarding Houses</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Air-conditioned dormitories with ergonomic study desks, personal wardrobes, 24/7 power backup, and resident house masters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#60BAB1]/15 text-[#007A83] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Organic Mess & Nutrition</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hygienically prepared multi-cuisine meals planned by nutritionists, featuring organic dairy and fresh vegetables from the school farm.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C09D59]/15 text-[#C09D59] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Health & 24/7 Security</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gated 24/7 security with CCTV surveillance, on-campus infirmary with full-time resident doctors, and immediate hospital access.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

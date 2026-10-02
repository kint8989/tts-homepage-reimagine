import React from 'react';
import { Compass, BookOpen, UserCheck, HeartHandshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';
import { schoolInfo } from '../../data/schoolData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="School Identity & Philosophy"
          title="The Modern Gurukul of Dehradun"
          subtitle="Tula's International School was established in 2012 under the aegis of Rishabh Educational Trust to impart transformative education through seamless opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Representation */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="slideRight">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                <img
                  src="/images/about.png"
                  onError={(e) => { e.target.src = "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200"; }}
                  alt="Tulas International School Campus Culture"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-[#60BAB1] uppercase tracking-wider block mb-1">
                    Leadership Vision
                  </span>
                  <p className="text-sm font-medium italic">
                    "We feel supported in what we do and nudged further to do more. School isn't just about lessons; it's about endless opportunities waiting to be explored."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Key Pillars & Leadership */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Combining Traditional Value Systems with World-Class Pedagogy
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                At TIS, education extends far beyond textbooks. Rooted in the rich heritage of the Indian Gurukul ethos, we cultivate empathy, discipline, and critical thinking while providing modern smart classrooms, international exchange programs, and state-of-the-art laboratories.
              </p>
            </ScrollReveal>

            {/* Core Values Grid */}
            <ScrollReveal variant="staggerContainer" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#B90124]/10 text-[#B90124] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Gurukul Tradition</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Guru-Shishya mentorship, respect, and emotional maturity.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#007A83]/10 text-[#007A83] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">CBSE Rigor</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Comprehensive curriculum from Class IV through XII.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#C09D59]/10 text-[#C09D59] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Individual Attention</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Small class sizes ensuring every student is heard.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#60BAB1]/10 text-[#60BAB1] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Pastoral Well-being</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Dedicated house parents & 24/7 campus infirmary.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Leadership Cards */}
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Institutional Leadership (Rishabh Educational Trust)
                </h4>
                <div className="flex flex-wrap gap-3">
                  {schoolInfo.leadership.map((person) => (
                    <div key={person.name} className="px-3.5 py-2 rounded-xl bg-gray-100/80 border border-gray-200/60 text-xs">
                      <span className="font-bold text-gray-900 block">{person.name}</span>
                      <span className="text-gray-500 text-[11px]">{person.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

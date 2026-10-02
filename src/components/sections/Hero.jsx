import React from 'react';
import { ShieldCheck, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ScrollReveal from '../animation/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#BEE2E4]/20 via-white to-gray-50 pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#60BAB1]/20 via-[#B90124]/10 to-[#C09D59]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal variant="fadeIn" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200/80 text-xs sm:text-sm font-semibold text-gray-800">
                <Sparkles className="w-4 h-4 text-[#C09D59] animate-pulse" />
                <span>Ranked #5 Boarding School in North India</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B90124]" />
                <span className="text-[#007A83]">CBSE Class IV - XII</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
                Where Modern Innovation Meets <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#B90124] via-[#007A83] to-[#C09D59] bg-clip-text text-transparent">
                  Ancient Gurukul Wisdom
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Set amidst a serene 22-acre eco-friendly campus in Dehradun, Tula's International School nurtures global leaders through academic excellence, 16+ Olympic sports, and an exclusive IIT Ropar AWaDH Tinkering Lab.
              </p>
            </ScrollReveal>

            {/* Feature Pills */}
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                {[
                  "22+ Acre Eco Campus",
                  "1:8 Teacher-Student Ratio",
                  "16+ Olympic Sports",
                  "AWaDH IIT Ropar Lab"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-gray-200/60 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#60BAB1]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Call to Action Buttons */}
            <ScrollReveal variant="fadeUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button variant="primary" size="lg" href="#contact" icon={ArrowRight}>
                  Apply For Admission
                </Button>

                <Button variant="outline" size="lg" href="#about" icon={ShieldCheck}>
                  Explore TIS Ethos
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Showcase Card Grid */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="scaleIn" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group">
                  <img
                    src="/images/hero.png"
                    onError={(e) => { e.target.src = "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200"; }}
                    alt="Tulas International School Dehradun Campus"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Floating Overlay Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-3 border border-white/40">
                    <div className="w-10 h-10 rounded-xl bg-[#60BAB1] flex items-center justify-center text-gray-900 font-bold">
                      <Award className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">CBSE Affiliated</div>
                      <div className="text-[10px] font-semibold text-[#007A83]">Class IV - XII Co-Ed</div>
                    </div>
                  </div>

                  {/* Hero Bottom Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 bg-[#B90124] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Established 2012
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      Rishabh Educational Trust
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      "Dedicated to holistic development, academic discipline, and character building in Dehradun."
                    </p>
                  </div>
                </div>

                {/* Floating Bottom Quick Stat Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4 max-w-[260px] hidden sm:flex"
                >
                  <div className="w-12 h-12 bg-[#BEE2E4] rounded-xl flex items-center justify-center text-[#007A83] font-bold text-lg">
                    1:8
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Teacher-Student Ratio</div>
                    <div className="text-[11px] text-gray-500">Unmatched pastoral mentorship & individual focus</div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

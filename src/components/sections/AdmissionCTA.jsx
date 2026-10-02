import React, { useState } from 'react';
import { Send, PhoneCall, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { schoolInfo } from '../../data/schoolData';

export default function AdmissionCTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedClass: '',
    selectedState: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.selectedClass || !formData.consent) {
      alert('Please fill in all required fields and accept consent terms.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-[#BEE2E4]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl shadow-2xl border border-gray-200/80 p-8 sm:p-12 overflow-hidden">
          {/* Left Column: Direct Helpline & Campus Info */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B90124]/10 text-[#B90124] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Admissions 2026-27 Open</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Begin Your Child's Journey at Tula's
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Schedule a personal campus tour or request an immediate counselor callback. Our admissions team is available to assist you with curriculum details, fee structure, and residential boarding arrangements.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="p-2.5 rounded-xl bg-[#007A83] text-white shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Admissions Helpline</span>
                  <a href={`tel:${schoolInfo.helpline}`} className="text-base font-bold text-gray-900 hover:text-[#B90124]">
                    {schoolInfo.helpline}
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">Available Monday to Saturday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="p-2.5 rounded-xl bg-[#C09D59] text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Official Inquiry Email</span>
                  <a href={`mailto:${schoolInfo.email}`} className="text-sm font-bold text-gray-900 hover:text-[#B90124]">
                    {schoolInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="p-2.5 rounded-xl bg-[#60BAB1] text-gray-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Dehradun Campus Location</span>
                  <span className="text-xs text-gray-700 font-semibold leading-relaxed block">
                    {schoolInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="text-center p-8 space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Enquiry Submitted Successfully!</h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-bold">{formData.fullName}</span>. Our TIS admissions team will contact you on <span className="font-bold">{formData.phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', selectedClass: '', selectedState: '', consent: false });
                  }}
                  className="mt-4 px-6 py-2 bg-emerald-700 text-white font-semibold text-xs rounded-full hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-gray-100 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Online Admission Enquiry</h3>
                  <p className="text-xs text-gray-500">Fill in the details below for instant prospectus & counselor callback.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Parent / Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-[#B90124] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-[#B90124] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-[#B90124] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Seeking Admission For Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.selectedClass}
                      onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-[#B90124] focus:outline-none transition-all bg-white"
                    >
                      <option value="">Select Target Class</option>
                      <option value="IV">Class IV</option>
                      <option value="V">Class V</option>
                      <option value="VI">Class VI</option>
                      <option value="VII">Class VII</option>
                      <option value="VIII">Class VIII</option>
                      <option value="IX">Class IX</option>
                      <option value="X">Class X</option>
                      <option value="XI">Class XI</option>
                      <option value="XII">Class XII</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    State of Residence
                  </label>
                  <select
                    value={formData.selectedState}
                    onChange={(e) => setFormData({ ...formData, selectedState: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-[#B90124] focus:outline-none transition-all bg-white"
                  >
                    <option value="">Select State</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Bihar">Bihar</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Other">Other State / NRI</option>
                  </select>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#B90124] focus:ring-[#B90124] border-gray-300 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600 leading-tight cursor-pointer">
                    I agree to receive information, prospectus, and counselor communication regarding admission at Tula's International School, Dehradun.
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-2" icon={Send}>
                  Submit Admission Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

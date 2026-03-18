import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Albion's attention to detail and problem solving skills are outstanding. He ensures that every edge case is covered before we ever push to production.",
      author: "John M.",
      role: "Product Manager"
    },
    {
      text: "Reliable and thorough. Always delivering top-tier quality insights and significantly accelerating our automation initiatives.",
      author: "Laura S.",
      role: "Lead Software Developer"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-4 md:px-8 lg:px-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Quote size={24} fill="currentColor" />
          </div>
          <h2 className="section-title mb-4">Why Work With Me</h2>
          <p className="text-slate-500 text-lg">What developers and product managers say about my QA impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-slate-100 relative group hover:border-blue-100 transition-colors">
              <Quote className="text-slate-100 absolute top-8 left-8 w-16 h-16 group-hover:text-blue-50 transition-colors" fill="currentColor" />
              <div className="relative z-10">
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center font-bold text-blue-700 text-xl">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">{test.author}</h4>
                    <p className="text-sm text-slate-500 font-medium">{test.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

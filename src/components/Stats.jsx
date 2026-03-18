import React from 'react';

const Stats = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Tested" },
    { number: "100+", label: "Defects Documented" },
    { number: "100%", label: "Data Validation Focus" }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200/50">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4 first:border-0 hover:-translate-y-1 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-500 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

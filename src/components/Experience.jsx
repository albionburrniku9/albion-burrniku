import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Automation Quality Assurance & Quality Analyst",
      company: "Star Labs L.L.C, Pristina",
      duration: "April 2024 - Present",
      description: "Designed and validated end-to-end system workflows across frontend, backend, and integrated services, ensuring reliability of business-critical processes. Worked extensively with APIs, automation frameworks, and data validation to support scalable and efficient system behavior.",
      details: [
        "Built automation scripts using Cypress and Playwright to support reusable workflows and system validation",
        "Worked with REST APIs to validate data flows and system integrations",
        "Performed SQL-based validation to ensure data consistency across systems",
        "Integrated automation into CI/CD pipelines to support continuous delivery",
        "Identified issues in data flow, integrations, and business logic across services"
      ]
    },
    {
      role: "Testing Specialist",
      company: "Raiffeisen Bank Kosovo, Pristina",
      duration: "July 2023 - March 2024",
      description: "Analyzed system performance and data flows in enterprise banking systems, focusing on backend services, API integrations, and system reliability in a regulated environment.",
      details: [
        "Performed performance and load testing using JMeter to identify system bottlenecks",
        "Validated API behavior and backend data consistency across systems",
        "Applied security validation aligned with OWASP principles",
        "Collaborated with teams to improve system stability and performance"
      ]
    },
    {
      role: "Junior Quality Assurance Engineer",
      company: "Incodeks, Ferizaj",
      duration: "July 2022 - July 2023",
      description: "Built automation scripts and supported data-driven workflows, focusing on system behavior, API validation, and process reliability.",
      details: [
        "Built automation scripts using Python and JavaScript to support regression testing and system validation",
        "Worked with APIs to validate data flows and system integrations",
        "Performed SQL-based validation to ensure data consistency across systems",
        "Integrated automation into CI/CD pipelines to support continuous delivery",
        "Identified issues in data flow, integrations, and business logic across services"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-16 text-center">Experience Tracker</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Line */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-blue-100 group-last:bg-transparent"></div>
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"></div>

              <div className="premium-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-500">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full w-fit">
                    {exp.duration}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

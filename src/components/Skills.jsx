import React from 'react';
import { ShieldCheck, Cpu, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "QA & Testing",
      icon: <ShieldCheck size={24} className="text-blue-500" />,
      skills: ["Manual Testing", "Regression Testing", "Functional Testing", "Exploratory Testing"]
    },
    {
      title: "Automation",
      icon: <Cpu size={24} className="text-blue-500" />,
      skills: ["Selenium", "Cypress", "Playwright", "Automation Strategy"]
    },
    {
      title: "Data & Validation",
      icon: <Database size={24} className="text-blue-500" />,
      skills: ["API Testing", "Postman", "SQL", "Data Integrity"]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench size={24} className="text-blue-500" />,
      skills: ["Python", "JavaScript", "Git & CI/CD", "Jira & Agile"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="section-title mb-4">Skills & Tools</h2>
        <p className="text-slate-500 text-lg">My technical arsenal for ensuring quality, reliability, and smooth automation pipelines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((category, idx) => (
          <div key={idx} className="premium-card overflow-hidden group">
            <div className="bg-brand-50 p-6 border-b border-brand-100 flex items-center gap-4 transition-colors group-hover:bg-blue-50 cursor-default">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900">{category.title}</h3>
            </div>
            <div className="p-6 md:p-8">
              <ul className="grid grid-cols-2 gap-y-4 gap-x-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-2 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

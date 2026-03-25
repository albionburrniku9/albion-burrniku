import React from 'react';
import { ExternalLink, Database, Activity, Utensils, PieChart, FlaskConical, Github, CheckSquare, TestTube, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NutriDish - AI Recipe Assistant",
      desc: "An AI-powered recipe assistant built with Python that recommends dishes based on dietary restrictions and available ingredients.",
      tags: ["Python", "AI", "Web App"],
      image: "/nutridish_app.png",
      icon: <Utensils size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/NutriDish",
      demoLink: "https://nutridish-tau.vercel.app/"
    },
    {
      title: "Heart Diseases ML Model",
      desc: "A machine learning algorithm model developed during an AI & ML course to predict and analyze heart diseases based on health data metrics.",
      tags: ["Machine Learning", "AI", "Jupyter Notebook"],
      image: "/heart_ml_model.png",
      icon: <Activity size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Heart_diesases"
    },
    {
      title: "Wine Quality Predictor",
      desc: "A data science model that evaluates and predicts wine quality by analyzing various chemical parameters and datasets.",
      tags: ["Data Science", "Python", "Predictive Modeling"],
      image: "/wine_quality.png",
      icon: <FlaskConical size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Wine_Quality_Check"
    },
    {
      title: "BigData Salesforce Pipeline",
      desc: "A Python-based data processing example demonstrating Big Data management and manipulation techniques for Salesforce.",
      tags: ["Python", "Big Data", "Salesforce"],
      image: "/big_data_salesforce.png",
      icon: <PieChart size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/BigData"
    },
    {
      title: "Oracle SQL Examples",
      desc: "A comprehensive collection of PLSQL and Data Analysis queries used to solve complex relational database problems.",
      tags: ["PLSQL", "Oracle", "Data Analysis"],
      image: "/oracle_sql.png",
      icon: <Database size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Oracle_SQL_examples"
    },

    {
      title: "Cypress Test Scenarios",
      desc: "Test scenarios using Cypress and JavaScript to automate short test workflows and end-to-end testing.",
      tags: ["Cypress", "JavaScript", "QA Automation"],
      image: "/cypress_test.png",
      icon: <CheckSquare size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Test_Scenarios_1"
    },
    {
      title: "Playwright Automation",
      desc: "A collection of automated test scenarios built using Playwright, demonstrating end-to-end testing and QA best practices.",
      tags: ["Playwright", "Automation", "E2E Testing"],
      image: "/playwright_test.png",
      icon: <TestTube size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/test_scenarios_playwright"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="section-title mb-4">Featured Projects</h2>
        <p className="text-slate-500 text-lg">Detailed breakdowns of my active open-source repositories and ML/Data initiatives.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="premium-card flex flex-col group overflow-hidden bg-white">
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg z-20 shadow-sm">
                {project.icon}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-brand-900 mb-3">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full group-hover:shadow-lg">
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`btn-secondary w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600`}>
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { ExternalLink, Database, Activity, Utensils, PieChart, FlaskConical, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NutriDish - AI Recipe Assistant",
      desc: "An AI-powered recipe assistant built with Python that recommends dishes based on dietary restrictions and available ingredients.",
      tags: ["Python", "AI", "Web App"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Utensils size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/NutriDish",
      demoLink: "https://nutridish-tau.vercel.app/"
    },
    {
      title: "Heart Diseases ML Model",
      desc: "A machine learning algorithm model developed during an AI & ML course to predict and analyze heart diseases based on health data metrics.",
      tags: ["Machine Learning", "AI", "Jupyter Notebook"],
      image: "https://images.unsplash.com/photo-1576091160550-2173ff94031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Activity size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Heart_diesases"
    },
    {
      title: "Oracle SQL Examples",
      desc: "A comprehensive collection of PLSQL and Data Analysis queries used to solve complex relational database problems.",
      tags: ["PLSQL", "Oracle", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Database size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Oracle_SQL_examples"
    },
    {
      title: "Wine Quality Predictor",
      desc: "A data science model that evaluates and predicts wine quality by analyzing various chemical parameters and datasets.",
      tags: ["Data Science", "Python", "Predictive Modeling"],
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <FlaskConical size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/Wine_Quality_Check"
    },
    {
      title: "BigData Salesforce Pipeline",
      desc: "A Python-based data processing example demonstrating Big Data management and manipulation techniques for Salesforce.",
      tags: ["Python", "Big Data", "Salesforce"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <PieChart size={20} className="text-blue-600" />,
      link: "https://github.com/albionburrniku9/BigData"
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
              
              <div className="flex flex-col sm:flex-row gap-3">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 group-hover:shadow-lg">
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${project.demoLink ? 'flex-1' : 'w-full'} group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600`}>
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

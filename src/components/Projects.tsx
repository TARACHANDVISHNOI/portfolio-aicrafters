
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "AI-Powered Chatbot for Customer Support",
    description: "Developed an intelligent chatbot that reduced customer wait times by 70% and improved satisfaction scores by 35% for a major e-commerce client.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["NLP", "Machine Learning", "Python", "TensorFlow"],
    results: [
      "70% reduction in customer wait times",
      "35% increase in customer satisfaction scores",
      "90% accurate intent recognition"
    ]
  },
  {
    title: "Predictive Analytics for E-commerce",
    description: "Created a comprehensive predictive analytics system that forecasts inventory needs, customer behavior, and sales trends with 92% accuracy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Predictive Modeling", "Data Analysis", "Python", "Scikit-learn"],
    results: [
      "92% accuracy in sales forecasting",
      "23% reduction in inventory costs",
      "18% increase in revenue through targeted promotions"
    ]
  },
  {
    title: "AI-Driven Process Automation System",
    description: "Designed and implemented an intelligent workflow automation system that reduced manual processing time by 85% for a financial services provider.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["RPA", "Machine Learning", "Python", "PyTorch"],
    results: [
      "85% reduction in manual processing time",
      "60% decrease in error rates",
      "$1.2M annual cost savings"
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-ai-dark to-ai-dark/95">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-ai-light/80 max-w-2xl mb-12">
          Explore some of my recent AI projects that have delivered measurable results for clients across various industries.
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="overflow-hidden rounded-xl glass-card p-1">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover object-center rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="glass-card p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <p className="text-ai-light/80 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-ai-blue mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-ai-blue/20 text-ai-blue px-3 py-1 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-ai-blue mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-ai-blue mr-2">•</span>
                          <span className="text-ai-light/70">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="ghost" className="text-ai-blue hover:text-ai-blue/80 p-0 mt-2 group">
                    View Case Study
                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { BrainCircuit, Cpu, Bot, LineChart, Database, Network } from 'lucide-react';

const skills = [
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    description: "Developing custom ML models for classification, regression, and clustering tasks."
  },
  {
    name: "Natural Language Processing",
    icon: Bot,
    description: "Building systems that understand, interpret, and generate human language."
  },
  {
    name: "AI Automation",
    icon: Cpu,
    description: "Creating automated workflows powered by intelligent decision-making systems."
  },
  {
    name: "Predictive Analytics",
    icon: LineChart,
    description: "Leveraging historical data to forecast trends and inform strategic decisions."
  },
  {
    name: "Data Engineering",
    icon: Database,
    description: "Designing robust data pipelines and architectures for AI applications."
  },
  {
    name: "Deep Learning",
    icon: Network,
    description: "Implementing neural networks for complex pattern recognition tasks."
  }
];

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Comprehensive analysis of your business needs and development of tailored AI integration roadmaps.",
    features: ["AI Readiness Assessment", "Technology Selection", "Implementation Planning"]
  },
  {
    title: "Custom AI Model Development",
    description: "End-to-end development of specialized machine learning models to address your unique challenges.",
    features: ["Data Preparation", "Model Training & Validation", "Deployment & Monitoring"]
  },
  {
    title: "AI Chatbot & Virtual Assistant",
    description: "Intelligent conversational agents that enhance customer experience and automate support.",
    features: ["Natural Language Understanding", "Integration with Existing Systems", "Continuous Learning"]
  },
  {
    title: "AI Automation & Workflow",
    description: "Streamlining operations through intelligent process automation and decision support systems.",
    features: ["Process Analysis", "RPA + AI Integration", "Performance Optimization"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-ai-dark/95 to-ai-dark">
      <div className="section-container">
        <h2 className="section-title">Skills & Services</h2>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-ai-blue mb-8">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="glass-card p-6 hover:border-ai-blue/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-ai-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-ai-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                  <p className="text-ai-light/80">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-ai-blue mb-8">Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 hover:border-ai-blue/30 transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-ai-light/80 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <h5 className="text-sm uppercase text-ai-blue mb-2">Includes:</h5>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-ai-blue mr-2">•</span>
                        <span className="text-ai-light/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

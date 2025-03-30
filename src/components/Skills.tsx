
import React from 'react';
import { BrainCircuit, Bot, Database, LineChart, Layers, Settings, Code, Network, ArrowRight } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-ai-blue" />,
      title: 'Machine Learning',
      description: 'Custom ML model development, fine-tuning, and deployment for specific business needs.'
    },
    {
      icon: <Bot className="w-12 h-12 text-ai-blue" />,
      title: 'AI Chatbots',
      description: 'Intelligent virtual assistants and conversational AI for customer support and service automation.'
    },
    {
      icon: <Database className="w-12 h-12 text-ai-blue" />,
      title: 'Big Data Processing',
      description: 'Data pipeline architecture, ETL processes, and large-scale analytics solutions.'
    },
    {
      icon: <LineChart className="w-12 h-12 text-ai-blue" />,
      title: 'Predictive Analytics',
      description: 'Forecasting, trend analysis, and data-driven insights for informed decision making.'
    },
    {
      icon: <Layers className="w-12 h-12 text-ai-blue" />,
      title: 'Deep Learning',
      description: 'Neural network design and optimization for image recognition, NLP, and complex pattern detection.'
    },
    {
      icon: <Settings className="w-12 h-12 text-ai-blue" />,
      title: 'Process Automation',
      description: 'Workflow optimization and end-to-end business process automation using AI technologies.'
    },
    {
      icon: <Code className="w-12 h-12 text-ai-blue" />,
      title: 'AI Development',
      description: 'TensorFlow, PyTorch, scikit-learn, and custom AI solution development.'
    },
    {
      icon: <Network className="w-12 h-12 text-ai-blue" />,
      title: 'AI Strategy',
      description: 'Comprehensive roadmaps for AI adoption, implementation, and scaling across organizations.'
    }
  ];

  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Custom roadmaps for AI integration into your business with clear milestones and ROI projections.'
    },
    {
      title: 'Custom AI Model Development',
      description: 'Tailored AI solutions designed specifically for your business challenges and data environment.'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Conversational AI systems that enhance customer experience and automate support processes.'
    },
    {
      title: 'AI Automation & Workflow',
      description: 'End-to-end process automation that reduces manual tasks and improves operational efficiency.'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Services</h2>
        <div className="h-1 w-20 bg-ai-blue mb-10"></div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-ai-dark/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-ai-blue transition-colors group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-10 text-white">Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-ai-dark to-ai-dark/70 rounded-lg p-8 border-l-4 border-ai-blue hover:shadow-lg hover:shadow-ai-blue/20 transition-all">
                <h4 className="text-xl font-semibold mb-4 text-white">{service.title}</h4>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <button className="text-ai-blue hover:text-ai-blue/80 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

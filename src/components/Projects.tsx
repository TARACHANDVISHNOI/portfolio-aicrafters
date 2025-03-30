
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Customer Support Chatbot',
      description: 'Designed and implemented an intelligent chatbot using NLP and machine learning to handle customer queries, reducing support ticket volume by 45% and improving response time.',
      image: '/placeholder.svg',
      tags: ['Machine Learning', 'NLP', 'Python', 'TensorFlow'],
      results: ['45% reduction in support tickets', '3.2 min average response time', '92% customer satisfaction'],
    },
    {
      title: 'Predictive Analytics for E-commerce',
      description: 'Developed a comprehensive analytics solution that leverages historical data to forecast sales trends, optimize inventory, and personalize customer recommendations.',
      image: '/placeholder.svg',
      tags: ['Predictive Analytics', 'Python', 'Big Data', 'Machine Learning'],
      results: ['28% increase in conversion rate', '18% reduction in inventory costs', '$1.2M additional revenue'],
    },
    {
      title: 'Automated Document Processing System',
      description: 'Created an intelligent system that uses computer vision and NLP to extract, categorize, and process information from various document types, eliminating manual data entry.',
      image: '/placeholder.svg',
      tags: ['Computer Vision', 'OCR', 'Process Automation', 'PyTorch'],
      results: ['97% data extraction accuracy', '60 hr/week manual work saved', '3-month ROI'],
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Implemented an AI-driven solution to optimize logistics routes, predict delays, and improve overall supply chain efficiency for a manufacturing client.',
      image: '/placeholder.svg',
      tags: ['Optimization', 'Logistics', 'Decision Systems', 'TensorFlow'],
      results: ['22% reduction in shipping costs', '35% fewer delivery delays', '$850K annual savings'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-ai-dark/90 to-ai-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
        <div className="h-1 w-20 bg-ai-blue mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-ai-dark/50 rounded-lg overflow-hidden border border-gray-700 hover:border-ai-blue transition-all",
                "backdrop-blur-sm hover:shadow-lg hover:shadow-ai-blue/20"
              )}
            >
              <div className="h-48 bg-gradient-to-r from-ai-blue/20 to-ai-blue/5 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-24 h-24 opacity-50" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex justify-between">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-ai-blue cursor-pointer" />
                </h3>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-ai-blue/10 text-ai-blue">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold mb-2 text-white">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
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

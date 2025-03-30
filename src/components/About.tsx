
import React from 'react';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'AI Consultant',
      company: 'Quantal',
      period: '2022 - Present',
      description: 'Leading AI strategy development and implementation for enterprise clients. Specializing in process automation, machine learning solutions, and AI-powered analytics.'
    },
    {
      title: 'Senior Data Scientist',
      company: 'Tech Innovations Inc.',
      period: '2020 - 2022',
      description: 'Developed and deployed machine learning models for predictive analytics. Built natural language processing solutions for customer service automation.'
    },
    {
      title: 'Data Analyst',
      company: 'Digital Solutions',
      period: '2019 - 2020',
      description: 'Analyzed large datasets to extract business insights. Created data visualization dashboards for executive decision-making.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-ai-dark to-ai-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
        <div className="h-1 w-20 bg-ai-blue mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">My Journey</h3>
            <p className="text-gray-300 mb-6">
              With over 3.5 years of experience in artificial intelligence and machine learning, 
              I've helped numerous businesses transform their operations through intelligent automation 
              and data-driven insights. As an AI Consultant at Quantal, I specialize in developing 
              custom AI solutions that address real business challenges.
            </p>
            <p className="text-gray-300 mb-6">
              My approach combines technical expertise with strategic thinking to ensure AI 
              implementations deliver measurable ROI. I believe in creating AI systems that are 
              not only powerful but also transparent, ethical, and aligned with business goals.
            </p>
            <p className="text-gray-300">
              Whether you're looking to automate routine tasks, gain deeper customer insights, 
              or develop innovative AI-powered products, I'm here to guide you through the process 
              from concept to deployment.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-ai-blue pl-6 relative">
                  <div className="absolute w-3 h-3 bg-ai-blue rounded-full -left-[7px] top-2"></div>
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <p className="text-ai-blue">{exp.company} | {exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

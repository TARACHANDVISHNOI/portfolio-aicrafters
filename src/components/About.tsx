
import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const workExperience = [
  {
    title: "AI Consultant",
    company: "Quantal",
    period: "2022 - Present",
    description: "Leading AI strategy and implementation for enterprise clients. Developing custom machine learning models and automation solutions that drive business growth."
  },
  {
    title: "Machine Learning Engineer",
    company: "Tech Innovators",
    period: "2020 - 2022",
    description: "Developed and deployed production-ready ML models for predictive analytics and natural language processing applications."
  },
  {
    title: "Data Scientist",
    company: "DataDriven Solutions",
    period: "2019 - 2020",
    description: "Analyzed complex datasets to extract actionable insights and built predictive models to optimize business processes."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-ai-dark to-ai-dark/95">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-ai-blue">My Journey</h3>
            <p className="text-ai-light/80 mb-6">
              With over 3.5 years of experience in the AI industry, I specialize in developing and 
              implementing AI strategies that drive real business outcomes. My journey in AI began with 
              a deep fascination for how intelligent systems can transform the way we work and live.
            </p>
            <p className="text-ai-light/80 mb-6">
              As an AI Consultant at Quantal, I work closely with businesses to understand their unique 
              challenges and develop tailored AI solutions that address their specific needs. My expertise 
              spans machine learning, natural language processing, computer vision, and AI automation.
            </p>
            <p className="text-ai-light/80">
              I believe in creating AI systems that are not only powerful and efficient but also ethical, 
              transparent, and accessible. My goal is to bridge the gap between cutting-edge AI technology 
              and practical business applications.
            </p>
          </div>

          <div className="space-y-8 stagger-animation">
            <h3 className="text-2xl font-bold text-ai-blue">Experience Timeline</h3>
            
            <div className="relative border-l-2 border-ai-blue/30 pl-8 space-y-10">
              {workExperience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full border-2 border-ai-blue bg-ai-dark"></div>
                  <div className="glass-card p-6 hover:border-ai-blue/30 transition-all duration-300">
                    <div className="flex items-center text-sm text-ai-light/60 mb-2">
                      <Calendar size={14} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <div className="flex items-center text-ai-blue mb-3">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-ai-light/80">{exp.description}</p>
                  </div>
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

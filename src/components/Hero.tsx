
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-ai-accent/10 rounded-full blur-3xl"></div>
        
        {/* Neural Network Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-ai-blue/20 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b border-ai-blue/20 w-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-ai-blue font-medium mb-4 animate-fade-in">
            AI Consultant at Quantal
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-ai-blue">Tarachand</span>, <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              Building AI Solutions That Transform Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-ai-light/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            With 3.5+ years of experience in AI strategy, automation, and machine learning solutions, 
            I help businesses leverage AI to improve efficiency and optimize decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button className="bg-ai-blue hover:bg-ai-blue/90 text-white" size="lg">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg">
              View My Projects
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-ai-light/70 hover:text-ai-blue transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

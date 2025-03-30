
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-ai-blue">AI</span> Consultant & Automation Specialist
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            I help businesses leverage the power of AI to automate processes, 
            improve efficiency, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-ai-blue text-ai-blue hover:bg-ai-blue/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

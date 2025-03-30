
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ai-dark py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-heading font-bold text-white">
              <span className="text-ai-blue">Tara</span>chand
            </a>
            <p className="text-gray-400 mt-2">AI Consultant & Automation Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/tarachand" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/tarachand" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:tarachandvishnoi@gmail.com"
              className="text-gray-400 hover:text-ai-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Tarachand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

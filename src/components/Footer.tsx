
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-ai-dark/90 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-heading font-bold text-white">
              <span className="text-ai-blue">Tara</span>chand
            </a>
            <p className="text-ai-light/60 mt-2">AI Consultant at Quantal</p>
          </div>
          
          <div className="text-ai-light/60 text-sm">
            &copy; {currentYear} Tarachand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

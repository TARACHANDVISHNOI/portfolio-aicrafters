
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <div className="h-1 w-20 bg-ai-blue mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Interested in discussing how AI can transform your business? I'm here to help.
              Whether you have a specific project in mind or just want to explore possibilities,
              feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-ai-blue mr-4" />
                <a href="mailto:tarachandvishnoi@gmail.com" className="text-gray-300 hover:text-ai-blue transition-colors">
                  tarachandvishnoi@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-ai-blue mr-4" />
                <a href="https://linkedin.com/in/tarachand" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ai-blue transition-colors">
                  linkedin.com/in/tarachand
                </a>
              </div>
              
              <div className="flex items-center">
                <Github className="w-5 h-5 text-ai-blue mr-4" />
                <a href="https://github.com/tarachand" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ai-blue transition-colors">
                  github.com/tarachand
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

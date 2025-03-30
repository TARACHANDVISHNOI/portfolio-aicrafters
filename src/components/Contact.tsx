
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-ai-dark/95 to-ai-dark">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-ai-light/80 max-w-2xl mb-12">
          Have a project in mind or want to discuss how AI can benefit your business? 
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ai-light/80 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-ai-light/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ai-light/80 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-ai-light/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ai-light/80 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you with your AI project?"
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-ai-light/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-ai-blue hover:bg-ai-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-ai-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-ai-light font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:tarachandvishnoi@gmail.com" 
                      className="text-ai-light/70 hover:text-ai-blue transition-colors"
                    >
                      tarachandvishnoi@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Linkedin className="text-ai-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-ai-light font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-blue transition-colors"
                    >
                      linkedin.com/in/tarachand
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="text-ai-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-ai-light font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-blue transition-colors"
                    >
                      github.com/tarachand
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

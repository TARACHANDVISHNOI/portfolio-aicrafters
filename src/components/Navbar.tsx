
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { title: 'Home', url: '#home' },
  { title: 'About', url: '#about' },
  { title: 'Skills', url: '#skills' },
  { title: 'Projects', url: '#projects' },
  { title: 'Contact', url: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        scrolled ? "py-2 bg-ai-dark/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold text-white">
          <span className="text-ai-blue">Tara</span>chand
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className="text-ai-light/80 hover:text-ai-blue transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-ai-dark/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="text-xl text-ai-light/80 hover:text-ai-blue transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

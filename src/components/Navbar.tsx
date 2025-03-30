
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { title: 'Home', url: '/#home' },
  { title: 'About', url: '/#about' },
  { title: 'Skills', url: '/#skills' },
  { title: 'Projects', url: '/#projects' },
  { title: 'Blog', url: '/blog' },
  { title: 'Contact', url: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        scrolled ? "py-2 bg-ai-dark/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-white">
          <span className="text-ai-blue">Tara</span>chand
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.url}
              className="text-ai-light/80 hover:text-ai-blue transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-4 text-white hover:text-ai-blue">
                  <User className="h-4 w-4 mr-1" />
                  {user.email?.split('@')[0]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-ai-dark border-gray-700">
                <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem 
                  className="text-red-400 hover:text-red-300 focus:text-red-300 cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm" className="ml-4 border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                Login
              </Button>
            </Link>
          )}
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
          "fixed inset-0 bg-ai-dark/95 z-40 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.url}
            className="text-xl text-ai-light/80 hover:text-ai-blue transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        ))}
        
        {user ? (
          <div className="flex flex-col items-center space-y-4 mt-6">
            <div className="text-ai-blue font-medium">
              {user.email?.split('@')[0]}
            </div>
            <Button 
              variant="outline" 
              className="border-red-500 text-red-500 hover:bg-red-500/10"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        ) : (
          <Link to="/auth" onClick={() => setIsOpen(false)}>
            <Button className="bg-ai-blue hover:bg-ai-blue/90 mt-6">
              Login / Sign Up
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;

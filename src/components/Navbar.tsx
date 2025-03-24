
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 lg:px-8",
        isScrolled ? "py-3 backdrop-blur-lg bg-white/80 shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold relative z-20 group"
          aria-label="Vibrant 3D Blog - Home"
        >
          <span className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent">
            Vibrant 3D
          </span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Blog</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-vibrant-blue link-underline",
                location.pathname === link.path 
                  ? "text-vibrant-blue" 
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-20 w-10 h-10 flex items-center justify-center"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen 
                  ? "top-2 rotate-45" 
                  : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full top-2 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen 
                  ? "top-2 -rotate-45" 
                  : "top-4"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col justify-center items-center space-y-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-2xl font-medium transition-all duration-300",
              location.pathname === link.path 
                ? "text-vibrant-blue" 
                : "text-foreground/80 hover:text-vibrant-blue"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

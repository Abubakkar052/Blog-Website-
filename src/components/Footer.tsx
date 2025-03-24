
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent">
                Vibrant 3D Blog
              </span>
            </Link>
            <p className="text-muted-foreground">
              Exploring design, technology, and creativity through a vibrant lens.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=tech" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/blog?category=design" className="text-muted-foreground hover:text-foreground transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/blog?category=business" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/blog?category=lifestyle" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 border border-border rounded-l-md bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20 w-full max-w-xs"
              />
              <button className="bg-vibrant-blue hover:bg-vibrant-blue/90 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Vibrant 3D Blog. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

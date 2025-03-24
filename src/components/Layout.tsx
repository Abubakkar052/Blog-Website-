
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isPageTransitioning, setIsPageTransitioning] = React.useState(false);
  const [displayLocation, setDisplayLocation] = React.useState(location);
  
  React.useEffect(() => {
    if (location !== displayLocation) {
      setIsPageTransitioning(true);
      setTimeout(() => {
        setDisplayLocation(location);
        setIsPageTransitioning(false);
      }, 300);
    }
  }, [location, displayLocation]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative">
        <div
          key={displayLocation.pathname}
          className={`w-full ${isPageTransitioning ? 'page-exit' : 'page-enter'}`}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

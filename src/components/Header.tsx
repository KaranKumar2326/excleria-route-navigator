import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Truck, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [truckPosition, setTruckPosition] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Optimized truck animation with requestAnimationFrame
  useEffect(() => {
    if (animationPaused) return;
    
    let animationFrameId;
    let startTime;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Complete cycle takes 10 seconds (10000ms)
      const cycle = 10000;
      // Calculate position (0 to 100)
      const position = (elapsed % cycle) / cycle * 120 - 20;
      
      setTruckPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationPaused]);

  // Pause animation when tab is not visible for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setAnimationPaused(document.hidden);
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownOpen && !event.target.closest('.services-dropdown')) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">
              Excleria<span className="text-gray-800 ml-1">Logistics</span>
            </h1>
          </a>
          
          {/* Truck Animation - Hidden on small screens */}
          <div className="relative h-8 w-32 ml-2 sm:ml-4 overflow-hidden ">
            <div 
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ 
                left: `${truckPosition}%`, 
                willChange: 'transform, left',
                transition: 'left 0.1s linear'
              }}
            >
              <Truck 
                size={26} 
                className="text-orange-500"
                style={{ 
                  filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.2))'
                }}
              />
            </div>
            {/* Road line under truck */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="/" className="text-gray-800 hover:text-orange-500 font-medium transition-colors duration-200">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-orange-500 font-medium transition-colors duration-200">
            About
          </a>
          <div className="relative group services-dropdown">
            <button 
              className="text-gray-800 hover:text-orange-500 font-medium flex items-center transition-colors duration-200"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              aria-expanded={servicesDropdownOpen}
              aria-controls="services-dropdown"
            >
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div 
              id="services-dropdown"
              className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ${
                servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}
            >
              <a href="/b2c-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                B2C Services
              </a>
              <a href="/b2b-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                B2B Services
              </a>
              <a href="/same-day-delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                Same-Day Delivery
              </a>
              <a href="/packers-movers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                Packers & Movers
              </a>
            </div>
          </div>
          <a href="/careers" className="text-gray-800 hover:text-orange-500 font-medium transition-colors duration-200">
            Careers
          </a>
          <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium transition-colors duration-200">
            Contact Us
          </a>
        </nav>

        {/* CTA Button and Mobile Menu Button Container */}
        <div className="flex items-center">
          {/* CTA Button - Hide on small screens, show on medium screens and above */}
          <div className="hidden md:block mr-2">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap">
              Track Package
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
              onClick={toggleMenu}
              aria-hidden="true"
            />
            
            {/* Menu panel */}
            <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 lg:hidden max-h-[calc(100vh-64px)] overflow-y-auto">
              <nav className="flex flex-col py-2 px-4 w-full">
                <a 
                  href="/" 
                  className="py-3 px-2 text-gray-800 hover:text-orange-500 font-medium border-b border-gray-100" 
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="py-3 px-2 text-gray-800 hover:text-orange-500 font-medium border-b border-gray-100" 
                  onClick={toggleMenu}
                >
                  About
                </a>
                
                {/* Services with nested dropdown */}
                <div className="border-b border-gray-100">
                  <button 
                    className="py-3 px-2 text-gray-800 hover:text-orange-500 font-medium w-full text-left flex justify-between items-center"
                    onClick={toggleServicesDropdown}
                    aria-expanded={servicesDropdownOpen}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesDropdownOpen && (
                    <div className="pl-4 py-1 bg-gray-50">
                      <a 
                        href="/b2c-services" 
                        className="py-2 px-2 block text-gray-700 hover:text-orange-500" 
                        onClick={toggleMenu}
                      >
                        B2C Services
                      </a>
                      <a 
                        href="/b2b-services" 
                        className="py-2 px-2 block text-gray-700 hover:text-orange-500" 
                        onClick={toggleMenu}
                      >
                        B2B Services
                      </a>
                      <a 
                        href="/same-day-delivery" 
                        className="py-2 px-2 block text-gray-700 hover:text-orange-500" 
                        onClick={toggleMenu}
                      >
                        Same-Day Delivery
                      </a>
                      <a 
                        href="/packers-movers" 
                        className="py-2 px-2 block text-gray-700 hover:text-orange-500" 
                        onClick={toggleMenu}
                      >
                        Packers & Movers
                      </a>
                    </div>
                  )}
                </div>
                
                <a 
                  href="/careers" 
                  className="py-3 px-2 text-gray-800 hover:text-orange-500 font-medium border-b border-gray-100" 
                  onClick={toggleMenu}
                >
                  Careers
                </a>
                <a 
                  href="/contact" 
                  className="py-3 px-2 text-gray-800 hover:text-orange-500 font-medium border-b border-gray-100" 
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
                <div className="py-3">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Track Package
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
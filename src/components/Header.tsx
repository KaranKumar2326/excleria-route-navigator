
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Truck } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [truckPosition, setTruckPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Truck animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPosition((prev) => {
        if (prev > 100) {
          return -20; // Reset truck position when it goes off-screen
        }
        return prev + 0.5; // Move truck right
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-3xl font-bold text-excleria-blue">
            Excleria<span className="text-gray-800 ml-1">Logistics</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-excleria-blue font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-excleria-blue font-medium">
            About
          </a>
          <div className="relative group">
            <a href="#services" className="text-gray-800 hover:text-excleria-blue font-medium flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md py-2 z-50">
              <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-excleria-blue hover:text-white">
                B2C Services
              </a>
              <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-excleria-blue hover:text-white">
                B2B Services
              </a>
              <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-excleria-blue hover:text-white">
                Same-Day Delivery
              </a>
              <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-excleria-blue hover:text-white">
                Packers & Movers
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-800 hover:text-excleria-blue font-medium">
            Careers
          </a>
          <a href="#contact" className="text-gray-800 hover:text-excleria-blue font-medium">
            Contact Us
          </a>
          
          {/* Moving Truck Animation */}
          <div className="relative h-6 w-16 overflow-hidden">
            <div 
              className="absolute transition-all" 
              style={{ left: `${truckPosition}%`, transform: 'translateX(-50%)' }}
            >
              <Truck 
                size={24} 
                className="text-orange-500"
                style={{ transform: 'scaleX(-1)' }} // Truck facing right
              />
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          <Menu size={24} />
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden z-50">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#" className="text-gray-800 hover:text-excleria-blue font-medium" onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-excleria-blue font-medium" onClick={toggleMenu}>
                About
              </a>
              <a href="#services" className="text-gray-800 hover:text-excleria-blue font-medium" onClick={toggleMenu}>
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-excleria-blue font-medium" onClick={toggleMenu}>
                Careers
              </a>
              <a href="#contact" className="text-gray-800 hover:text-excleria-blue font-medium" onClick={toggleMenu}>
                Contact Us
              </a>
              
              {/* Moving Truck Animation (Mobile) */}
              <div className="relative h-6 w-full overflow-hidden">
                <div 
                  className="absolute transition-all" 
                  style={{ left: `${truckPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <Truck 
                    size={24} 
                    className="text-orange-500"
                    style={{ transform: 'scaleX(-1)' }} // Truck facing right
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

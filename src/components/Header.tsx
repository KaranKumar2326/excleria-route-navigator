
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Truck } from "lucide-react";
import { Link } from 'react-router-dom';

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
    <header className="bg-gradient-to-r from-orange-100 to-amber-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Truck Animation */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-orange-600">
              Excleria<span className="text-gray-800 ml-1">Logistics</span>
            </h1>
          </Link>
        </div>
          
        {/* Moving Truck Animation - Now positioned between logo and navigation */}
        <div className="relative h-6 w-16 overflow-hidden hidden md:block">
          <div 
            className="absolute transition-all" 
            style={{ left: `${truckPosition}%`, transform: 'translateX(-50%)' }}
          >
            <Truck 
              size={24} 
              className="text-orange-600"
              style={{ transform: 'scaleX(-1)' }} // Truck facing right
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-orange-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-orange-600 font-medium">
            About
          </Link>
          <div className="relative group">
            <Link to="/services" className="text-gray-800 hover:text-orange-600 font-medium flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-orange-50 shadow-lg rounded-md py-2 z-50">
              <Link to="/services/b2c" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">
                B2C Services
              </Link>
              <Link to="/services/b2b" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">
                B2B Services
              </Link>
              <Link to="/services/same-day" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">
                Same-Day Delivery
              </Link>
              <Link to="/services/packers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">
                Packers & Movers
              </Link>
            </div>
          </div>
          <Link to="/careers" className="text-gray-800 hover:text-orange-600 font-medium">
            Careers
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-orange-600 font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          <Menu size={24} />
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-orange-50 shadow-md py-4 md:hidden z-50">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-gray-800 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/services/b2c" className="pl-4 text-gray-700 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                - B2C Services
              </Link>
              <Link to="/services/b2b" className="pl-4 text-gray-700 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                - B2B Services
              </Link>
              <Link to="/services/same-day" className="pl-4 text-gray-700 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                - Same-Day Delivery
              </Link>
              <Link to="/services/packers" className="pl-4 text-gray-700 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                - Packers & Movers
              </Link>
              <Link to="/careers" className="text-gray-800 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                Careers
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-orange-600 font-medium" onClick={toggleMenu}>
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

// Hero images (normally these would be real imported images)
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    alt: "Truck on Indian highway with rural backdrop"
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop",
    alt: "Logistics warehouse with packages"
  },
  {
    src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
    alt: "Delivery truck in urban setting"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto rotate slides
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-orange-900/50 to-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white container mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Nationwide Reach,<br />Streamlined Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
          Excleria Logistics provides seamless transportation and logistics solutions across India with technology-driven efficiency.
        </p>
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 text-lg rounded-md animate-fade-in"
        >
          Get Started
        </Button>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

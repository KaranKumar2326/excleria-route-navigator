import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

// Hero images (using placeholder images for demonstration)
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
    <div className="relative h-64 sm:h-96 md:h-128 lg:h-screen max-h-screen overflow-hidden">
      {/* Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4 md:mb-6">
          <span className="block">Nationwide Reach,</span>
          <span className="block">Streamlined Solutions</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          Excleria Logistics provides seamless transportation and logistics solutions across India with technology-driven efficiency.
        </p>
        <Button 
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg rounded"
        >
          Get Started
        </Button>

        {/* Slideshow indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-white bg-opacity-50'
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
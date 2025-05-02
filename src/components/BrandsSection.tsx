
import React, { useRef, useEffect } from 'react';

const BrandsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;
      }
    };
    
    const interval = setInterval(scroll, 30);
    
    // Pause scrolling when hovering
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => setInterval(scroll, 30);
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearInterval(interval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const brands = [
    {
      name: "Tata Motors",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png"
    },
    {
      name: "Reliance Industries",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png"
    },
    {
      name: "Flipkart",
      logo: "https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
    },
    {
      name: "Myntra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Myntra_logo.png/800px-Myntra_logo.png"
    },
    {
      name: "Amazon India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
    },
    {
      name: "Mahindra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Mahindra_Rise_Logo.png"
    },
    {
      name: "BigBasket",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Bigbasket_logo.png"
    },
    {
      name: "Snapdeal",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Snapdeal_logo.svg/1200px-Snapdeal_logo.svg.png"
    }
  ];

  return (
    <section className="section-container bg-excleria-lightgray">
      <h2 className="section-title">Our Trusted Partners</h2>
      
      <div className="relative overflow-hidden mt-16">
        {/* Gradient overlays for smooth scroll appearance */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-excleria-lightgray to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-excleria-lightgray to-transparent"></div>
        
        <div 
          className="flex flex-nowrap overflow-x-auto scrollbar-hide py-8" 
          ref={scrollRef}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {/* Double the brands for seamless infinite scroll effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-8 w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

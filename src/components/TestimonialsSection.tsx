
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    company: "TechInnovate Solutions",
    role: "Supply Chain Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Excleria Logistics has transformed our supply chain with their tech-driven solutions. The real-time tracking and warehouse management system have significantly reduced our operational costs."
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "GreenLeaf E-commerce",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The B2C services provided by Excleria have been instrumental in scaling our e-commerce business. Their same-day delivery option has given us a competitive edge in the market."
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    company: "GlobalTrade India",
    role: "Logistics Coordinator",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "We've been working with Excleria for over 3 years now, and their B2B services have consistently exceeded our expectations. Their nationwide reach has helped us expand our business across India."
  },
  {
    id: 4,
    name: "Ananya Desai",
    company: "HomeStyles Furniture",
    role: "Customer Service Manager",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    quote: "The packers and movers service from Excleria ensured a seamless relocation of our office. Their professional handling and attention to detail were impressive."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="section-container bg-excleria-lightgray">
      <h2 className="section-title">What Our Clients Say</h2>
      
      <div className="mt-16 relative overflow-hidden" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={carouselRef}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`w-full shrink-0 transition-all duration-700 ease-in-out transform ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-excleria-blue" 
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1EAEDB" className="w-6 h-6">
                          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-excleria-blue">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <blockquote>
                      <p className="text-xl italic text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-excleria-blue' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React, { useRef, useEffect } from 'react';
import { Package, Truck, Clock, Archive } from 'lucide-react';

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const containerWidth = scrollContainer.scrollWidth;
    const viewportWidth = scrollContainer.clientWidth;
    
    // Only activate auto-scroll if content is wider than viewport
    if (containerWidth <= viewportWidth) return;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when reaching the end
      if (scrollPosition >= containerWidth - viewportWidth) {
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
  
  const services = [
    {
      icon: Package,
      title: "B2C Services",
      description: "End-to-end e-commerce logistics, reverse logistics, and flexible payment options including COD and digital payments.",
      imageSrc: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=1171&auto=format&fit=crop",
      imageAlt: "Indian delivery person with package"
    },
    {
      icon: Truck,
      title: "B2B Services",
      description: "Full truck load/partial truck load, multimodal transportation, warehouse management and distribution logistics.",
      imageSrc: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop",
      imageAlt: "Indian logistics warehouse with workers"
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Ultra-fast deliveries with live tracking system and real-time updates for urgent shipments.",
      imageSrc: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1170&auto=format&fit=crop",
      imageAlt: "Delivery scooter in Indian urban street"
    },
    {
      icon: Archive,
      title: "Packers & Movers",
      description: "Professional household and office shifting services, corporate relocations with specialized handling.",
      imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1074&auto=format&fit=crop",
      imageAlt: "Indian workers moving boxes"
    }
  ];

  return (
    <section id="services" className="section-container bg-excleria-lightgray overflow-hidden">
      <h2 className="section-title">Our Services</h2>
      
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hide pb-8 mt-16" ref={scrollRef}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80 mx-4 first:ml-0 last:mr-0 service-card group hover:bg-gradient-to-br from-excleria-blue to-orange-500 hover:text-white transition-all duration-300"
            style={{transition: `transform 0.3s ease-out ${index * 0.1}s`}}
          >
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-orange-500 text-white group-hover:bg-white group-hover:text-orange-500 transition-all">
                  <service.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-600 text-center group-hover:text-white/90">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Service Infographic */}
      <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-8 text-center">How We Deliver Excellence</h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4">
              <Package size={40} />
            </div>
            <h4 className="font-bold text-lg mb-2">Order Pickup</h4>
            <p className="text-center text-sm text-gray-600 max-w-xs">Fast collection from your location across 10,000+ pin codes in India</p>
          </div>
          
          <div className="hidden md:block w-20 h-0.5 bg-gradient-to-r from-excleria-blue to-orange-500"></div>
          
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-20 h-20 bg-excleria-blue rounded-full flex items-center justify-center text-white mb-4">
              <Truck size={40} />
            </div>
            <h4 className="font-bold text-lg mb-2">Smart Routing</h4>
            <p className="text-center text-sm text-gray-600 max-w-xs">AI-powered route optimization for quickest delivery paths</p>
          </div>
          
          <div className="hidden md:block w-20 h-0.5 bg-gradient-to-r from-excleria-blue to-orange-500"></div>
          
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4">
              <Clock size={40} />
            </div>
            <h4 className="font-bold text-lg mb-2">Real-time Tracking</h4>
            <p className="text-center text-sm text-gray-600 max-w-xs">Monitor your shipment with live updates and notifications</p>
          </div>
          
          <div className="hidden md:block w-20 h-0.5 bg-gradient-to-r from-excleria-blue to-orange-500"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-excleria-blue rounded-full flex items-center justify-center text-white mb-4">
              <Archive size={40} />
            </div>
            <h4 className="font-bold text-lg mb-2">Safe Delivery</h4>
            <p className="text-center text-sm text-gray-600 max-w-xs">Secured handover with digital proof of delivery system</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

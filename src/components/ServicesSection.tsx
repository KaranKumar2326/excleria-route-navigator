
import React from 'react';
import { Package, Truck, Clock, Archive } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "B2C Services",
      description: "End-to-end e-commerce logistics, reverse logistics, and flexible payment options including COD and digital payments.",
    },
    {
      icon: Truck,
      title: "B2B Services",
      description: "Full truck load/partial truck load, multimodal transportation, warehouse management and distribution logistics.",
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Ultra-fast deliveries with live tracking system and real-time updates for urgent shipments.",
    },
    {
      icon: Archive,
      title: "Packers & Movers",
      description: "Professional household and office shifting services, corporate relocations with specialized handling.",
    }
  ];

  return (
    <section id="services" className="section-container bg-excleria-lightgray">
      <h2 className="section-title">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-excleria-blue text-white">
                <service.icon size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

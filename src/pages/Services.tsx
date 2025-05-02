
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, Truck, Clock, Archive } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "b2c",
      icon: Package,
      title: "B2C Services",
      description: "End-to-end e-commerce logistics, reverse logistics, and flexible payment options including COD and digital payments.",
      imageSrc: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=1171&auto=format&fit=crop",
      imageAlt: "Indian delivery person with package",
      color: "from-excleria-blue to-blue-600"
    },
    {
      id: "b2b",
      icon: Truck,
      title: "B2B Services",
      description: "Full truck load/partial truck load, multimodal transportation, warehouse management and distribution logistics.",
      imageSrc: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop",
      imageAlt: "Indian logistics warehouse with workers",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "same-day",
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Ultra-fast deliveries with live tracking system and real-time updates for urgent shipments.",
      imageSrc: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1170&auto=format&fit=crop",
      imageAlt: "Delivery scooter in Indian urban street",
      color: "from-excleria-blue to-blue-600"
    },
    {
      id: "packers",
      icon: Archive,
      title: "Packers & Movers",
      description: "Professional household and office shifting services, corporate relocations with specialized handling.",
      imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1074&auto=format&fit=crop",
      imageAlt: "Indian workers moving boxes",
      color: "from-orange-500 to-orange-600"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-excleria-blue to-blue-700 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-1 opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored for businesses of all sizes across India.
              From last-mile delivery to complex supply chains, we've got you covered.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="section-container bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl my-8">
          <h2 className="section-title">Explore Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div key={index} className="enhanced-card group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.imageSrc} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8 relative">
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mt-6 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>
                  
                  <div className="text-center">
                    <Link to={`/services/${service.id}`}>
                      <Button variant="outline" className="border-2 border-excleria-blue text-excleria-blue hover:bg-excleria-blue hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Industries We Serve */}
        <div className="section-container">
          <h2 className="section-title">Industries We Serve</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1612296727716-d6c69d7ea1d6?q=80&w=1171&auto=format&fit=crop" 
                alt="E-commerce store" 
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">E-Commerce</h3>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop" 
                alt="Indian manufacturing" 
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">Manufacturing</h3>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?q=80&w=1170&auto=format&fit=crop" 
                alt="Retail store in India" 
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">Retail</h3>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1590599145008-e4ec48682067?q=80&w=1974&auto=format&fit=crop" 
                alt="Indian pharmaceutical" 
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">Pharmaceuticals</h3>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-excleria-blue to-blue-700 text-white py-16 my-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Excleria Logistics for seamless, efficient, and technology-driven logistics solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-excleria-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Get Started
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

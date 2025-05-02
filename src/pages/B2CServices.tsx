
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const B2CServices = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              B2C Services
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
              End-to-end e-commerce logistics, reverse logistics, and flexible payment options including COD and digital payments.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="section-container bg-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 text-orange-600">Serving Your E-commerce Business</h2>
              <p className="mb-4 text-gray-700">
                Our B2C services are designed to enhance your e-commerce logistics with reliable delivery solutions across India.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Last-Mile Delivery:</span> Reliable and timely deliveries to your customers' doorsteps.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Cash on Delivery:</span> Secure payment collection and quick settlement to your account.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Reverse Logistics:</span> Hassle-free returns management with real-time tracking.</p>
                </li>
              </ul>
              <Button className="mt-6 bg-orange-600 hover:bg-orange-700">Request Quote</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=1171&auto=format&fit=crop" 
                alt="Indian delivery person with package" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-container bg-gradient-to-r from-orange-600 to-orange-400 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Our B2C Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Package Tracking</h3>
              <p className="text-center">Real-time tracking for customers with SMS and email notifications at every delivery stage.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Nationwide Coverage</h3>
              <p className="text-center">Extensive delivery network covering all major cities and 10,000+ pin codes across India.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Secure Packaging</h3>
              <p className="text-center">Professional packaging solutions to ensure your products reach customers in perfect condition.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container bg-orange-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your E-commerce Logistics?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-gray-700">
              Partner with Excleria Logistics to enhance your customer experience with reliable B2C delivery services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get Started</Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default B2CServices;

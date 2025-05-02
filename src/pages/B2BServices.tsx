
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, ArrowRight, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const B2BServices = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              B2B Services
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
              Full truck load/partial truck load, multimodal transportation, warehouse management and distribution logistics.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="section-container bg-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-orange-600">Enterprise Logistics Solutions</h2>
              <p className="mb-4 text-gray-700">
                Our B2B services provide comprehensive logistics solutions for businesses with custom requirements across India.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Full Truck Load (FTL):</span> Dedicated vehicles for large shipments with optimized routes.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Partial Truck Load (PTL):</span> Cost-effective solutions for mid-sized shipments.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p><span className="font-semibold">Warehousing:</span> Strategic storage facilities across major business hubs in India.</p>
                </li>
              </ul>
              <Button className="mt-6 bg-orange-600 hover:bg-orange-700">Request Quote</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-in-right order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop" 
                alt="Indian logistics warehouse with workers" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-container bg-gradient-to-r from-orange-600 to-orange-400 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Our B2B Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Multimodal Transport</h3>
              <p className="text-center">Integration of rail, road, and air transportation for efficient long-distance logistics.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Archive size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Inventory Management</h3>
              <p className="text-center">Advanced systems for real-time inventory tracking and management across multiple warehouses.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 mx-auto">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Distribution Network</h3>
              <p className="text-center">Strategic distribution centers across India for faster deliveries and reduced transit times.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container bg-orange-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Optimize Your Business Logistics</h2>
            <p className="mb-8 max-w-2xl mx-auto text-gray-700">
              Partner with Excleria Logistics for seamless B2B transportation and warehousing solutions across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Contact Sales</Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default B2BServices;

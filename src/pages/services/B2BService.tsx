
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Truck, ArrowLeft, ArrowRight, Box } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const B2BService = () => {
  const features = [
    {
      icon: Truck,
      title: "FTL/PTL Transportation",
      description: "Full truck load and partial truck load services with real-time tracking and optimized routes for maximum efficiency."
    },
    {
      icon: Box,
      title: "Warehouse Management",
      description: "State-of-the-art warehousing facilities with inventory management, order fulfillment, and distribution services."
    },
    {
      icon: Truck,
      title: "Multimodal Solutions",
      description: "Seamless integration of air, road, and rail transportation for cost-effective and time-sensitive deliveries."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="service-hero">
          <div className="absolute inset-0 overflow-hidden z-0">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop" 
              alt="Indian logistics warehouse with workers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="service-hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Services</h1>
            <p className="text-xl max-w-2xl mb-8">
              Full truck load/partial truck load, multimodal transportation, warehouse management 
              and distribution logistics for businesses across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-excleria-blue hover:bg-gray-100">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="section-container bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl my-8">
          <h2 className="section-title">Our B2B Logistics Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="enhanced-card">
                <div className="p-8">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Services Table */}
          <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
            <h3 className="text-2xl font-bold p-6 bg-excleria-blue text-white">Our B2B Services Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold">Service Type</th>
                    <th className="p-4 text-left font-bold">Features</th>
                    <th className="p-4 text-left font-bold">Best For</th>
                    <th className="p-4 text-left font-bold">Turnaround Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium">Full Truck Load (FTL)</td>
                    <td className="p-4">Dedicated vehicle, direct delivery, enhanced security</td>
                    <td className="p-4">Large volume shipments, time-sensitive deliveries</td>
                    <td className="p-4">24-72 hours (depending on distance)</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Partial Truck Load (PTL)</td>
                    <td className="p-4">Cost-effective, optimized routes, consolidated shipments</td>
                    <td className="p-4">Medium-sized consignments, cost-conscious businesses</td>
                    <td className="p-4">48-96 hours (depending on distance)</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium">Express Distribution</td>
                    <td className="p-4">Priority handling, dedicated routes, real-time tracking</td>
                    <td className="p-4">Urgent deliveries, high-value goods</td>
                    <td className="p-4">12-36 hours (depending on distance)</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Multimodal Transport</td>
                    <td className="p-4">Integrated air, road, and rail solutions, single point of contact</td>
                    <td className="p-4">Long-distance shipments, specialized cargo</td>
                    <td className="p-4">Varies based on mode combination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="section-container">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Success Story: Mumbai Manufacturing Giant</h3>
                <p className="text-gray-600 mb-6">
                  A Mumbai-based manufacturing company was struggling with supply chain inefficiencies 
                  and transportation costs. After implementing Excleria's B2B logistics solutions, they achieved:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>22% reduction in transportation costs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>35% improvement in delivery time consistency</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>18% increase in overall supply chain efficiency</span>
                  </li>
                </ul>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1626677576163-2e5416274907?q=80&w=2070&auto=format&fit=crop" 
                  alt="Indian industrial warehouse" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Navigation */}
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link to="/services/b2c" className="flex items-center text-excleria-blue hover:underline mb-4 md:mb-0">
                <ArrowLeft size={20} className="mr-2" />
                Previous: B2C Services
              </Link>
              <Link to="/services/same-day" className="flex items-center text-excleria-blue hover:underline">
                Next: Same-Day Delivery
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default B2BService;

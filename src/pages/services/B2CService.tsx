
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Package, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const B2CService = () => {
  const features = [
    {
      icon: Package,
      title: "E-commerce Logistics",
      description: "End-to-end logistics solutions for online retailers of all sizes. From warehouse to doorstep, we manage your entire supply chain."
    },
    {
      icon: ShoppingBag,
      title: "Reverse Logistics",
      description: "Hassle-free returns management with quick processing and real-time status updates to enhance your customer's experience."
    },
    {
      icon: Package,
      title: "Multiple Payment Options",
      description: "Secure Cash on Delivery (COD) and all digital payment options to provide flexibility for your customers."
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
              src="https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=1171&auto=format&fit=crop" 
              alt="Indian delivery person with package"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="service-hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2C Services</h1>
            <p className="text-xl max-w-2xl mb-8">
              End-to-end e-commerce logistics, reverse logistics, and flexible payment options 
              to enhance your customer's shopping experience.
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
          <h2 className="section-title">Our B2C Logistics Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="enhanced-card">
                <div className="p-8">
                  <div className="bg-gradient-to-r from-excleria-blue to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Workflow */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">How Our B2C Service Works</h3>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-excleria-blue to-orange-500 transform -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-excleria-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                  <h4 className="font-bold mb-2">Order Processing</h4>
                  <p className="text-sm text-gray-600">We receive and validate your customer orders</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-excleria-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                  <h4 className="font-bold mb-2">Picking & Packing</h4>
                  <p className="text-sm text-gray-600">Products are carefully picked and packed with quality materials</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-excleria-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                  <h4 className="font-bold mb-2">Last Mile Delivery</h4>
                  <p className="text-sm text-gray-600">Efficient delivery to your customer's doorstep</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-excleria-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                  <h4 className="font-bold mb-2">Returns Management</h4>
                  <p className="text-sm text-gray-600">Easy return process with quick processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="section-container">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1638911774776-a5422e25a3b8?q=80&w=1974&auto=format&fit=crop" 
                  alt="Indian e-commerce fulfillment center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Success Story: Delhi Fashion Retailer</h3>
                <p className="text-gray-600 mb-6">
                  A Delhi-based fashion retailer was struggling with delivery delays and high return rates. 
                  After partnering with Excleria Logistics, they achieved:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>45% reduction in delivery time</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>32% decrease in return rates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>28% increase in customer satisfaction</span>
                  </li>
                </ul>
                <Button className="bg-excleria-blue hover:bg-blue-600">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Navigation */}
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link to="/services" className="flex items-center text-excleria-blue hover:underline mb-4 md:mb-0">
                <ArrowLeft size={20} className="mr-2" />
                Back to All Services
              </Link>
              <Link to="/services/b2b" className="flex items-center text-excleria-blue hover:underline">
                Next: B2B Services
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

export default B2CService;


import React from 'react';
import { CheckCircle, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Tech-Driven Solutions",
      description: "Leveraging cutting-edge technology for real-time tracking, route optimization, and seamless operations."
    },
    {
      title: "Nationwide Reach",
      description: "Extensive network covering 10,000+ pin codes across all regions of India through 42+ fulfillment centers."
    },
    {
      title: "Flexible Customization",
      description: "Tailored logistics solutions for both B2B and B2C clients with varying needs and requirements."
    },
    {
      title: "Sustainability Commitment",
      description: "Eco-friendly practices including optimized routes, reduced carbon footprint, and sustainable packaging."
    },
    {
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance and dedicated support teams to address all your logistics needs."
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Why Choose Excleria Logistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div>
          <div className="relative rounded-lg overflow-hidden h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
              alt="Excleria Logistics Operations in India" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Excellence in Logistics</h3>
              <p className="text-white/80">
                Our commitment to excellence and innovation drives everything we do
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex">
              <div className="mr-4 pt-1">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button 
              className="bg-excleria-blue hover:bg-excleria-brightblue text-white px-8 py-6 h-auto text-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 h-auto text-lg"
            >
              <PhoneCall size={20} className="mr-2" />
              Request Call Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

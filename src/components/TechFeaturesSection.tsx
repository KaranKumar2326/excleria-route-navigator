
import React from 'react';
import { Cloud, Database, Smartphone } from 'lucide-react';

const TechFeaturesSection = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Based Tracking",
      description: "Real-time shipment tracking with accurate ETAs and automated notifications for complete visibility.",
    },
    {
      icon: Database,
      title: "Warehouse Management",
      description: "Advanced inventory control, space optimization, and automated warehouse operations.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Driver and customer mobile apps for seamless communication and service updates.",
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Tech-Driven Features</h2>
      
      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-excleria-blue to-excleria-brightblue p-1 rounded-lg">
            <div className="bg-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-excleria-blue">Technology That Drives Efficiency</h3>
              <p className="text-lg mb-6 leading-relaxed">
                At Excleria Logistics, we leverage cutting-edge technology to optimize every aspect of 
                the logistics process. Our technology stack integrates seamlessly from warehouse operations 
                to last-mile delivery, providing a unified and efficient logistics solution.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our proprietary systems allow for real-time decision making, route optimization, 
                and predictive analytics that anticipate supply chain challenges before they arise.
              </p>
              <p className="text-lg leading-relaxed">
                Through continuous innovation and technology adoption, we ensure that our clients 
                receive the most efficient, reliable, and cost-effective logistics services possible.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex bg-white p-6 rounded-lg shadow-md border-l-4 border-excleria-blue"
              >
                <div className="mr-6">
                  <div className="p-3 rounded-full bg-excleria-lightgray text-excleria-blue">
                    <feature.icon size={28} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeaturesSection;


import React from 'react';

const AboutSection = () => {
  const stats = [
    { id: 1, value: '10,000+', label: 'Serviceable Pin Codes' },
    { id: 2, value: '42+', label: 'Fulfillment Centers' },
    { id: 3, value: '5', label: 'Geographical Regions' },
    { id: 4, value: '24/7', label: 'Customer Support' },
  ];

  const regions = [
    { name: 'North', centers: 12 },
    { name: 'South', centers: 10 },
    { name: 'East', centers: 8 },
    { name: 'West', centers: 9 },
    { name: 'North-East', centers: 3 },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Excleria Logistics</h2>
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Founded in 2015 and headquartered in Lucknow, Excleria Logistics has grown to become 
            one of India's leading logistics solution providers. We specialize in B2C, B2B, 
            warehousing, and comprehensive supply chain solutions across the nation.
          </p>
          <p className="text-lg leading-relaxed">
            Our expertise in transportation logistics and commitment to innovation has allowed 
            us to build a robust nationwide network that serves businesses of all sizes. With 
            strategic fulfillment centers positioned across all regions of India, we ensure 
            efficient and timely delivery services.
          </p>
          <p className="text-lg leading-relaxed">
            At Excleria, we leverage cutting-edge technology to streamline operations, reduce costs, 
            and enhance the overall customer experience. Our dedicated team of logistics experts 
            works tirelessly to provide customized solutions that meet the unique requirements 
            of our diverse client base.
          </p>
        </div>

        <div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-excleria-blue">
                <div className="text-3xl md:text-4xl font-bold text-excleria-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Regions Grid */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Fulfillment Centers by Region</h3>
            <div className="space-y-3">
              {regions.map((region) => (
                <div key={region.name} className="flex justify-between items-center">
                  <span className="text-gray-700">{region.name}</span>
                  <div className="flex items-center">
                    <div className="w-40 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-excleria-blue h-2.5 rounded-full" 
                        style={{ width: `${(region.centers / 12) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{region.centers}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

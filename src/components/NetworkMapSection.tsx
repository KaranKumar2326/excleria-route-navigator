
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const NetworkMapSection = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  
  const regions = [
    { id: 'north', name: 'North', centers: 12, color: '#FF7A00' }, // Updated to orange
    { id: 'south', name: 'South', centers: 10, color: '#1EAEDB' }, // Blue
    { id: 'east', name: 'East', centers: 8, color: '#FF7A00' }, // Orange
    { id: 'west', name: 'West', centers: 9, color: '#1EAEDB' }, // Blue
    { id: 'northeast', name: 'North-East', centers: 3, color: '#FF7A00' }, // Orange
  ];

  return (
    <section className="section-container bg-orange-50">
      <h2 className="section-title">Our Nationwide Network</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        <div className="lg:w-2/5">
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-orange-800">Fulfillment Centers Across India</h3>
            <p className="text-lg mb-8 text-gray-700">
              With strategic locations across all five regions of India, our extensive network of 42+ 
              fulfillment centers ensures we can efficiently service over 10,000 pin codes nationwide.
            </p>
            
            <div className="space-y-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`flex items-center justify-between w-full p-4 rounded-lg border transition-colors ${
                    activeRegion === region.id || activeRegion === 'all'
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-200 hover:bg-orange-50'
                  }`}
                  onClick={() => setActiveRegion(region.id === activeRegion ? 'all' : region.id)}
                >
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" style={{ color: region.color }} />
                    <span className="font-medium">{region.name} Region</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-600 text-white py-1 px-3 rounded-full text-sm">
                      {region.centers} centers
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/5">
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-4 rounded-lg shadow-md h-full">
            {/* Using the official Indian map that includes all territories */}
            <div className="relative h-[500px] bg-orange-50 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center relative w-full h-full">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c9/India-map-en.svg" 
                  alt="Complete and official map of India with Excleria's fulfillment centers" 
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%]">
                    {/* Map pins - would be positioned precisely in a real implementation */}
                    {regions.map((region) => (
                      (activeRegion === 'all' || activeRegion === region.id) && (
                        Array(region.centers).fill(0).map((_, idx) => (
                          <div 
                            key={`${region.id}-${idx}`}
                            className="absolute animate-pulse"
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${20 + Math.random() * 60}%`,
                              transform: 'translate(-50%, -50%)',
                              zIndex: activeRegion === region.id ? 20 : 10,
                            }}
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: region.color }} 
                            />
                          </div>
                        ))
                      )
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-sm">
                <p className="text-xs text-gray-600">
                  {activeRegion === 'all' 
                    ? 'Showing all fulfillment centers (42+)'
                    : `Showing ${regions.find(r => r.id === activeRegion)?.name} region centers`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkMapSection;


import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const NetworkMapSection = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  
  const regions = [
    { id: 'north', name: 'North', centers: 12, color: '#1EAEDB' },
    { id: 'south', name: 'South', centers: 10, color: '#FF8C00' }, // Changed to orange
    { id: 'east', name: 'East', centers: 8, color: '#0FA0CE' },
    { id: 'west', name: 'West', centers: 9, color: '#1EAEDB' },
    { id: 'northeast', name: 'North-East', centers: 3, color: '#FF8C00' }, // Changed to orange
  ];

  return (
    <section className="section-container bg-excleria-lightgray">
      <h2 className="section-title">Our Nationwide Network</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        <div className="lg:w-2/5">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Fulfillment Centers Across India</h3>
            <p className="text-lg mb-8">
              With strategic locations across all five regions of India, our extensive network of 42+ 
              fulfillment centers ensures we can efficiently service over 10,000 pin codes nationwide.
            </p>
            
            <div className="space-y-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`flex items-center justify-between w-full p-4 rounded-lg border transition-colors ${
                    activeRegion === region.id || activeRegion === 'all'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveRegion(region.id === activeRegion ? 'all' : region.id)}
                >
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" style={{ color: region.color }} />
                    <span className="font-medium">{region.name} Region</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-500 text-white py-1 px-3 rounded-full text-sm">
                      {region.centers} centers
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/5">
          <div className="bg-white p-4 rounded-lg shadow-md h-full">
            {/* Updated with correct Indian map that includes all territories */}
            <div className="relative max-h-full bg-excleria-lightgray rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <img 
                // src public/image.png
                src ="/image.png"
                  // src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_map_blank.svg" 
                  alt="Complete map of India with Excleria's fulfillment centers" 
                  className="max-w-full max-h-full object-contain"
                />
                
              </div>
              <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-sm">
                <p className="text-xs text-gray-500">
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

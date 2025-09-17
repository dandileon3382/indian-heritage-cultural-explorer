import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const MapPopup = ({ sites }) => {
  const [hoveredImage, setHoveredImage] = useState(sites[0]?.thumbnail);
  
  return (
    <div
      className="p-4 rounded-lg shadow-lg border border-gray-200 relative overflow-hidden transition-all duration-300"
      style={{
        minWidth: '200px',
        backgroundImage: `url(${hoveredImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col space-y-2">
        <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--navy-blue)' }}>
          Select a Site:
        </h3>
        {sites.map(site => (
          <div
            key={site.id}
            onMouseEnter={() => setHoveredImage(site.thumbnail)}
            onMouseLeave={() => setHoveredImage(sites[0]?.thumbnail)}
            className="flex items-center p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="w-16 h-12 rounded mr-4 overflow-hidden">
              <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-sm font-medium text-gray-800">
                {site.name}
              </div>
              <p className="text-xs text-gray-600 truncate">{site.short_description}</p>
              <Link to={`/sites/${site.id}`}>
                <Button className="mt-2 text-xs">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPopup;
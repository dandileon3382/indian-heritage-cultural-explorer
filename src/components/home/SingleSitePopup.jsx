// src/components/home/SingleSitePopup.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const SingleSitePopup = ({ site }) => {
  const backgroundImage = site.images[0]?.src;

  return (
    <div
      className="p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center relative overflow-hidden"
      style={{
        minWidth: '200px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-16 rounded mb-2 overflow-hidden shadow-md">
          <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--navy-blue)' }}>
          {site.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{site.description}</p>
        <Link to={`/sites/${site.id}`}>
          <Button className="text-sm">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleSitePopup;
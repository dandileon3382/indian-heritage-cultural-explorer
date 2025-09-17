// src/components/site/SitePage.jsx

import React, { useState } from 'react';
import { useARCompatibility } from '../../hooks/useARCompatibility';
import AudioPlayer from './AudioPlayer';
import Button from '../common/Button';
import ARModelViewer from './ARModelViewer';
import StreetViewViewer from './StreetViewViewer';
import ContentSection from './ContentSection';
import Footer from '../common/Footer';

const SitePage = ({ site }) => {
  const { isSupported, isLoading } = useARCompatibility();
  const [viewMode, setViewMode] = useState('model');

  const handleARClick = () => {
    setViewMode('model');
  };

  const handleStreetViewClick = () => {
    setViewMode('street-view');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-120 overflow-hidden">
        <img
          src={site.images[0]?.src}
          alt={site.images[0]?.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 md:p-16">
          <div>
            <h1 className="text-white text-3xl md:text-6xl font-bold font-serif">
              {site.name}
            </h1>
            <p className="text-white text-sm mt-1 md:text-lg md:mt-2 font-serif">{site.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4 md:p-8">
        {/* Call-to-Action Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-12 mt-[-4rem] md:mt-[-6rem] bg-white bg-opacity-80 rounded-lg shadow-xl relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--navy-blue)' }}>
              Explore the History & Architecture
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Discover the historical context, architectural style, and significance of this monument.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {isLoading ? (
              <Button disabled>Checking AR...</Button>
            ) : isSupported ? (
              <Button onClick={handleARClick}>Start AR Tour</Button>
            ) : (
              <Button disabled>AR is not supported</Button>
            )}
            <Button onClick={handleStreetViewClick} className="bg-gray-500 hover:bg-gray-700 text-white">
              View Street View
            </Button>
          </div>
        </div>

        {/* Audio Player Section */}
        <AudioPlayer audio={site.audio} />

        {/* Main content viewer */}
        <div className="mt-8 md:mt-12 w-full h-64 md:h-96">
          {viewMode === 'model' ? (
            <ARModelViewer model={site.model} />
          ) : (
            <StreetViewViewer streetViewUrl={site.streetViewUrl} />
          )}
        </div>

        {/* Narrative Sections */}
        <div className="mt-8 md:mt-16 bg-white bg-opacity-80 p-4 md:p-8 rounded-lg">
          {site.history?.map((section, index) => (
            <ContentSection key={index} data={section} imageOnLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SitePage;
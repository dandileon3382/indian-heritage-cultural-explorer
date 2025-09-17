// src/components/home/IntroSection.jsx

import React from 'react';

const IntroSection = () => {
  return (
    <div className="text-center my-8 max-w-2xl mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold" style={{ color: 'var(--navy-blue)' }}>
        Explore India's Rich Heritage in a New Way
      </h2>
      <p className="mt-4 text-gray-700 font-medium">
        Experience virtual tours of India's iconic cultural heritage sites. Our platform brings history to life with 3D models, historical narratives, and immersive AR experiences. Click a pin on the map to begin your journey!
      </p>
    </div>
  );
};

export default IntroSection;
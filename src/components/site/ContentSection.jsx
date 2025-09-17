// src/components/site/ContentSection.jsx

import React from 'react';

const ContentSection = ({ data, imageOnLeft = true }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center my-12 ${!imageOnLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <img src={data.image.src} alt={data.image.alt} className="rounded-lg shadow-lg w-full" />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold" style={{ color: 'var(--navy-blue)' }}>
          {data.title}
        </h2>
        <p className="mt-4 text-lg font-medium text-gray-800">{data.text}</p>
      </div>
    </div>
  );
};

export default ContentSection;
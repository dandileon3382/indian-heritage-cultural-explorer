import React from 'react';

const AshokaChakra = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center opacity-10 z-0">
      <svg
        className="w-[50vh] h-[50vh] animate-spin-slow text-navy-blue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="5"
            transform={`rotate(${i * 15}, 50, 50)`}
            stroke="currentColor"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
};

export default AshokaChakra;
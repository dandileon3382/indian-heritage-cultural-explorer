// src/components/home/InteractiveMap.jsx

import React, { useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';
import MapPopup from './MapPopup';
import SingleSitePopup from './SingleSitePopup';
import { sites } from '../../data/sites';

const geoUrl = "/assets/india.json";

const InteractiveMap = () => {
  const navigate = useNavigate();
  const [popupData, setPopupData] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const popupTimeoutRef = useRef(null);

  const handleMarkerEnter = (site) => (event) => {
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }
    
    const rect = event.currentTarget.getBoundingClientRect();
    const locationSites = sites.filter(s => s.location === site.location);
    setPopupData(locationSites);
    setPopupPos({ x: rect.left + rect.width / 2, y: rect.top });
  };

  const handleMarkerLeave = () => {
    popupTimeoutRef.current = setTimeout(() => {
      setPopupData(null);
    }, 200);
  };
  
  const handlePopupEnter = () => {
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }
  };
  
  const handlePopupLeave = () => {
    setPopupData(null);
  };

  const handleMarkerClick = (site) => (event) => {
    event.stopPropagation();
    const locationSites = sites.filter(s => s.location === site.location);
    if (locationSites.length === 1) {
      navigate(`/sites/${site.id}`);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setPopupData(locationSites);
      setPopupPos({ x: rect.left + rect.width / 2, y: rect.top });
    }
  };

  const uniqueLocations = sites.filter((site, index, self) => 
    index === self.findIndex(s => s.location === site.location)
  );

  return (
    <div className="relative w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 900,
          center: [78.9629, 22.5937]
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl} fill="rgba(255, 255, 255, 0.8)">
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="stroke-gray-500 stroke-1 cursor-pointer"
                style={{
                  default: {
                    fill: "rgba(255, 255, 255, 0.4)",
                  },
                  hover: {
                    fill: "var(--saffron)",
                    filter: "drop-shadow(0 0 10px var(--saffron))",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {uniqueLocations.map((site) => (
          <Marker
            key={site.id}
            coordinates={site.coordinates}
            onMouseEnter={handleMarkerEnter(site)}
            onMouseLeave={handleMarkerLeave}
            onClick={handleMarkerClick(site)}
          >
            <circle
              r={7} // Reduced marker size for mobile
              className="fill-current text-navy-blue transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer"
            />
          </Marker>
        ))}
      </ComposableMap>
      
      {popupData && (
        <div
          className="fixed z-50 transform -translate-x-1/2 -translate-y-full"
          style={{ top: `${popupPos.y}px`, left: `${popupPos.x}px` }}
          onMouseEnter={handlePopupEnter}
          onMouseLeave={handlePopupLeave}
        >
          {popupData.length > 1 ? (
            <MapPopup sites={popupData} />
          ) : (
            <SingleSitePopup site={popupData[0]} />
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
// src/pages/SiteDetailsPage.jsx

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/common/Header';
import { sites } from '../data/sites';
import SitePage from '../components/site/SitePage';
import Footer from '../components/common/Footer';

function SiteDetailsPage() {
  const { id } = useParams();
  const site = sites.find(s => s.id === id);

  if (!site) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <SitePage site={site} />
      </div>
      {/* Removed the Footer component from here */}
    </div>
  );
}

export default SiteDetailsPage;
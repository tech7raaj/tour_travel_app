'use client';

import Image from 'next/image';
import React from 'react';
import './mostvisit.css';

const locations = [
    {
        id: 1,
        name: "Dubai",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 2,
        name: "Goa",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 3,
        name: "Singapore",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 4,
        name: "Europe",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 5,
        name: "Bali",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    }
];

function MostVisit() {
  return (
    <div className="section-outer section_outer_wrapper">
      <div className="section-inner section_inner_wrapper">
        <div className="section-wrapper">
          <h1 className="section-title">Must-Visit <span className="highlight">Locations</span></h1>
          <p className="section-subtitle">Explore the most exciting and essential destinations that should be on every traveler’s list.</p>

          <div className="location-grid">
            {locations.map((location) => (
              <div key={location.id} className="location-card">
                <Image 
                  src={location.image} 
                  alt={location.name} 
                  className="location-image"
                  height={200} 
                  width={200} 
                />
                <h2 className="location-name">{location.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostVisit;

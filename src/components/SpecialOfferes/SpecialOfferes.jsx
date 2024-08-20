'use client';
import React from 'react';
import './SpecialOfferes.css';

function SpecialOfferes() {
  return (
    <div className="special-offers-container section_outer_wrapper">
      <div className="special-offers-content section_inner_wrapper">
        <h2>Get Special Offers Up to 50% Off</h2>
        <p>Experience The Journey Of A Lifetime</p>
        <button className="special-offers-button">Plan Your Call</button>
      </div>
      <div className="special-offers-images">
        <img 
          src="https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75" 
          alt="Motorbike Adventure" 
          className="image-left"
        />
        <img 
          src="https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75" 
          alt="Beach Paradise" 
          className="image-right"
        />
      </div>
    </div>
  );
}

export default SpecialOfferes;

'use client';
import React from 'react';
import './SeasonalSojurns.css';

const destinations = [
  { name: 'Karela', price: '₹19000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  { name: 'Rajasthan', price: '₹20000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  { name: 'Kashmir', price: '₹12000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  { name: 'Meghalaya', price: '₹18000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  { name: 'Maldives', price: '₹25000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  { name: 'Lisbon', price: '₹20000/-', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' }
];

function SeasonalSojurns() {
  return (
    <div className="seasonal-sojurns-container">
        <div className="seasonal-sojurns-inner">
         <h2>Seasonal <span>Sojurns</span></h2>
         <p>Top August Escapes Perfect Long-Weekend Getaways!</p>
         <div className="cards-container">
      <div className="left-column">
        {destinations.slice(0, 2).map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>Trip Start From {destination.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="center-column">
        <div className="destination-card">
          <img src={destinations[2].image} alt={destinations[2].name} />
          <div className="destination-info">
            <h3>{destinations[2].name}</h3>
            <p>Trip Start From {destinations[2].price}</p>
          </div>
        </div>
      </div>
      <div className="right-column">
        {destinations.slice(3, 6).map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>Trip Start From {destination.price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default SeasonalSojurns;

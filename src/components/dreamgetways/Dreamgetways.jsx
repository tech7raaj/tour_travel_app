'use client';
import React, { useState } from 'react';
import './Dreamgetways.css';

function Dreamgetways() {
  const [activeTab, setActiveTab] = useState('domestic');
  const [currentSlide, setCurrentSlide] = useState(0);

  const domesticData = [
    {
      title: "Epic Ladakh Escapes",
      duration: "3 DAY / 2 NIGHT",
      price: "₹ 1200/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    },
    {
      title: "Kashmir Serenity",
      duration: "3 DAY / 2 NIGHT",
      price: "₹ 1200/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
      discount: "2% off", // Added discount for this card
    },
    {
      title: "Discover India's Magic",
      duration: "3 DAY / 2 NIGHT",
      price: "₹ 1200/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    },
    {
      title: "Vrindavan Retreats",
      duration: "3 DAY / 2 NIGHT",
      price: "₹ 1200/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    }
  ];

  const internationalData = [
    {
      title: "Australia Adventure",
      duration: "5 DAY / 4 NIGHT",
      price: "₹ 3500/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    },
    {
      title: "Paris Getaway",
      duration: "4 DAY / 3 NIGHT",
      price: "₹ 4500/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    },
    {
      title: "Swiss Alps Journey",
      duration: "6 DAY / 5 NIGHT",
      price: "₹ 5000/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    },
    {
      title: "Japan Tour",
      duration: "7 DAY / 6 NIGHT",
      price: "₹ 6000/-",
      imgUrl: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75",
    }
  ];

  const currentData = activeTab === 'domestic' ? domesticData : internationalData;

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % currentData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + currentData.length) % currentData.length);
  };

  return (
    <div className="dreamgetways-container section_outer_wrapper">
        <div className="dreamgetways-inner section_innser_wrapper">
      <h2 className="section-title">Curated Dream <span className="highlight">Getaways</span></h2>
      <p className="section-subtitle">Top August Escapes Perfect Long-Weekend Getaways!</p>

      <div className="dreamgetways-tabs">
        <button
          className={`tab ${activeTab === 'domestic' ? 'active' : ''}`}
          onClick={() => setActiveTab('domestic')}
        >
          DOMESTIC
        </button>
        <button
          className={`tab ${activeTab === 'international' ? 'active' : ''}`}
          onClick={() => setActiveTab('international')}
        >
          INTERNATIONAL
        </button>
      </div>

      <div className="dreamgetways-slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {currentData.map((location, index) => (
            <div key={index} className="card">
              {location.discount && <div className="discount-badge">{location.discount}</div>}
              <img src={location.imgUrl} alt={location.title} />
              <div className="card-details">
                <h3>{location.title}</h3>
                <p>{location.duration}</p>
                <p>{location.price}</p>
                
              </div>
              <button className="explore-btn">EXPLORE NOW</button>
            </div>
            
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button className="prev-btn" onClick={handlePrev}>&#8249;</button>
        <button className="next-btn" onClick={handleNext}>&#8250;</button>
      </div>

      <div className="slider-dots">
        {currentData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Dreamgetways;

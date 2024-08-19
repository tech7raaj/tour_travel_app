'use client';
import React, { useEffect, useState } from 'react';
import './FestivalTours.css';

function FestivalTours() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Ganesh Chaturthi',
      description: 'Celebrate The Joyous Festival Of Lord Ganesha',
      image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
      alt: 'Ganesh Chaturthi',
    },
    {
      title: 'Ladakh Festival',
      description: 'Experience The Cultural Extravaganza Of The Himalayas',
      image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
      alt: 'Ladakh Festival',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="festival-tours-container">
      <div className="festival-tours-inner">
        <h2>Festival Tour Packages Embrace The Spirit Of Festivals</h2>
        <p>Explore A Range Of Travel Themes And Find Your Perfect Holiday Match</p>
        
        <div className="festival-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="festival-slide">
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="festival-image"
              />
              <div className="festival-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button className="festival-button">Plan Your Trip</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="festival-slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FestivalTours;

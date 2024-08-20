'use client';
import React from 'react';
import './ExploreHolidays.css';

const ExploreHolidays = () => {
  const holidays = [
    {
      title: 'Wild Escapes',
      description: 'Indulgent Escapes With Premium Experiences.',
      imageUrl: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
    },
    {
      title: 'Pilgrimage',
      description: 'Indulgent Escapes With Premium Experiences.',
      imageUrl: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
    },
    {
      title: 'Honeymoon',
      description: 'Indulgent Escapes With Premium Experiences.',
      imageUrl: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
    },
    {
      title: 'Adventure',
      description: 'Indulgent Escapes With Premium Experiences.',
      imageUrl: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75',
    },
  ];

  return (
    <div className="explore-holidays-container section_outer_wrapper">
      <div className="explore-holidays-content section_inner_wrapper">
        <div className="explore-holidays-left-section">
          <h2>
            Explore <span className="explore-holidays-highlight">HOLIDAYS</span>
          </h2>
          <p>By Category</p>
          <p>Select Your Dream Vacation Based On Exciting Categories And Ideas</p>
        </div>
        <div className="explore-holidays-right-section">
          <div className="explore-holidays-cards">
            {holidays.map((holiday, index) => (
              <div key={index} className="explore-holidays-card">
                <img src={holiday.imageUrl} alt={holiday.title} className="explore-holidays-card-image" />
                <h3>{holiday.title}</h3>
                <p>{holiday.description}</p>
                <button className="explore-holidays-button">REVEAL MORE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHolidays;

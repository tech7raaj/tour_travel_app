'use client';

import React from 'react';
import Slider from 'react-slick';
import './herosection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage1 from '../../../public/images/heroImage1.avif';
import heroImage2 from '../../../public/images/heroImage2.avif';

function HeroSection() {
  const images = [
    heroImage1.src,
    heroImage2.src
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-container">
      <Slider {...settings} className="hero-background">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div 
              className="slide-image" 
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="content-container">
                <h1 className="hero-title">Himachal Tour Package</h1>
                <p className="hero-subtitle">Where Every Moment Becomes An Adventure!</p>
                <div className="search-container">
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Where Would You Like To Go?" 
                  />
                  <button className="search-button">Uncover</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="category-container">
        <div className="category-item">Adventure</div>
        <div className="category-item">Honeymoon</div>
        <div className="category-item">Cultural</div>
        <div className="category-item">Family</div>
        <div className="category-item">Solo</div>
        <div className="category-item">Pilgrimage</div>
      </div>
    </div>
  );
}

export default HeroSection;

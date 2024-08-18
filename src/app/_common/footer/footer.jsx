'use client';
import './footer.css';
import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';

const Footer = () => {
  const travelDestinations = [
    { name: 'Beaches', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
    { name: 'Bali', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
    { name: 'Prague', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
    { name: 'USA', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
    { name: 'China', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
    { name: 'Paris', image: 'https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-container-inner">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ABOUT PLAN DE TOUR</h3>
            <ul>
              <li>About us</li>
              <li>We Are Hiring</li>
              <li>Support</li>
              <li>Copyright Policies</li>
              <li>Reviews</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOR BRANDS</h3>
            <ul>
              <li>Partner With Us</li>
              <li>Destination Marketing</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOR TRAVEL AGENTS</h3>
            <ul>
              <li>Sign Up As an Agent</li>
              <li>Agent Login</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Travel Destinations</h3>
            <div className="destination-cards">
              {travelDestinations.map((destination, index) => (
                <div key={index} className="destination-card">
                  <img src={destination.image} alt={destination.name} />
                  <span>{destination.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <Image src={logo} width={200} height={100} alt="TripNavigate Logo" />
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>© 2024 TRIP NAVI GATE HOLIDAY PLANNER ALL RIGHTS RESERVED.</p>
        <p>
          All content and images featured on this website are protected by copyright, and the rights belong to their respective owners. The inclusion of this content and these images on the site is solely for promotional purposes, and it does not imply any endorsement of the artist or their work.
        </p>
        <p>
          Any unauthorized use of this content is strictly prohibited and may be subject to legal penalties.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

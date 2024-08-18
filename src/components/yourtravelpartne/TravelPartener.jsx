'use client';
import React from 'react';
import './TravelPartner.css';

const refunds = [
    {
      title: "Full Refund* Due To Medical Reasons",
      points: [
        { icon: "✦", heading: "Presenting You An Extraordinary Offer In These Unfavorable Circumstances." },
        { icon: "✦", heading: "Get A Full Refund On A Domestic Ticket In Case You Cancel It Due To Medical Sickness." },
        { icon: "✦", heading: "The Best Part - There Are ZERO Extra Charges For This Service." }
      ],
      image: "/path/to/refund-image.png", // Replace with actual image path
    }
  ];
  
  const deals = [
    {
      title: "Enjoy Exclusive Deals",
      points: [
        { icon: "", heading: "Book With Malaysia Airlines For Exclusive Perks And An Unforgettable Vacation!" }
      ],
      image: "/path/to/airplane-image.png", // Replace with actual image path
    }
  ];
  

function TravelPartner() {
  return (
    <div className="travel-partner-container">
      <h2 className="travel-partner-title">Your Perfect <span>Travel</span> Partner</h2>
      <div className="travel-partner-content">
        <div className="section refunds-section">
          <div className="section-content">
            <h3 className="section-title">{refunds[0].title}</h3>
            <ul className="section-points">
              {refunds[0].points.map((point, index) => (
                <li key={index}>
                  <span className="icon">{point.icon}</span>
                  <span>{point.heading}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-image">
            <img src={refunds[0].image} alt="Refund Info" />
          </div>
        </div>
        <div className="section deals-section">
          <div className="section-content">
            <h3 className="section-title">{deals[0].title}</h3>
            <ul className="section-points">
              {deals[0].points.map((point, index) => (
                <li key={index}>
                  <span>{point.heading}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-image">
            <img src={deals[0].image} alt="Exclusive Deals" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPartner;

import React from 'react';
import Image from 'next/image';
import '../header.css';

function Header() {
  return (
    <nav className="main-navbar">
      <div className="main-navbar-container">
        <div className="nav-item">
          <Image src="/path/to/flight-icon.png" alt="Flight" width={24} height={24} />
          <span>Flights</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/hotel-icon.png" alt="Hotels" width={24} height={24} />
          <span>Hotels</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/train-icon.png" alt="Trains" width={24} height={24} />
          <span>Trains</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/bus-icon.png" alt="Bus" width={24} height={24} />
          <span>Bus</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/holidays-icon.png" alt="Holidays" width={24} height={24} />
          <span>Holidays</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/cabs-icon.png" alt="Cabs" width={24} height={24} />
          <span>Cabs</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/activities-icon.png" alt="Activities" width={24} height={24} />
          <span>Activities</span>
        </div>
        <div className="nav-item">
          <Image src="/path/to/visa-icon.png" alt="Visa" width={24} height={24} />
          <span>Visa</span>
        </div>
        <div className="nav-item more">
          <span>More</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;

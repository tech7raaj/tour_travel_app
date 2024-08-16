import React from 'react';
import '../header.css';
import Image from 'next/image';

function TopBar() {
  return (
    <>
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image src="/path/to/logo.png" alt="Trip Navigate Logo" width={200} height={100}/>
          <span className="logo-text">tripnavigate</span>
        </div>
        <div className="navbar-right">
          <div className="support-icon">
            <Image src="/path/to/support-icon.png" alt="Support" width={80} height={80}/>
          </div>
          <div className="language-dropdown">
            <Image src="/path/to/flag-icon.png" alt="Language"  width={80} height={80}/>
            <select>
              <option value="EN">EN</option>
              <option value="IN">IN</option>
            </select>
          </div>
          <button className="login-button">LETS LOGIN</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default TopBar

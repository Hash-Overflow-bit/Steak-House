import React from 'react';
import '../styles/ReservationFAB.css';
import Logo from '../assets/images/logo-removebg-preview.png';

const ReservationFAB = ({ onClick }) => {
  return (
    <div className="res-fab-container" onClick={onClick}>
      <div className="res-fab-circle">
        <div className="res-fab-icon-inner">
          <img src={Logo} alt="Steak Studio Logo" className="res-fab-logo" />
        </div>
        
        {/* Rotating Circular Text Container */}
        <svg className="res-fab-text-svg" viewBox="0 0 100 100">
          <defs>
            <path
              id="fabCirclePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text>
            <textPath href="#fabCirclePath" startOffset="0%">
              MAKE RESERVATION • MAKE RESERVATION •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ReservationFAB;

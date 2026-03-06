import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, Bell } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ onReservationOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleReservationClick = () => {
    closeMenu();
    onReservationOpen();
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Left Side: Hamburger Pill */}
        <div className="nav-left">
          <button className="pill-menu-btn" onClick={toggleMenu}>
            <span>MENU</span>
            {isOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
          
          {/* Optional: Language Selector mentioned in Nusr-Et requirements */}
          {/* <button className="lang-selector">EN</button> */}
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <NavLink to="/" className="logo-img" onClick={closeMenu}>
            <img src="src/assets/images/logo-removebg-preview.png" alt=""  />
          </NavLink>
        </div>

        {/* Right Side: Reservation Button */}
        <div className="nav-right">
          <button className="pill-res-btn" onClick={handleReservationClick}>
            <span>RESERVATION</span>
            <Bell size={16} className="gold-text" />
          </button>
        </div>

        {/* Overlay Navigation Links (Full Screen when menu is open) */}
        <div className={`nav-overlay ${isOpen ? 'show' : ''}`}>
          <button className="close-btn" onClick={closeMenu}><X size={40} /></button>
          <div className="overlay-links">
            <NavLink to="/" className="overlay-link" onClick={closeMenu}>HOME</NavLink>
            <NavLink to="/menu" className="overlay-link" onClick={closeMenu}>MENU</NavLink>
            <NavLink to="/about" className="overlay-link" onClick={closeMenu}>ABOUT US</NavLink>
            <NavLink to="/reservation" className="overlay-link" onClick={closeMenu}>RESERVATIONS</NavLink>
            <NavLink to="/contact" className="overlay-link" onClick={closeMenu}>CONTACT</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';
import Logo from '../assets/images/logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <NavLink to="/" className="footer-logo">
            <img src={Logo} alt="Steak Studio Logo" />
          </NavLink>
          <h4 className="footer-title">STEAK STUDIO</h4>
          <p className="footer-desc">The ultimate destination for steak lovers. Experience the finest cuts prepared by master chefs in a luxury atmosphere.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">CONTACT</h4>
          <ul className="footer-list">
            <li>
              <MapPin size={16} className="gold-text" /> 
              <span>123 Luxury Ave, Food City</span>
            </li>
            <li>
              <Phone size={16} className="gold-text" /> 
              <span>+92 300 1234567</span>
            </li>
            <li>
              <Mail size={16} className="gold-text" /> 
              <span>info@steakstudio.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">OPENING HOURS</h4>
          <ul className="footer-list">
            <li>Monday - Thursday: 12:00 PM - 11:00 PM</li>
            <li>Friday - Saturday: 12:00 PM - 12:00 AM</li>
            <li>Sunday: 1:00 PM - 10:00 PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">NEWSLETTER</h4>
          <p className="footer-desc">Join the elite list for exclusive offers and events.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="YOUR EMAIL" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 STEAK STUDIO. ESTABLISHED SINCE 2010. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

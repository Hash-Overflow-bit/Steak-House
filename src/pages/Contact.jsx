import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import MapBg from '../assets/images/map_bg.png';
import '../styles/Contact.css';

const Contact = ({ onReservationOpen }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="contact-page page-container">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="gold-text subtitle">GET IN TOUCH</span>
        <h1 className="section-title">CONTACT <span className="gold-text">& INFO</span></h1>
      </motion.div>

      <div className="contact-grid">
        {/* Contact Info */}
        <motion.div className="contact-info-cards" {...fadeIn}>
          <div className="luxury-card info-card">
            <MapPin className="gold-text" size={32} />
            <h3>LOCATION</h3>
            <p>123 Luxury Ave, Food City, PK</p>
            <a href="https://maps.google.com" target="_blank" className="gold-text small-link">GET DIRECTIONS</a>
          </div>

          <div className="luxury-card info-card">
            <Phone className="gold-text" size={32} />
            <h3>RESERVATIONS</h3>
            <p>+92 300 1234567</p>
            <p>+92 321 7654321</p>
          </div>

          <div className="luxury-card info-card">
            <Mail className="gold-text" size={32} />
            <h3>ENQUIRIES</h3>
            <p>info@steakstudio.com</p>
            <p>events@steakstudio.com</p>
          </div>

          <div className="luxury-card info-card">
            <Clock className="gold-text" size={32} />
            <h3>HOURS</h3>
            <p>MON - THU: 12:00 - 23:00</p>
            <p>FRI - SUN: 12:00 - 00:00</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="contact-form-wrapper" {...fadeIn} transition={{ delay: 0.2 }}>
          <form className="nusr-et-style contact-form-premium">
            <h2 className="res-main-title">SEND A <br /> MESSAGE</h2>
            
            <div className="form-grid">
              <div className="res-field-group">
                <label className="res-field-label">YOUR NAME</label>
                <div className="res-dropdown-pill">
                  <input type="text" placeholder="ENTER FULL NAME" className="res-pill-input" required />
                </div>
              </div>

              <div className="res-field-group">
                <label className="res-field-label">YOUR EMAIL</label>
                <div className="res-dropdown-pill">
                  <input type="email" placeholder="ENTER EMAIL ADDRESS" className="res-pill-input" required />
                </div>
              </div>

              <div className="res-field-group full-width">
                <label className="res-field-label">SUBJECT</label>
                <div className="res-dropdown-pill subject-pill">
                  <input type="text" placeholder="WHAT IS THIS ABOUT?" className="res-pill-input" />
                </div>
              </div>

              <div className="res-field-group full-width">
                <label className="res-field-label">YOUR MESSAGE</label>
                <div className="res-dropdown-pill textarea-pill">
                  <textarea placeholder="WRITE YOUR MESSAGE HERE..." rows="5" className="res-pill-input"></textarea>
                </div>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="make-res-btn" style={{ width: '100%', marginTop: '20px' }}>
                  SEND MESSAGE <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.section 
        className="map-section" 
        {...fadeIn}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MapBg})` }}
      >
        <div className="map-overlay">
          <h2 className="luxury-heading">FIND <span className="gold-text">US</span></h2>
          <p>Valet parking available for all guests.</p>
          <button className="btn btn-outline">OPEN IN GOOGLE MAPS</button>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

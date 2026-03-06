import React from 'react';
import { motion } from 'framer-motion';
import ChefImg from '../assets/images/chef.png';
import SteakHero from '../assets/images/steakhouse_hero_bg.png';
import '../styles/About.css';

const About = ({ onReservationOpen }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="about-page">
      {/* Story Section */}
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${SteakHero})` }}>
        <motion.div className="about-hero-content" {...fadeIn}>
          <span className="gold-text subtitle">ESTABLISHED 2010</span>
          <h1 className="section-title">OUR <span className="gold-text">STORY</span></h1>
        </motion.div>
      </section>

      <div className="page-container" style={{ paddingBottom: '0' }}>
        <section className="story-content">
          <motion.div className="story-text" {...fadeIn}>
            <h2 className="luxury-heading">The Art of <span className="gold-text">Perfection</span></h2>
            <p>Founded on a passion for the finest cuts and an obsession with culinary craftsmanship, Steak Studio has defined luxury dining for over a decade. Our journey began with a simple mission: to source the most exceptional beef on the planet and prepare it with unyielding precision.</p>
            <p>Every steak that leaves our kitchen is a testament to our commitment to excellence. From our 45-day dry-aging process to the master artisans who flame-grill each cut to order, we ensure that every bite is an unforgettable experience.</p>
          </motion.div>
          <motion.div className="story-stats" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="stat-item">
              <span className="stat-num gold-text">15+</span>
              <span className="stat-label">YEARS OF EXCELLENCE</span>
            </div>
            <div className="stat-item">
              <span className="stat-num gold-text">20k+</span>
              <span className="stat-label">HAPPY GUESTS</span>
            </div>
            <div className="stat-item">
              <span className="stat-num gold-text">5</span>
              <span className="stat-label">WORLD CLASS AWARDS</span>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Chef Profile */}
      <section className="chef-section">
        <div className="page-container grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '4rem' }}>
          <motion.div className="chef-img-wrapper" {...fadeIn}>
            <img src={ChefImg} alt="Executive Chef" className="chef-img" />
          </motion.div>
          <motion.div className="chef-info" {...fadeIn} transition={{ delay: 0.2 }}>
            <span className="gold-text subtitle">MASTER ARTISAN</span>
            <h2 className="luxury-heading">CHEF <span className="gold-text">MARCUS GOLD</span></h2>
            <p className="chef-bio">With over two decades of experience in Michelin-starred kitchens across Europe and Asia, Chef Marcus brings a global perspective to traditional steak studio fare. His philosophy is simple: let the quality of the ingredient speak for itself, enhanced only by fire and salt.</p>
            <div className="chef-signature">
              <p className="signature-text">Marcus Gold</p>
              <span className="stat-label">EXECUTIVE CHEF</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="values-banner">
        <motion.div className="value-banner-item" {...fadeIn}>
          <h3>Sourced Responsibly</h3>
          <p>We partner only with sustainable ranches that prioritize animal welfare and environmental health.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

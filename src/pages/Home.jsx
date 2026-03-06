import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown, Instagram } from 'lucide-react';
import SteakHero from '../assets/images/steakhouse_hero_bg.png'; // Need to check if I can use the generated names directly
import WagyuSteak from '../assets/images/wagyu_steak_premium.png';
import TomahawkSteak from '../assets/images/tomahawk_steak_luxury.png';
import Cocktails from '../assets/images/steakhouse_cocktails.png';
import Moment1 from '../assets/images/moment1.webp';
import Moment2 from '../assets/images/moment2.webp';
import Moment3 from '../assets/images/moment3.webp';
import '../styles/Home.css';

const Home = ({ onReservationOpen }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const signatureSteaks = [
    {
      title: "Wagyu A5 Striploin",
      description: "The ultimate luxury. Marble score 12+, melt-in-your-mouth texture.",
      price: "$145",
      image: WagyuSteak,
      category: "JAPANESE"
    },
    {
      title: "Dry-Aged Tomahawk",
      description: "45-day aged on the bone. Served with roasted marrow.",
      price: "$110",
      image: TomahawkSteak,
      category: "SIGNATURE"
    },
    {
      title: "Gold-Leaf Fillet",
      description: "Our signature fillet wrapped in 24k edible gold leaf.",
      price: "$180",
      image: Cocktails, // Using cocktails as placeholder for now if I don't have enough images
      category: "EXCLUSIVE"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${SteakHero})` }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="hero-title serif-italic">Discover Our <span className="gold-text">Experience</span></h1>
        </motion.div>
        <div className="scroll-indicator">
          <ArrowDown size={20} className="gold-text" />
        </div>
      </section>

      {/* Signature Section */}
      <section className="signature-section">
        <div className="signature-container">
          <motion.h2 className="section-title" {...fadeIn}>SIGNATURE <span className="gold-text">CUTS</span></motion.h2>
          
          <div className="grid-layout">
            {signatureSteaks.map((steak, index) => (
              <motion.div 
                key={index} 
                className="menu-card-sophie"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.2 }}
              >
                <img src={steak.image} alt={steak.title} className="menu-card-img" />
                <div className="menu-card-category">{steak.category}</div>
                
                <div className="menu-card-overlay">
                  <div className="menu-card-content">
                    <h3 className="menu-card-title">
                      {steak.title}
                    </h3>
                    <p className="menu-card-desc">{steak.description}</p>
                    
                    <div className="menu-card-footer">
                      <div className="footer-stats">
                        <span className="price-tag gold-text">{steak.price}</span>
                        <span className="stats-tag">BEST SELLER</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Section - Nusr-Et Style */}
      <section className="moments-section">
        <motion.div className="moments-header" {...fadeIn}>
          <span className="gold-text subtitle">#STEAKSTUDIOMOMENTS</span>
          <h2 className="section-title">ELITE <span className="gold-text">MOMENTS</span></h2>
        </motion.div>
        
        <div className="moments-grid">
          {[Moment1, Moment2, Moment3, Cocktails].map((img, index) => (
            <motion.div 
              key={index} 
              className="moment-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img src={img} alt={`Moment ${index + 1}`} className="moment-img" />
              <div className="moment-hover">
                <Instagram size={30} color="#FFF" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Bento Design */}
      <section className="testimonials-section-bento">
        <div className="bento-grid-outer">
          <motion.h2 
            className="section-title bento-section-title" 
            {...fadeIn}
          >
            VOICES OF <span className="gold-text">DISTINCTION</span>
          </motion.h2>

          <div className="bento-grid-container">
            {/* Left Large Card */}
            <div className="bento-card-large">
              <div className="card-top">
                <h1 className="stat-headline">45</h1>
                <p className="stat-sub">Days of Bone-In Dry Aging</p>
                <div className="quote-icon-gold">"</div>
                <p className="testimonial-paragraph">
                  "The depth of flavor in their signature Ribeye is simply unparalleled. You can taste the 45 days of patient aging in every single bite. It's not just a meal; it's an education in meat craftsmanship. The service is invisible yet omnipresent—the hallmark of true luxury dining."
                </p>
              </div>
              <div className="card-bottom">
                <div className="guest-info-row">
                  <img src={Moment1} alt="Guest" className="guest-avatar" />
                  <div className="guest-meta">
                    <h4 className="guest-name-bento">Marcus Sterling</h4>
                    <p className="guest-role">Executive Chef & Critic</p>
                  </div>
                  <div className="brand-logo">★</div>
                </div>
              </div>
            </div>

            <div className="bento-right-stack">
              {/* Top Horizontal Card */}
              <div className="bento-card-wide">
                <div className="card-wide-content">
                  <h2 className="stat-headline-sm">A5 <span className="stat-sub-inline">Highest Grade Japanese Wagyu</span></h2>
                  <div className="quote-icon-gold">"</div>
                  <p className="testimonial-quote-sm">
                    "Watching the chef carve the A5 Wagyu table-side was the highlight of our evening. The marbling was like art, and it literally melted the moment it touched the palate. It's the new gold standard for steak studios in the city."
                  </p>
                  <div className="guest-info-row">
                    <img src={Moment2} alt="Guest" className="guest-avatar" />
                    <div className="guest-meta">
                      <h4 className="guest-name-bento">Helena Rossi</h4>
                      <p className="guest-role">Lifestyle Editor, Elite Traveler</p>
                    </div>
                    <div className="brand-logo">G</div>
                  </div>
                </div>
              </div>

              <div className="bento-bottom-row">
                {/* Small Light Card */}
                <div className="bento-card-small light-glass">
                  <div className="quote-icon-gold">"</div>
                  <p className="testimonial-text-tiny">
                    "The atmosphere has an 'energy' I haven't found elsewhere. The dim amber lighting and curated playlist make it the ultimate destination for a sophisticated night out."
                  </p>
                  <div className="guest-info-row">
                    <img src={Moment3} alt="Guest" className="guest-avatar-sm" />
                    <div className="guest-meta">
                      <h4 className="guest-name-bento-sm">David Chen</h4>
                      <p className="guest-role-sm">Guest from New Jersey</p>
                    </div>
                  </div>
                </div>

                {/* Small Dark Card */}
                <div className="bento-card-small dark-gold">
                  <div className="quote-icon-gold">"</div>
                  <p className="testimonial-text-tiny">
                    "Every side dish, from the truffle mash to the honey-glazed carrots, was considered as much as the steaks. The wine pairing recommended by the sommelier was flawless."
                  </p>
                  <div className="guest-info-row">
                    <img src={Moment1} alt="Guest" className="guest-avatar-sm" />
                    <div className="guest-meta">
                      <h4 className="guest-name-bento-sm">Sophia Martinez</h4>
                      <p className="guest-role-sm">Food & Wine Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-footer">
            <div className="footer-stats-left">
              <span className="client-count">1,240 Five-Star Google Reviews</span>
              <div className="rating-mini">
                <span className="stars-mini gold-text">★★★★★</span>
                <span className="rating-val">4.9/5 Based on recent dinner visits</span>
              </div>
            </div>
            <button className="view-all-btn">
              View all reviews <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="promo-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${SteakHero})` }}>
        <motion.div className="promo-content" {...fadeIn}>
          <h2 className="promo-title">GOLDEN <span className="gold-text">HAPPY HOUR</span></h2>
          <p>Complimentary signature cocktails with every Wagyu selection.</p>
          <p className="promo-time">WEEKDAYS | 5PM - 7PM</p>
          <button className="btn btn-primary" onClick={onReservationOpen}>BOOK NOW</button>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-grid">
          <motion.div className="value-item" {...fadeIn}>
            <h3 className="gold-text">FINEST CUTS</h3>
            <p>Sourced from the world's most prestigious ranches.</p>
          </motion.div>
          <motion.div className="value-item" {...fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="gold-text">MASTER CHEFS</h3>
            <p>Our artisans treat every steak as a masterpiece.</p>
          </motion.div>
          <motion.div className="value-item" {...fadeIn} transition={{ delay: 0.4 }}>
            <h3 className="gold-text">ELITE AMBIANCE</h3>
            <p>Design that inspires a sophisticated night out.</p>
          </motion.div>
        </div>
      </section>
      {/* Reservation CTA */}
      <section className="menu-cta">
        <h2 className="luxury-heading">READY TO <span className="gold-text">DINE?</span></h2>
        <p>Secure your table at Steak Studio today.</p>
        <button className="btn btn-primary" onClick={onReservationOpen}>MAKE A RESERVATION</button>
      </section>
    </div>
  );
};

export default Home;

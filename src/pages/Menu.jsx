import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WagyuSteak from '../assets/images/wagyu_steak_premium.png';
import TomahawkSteak from '../assets/images/tomahawk_steak_luxury.png';
import Cocktails from '../assets/images/steakhouse_cocktails.png';
import '../styles/Menu.css';

const menuData = [
  // STARTERS
  { id: 1, category: "STARTERS", title: "Truffle Arancini", description: "Crispy risotto balls with black truffle and mozzarella.", price: "$18", tags: ["VEGETARIAN"], image: WagyuSteak },
  { id: 2, category: "STARTERS", title: "Wagyu Carpaccio", description: "Thinly sliced raw Wagyu beef with capers and parmesan.", price: "$24", tags: ["LUXURY"], image: TomahawkSteak },
  
  // SOUP
  { id: 3, category: "SOUP", title: "Lobster Bisque", description: "Rich and creamy lobster soup with a hint of brandy.", price: "$16", tags: ["SEAFOOD"], image: Cocktails },
  { id: 4, category: "SOUP", title: "Wild Mushroom Soup", description: "Earthy forest mushrooms with a touch of truffle cream.", price: "$14", tags: ["VEGETARIAN"], image: WagyuSteak },

  // PIZZA
  { id: 5, category: "PIZZA", title: "Margherita Gold", description: "Buffalo mozzarella, basil, and 24k edible gold flakes.", price: "$35", tags: ["SIGNATURE"], image: TomahawkSteak },
  
  // SALAD
  { id: 6, category: "SALAD", title: "Burrata & Heirloom Tomato", description: "Creamy burrata with aged balsamic and fresh basil.", price: "$20", tags: ["FRESH"], image: WagyuSteak },

  // CONTINENTAL
  { id: 7, category: "CONTINENTAL", title: "Pan-Seared Sea Bass", description: "Fresh sea bass with lemon butter sauce and asparagus.", price: "$45", tags: ["SEAFOOD"], image: TomahawkSteak },

  // PAKISTANI
  { id: 8, category: "PAKISTANI", title: "Mutton Karahi", description: "Traditional slow-cooked mutton in a spice-infused tomato gravy.", price: "$32", tags: ["SPICY"], image: WagyuSteak },

  // STEAK
  { id: 9, category: "STEAK", title: "Ribeye A5", description: "Certified Japanese Wagyu with perfect marbling.", price: "$120", tags: ["ELITE"], image: TomahawkSteak },

  // CHINESE
  { id: 10, category: "CHINESE", title: "Kung Pao Chicken", description: "Classic spicy stir-fry with peanuts and chili peppers.", price: "$28", tags: ["CULTURAL"], image: WagyuSteak },

  // BBQ
  { id: 11, category: "BBQ", title: "Smoked Beef Ribs", description: "12-hour slow-smoked ribs with signature gold BBQ glaze.", price: "$55", tags: ["SMOKED"], image: TomahawkSteak },

  // FAST FOOD
  { id: 12, category: "FAST FOOD", title: "The Royal Burger", description: "Double wagyu patty, truffle aioli, and gold-dusted bun.", price: "$30", tags: ["LUXURY-FAST"], image: WagyuSteak },

  // KIDS MENU
  { id: 13, category: "KIDS MENU", title: "Mini Slider Trio", description: "Three small beef sliders served with gold-dusted fries.", price: "$15", tags: ["KIDS"], image: TomahawkSteak },

  // BAR SECTION
  { id: 14, category: "BAR SECTION", title: "Midnight Martini", description: "Premium vodka with a hint of dry vermouth and gold leaf.", price: "$25", tags: ["ALCOHOL"], image: Cocktails },

  // BAKERY SECTION
  { id: 15, category: "BAKERY SECTION", title: "Gold Dark Chocolate Tart", description: "70% cocoa dark chocolate with a gold-leaf crust.", price: "$18", tags: ["DESSERT"], image: WagyuSteak }
];

const categories = [
  "ALL", "STARTERS", "SOUP", "PIZZA", "SALAD", 
  "CONTINENTAL", "PAKISTANI", "STEAK", "CHINESE", 
  "BBQ", "FAST FOOD", "KIDS MENU", "BAR SECTION", "BAKERY SECTION"
];

const Menu = ({ onReservationOpen }) => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = activeCategory === "ALL" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <motion.div 
        className="menu-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="gold-text subtitle">CHEF'S CURATED SELECTIONS</span>
        <h1 className="section-title text-center">OUR <span className="gold-text">MENU</span></h1>
      </motion.div>

      {/* Category Filters - Horizontal Scrollable on Mobile */}
      <div className="filter-wrapper">
        <div className="menu-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="menu-container">
        <div className="menu-grid">
          <AnimatePresence mode='wait'>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="menu-card-sophie"
              >
                <img src={item.image} alt={item.title} className="menu-card-img" />
                <div className="menu-card-category">{item.category}</div>
                
                {/* Glassmorphism Content Area */}
                <div className="menu-card-overlay">
                  <div className="menu-card-content">
                    <h3 className="menu-card-title">
                      {item.title} 
                    </h3>
                    <p className="menu-card-desc">{item.description}</p>
                    
                    {/* Bottom Utility Bar */}
                    <div className="menu-card-footer">
                      <div className="footer-stats">
                        <span className="price-tag gold-text">{item.price}</span>
                        {item.tags.slice(0, 1).map(tag => (
                          <span key={tag} className="stats-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Menu;

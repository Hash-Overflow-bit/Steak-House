import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "+923001234567"; // Replace with your actual number
  const message = "Hello, I would like to make a reservation at Steak Studio.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: 2000,
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.3s ease'
      }}
      aria-label="Chat on WhatsApp"
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default WhatsAppButton;

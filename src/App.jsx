import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationFAB from './components/ReservationFAB';
import ReservationOverlay from './components/ReservationOverlay';
import './App.css';

function App() {
  const [isResOpen, setIsResOpen] = useState(false);

  const openRes = () => setIsResOpen(true);
  const closeRes = () => setIsResOpen(false);

  return (
    <Router>
      <div className="app-shell">
        <Navbar onReservationOpen={openRes} />
        <main>
          <Routes>
            <Route path="/" element={<Home onReservationOpen={openRes} />} />
            <Route path="/menu" element={<Menu onReservationOpen={openRes} />} />
            <Route path="/about" element={<About onReservationOpen={openRes} />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact onReservationOpen={openRes} />} />
          </Routes>
        </main>
        <Footer />
        <ReservationFAB onClick={openRes} />
        <ReservationOverlay isOpen={isResOpen} onClose={closeRes} />
      </div>
    </Router>
  );
}

export default App;

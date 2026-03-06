import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, CheckCircle, Clock } from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  eachDayOfInterval,
  setMonth,
  setYear,
  getYear
} from 'date-fns';
import '../styles/ReservationOverlay.css';

const ReservationOverlay = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    guests: '2',
    time: '19:00'
  });

  if (!isOpen) return null;

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setIsMonthPickerOpen(false);
    setIsYearPickerOpen(false);
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setIsMonthPickerOpen(false);
    setIsYearPickerOpen(false);
  };

  const handleMonthSelect = (mIndex) => {
    setCurrentMonth(setMonth(currentMonth, mIndex));
    setIsMonthPickerOpen(false);
  };

  const handleYearSelect = (year) => {
    setCurrentMonth(setYear(currentMonth, year));
    setIsYearPickerOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      setStep(1);
      onClose();
    }, 3000);
  };

  // Calendar Logic
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const currentYear = getYear(new Date());
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

  return (
    <div className={`res-overlay-wrapper ${isOpen ? 'show' : ''}`}>
      <div className="res-overlay-backdrop" onClick={onClose} />
      
      <div className="res-overlay-content nusr-et-style">
        <button className="res-close-btn" onClick={onClose}>
          <X size={28} />
        </button>

        {step === 1 ? (
          <div className="res-split-layout">
            {/* Left Section: Comprehensive Real Calendar */}
            <div className="res-left-col">
              <div className="calendar-card">
                <div className="calendar-header">
                  <ChevronLeft size={20} className="cal-nav" onClick={prevMonth} />
                  
                  <div className="current-view-container">
                    <div className="view-selector-wrap">
                      <div className="current-view" onClick={() => { setIsMonthPickerOpen(!isMonthPickerOpen); setIsYearPickerOpen(false); }}>
                        <span>{format(currentMonth, 'MMM')}</span> <ChevronDown size={14} />
                      </div>
                      {isMonthPickerOpen && (
                        <div className="calendar-dropdown">
                          {months.map((m, i) => (
                            <div key={m} className="dropdown-item" onClick={() => handleMonthSelect(i)}>{m}</div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="view-selector-wrap">
                      <div className="current-view" onClick={() => { setIsYearPickerOpen(!isYearPickerOpen); setIsMonthPickerOpen(false); }}>
                        <span>{format(currentMonth, 'yyyy')}</span> <ChevronDown size={14} />
                      </div>
                      {isYearPickerOpen && (
                        <div className="calendar-dropdown scrollable-dropdown">
                          {years.map(y => (
                            <div key={y} className="dropdown-item" onClick={() => handleYearSelect(y)}>{y}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <ChevronRight size={20} className="cal-nav" onClick={nextMonth} />
                </div>

                <div className="calendar-weekdays">
                  {weekDays.map(day => <span key={day}>{day}</span>)}
                </div>

                <div className="calendar-grid">
                  {calendarDays.map((day, idx) => (
                    <span 
                      key={idx} 
                      className={`day ${!isSameMonth(day, monthStart) ? 'day-dimmed' : ''} ${isSameDay(day, selectedDate) ? 'selected' : ''}`}
                      onClick={() => handleDateClick(day)}
                    >
                      {format(day, 'd')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="res-dropdown-pill">
                <input 
                  type="time" 
                  name="time" 
                  className="res-pill-select" 
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
                <Clock size={18} />
              </div>
            </div>

            {/* Right Section: Form */}
            <div className="res-right-col">
              <h1 className="res-main-title">RESERVE YOUR <br /> PLACE</h1>

              <div className="res-field-group">
                <label className="res-field-label">NUMBER OF GUESTS</label>
                <div className="res-dropdown-pill">
                  <input 
                    type="number" 
                    name="guests"
                    min="1"
                    className="res-pill-input"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>
              </div>

              <button className="make-res-btn" onClick={handleSubmit}>
                MAKE A RESERVATION
              </button>
            </div>
          </div>
        ) : (
          <div className="res-success-container">
            <CheckCircle size={80} className="gold-text success-icon" />
            <h2 className="luxury-heading">RESERVATION <span className="gold-text">REQUESTED</span></h2>
            <p className="success-msg">Thank you. Your request for {format(selectedDate, 'MMMM d, yyyy')} has been received.</p>
            <div className="success-divider" />
            <p className="success-status">A representative will confirm your table shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationOverlay;

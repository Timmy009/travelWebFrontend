import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style/travelOptions.css';





const TravelOptions = () => {
  const [tripType, setTripType] = useState('oneway');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [travelers, setTravelers] = useState(1);

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleSaveOptions = () => {
    // Handle saving options (you can store them in state or send to a server)
    console.log('Options saved:', {
      tripType,
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      travelers,
    });
  };

  return (
    <div className="travel-options-container">
      <div className="trip-type-selector">
        <button
          className={`trip-type-button ${tripType === 'oneway' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('oneway')}
        >
          One Way
        </button>
        <button
          className={`trip-type-button ${tripType === 'roundtrip' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('roundtrip')}
        >
          Round Trip
        </button>
        <button
          className={`trip-type-button ${tripType === 'multicity' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('multicity')}
        >
          Multi City
        </button>
      </div>

      <div className="location-date-travelers">
        <div className="location-inputs">
          <input
            type="text"
            placeholder="From"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
          />
        </div>

        <div className="date-inputs">
          <div className="date-input">
            <span>Depart</span>
            <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
          </div>
          {tripType === 'roundtrip' && (
            <div className="date-input">
              <span>Return</span>
              <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} />
            </div>
          )}
        </div>

        <div className="travelers-input">
          <span>Travelers</span>
          <input
            type="number"
            value={travelers}
            onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value, 10)))}
          />
        </div>
      </div>

      <button className="save-button" onClick={handleSaveOptions}>
        Save
      </button>
    </div>
  );
};

export default TravelOptions;

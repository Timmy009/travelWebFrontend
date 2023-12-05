import React from 'react';
import logotwo from "../assets/logoTwo.jpg"
import './style/trip.css';


const FlightItinerary = () => {
  return (
    <div className="hotel-itinerary-container">
        <h1 className='trip' >Trip Itenerary</h1>
        <h1 className='head' >
            Flight
        </h1>
      {[...Array(2)].map((_, rowIndex) => (
        <div key={rowIndex} className="hotel-itinerary-row">
          <div className="column logo">
            <img src={logotwo} />
          </div>
          <div className="column">
            <p>Azeibaijan Airlines</p>
            <p>Economy</p>
           
          </div>
          <div className="column">
            <p>I hr 35 minutes</p>
            <p>11:30Am 10 SEP - 12:29AM 23 OCT</p>
          </div>
          <div className="column">
            <p>2 Stops</p>
            <p>DOH SEA</p>
          </div>
          <div className="column">
            <p>GYD - SEH</p>
            <p>A1 984 A1-518</p>
          </div>
          <div className="column cost">NGN 4000</div>
          <div className="column change">
            <button>
              <span>Change</span>
            
            </button>
            <p>flight details</p>
          </div>
        </div>
      ))}

<div className="add-container">
      <div className="plus-icon">&#43;</div>
      <p>Add Transport</p>
    </div>
    </div>
  );
};

export default FlightItinerary;

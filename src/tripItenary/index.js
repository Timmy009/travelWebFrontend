import React from 'react';
import './style/tripItenary.css';
import logo from "../assets/logo.jpg"
 // Include your styles

const TripItenary = () => {
  return (
    <div className="hotel-itinerary-container">
      <h1 className='head' >Hotel</h1>
      {[...Array(1)].map((_, rowIndex) => (
        <div key={rowIndex} className="hotel-itinerary-row">
          <div className="column logo">
            <img src={logo} />
          </div>
          <div className="column">
            <p>BURUJ HOTEL</p>
            <p>Dubai, UAE</p>
          </div>
          <div className="column">
            <p>Check-In</p>
            <p>30 Sep 2023</p>
          </div>
          <div className="column line">_________________</div>
          <div className="column">
            <p>Check-Out</p>
            <p>5th, oct, 2023</p>
          </div>
          <div className="column cost">NGN 4000</div>
          <div className="column change">
            <button>
              <span>Change</span>
             
            </button>
            <p>Hotel Details</p>
          </div>
        
   




        </div>
        
      ))}
      

      <div className="add-container">
      <div className="plus-icon">&#43;</div>
      <p>Add Hotel</p>
    </div>
    </div>
  );
};

export default TripItenary;

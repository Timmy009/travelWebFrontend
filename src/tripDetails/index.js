

import React, { useState } from 'react';
import './style/tripDetails.css';
import profile from "../assets/Vector (2).png"
import share from "../assets/Vector (3).png"
import edit from "../assets/Vector (4).png"

const TripDetailsComponent = () => {
  const [tripDescription, setTripDescription] = useState('');
  const flightAmount = 100000; 
  const hotelAmount = 100000;
  const activitiesAmount = 100000; 

  const totalAmount = 1000000;

  const handleSplitPayment = () => {
   
    alert('Split payment option clicked');
  };

  const handlePayAll = () => {
   
    alert('Pay all option clicked');
  };

  const handleInvitePals = () => {
   
    alert('Invite pals option clicked');
  };

  const handleShareTrip = () => {
  
    alert('Share trip option clicked');
  };

  return (
    <div className="trip-details-container">
      
      <div className="trip-details-left">
     
        <textarea
        placeholder = "This is a trip for my annual leave. I will appreciate it if my request is approved. I await your swift response. Thanks"
         className='t-area' />
         <div className='edit' >
Edit <img src={edit} />
        </div>
      
        <div className="action-buttons">
          <button onClick={handleInvitePals}>
            <img src={profile} />
            Invite Pals</button>
          <button onClick={handleShareTrip}> <img src={share} className='share-icon' />Share Trip</button>
        </div>
      </div>
      <div className="trip-details-right">
        <div className="cost-breakdown">
          <div className="cost-item">
            <span  >Flight</span>
            <span className='amount-det' >NGN{flightAmount}</span>
          </div>
          <div className="cost-item">
            <span>Hotel</span>
            <span className='amount-det' >NGN{hotelAmount}</span>
          </div>
          <div className="cost-item">
            <span>Activities</span>
            <span className='amount-det' >NGN{activitiesAmount}</span>
          </div>
          <div className="total-amount">
            <span>Total</span>
            <span className='amount-det-last' >NGN{totalAmount}</span>
          </div>
        </div>
        <div className="payment-options">
          <button onClick={handleSplitPayment} className='payment-button' >Split Pay</button>
          <button onClick={handlePayAll} className='payment-button' >Pay All</button>
        </div>
      </div>
      
     
    </div>
  );
};

export default TripDetailsComponent;

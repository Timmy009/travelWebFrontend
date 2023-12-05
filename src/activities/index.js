// import React from 'react';
import './style/activities.css';
 import LogoTwo from "../../src/assets/image 228.png"




import React from 'react';


const Activities = () => {
  return (
    <div className="activity-container">
      <h1 className='head' >Activities</h1>
      {[...Array(6)].map((_, rowIndex) => (
        <div key={rowIndex} className="activity-row">
          <div className="column logo">
            <img src={LogoTwo} />
          </div>
          <div className="column">
            <p>Days 1</p>
            <p>Dubai, UAE</p>
          </div>
          <div className="column description">Lake Louise & Banff & Moraine 
Lake Tour from Calgary or Banff</div>
          <div className="column">11:00  
          <p>AM</p>
          </div>
          <div className="column">
            <p>1H</p>
            <p>30, Sep, 2023</p>
          </div>
          <div className="column">12:35 AM</div>
          <div className="column cost">NGN 80000</div>
          <div className="column change">
            <button>
              <span>Change</span>
            </button>
            <p>Activity Details</p>
          </div>
          <div className="column plus">+</div>
          <div className="column arrow-up">&#9650;</div>
          <div className="column cancel">&#10006;</div>
        </div>
      ))}
    </div>
  );
};



export default Activities;

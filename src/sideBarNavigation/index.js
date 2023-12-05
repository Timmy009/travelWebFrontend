// SideNavBar.js

import React from 'react';
import './style/sideBar.css';
import dashboard from '../assets/pie-chart-xxl_95915 13.png';
import About from "../assets/graduation-hat 13.png"
import employees from "../assets/teamwork 10.png"
import trip from "../assets/profiles 10.png"
import arrow from "../assets/two-arrows 13.png"
import history from "../assets/history 13 (1).png"
import unlink from "../assets/unlink 10.png"


const SideNavBar = () => {
  // You can replace the counts with actual data from your application
  const employeesCount = 0;
  const tripsCount = 0;
  const paymentRequestsCount = 0;
  const unlinkRequestsCount = 0;

  return (
    <div className="side-nav-bar">
      <div className="nav-item">
        {/* Dashboard Icon (replace with your actual dashboard icon) */}
        <span role="img" aria-label="dashboard-icon">
          <img src={dashboard} alt="dashboard-icon" />
        </span>
        <span>Dashboard</span>
      </div>

      <div className="nav-item">
        {/* About Business Icon (replace with your actual about business icon) */}
        <span role="img" aria-label="about-business-icon">
        <img src={About} alt="dashboard-icon" />
        </span>
        <span>About Business</span>
      </div>

      <div className="nav-item">
        {/* Employees Icon (replace with your actual employees icon) */}
        <span role="img" aria-label="employees-icon">
        <img src={employees} alt="dashboard-icon" />
        </span>
        <span>Employees</span>
        <span className="count">{employeesCount}</span>
      </div>

      <div className="nav-item">
        {/* Trip Planner Icon (replace with your actual trip planner icon) */}
        <span role="img" aria-label="trip-planner-icon">
        <img src={trip} alt="dashboard-icon" />
        </span>
        <span>Trip Planner</span>
        <span className="count">{tripsCount}</span>
      </div>

      <div className="nav-item">
        {/* Payment Requests Icon (replace with your actual payment requests icon) */}
        <span role="img" aria-label="payment-requests-icon">
        <img src={arrow} alt="dashboard-icon" />
        </span>
        <span>Payment Requests</span>
        <span className="count">{paymentRequestsCount}</span>
      </div>

      <div className="nav-item-last">
        {/* Unlink Requests Icon (replace with your actual unlink requests icon) */}
        <span role="img" aria-label="unlink-requests-icon">
        <img src={history} alt="dashboard-icon" />
        </span>
        <span>Unlink Requests</span>
        <span className="count">{unlinkRequestsCount}</span>
      </div>
    </div>
  );
};

export default SideNavBar;

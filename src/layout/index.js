// App.js

import React from 'react';
import NavigationBar from '../../src/navigation';
import TripPlannerHeader from '../../src/tripPlannerHeader';
import VacationPlanHeader from '../../src/vacationPlanner';
import TravelOptions from '../../src/travelOptions';
import TripItinerary from '../../src/tripItenary';
import Activities from '../../src/activities';
import TripDetails from '../../src/tripDetails';
import CommentIcon from '../../src/comment';
import SideNavBar from '../../src/sideBarNavigation';
import "./style/layout.css"
import FlightItinerary from '../../src/tripItenaery';


const Layout = () => {
  return (
    <div className='top-container' >
    <div className='side' >
      <SideNavBar/>
    </div>
    <div className='full' >
      <NavigationBar />
      <TripPlannerHeader/>
      <VacationPlanHeader/>
      <TravelOptions/>
     < FlightItinerary/>
      <TripItinerary/>
      <Activities/>
      <TripDetails/>
      <CommentIcon/>
      </div>
    </div>
  );
};

export default Layout;

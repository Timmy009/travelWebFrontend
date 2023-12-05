

import React from 'react';
import { FiUsers, FiSave } from 'react-icons/fi';
import './style/vacationPlanner.css'

const VacationPlanHeader = () => {
  return (
    <div className="vacation-plan-header">
      <span className="plan-name">My Vacation Plan Spring</span>
      <div className="subscribers">
        <FiUsers className="users-icon" />
        <span className="subscribers-info">Okeowo and 14 others are active</span>
      </div>
      <div className="save-plan">
        <FiSave className="save-icon" />
        <span className="save-text">Save</span>
      </div>
    </div>
  );
};

export default VacationPlanHeader;

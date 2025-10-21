import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="stat-content">
        <div className="stat-icon" style={{ color }}>
          {icon}
        </div>
        <div className="stat-info">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
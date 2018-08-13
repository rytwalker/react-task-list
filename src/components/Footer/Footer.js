import React from 'react';
import './footer.css';

const Footer = ({ clearTasks, totalTasks }) => {
  return (
    <nav className="Footer">
      <span id="numberOfTasks">{totalTasks} </span> Tasks Left
      <div className="task-toggle">
        <button className="btn">All</button>
        <button className="btn">Active</button>
        <button className="btn">Complete</button>
      </div>
      <button className="btn" onClick={clearTasks}>
        Clear All
      </button>
    </nav>
  );
};

export default Footer;

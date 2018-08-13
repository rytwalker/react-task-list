import React from 'react';
import './list.css';

const ListItem = ({ task }) => {
  return (
    <li className="ListItem">
      <i className="far fa-circle unchecked" />
      {task}
      <i className="fas fa-times delete" />
    </li>
  );
};

export default ListItem;

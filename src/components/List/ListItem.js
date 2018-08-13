import React from 'react';
import './list.css';

const ListItem = ({ task, removeTask, completeTask }) => {
  return (
    <li className="ListItem">
      <i className="far fa-circle unchecked" onClick={completeTask} />
      {task}
      <i className="fas fa-times delete" onClick={removeTask} />
    </li>
  );
};

export default ListItem;

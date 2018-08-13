import React from 'react';
import './task-input.css';

const TaskInput = ({ addTask }) => {
  return (
    <input
      onKeyUp={addTask}
      className="TaskInput"
      type="text"
      placeholder="Add a new task..."
    />
  );
};

export default TaskInput;

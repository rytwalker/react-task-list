import React from 'react';
import ListItem from './ListItem';
import './list.css';

const List = ({ tasks, removeTask, completeTask }) => {
  const allTasks = tasks.map(task => {
    return (
      <ListItem
        task={task}
        key={task}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    );
  });

  return <ul className="List">{allTasks}</ul>;
};

export default List;

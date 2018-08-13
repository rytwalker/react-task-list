import React from 'react';
import ListItem from './ListItem';
import './list.css';

const List = ({ tasks }) => {
  const allTasks = tasks.map(task => {
    return <ListItem task={task} key={task} />;
  });

  return <ul className="List">{allTasks}</ul>;
};

export default List;

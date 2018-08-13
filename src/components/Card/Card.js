import React, { Component } from 'react';
import './card.css';
import TaskInput from '../TaskInput/TaskInput';
import List from '../List/List';

class Card extends Component {
  state = {
    tasks: ['clean my room', 'read chapter about js', 'cook dinner']
  };

  addTask = e => {
    if (e.keyCode === 13) {
      const task = e.target.value;
      this.setState(prevState => ({
        tasks: [task, ...prevState.tasks]
      }));
      // clear input value
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="Card">
        <TaskInput addTask={this.addTask} />
        <List tasks={this.state.tasks} renderTasks={this.renderTasks} />
      </div>
    );
  }
}

export default Card;

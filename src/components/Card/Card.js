import React, { Component } from 'react';
import './card.css';
import TaskInput from '../TaskInput/TaskInput';
import List from '../List/List';
import Footer from '../Footer/Footer';

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

  clearTasks = () => {
    this.setState({ tasks: [] });
  };

  deleteTask = () => {
    console.log('deleted');
    const tasks = this.state.tasks.filter(task => task !== task.key);
    console.log(this.state.tasks);
    this.setState({ tasks: [...tasks] });
  };

  completeTask = e => {
    if (e.target.classList.contains('unchecked')) {
      e.target.classList.remove('fa-circle', 'unchecked');
      e.target.classList.add('fa-check-circle', 'checked');
    } else if (e.target.classList.contains('checked')) {
      e.target.classList.add('fa-circle', 'unchecked');
      e.target.classList.remove('fa-check-circle', 'checked');
    }
  };

  // FILTER TASKS
  filterCompletedTasks = () => {};

  render() {
    const totalTasks = this.state.tasks.length;
    return (
      <div className="Card">
        <TaskInput addTask={this.addTask} />
        <List
          tasks={this.state.tasks}
          renderTasks={this.renderTasks}
          removeTask={this.deleteTask}
          completeTask={this.completeTask}
        />
        <Footer clearTasks={this.clearTasks} totalTasks={totalTasks} />
      </div>
    );
  }
}

export default Card;

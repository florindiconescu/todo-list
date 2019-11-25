import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Todo extends Component {
  render() {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>Todo 1</li>
          <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;

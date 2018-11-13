import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Theme.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="app--wrapper">
        <h2>My Daily Goals</h2>
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;

import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "./Transition.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.clickTodoBtn = this.clickTodoBtn.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  clickTodoBtn() {
    //this.state.list.push("hello world");
    //use setState to update/change state's data
    if (this.state.inputValue !== "") {
      this.setState({
        // this is the btn, but use bind to change this
        list: [...this.state.list, this.state.inputValue],
        //clear input value
        inputValue: ""
      });
    }
  }

  changeInputValue(e) {
    //console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }

  // clickListItem(index) {
  //   //duplicate list data
  //   const list = [...this.state.list];
  //   //remove onclick item
  //   list.splice(index, 1);
  //   //update todo list
  //   this.setState({
  //     list: list
  //   });
  // }

  // A Function that child Component can pass data to the parent Component
  deleteListItem(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }

  getTodoListItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          deleteItems={this.deleteListItem}
          content={item}
          index={index}
        />
        // <li key={index} onClick={this.clickListItem.bind(this, index)}>
        //   {item}
        // </li>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div className="input--group">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
          <button onClick={this.clickTodoBtn}>Add Me</button>
          {/* this is Component */}
        </div>
        <h3>Things Need To Do:</h3>
        <ul className="list--wrapper">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
          >
            {this.getTodoListItems()}
          </CSSTransitionGroup>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;

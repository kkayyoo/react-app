import React, { Component, Fragment } from "react";
import NoteTakerItem from "./NoteTakerItem";
//import NoteTakerModal from "./NoteTakerModal";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "./Transition.css";

class NoteTakerList extends Component {
  constructor(props) {
    super(props);
    this.clickTodoBtn = this.clickTodoBtn.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(list) {
    const lists = this.state.list.map((item, index) => {
      const newItem = item.index === list.index ? list : item;
      return newItem;
    });
    this.setState({
      lists
    });
  }

  getNoteTakerListItems() {
    return this.state.list.map((item, index) => {
      return (
        <NoteTakerItem
          key={index}
          deleteItems={this.deleteListItem}
          onSave={this.handleSave}
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
        <div className="note-listing">
          <h3>Notes Listing</h3>
          <ul className="list--wrapper">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={200}
            >
              {this.getNoteTakerListItems()}
            </CSSTransitionGroup>
          </ul>
        </div>
        <div className="edit-panel">
          <div className="edit-panel--title">
            <h3>Edit Note Here:</h3>
          </div>
          <div className="edit-panel--content">
            <textarea
              type="text"
              value={this.state.inputValue}
              onChange={this.changeInputValue}
            />
          </div>
          <div className="edit-panel--btn">
            <button onClick={this.clickTodoBtn}>Add Me</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NoteTakerList;

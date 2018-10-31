import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  //Pass data to parent Component through a Function/method
  deleteItem() {
    this.props.deleteItems(this.props.index);
  }
  render() {
    const { content } = this.props;
    return (
      <li className="list--item" onClick={this.deleteItem}>
        {content}
      </li>
    );
  }
}

export default TodoItem;

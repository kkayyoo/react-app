import React, { Component } from "react";

class TodoItem extends Component {
  deleteItem() {
    this.props.deleteItems(this.props.index);
  }
  render() {
    return <li onClick={this.deleteItem.bind(this)}>{this.props.content}</li>;
  }
}

export default TodoItem;

import React, { Component } from "react";

class NoteTakerItem extends Component {
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
      <li className="list--item">
        {this.props.content.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
        <button className="delete-btn" onClick={this.deleteItem}>
          Delete
        </button>
      </li>
    );
  }
}

export default NoteTakerItem;

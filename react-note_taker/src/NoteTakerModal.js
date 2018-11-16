import React, { Component } from "react";

class NoteTakerModal extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.openNoteItem = this.openNoteItem.bind(this);
    this.state = {
      open: false
    };
  }
  //Pass data to parent Component through a Function/method
  deleteItem(e) {
    e.stopPropagation();
    this.props.deleteItems(this.props.index);
  }

  openNoteItem(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }
  render() {
    const { content } = this.props;
    let noteStyle = {};
    let classStyle = "";
    if (this.state.open) {
      classStyle = "is-open";
      noteStyle = {
        backgroundColor: "#fff"
      };
    } else {
      classStyle = "";
      noteStyle = {
        backgroundColor: "#ffe9c6"
      };
    }
    return (
      <li
        className={"list--item " + classStyle}
        onClick={this.openNoteItem}
        style={noteStyle}
      >
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

export default NoteTakerModal;

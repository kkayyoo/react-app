import React, { Component } from "react";
//import NoteTakerModal from "./NoteTakerModal";

class NoteTakerItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.openNoteItem = this.openNoteItem.bind(this);
    //this.openNoteModal = this.openNoteModal.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.state = {
      content: props.content,
      isOpen: false,
      editing: false
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

  // openNoteModal(e) {
  //   e.preventDefault();
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.content !== nextProps.content) {
      this.setState({ content: nextProps.content });
    }
  }

  handleEditPost(e) {
    e.stopPropagation();
    const editing = this.state.editing;
    if (editing) {
      this.props.onSave({
        content: this.state.content
      });
    }
    this.setState({
      editing: !editing
    });
  }

  handleContentChange(e) {
    //console.log(e.target.value);
    //const newContent = { ...this.state.content, content: e.target.value };
    this.setState({
      content: e.target.value
    });
  }

  noteItem() {
    return this.state.content.split("\n").map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    const { content } = this.state;
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
        {this.state.editing ? (
          <form>
            <textarea value={content} onChange={this.handleContentChange} />
          </form>
        ) : (
          <p>{this.noteItem()}</p>
        )}

        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? "Save" : "Edit"}
          </button>
          <button className="delete-btn" onClick={this.deleteItem}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default NoteTakerItem;

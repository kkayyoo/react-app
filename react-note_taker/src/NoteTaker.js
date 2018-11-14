import React, { Component } from "react";
import NoteTakerList from "./NoteTakerList";
import "./Theme.css";

class NoteTaker extends Component {
  render() {
    return (
      <div className="app--wrapper">
        <NoteTakerList />
      </div>
    );
  }
}

export default NoteTaker;

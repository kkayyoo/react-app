import React, { Component } from "react";
import PoolLists from "./PoolLists";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <PoolLists />
      </div>
    );
  }
}

export default App;

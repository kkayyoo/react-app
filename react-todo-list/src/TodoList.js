import React, { Component } from "react";
import "./Theme.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["learn react", "learn English", "learn vue"]
    };
  }

  clickTodoBtn() {
    //this.state.list.push("hello world");
    //use setState to update/change state's data
    this.setState({
      // this is the btn, but use bind to change this
      list: [...this.state.list, "hello world"]
    });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input type="text" />
          <button onClick={this.clickTodoBtn.bind(this)}>Add Me</button>
          {/* this is TodoList */}
        </div>
        <div className="list-items">
          <ul>
            {this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;

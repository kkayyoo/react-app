import React, { Component } from "react";
import PoolItem from "./PoolItem";

// const data = [
//   { name: "Jon Snow", image: "/images/jon-snow.jpg" },
//   { name: "Night King", image: "" }
// ];
//
// class PoolLists extends Component {
//   render() {
//     return (
//       <div className="lists-wrapper">
//         <h3>Pool lists</h3>
//         <ul>
//           {data.map(item => <PoolItem name={item.name} image={item.image} />)}
//         </ul>
//       </div>
//     );
//   }
// }

class PoolLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, name: "Jon Snow", image: "/images/jon-snow.jpg", vote: 0 },
          { id: 2, name: "Night King", image: "", vote: 0 }
        ]
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({
      posts
    });
  }

  render() {
    return (
      <div>
        <ul className="lists-wrapper">
          {this.state.posts.map(item => (
            <PoolItem post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PoolLists;

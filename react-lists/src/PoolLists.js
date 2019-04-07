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
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            name: "Jon Snow",
            image: "/images/jon-snow.jpg",
            description:
              "Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised by Eddard alongside his lawful children at Winterfell but his true parentage is kept secret from everyone, including Jon himself.",
            vote: 0
          },
          {
            id: 2,
            name: "Night King",
            image: "",
            description: "",
            vote: 0
          }
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

  handleSave(post) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item;
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
            <PoolItem
              key={item.id}
              post={item}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PoolLists;

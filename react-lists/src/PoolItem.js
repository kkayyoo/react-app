import React, { Component } from "react";
import PropTypes from "prop-types";

// class PoolItem extends Component {
//   render() {
//     const { name, image } = this.props;
//     return (
//       <li>
//         <div>
//           <h4>{name}</h4>
//           <img src={image} alt={name} />
//         </div>
//       </li>
//     );
//   }
// }

class PoolItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      post: props.post
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      });
    }
  }

  handleVote() {
    this.props.onVote(this.props.post.id);
  }

  handleEditPost() {
    const editing = this.state.editing;
    if (editing) {
      this.props.onSave({
        ...this.state.post
        //date: this.getFormatDate()
      });
    }
    this.setState({
      editing: !editing
    });
  }

  handleDescriptionChange(event) {
    const newPost = { ...this.state.post, description: event.target.value };
    this.setState({
      post: newPost
    });
  }

  // getFormatDate() {
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   let month = date.getMonth() + 1 + "";
  //   month = month.length === 1 ? "0" + month : month;
  //   let day = date.getDate() + "";
  //   day = day.length === 1 ? "0" + day : day;
  //   let hour = date.getHours() + "";
  //   hour = hour.length === 1 ? "0" + hour : hour;
  //   let minute = date.getMinutes() + "";
  //   minute = minute.length === 1 ? "0" + minute : minute;
  //   return `${year}-${month}-${day} ${hour}:${minute}`;
  // }

  render() {
    const { post } = this.state;
    return (
      <li>
        <div>
          <div className="lists-image">
            <img src={post.image} alt={post.name} />
          </div>
          <h4>{post.name}</h4>
        </div>
        <div>
          <p>
            {this.state.editing ? (
              <form>
                <textarea
                  value={post.description}
                  onChange={this.handleDescriptionChange}
                />
              </form>
            ) : (
              post.description
            )}
          </p>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? "Save" : "Edit"}
          </button>
        </div>
        <div>
          <button onClick={this.handleVote}>Like it</button>
          <p>{post.vote}</p>
        </div>
      </li>
    );
  }
}

// function PoolItem(props) {
//   const handleClick = () => {
//     props.onVote(props.post.id);
//   };
//   const { post } = props;
//   return (
//     <li>
//       <div>
//         <div className="lists-image">
//           <img src={post.image} alt={post.name} />
//         </div>
//         <h4>{post.name}</h4>
//       </div>
//       <div>
//         <button onClick={handleClick}>Like it</button>
//         <p>{post.vote}</p>
//       </div>
//     </li>
//   );
// }

PoolItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
};

export default PoolItem;

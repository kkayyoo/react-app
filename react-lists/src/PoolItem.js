import React from "react";
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

function PoolItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li>
      <div>
        <h4>{post.name}</h4>
        <img src={post.image} alt={post.name} />
      </div>
      <div>
        <button onClick={handleClick}>Like it</button>
        <p>{post.vote}</p>
      </div>
    </li>
  );
}

PoolItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
};

export default PoolItem;

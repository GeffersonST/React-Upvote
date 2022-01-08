import React from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
class Upvote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          <BiUpvote />
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>
          <BiDownvote />
        </button>
      </div>
    );
  }
}

export default Upvote;

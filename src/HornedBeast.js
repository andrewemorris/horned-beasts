import { Component } from "react";
import "./hornedbeast.css";

class HornedBeast extends Component {
  render() {
    return (
      <div className="hornedbeast">
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;

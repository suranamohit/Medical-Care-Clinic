import React, { Component } from "react";
import "./Cards1.css";

class Cards1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card box" style={{ width: "300px", height: "500px" }}>
        <img
          class="card-img-top"
          src="img/img6.jpg"
          alt="Card image cap"
        />

        <div class="card-body">
        <h4 class="card-title">{this.props.title}</h4>
          <h5 class="card-text">{this.props.about}</h5>
          <p class="card-exp">{this.props.experience}</p>
          <p class="card-text">{this.props.degree}</p>
        </div>
      </div>
    );
  }
}

export default Cards1;

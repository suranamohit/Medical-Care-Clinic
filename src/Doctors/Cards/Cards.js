import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card box" style={{ width: "300px", height: "500px" }}>
        <img class="card-img-top" src={this.props.imsrc} alt="Card image cap" />

        <div class="card-body">
          <h4 class="card-title">{this.props.name}</h4>
          <h5 class="card-text">{this.props.specialization}</h5>
          <p class="card-exp">{this.props.experience}</p>
          <p class="card-text">{this.props.degree}</p>
          <p class="card-text">{this.props.availableTimings}</p>
        </div>
      </div>
    );
  }
}

export default Cards;

import React, { Component } from "react";
import Cards from "./Cards/Cards";

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container scroll-center section-height" id="doctors">
        <h2>Doctors</h2>
        <p>This is about the Doctors/Specialists</p>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Cards
                name="Dr.Narayan Murthy"
                experience="Experience:20yrs"
                degree="MBBS/PHD(Neurology)"
                imsrc="img/img5.jpg"
                specialization="NEUROLOGIST"
                availableTimings="10am to 12pm"
              />
            </div>
            <div class="col-sm">
              <Cards
                name="Dr.Keshav Nanda"
                experience="Experience:12yrs"
                degree="MBBS"
                imsrc="img/img6.jpg"
                specialization="Gynecologist"
                availableTimings="10am to 12pm"
              />
            </div>
            <div class="col-sm" style={{ padding: "5px;" }}>
              <Cards
                name="Johnny Adolf"
                experience="Experience:7yrs"
                degree="DDS"
                imsrc="img/img7.jpg"
                specialization="Dentist"
                availableTimings="10am to 12pm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctors;

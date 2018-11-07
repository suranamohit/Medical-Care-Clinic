import React, { Component } from "react";
import Cards from "./Cards/Cards";
import Cards1 from "./Cards/Cards1";
import Cards2 from "./Cards/Cards2";


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
                title="Dr.Narayan Murthy"
                experience="Experience:20yrs"
                degree="MBBS/PHD(Neurology)"

                about="NEUROLOGIST"
                
              />
            </div>
            <div class="col-sm">
              <Cards1
                title="Dr.Keshav Nanda"
                experience="Experience:12yrs"
                degree="MBBS"

                about="Gynecologist"
                

                
              />
            </div>
            <div class="col-sm" style={{ padding: "5px;" }}>
              <Cards2
                title="Johnny Adolf"
                experience="Experience:7yrs"
                degree="DDS"

                about="Dentist"
               

                
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctors;

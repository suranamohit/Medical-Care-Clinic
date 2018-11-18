import React, { Component } from "react";
import Cards from "./Cards/Cards";
import * as firebase from "firebase";
class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    //Card Generation
    firebase
      .database()
      .ref("doctors/")
      .once("value", snap => {
        var data = snap.val();
        var arr = [];
        for (var ele in data) {
          arr.push(data[ele]);
        }

        this.setState({ data: arr });
        this.forceUpdate();
      });
  }
  render() {
    return (
      <div class="container scroll-center section-height" id="doctors">
        <br />
        <br />
        <br />
        <h2>Doctors</h2>
        <p>This is about the Doctors/Specialists</p>
        <br />
        <div class="container">
          <div class="row">
            {this.state.data.map(data => {
              return (
                <Cards
                  name={data.name}
                  experience={data.experience}
                  degree={data.degree}
                  imsrc={data.imsrc}
                  specialization={data.specialization}
                  availableTimings={data.availableTimings}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Doctors;

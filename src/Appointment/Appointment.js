import React, { Component } from "react";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="appointment" class="scroll-center container section-height">
        <br />
        <br />
        <br />
        <h3>Appointment</h3>
        <p>Add all the Conte nts here.</p>
        {/* starts here */}
        <div class="Aptab">
          <button
            class="tablinks"
            onclick="openCity(event, 'London')"
            id="defaultOpen"
          >
            London
          </button>
          <button class="tablinks" onclick="openCity(event, 'Paris')">
            Paris
          </button>
          <button class="tablinks" onclick="openCity(event, 'Tokyo')">
            Tokyo
          </button>
        </div>

        <div id="London" class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
        {/* ends here */}
      </div>
    );
  }
}

export default Appointment;

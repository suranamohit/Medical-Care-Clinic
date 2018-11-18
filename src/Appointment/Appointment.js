import React, { Component } from "react";
import "./Appointment.css";
class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectorFn = this.selectorFn.bind(this);
  }

  selectorFn = evt => {
    var i,
      tabcontent,
      tablinks,
      eId = evt.target.id;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id.slice(-1) == eId.slice(-1)) {
        // console.log(eId.slice(-1));
        tabcontent[i].classList.add("active");
      } else tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
      // console.log(tablinks[i]);
      if (eId == tablinks[i].id) tablinks[i].classList.add("active");
      else tablinks[i].classList.remove("active");
    }
  };

  render() {
    return (
      <div id="appointment" className="scroll-center container section-height">
        <br />
        <br />
        <br />
        <h3>Appointment</h3>
        <p>Add all the Contents here.</p>
        {/* starts here */}

        <div class="tab">
          <button id="SectionBtn1" class="tablinks" onClick={this.selectorFn}>
            London
          </button>
          <button id="SectionBtn2" class="tablinks" onClick={this.selectorFn}>
            Paris
          </button>
          <button id="SectionBtn3" class="tablinks" onClick={this.selectorFn}>
            Tokyo
          </button>
        </div>

        <div id="SectionContect1" class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="SectionContect2" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="SectionContect3" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
        {/* ends here */}
      </div>
    );
  }
}

export default Appointment;

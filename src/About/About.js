import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="about" class="scroll-center container section-height">
        <br />
        <br />
        <br />
        <h3>About us</h3>
        <p>
          Medical science has come a long way from tribal shaman dispensing
          herbs and roots. Having already cured many diseases and conditions
          that were once a death sentence, medical researchers continue to
          strive to help us live longer and healthier lives. Great advances are
          being made in regrowing damaged organs, turning back our biological
          clocks, and the big one – finding a cure for cancer.
        </p>
        <p>
          Medical Care Clinic has emerged as Asia's foremost integrated
          healthcare services provider and has a robust presence across the
          healthcare ecosystem, including Hospitals, Pharmacies, Primary Care &
          Diagnostic Clinics. The Group also has Telemedicine units across 10
          countries, Health Insurance Services, Global Projects Consultancy,
          Medical Colleges, Medvarsity for E-Learning, Colleges of Nursing and
          Hospital Management and a Research Foundation. In addition, 'ASK me' -
          an online consultation portal and Apollo Home Health provide the care
          continuum.
        </p>
        <p />
        <img src="img/img4.jpg" />
      </div>
    );
  }
}

export default About;

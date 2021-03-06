import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav class="navbar navbar-light bg-light shadow scroll-center">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <a class="navbar-brand nav-fonts" href="#">
          <b>Medical Care Clinic</b>
        </a>
        <div class="container-fluid">
        <div class="navbar-header">
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav  mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link nav-fonts " href="#about">
                <b>About us</b> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-fonts" href="#doctors">
                Doctors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-fonts" href="#appointment">
                Appointment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-fonts " href="#footer">
                More about us
              </a>
            </li>
          </ul>
        </div>
        </div>
        </div>

      
      </nav>
    );
  }
}

export default Nav;

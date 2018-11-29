import React, { Component } from "react";
import "./Appointment.css";
import JwModal from "jw-react-modal";
class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectorFn = this.selectorFn.bind(this);
  warn=e=> {
  }

  warn = e => {
    // return <Model />;
    // var retVal = prompt("Enter your name : ", "your name here");
    // if (retVal != null) {
    //   document.write(retVal + ":your appointment is fixed.thank you!");
    //   return true;
    // } else {
    //   document.write("User does not want to continue!");
    //   return false;
    // }
  };

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
        <JwModal id="userDetailsComfirmModel">
          <h1>Schedule Details</h1>
          <p>
            Hi, your appointment is successfully scheduled on 10:00Am day after
            tomorrow. If you are unable to make it please call us at
            +91-90090900 to reschedule.
          </p>
          <button
            class="btn btn-primary float-right"
            onClick={JwModal.close("userDetailsComfirmModel")}
          >
            X
          </button>
        </JwModal>
        <JwModal id="userDetailsModel">
          <h1>Appointment Defaults</h1>

          <p>Name mobilenmber email</p>

          <label for="exampleInputEmail1">Name</label>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <br />
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <br />
          <label for="exampleInputEmail1">Mobile number</label>
          <input
            type="number"
            class="form-control"
            placeholder="Mobile number"
          />
          <br />
          <div class="row">
            <div class="col">
              <button
                class="btn btn-primary "
                onClick={JwModal.close("userDetailsModel")}
              >
                Close
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn  btn-primary float-right"
                onClick={JwModal.open("userDetailsComfirmModel")}
              >
                Submit
              </button>
            </div>
          </div>
        </JwModal>

        <h3>Appointment</h3>
        <p>Add all the Contents here.</p>
        {/* starts here */}

        <div class="tab">
          <button id="SectionBtn1" class="tablinks" onClick={this.selectorFn}>
            Cardiologists
          </button>
          <button id="SectionBtn2" class="tablinks" onClick={this.selectorFn}>
            Anesthesiologists
          </button>
          <button id="SectionBtn3" class="tablinks" onClick={this.selectorFn}>
            Allergists/Immunologists
          </button>
        </div>

        <div id="SectionContect1" class="tabcontent">
          <p>
            <ul class="list-group">
              <li class="list-group-item">
                Cras justo odio{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Dapibus ac facilisis in{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Morbi leo risus{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
            </ul>
          </p>
        </div>

        <div id="SectionContect2" class="tabcontent">
          <ul class="list-group">
            <li class="list-group-item">
              Cras justo odio{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Dapibus ac facilisis in{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Morbi leo risus{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Porta ac consectetur ac{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Dapibus ac facilisis in{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Morbi leo risus{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Porta ac consectetur ac{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
            <li class="list-group-item">
              Vestibulum at eros{" "}
              <button
                type="button"
                class="btn btn-primary float-right"
                onClick={JwModal.open("userDetailsModel")}
              >
                place appointment
              </button>
            </li>
          </ul>
        </div>

        <div id="SectionContect3" class="tabcontent">
          <p>
            <ul class="list-group">
              <li class="list-group-item">
                Cras justo odio{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Dapibus ac facilisis in{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Morbi leo risus{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Porta ac consectetur ac{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Dapibus ac facilisis in{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Morbi leo risus{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Porta ac consectetur ac{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
              <li class="list-group-item">
                Vestibulum at eros{" "}
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  onClick={JwModal.open("userDetailsModel")}
                >
                  place appointment
                </button>
              </li>
            </ul>
          </p>
        </div>
        {/* ends here */}
      </div>
    );
  }
}

export default Appointment;

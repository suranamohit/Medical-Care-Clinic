import React, { Component } from "react";
import Images from "./Images/Images";
import "./App.css";

import About from "./About/About";
import Nav from "./Nav/Nav";
import Doctors from "./Doctors/Doctors";
import Footer from "./Footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Images />
        <br />
        <br />
        <About />
        <br />
        <br />
        <Doctors
         />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;

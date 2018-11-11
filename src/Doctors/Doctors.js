import React, { Component } from "react";
import Cards from "./Cards/Cards";
import * as firebase from "firebase";
class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    firebase.database().ref("doctors/").once("value",(snap)=>{
      var data = snap.val();
      var arr=[];
      for (var ele in data){
        arr.push(data[ele]);
      }
     
      this.setState({data:arr});
      this.forceUpdate();
    });
  }
  render() {
    return (
      <div class="container scroll-center section-height" id="doctors">
        <h2>Doctors</h2>
        <p>This is about the Doctors/Specialists</p>
        <br />
        <div class="container">
          <div class="row">
            
            {this.state.data.map(data=>{
              
              return<Cards
              name={data.name}
              experience={data.experience}
              degree={data.degree}
              imsrc={data.imsrc}
              specialization={data.specialization}
              availableTimings={data.availableTimings}
              />;
            })}

              <Cards
                name="Dr.Narayan Murthy"
                experience="Experience:20yrs"
                degree="MBBS/PHD(Neurology)"
                imsrc="img/img5.jpg"
                specialization="NEUROLOGIST"
                availableTimings="10am to 12pm"
              />
            
            
              <Cards
                name="Dr.Keshav Nanda"
                experience="Experience:12yrs"
                degree="MBBS"
                imsrc="img/img6.jpg"
                specialization="Gynecologist"
                availableTimings="10am to 12pm"
              />
            
            
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
    );
  }
}

export default Doctors;

import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer
        class="bg-dark page-footer scroll-center section-height"
        id="footer"
      >
        <div class="container text-light text-center text-md-left">
          <div class="row">
            <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">
                Footer Content
              </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <a href="#!">About Us</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Doctors</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Carrier</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Brand</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fa fa-home mr-3" />Jayanagar,Bangalore,560065
                  </p>
                </li>
                
                <li>
                  <p>
                    <i class="fa fa-phone mr-3" /> + 080-2425678
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-print mr-3" /> + 91 991234987
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
              <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

              <a type="link" class="btn-floating btn-fb">
                <i class="fa fa-facebook" />Medical Care Clinic
              </a>

              <a type="link" class="btn-floating btn-tw">
                <i class="fa fa-twitter" />medicare@twitter.com
              </a>

              <a type="link" class="btn-floating btn-gplus">
                <i class="fa fa-google-plus" />medicare_clinic@gmail.com
              </a>

              <a type="button" class="btn-floating btn-dribbble">
                <i class="fa fa-dribbble" />
              </a>
            </div>
          </div>
        </div>

        
      </footer>
    );
  }
}

export default Footer;

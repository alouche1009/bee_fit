import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div id="footer" class="container-fluid">
        <div class="container ">
          <div className="row no-padding-b">
            <div class="col-md-12 d-flex justify-content-center p-top-perso">
              {" "}
              <div id="head-logo">
                <Link to="/" class="navbar-brand">
                  <img src="../../static/frontend/images/logo_blanc.png" />
                </Link>
              </div>
            </div>
          </div>
          <div class="row p-top-perso-footer row d-flex align-items-end">
            <div class="col-md-12 d-flex justify-content-center">
              <div class="row icons text-center">
                <div class="col-6 col-md-3 d-flex justify-content-center">
                  <a href="google.com" class="fab fa-facebook-f"></a>
                </div>
                <div class="col-6 col-md-3 d-flex justify-content-center">
                  <a class="fab fa-twitter"></a>
                </div>
                <div class="col-6 col-md-3 d-flex justify-content-center">
                  <a class="fab fa-instagram"></a>
                </div>
                <div class="col-6 col-md-3 d-flex justify-content-center">
                  <a class="fab fa-linkedin-in"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
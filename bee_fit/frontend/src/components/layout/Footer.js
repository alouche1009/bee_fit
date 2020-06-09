import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Footer extends Component {
  render() {
    return (
     
     <div id="footer" class="container-fluid">
     <div  class="container ">
	<div class="row p-top-perso-footer">
			<div class="row row d-flex align-items-end">
					<div class="row icons text-center">
						<div class="col-md-3">
                        <a href="google.com" class="fab fa-facebook-f"></a>
						</div>
						<div class="col-md-3">
                        <a class="fab fa-twitter"></a>
						</div>
						<div class="col-md-3">
                        <a class="fab fa-instagram"></a>
						</div>
						<div class="col-md-3">
                        <a class="fab fa-linkedin-in"></a>
						</div>
						</div>
						<div className = "row">        <div id="head-logo">
          <Link class="navbar-brand" to="/">
            <img src="../../static/frontend/images/logo_blanc.png" />
          </Link>
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

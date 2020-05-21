import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul >
        <span >
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li className="nav-item">
          <button onClick={this.props.logout} >
            Logout
          </button>
        </li>
        <li className="nav-item">
          <Link to="/profil" class="" >
            <i class="fas fa-user-plus"></i> Profil
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" class="fas fa-user-plus">
            Register
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" class="fas fa-user-plus">
            Login
        </Link>
        </li>
      </ul>
    );
    return (
      <header>
        <div id="head-logo">
          <a class="navbar-brand" href="#">
            <img src="../../static/frontend/images/logo.jpg" />
          </a>
        </div>
        <div class="container-fluid d-flex justify-content-end menu-login">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mx-auto ">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Accueil <span class="sr-only">(current)</span>
                </ Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nos services
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Votre consommation
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Suivi de poids
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Aide nutritive
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Recherche d'aliments
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Recettes
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Programme fitness
                  </a>
                  <div class="dropdown-divider"></div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Qui sommes nous ?
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStatetToProps = state => ({
  auth: state.auth
})

export default connect(mapStatetToProps, { logout })(Header);

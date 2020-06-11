import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../../actions/authActions";

export class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool,
    getProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  componentWillMount() {
    this.props.getProfile();
  }

  authLinks() {
    const user = this.props.user;
    if (this.props.authenticated) {
      return [
        <div class="logged">
          <div class="text-center">
            <p class="text-center"></p>
          </div>

          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="fas fa-user-times" to="/logout">
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" class="fas fa-user-times">
                Profil
              </Link>
            </li>
          </ul>
        </div>,
      ];
    } else {
      return [
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/signup" class="fas fa-user-plus">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" class="fas fa-user-check">
              Login
            </Link>
          </li>
        </ul>,
      ];
    }
  }

  navLinks() {
    const user = this.props.user;
    if (this.props.authenticated) {
      return [
        <ul class="navbar-nav mr-auto mx-auto ">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Accueil <span class="sr-only">(current)</span>
            </Link>
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
              <Link to="/calories" class="dropdown-item">
                {" "}
              Mes calories
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/weight" class="dropdown-item">
                {" "}
              Mon poids
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/BMI" class="dropdown-item">
                {" "}
              Mon IMC
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/allproducts" class="dropdown-item">
                {" "}
              Recherche d'aliments
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/fitness" class="dropdown-item">
                {" "}
              Programme fitness
            </Link>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#qui">
              Qui sommes nous ?
          </a>
          </li>
        </ul>
      ];
    } else {
      return [
        <ul class="navbar-nav mr-auto mx-auto ">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Accueil <span class="sr-only">(current)</span>
            </Link>
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
              <Link to="/login" class="dropdown-item" style={{ color: 'grey' }}>
                {" "}
                <i class="fas fa-user-lock " style={{ paddingRight: '8px', color: 'grey' }}></i>
              Mes calories
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/login" class="dropdown-item" style={{ color: 'grey' }}>
                {" "}
                <i class="fas fa-user-lock " style={{ paddingRight: '8px', color: 'grey' }}></i>
              Mon poids
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/BMI" class="dropdown-item">
                {" "}
              Mon IMC
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/allproducts" class="dropdown-item">
                {" "}
              Recherche d'aliments
            </Link>
              <div class="dropdown-divider"></div>
              <Link to="/fitness" class="dropdown-item">
                {" "}
              Programme fitness
            </Link>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#qui">
              Qui sommes nous ?
          </a>
          </li>
        </ul>

      ];
    }
  }

  render() {
    return (
      <header>
        <div id="head-logo">
          <Link class="navbar-brand" to="/">
            <img src="../../static/frontend/images/logo_blanc.png" />
          </Link>
        </div>
        <div class="container-fluid d-flex justify-content-end menu-login">
          {this.authLinks()}
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
            {this.navLinks()}
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, { getProfile })(Header);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Logout extends Component {

    static propTypes = {
        logoutUser: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.logoutUser();
    }

    render() {
        return (
            <h2>A très vite sur Bee-Fit!</h2>
        );
    }
}

export default connect(null, { logoutUser })(Logout);
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.logout();
    }

    render() {
        return (
            <div className="Logout no-padding-b">
            <h2>A très vite sur Bee-Fit!</h2>
            </div>
        );
    }
}

export default connect(null, { logout })(Logout);
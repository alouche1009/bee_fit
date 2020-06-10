import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../../actions/authActions";

class UserProfile extends Component {

    static propTypes = {
        getProfile: PropTypes.func.isRequired,
        user: PropTypes.object
    };

    componentWillMount() {
        this.props.getProfile();
    }

    renderUser() {
        const user = this.props.user;
        console.log(user);
        if (user) {
            return (
                <div >
                    <h4>Username: {user.username}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Age: {user.age}</h4>
                    <h4>Sexe : {user.sexe}</h4>
                    <h4>Taille: {user.taille}</h4>
                    <h4>Poids: {user.poids}</h4>
                    <h4>Mon poids idéal: {user.objectif_poids}</h4>
                    <h4>Mes allergies: {user.allergies ? user.allergies.join(', ') : user.allergies}</h4>
                    <h4>Je suis diabétique: {user.diabetique}</h4>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div style={{ marginTop: '4rem', marginBottom: '4rem'}}>
            {this.renderUser()}
                {" "}
                <hr />
                <Link className="btn btn-primary mr-2" to="/profile_edit">Modifier mon profil</Link>
                <Link className="btn btn-primary" to="/change_password">Modifier mon mot de passe</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getProfile })(UserProfile);
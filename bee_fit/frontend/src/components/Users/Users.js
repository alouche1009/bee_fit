import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersInfos } from '../../actions/users';

export class Users extends Component {
    static propTypes = {
      users : PropTypes.array.isRequired,
      getUsersInfos: PropTypes.func.isRequired,
    };
    componentDidMount() {
        this.props.getUsersInfos();
      }
  
    render() {
      return (
        <Fragment>
          <h2>Profil</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>sexe</th>
                <th>taille</th>
                <th>poids</th>
                <th>objectif_poids</th>
                <th>expected_calories</th>
                <th>allergies</th>
                <th>diabetique</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.sexe}</td>
                  <td>{user.taille}</td>
                  <td>{user.poids}</td>
                  <td>{user.objectif_poids}</td>
                  <td>{user.expected_calories}</td>
                  <td>{user.allergies}</td>
                  <td>{user.diabetique}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    users: state.users.users,
  });
  
  export default connect(mapStateToProps, { getUsersInfos })(users);
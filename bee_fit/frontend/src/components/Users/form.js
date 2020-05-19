import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUsersInfos } from '../../actions/users';

export class Form extends Component {
  state = {
    age = '',
    sexe = '',
    taille = '',
    poids = '',
    objectif_poids = '',
    expected_calories = '',
    allergies = '',
    diabetique = '',

  static propTypes = {
    addUsersInfos: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { age, sexe, taille, poids, objectif_poids, expected_calories, allergies, diabetique } = this.state;
    const users = { age, sexe, taille, poids, objectif_poids, expected_calories, allergies, diabetique };
    this.props.addUsersInfos(user);
    this.setState({
        age = '',
        sexe = '',
        taille = '',
        poids = '',
        objectif_poids = '',
        expected_calories = '',
        allergies = '',
        diabetique = '',
    });
  };

  render() {
    const { age, sexe, taille, poids, objectif_poids, expected_calories, allergies, diabetique } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Infos</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Age</label>
            <input
              className="form-control"
              type="text"
              name="age"
              onChange={this.onChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <label>Sexe</label>
            <input
              className="form-control"
              type="text"
              name="sexe"
              onChange={this.onChange}
              value={sexe}
            />
          </div>
          <div className="form-group">
            <label>Taille</label>
            <textarea
              className="form-control"
              type="text"
              name="taille"
              onChange={this.onChange}
              value={taille}
            />
          </div>
          <div className="form-group">
            <label>Poids</label>
            <textarea
              className="form-control"
              type="text"
              name="poids"
              onChange={this.onChange}
              value={poids}
            />
          </div>
          <div className="form-group">
            <label>Objectif poids</label>
            <textarea
              className="form-control"
              type="text"
              name="objectif_poids"
              onChange={this.onChange}
              value={objectif_poids}
            />
          </div>
          <div className="form-group">
            <label>Expected calories</label>
            <textarea
              className="form-control"
              type="text"
              name="expected_calorires"
              onChange={this.onChange}
              value={expected_calories}
            />
          </div>
          <div className="form-group">
            <label>Allergies</label>
            <textarea
              className="form-control"
              type="text"
              name="allergies"
              onChange={this.onChange}
              value={allergies}
            />
          </div>
          <div className="form-group">
            <label>Diabetique</label>
            <textarea
              className="form-control"
              type="text"
              name="diabetique"
              onChange={this.onChange}
              value={diabetique}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addUsersInfos })(Form);
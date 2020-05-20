import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUsersInfos } from '../../actions/infos';

export class Form extends Component {
  state = {
    age: '',
    sexe: '',
    taille: '',
    poids: '',
    objectif_poids: '',
    allergies: '',
    diabetique: '',
  };

  static propTypes = {
    addUsersInfos: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { age, sexe, taille, poids, objectif_poids, allergies, diabetique } = this.state;
    const info = { age, sexe, taille, poids, objectif_poids, allergies, diabetique };
    this.props.addUsersInfos(info);
    this.setState({
      age: '',
      sexe: '',
      taille: '',
      poids: '',
      objectif_poids: '',
      allergies: '',
      diabetique: '',
    });
  };

  render() {
    const { age, sexe, taille, poids, objectif_poids, allergies, diabetique } = this.state;
    return (
      <div class="card" style={{ marginTop: '4rem'}}>
        <h5 class="card-header info-color white-text text-center py-4">
        <strong>Mettre à jour mes informations</strong>
    </h5>
    <div class="card-body px-lg-5">
        <form onSubmit={this.onSubmit} class="text-center" style={{ marginTop: '2rem'}}>
        <p>Entrez ici vos informations pour un suivi personnalisé</p>
          <div class = "md-form mt-5">
            <input
              className="form-control"
              type="text"
              name="age"
              onChange={this.onChange}
              value={age}
              placeholder ="Age"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}
            />
          </div>
          <div className="md-form mt-5">
          <label>Genre</label>
            <select
              className="form-control"
              name="sexe"
              onChange={this.onChange}
              value={sexe}
              placeholder ="Genre"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}

              >
              <option ></option>
              <option value="FEMME">Femme</option>
              <option value="HOMME">Homme</option>
              <option value="NON BINAIRE">Non binaire</option>
              
            </select>
          </div>
          <div className="md-form mt-5">
            <input
              className="form-control"
              type="text"
              name="taille"
              onChange={this.onChange}
              value={taille}
              placeholder ="Taille (cm)"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}


            />
          </div>
          <div className="md-form mt-5">
            <input
              className="form-control"
              type="text"
              name="poids"
              onChange={this.onChange}
              value={poids}
              placeholder ="Poids (Kg)"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}

            />
          </div>
          <div className="md-form mt-5">
            <input
              className="form-control"
              type="text"
              name="objectif_poids"
              onChange={this.onChange}
              value={objectif_poids}
              placeholder ="Mon poids idéal (Kg)"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}


            />
          </div>
          <div className="md-form mt-5">
            <label>Mes allergies</label>
              <select
              className="form-control"
              name="allergies"
              onChange={this.onChange}
              value={allergies}
              placeholder ="Mes allergies"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}

              >
              <option ></option>
              <option value="LACTOSE">Lactose</option>
              <option value="GLUTEN">Gluten</option>
              <option value="VEGETALIEN">Végétalien</option>
              <option value="VEGETARIEN">Végétarien</option>
              <option value="ARACHIDES">Arachides</option>
              <option value="FRUITS DE MER">Fruits de mer</option>
            </select>
          </div>
          <div className="md-form mt-5">
          <label>Je suis diabétique</label>
            <select
              className="form-control"
              name="diabetique"
              onChange={this.onChange}
              value={diabetique}
              placeholder ="Je suis diabétique"
              style={{border: 0,  borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}

              >
              <option ></option>
              <option value="OUI">Oui</option>
              <option value="NON">Non</option>
            </select>
          </div>

          <div className="md-form mt-5">
            <button onClick={this.onSubmit} style = {{ background: '#000000',
    color: '#FFFFFF', width :'60%', font: "metropolis-bold",   fontSize: '1.2rem',
    letterSpacing: '.3rem',
    height: '3rem',
    lineHeight: '3rem',
    padding: '0 3rem',
    margin: '0 .3rem 1.2rem 0'}}>
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addUsersInfos })(Form);
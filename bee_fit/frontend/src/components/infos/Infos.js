import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersInfos, deleteUsersInfos } from '../../actions/infos';

export class Infos extends Component {
  static propTypes = {
    infos: PropTypes.array.isRequired,
    getUsersInfos: PropTypes.func.isRequired,
    deleteUsersInfos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUsersInfos();
  }


  render() {
    return (
      <Fragment>
        <div class="card" style={{ marginTop: '4rem' }}>
          <h5 class="card-header info-color white-text text-center py-4">
            <strong>Mes infos</strong>
          </h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Age</th>
                <th>Sexe</th>
                <th>Taille</th>
                <th>poids</th>
                <th>objectif_poids</th>
                <th>expected_calories</th>
                <th>allergies</th>
                <th>diabetique</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.infos.map((info) => (
                <tr key={info.id}>
                  <td>{info.age}</td>

                  <td>{info.sexe}</td>
                  <td>{info.taille}</td>
                  <td>{info.poids}</td>
                  <td>{info.objectif_poids}</td>
                  <td>{info.expected_calories}</td>
                  <td>{info.allergies.toString()}</td>
                  <td>{info.diabetique}</td>
                  <td>
                  </td>
                  <button
                    onClick={this.props.deleteUsersInfos.bind(this, info.id)}
                    style={{
                      background: '#000000',
                      color: '#FFFFFF', width: '100%'
                    }}
                  >
                    {' '}
                    Supprimer
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  infos: state.infos.infos
});

export default connect(mapStateToProps, { getUsersInfos, deleteUsersInfos })(Infos);
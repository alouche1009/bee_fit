import axios from 'axios';
import { GET_USERS_INFOS, ADD_USERS_INFOS, DELETE_USERS_INFOS } from './types';
import { createMessage, returnErrors } from './messages';


export const getUsersInfos = () => dispatch => {
  axios.get('/api/infos/')
    .then(res => {
      dispatch({
        type: GET_USERS_INFOS,
        payload: res.data
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addUsersInfos = (info) => (dispatch) => {
  axios
    .post('/api/infos/', info)
    .then((res) => {
      dispatch(createMessage({ addUsersInfos: 'Vos informations ont bien été ajoutées' }));
      dispatch({
        type: ADD_USERS_INFOS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteUsersInfos = id => dispatch => {
  axios.delete(`/api/infos/${id}`)
    .then(res => {
      dispatch(createMessage({ deleteUsersInfos: 'Vos informations ont bien été supprimées' }));
      dispatch({
        type: DELETE_USERS_INFOS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
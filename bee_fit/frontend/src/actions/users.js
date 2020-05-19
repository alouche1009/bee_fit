import axios from 'axios';
import { GET_USERS_INFOS, ADD_USERS_INFOS } from './types';


export const getUsersInfos = () => dispatch => {
    axios.get('/api/Users/')
        .then(res => {
            dispatch({
                type: GET_USERS_INFOS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const addUsersInfos = (user) => (dispatch, getState) => {
    axios
      .post('/api/Users/', user)
      .then(res => {
        dispatch({
          type: ADD_USERS_INFOS,
          payload: res.data,
        });
      })
      .catch(err => console.log(err));
    };
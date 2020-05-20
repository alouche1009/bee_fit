import axios from 'axios';
import { GET_USERS_INFOS, ADD_USERS_INFOS, DELETE_USERS_INFOS } from './types';


export const getUsersInfos = () => dispatch => {
    axios.get('/api/infos/')
        .then(res => {
            dispatch({
                type: GET_USERS_INFOS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const addUsersInfos = (info) => (dispatch) => {
  axios
    .post('/api/infos/', info)
    .then((res) => {
      dispatch({
        type: ADD_USERS_INFOS,
        payload: res.data,
      });
    })
		.catch(err => console.log(err.response.data))
};
export const deleteUsersInfos = id => dispatch => {
	axios.delete(`/api/infos/${id}`)
    .then(res => {
      dispatch({
			type: DELETE_USERS_INFOS,
			payload: id
    });
  })
		.catch(err => console.log(err))
}

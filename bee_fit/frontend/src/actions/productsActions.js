import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_PRODUCTS, FIND_PRODUCTS } from './types';


  export function getProducts(dispatch) {
    return axios.get(`http://127.0.0.1:8000/api/products/`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
      .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export function findProducts(dispatch, product_name) {
  return axios.get(`http://127.0.0.1:8000/api/products/?search=${product_name}`)
  .then((res) => {
    dispatch({
      type: FIND_PRODUCTS,
      payload: res.data,
    });
  })
    .catch((err) => {
          dispatch(returnErrors(err.response.data, err.response.status));
      });
}
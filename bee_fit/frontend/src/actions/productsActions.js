import axios from 'axios';
import { returnErrors } from './messagesActions';
import { ProdTypes } from '../constants/actionsTypes';

  export function getProducts(dispatch) {
    return axios.get(`http://127.0.0.1:8000/products/`)
    .then((res) => {
      dispatch({
        type: ProdTypes.GET_PRODUCTS,
        payload: res.data,
      });
    })
      .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export function findProducts(dispatch, product_name) {
  return axios.get(`http://127.0.0.1:8000/products/?search=${product_name}`)
  .then((res) => {
    dispatch({
      type: ProdTypes.FIND_PRODUCTS,
      payload: res.data,
    });
  })
    .catch((err) => {
          dispatch(returnErrors(err.response.data, err.response.status));
      });
}

export function productDetails(dispatch, id) {
  return axios.get(`http://127.0.0.1:8000/products/${id}`)
  .then((res) => {
    dispatch({
      type: ProdTypes.PRODUCT_DETAILS,
      payload: res.data,
    });
  })
    .catch((err) => {
          dispatch(returnErrors(err.response.data, err.response.status));
      });
}
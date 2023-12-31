import axios from 'axios';
import { PRODUCT_LIST_REQUEST, 
      PRODUCT_LIST_SUCCESS,
      PRODUCT_LIST_FAIL,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL } from '../constants/productConstants';
import { useParams } from 'react-router-dom';

export const listProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get('https://mern-commerce-backend-y0vs.onrender.com/api/products');
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};


export const listProductDetails = (id) => {
     
    return async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`https://mern-commerce-backend-y0vs.onrender.com/api/products/${id}`);
        dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };
  

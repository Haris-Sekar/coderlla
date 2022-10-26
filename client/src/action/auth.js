import * as api from '../api/index'
import { AUTH } from '../constants/actionTypes';

export const logIn = (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.logIn(formData);
      console.log(data);
      dispatch({ type: AUTH, data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signUp = (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      console.log(data);
      dispatch({ type: AUTH, data });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
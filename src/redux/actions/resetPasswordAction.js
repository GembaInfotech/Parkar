import * as api from '../api/resetpasswordAPI';
import * as types from "../constants/resetPasswordConstants"

export const forgotAction = (email, navigate) => async (dispatch) => {
  try {
    console.log(email);
    const { error, data } = await api.forgotPassword(email);
 
    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.FORGOT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.FORGOT_FAIL,
      payload: error.message,
    });
  }
  
};
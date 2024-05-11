import * as api from "../api/paymentAPI";
import * as types from "../constants/paymentConstant";

try {
    const { error, data } = await api.searchParkings(place,latitude, longitude, type);
 
    if (error) {
      throw new Error(error);
    }
    console.log(data);

    dispatch({
      type: types.SEARCH_PARKINGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: types.SEARCH_PARKINGS_FAIL,
      payload: error.message,
    });
  }
  const response = await axios.post(`${API_BASE_URL}/api/booking/payments/${data}`, config);

  export const createPayment = (data) => async (dispatch) => {
    
    console.log("create payment data ",data)
    try {
      dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
     console.log("hello")
      const response = await axios.post(`${API_BASE_URL}/api/booking/payments/${data}`, config);
  console.log("datta",response.data.data)
  
  if(response?.data?.data?.payment_link_url){
    window.location.href=response.data.data.payment_link_url;
  }
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        
        type: CREATE_PAYMENT_FAILURE,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  



  export const updatePayment = (reqData) => {
    return async (dispatch) => {
      console.log("update payment reqData ",reqData)
      dispatch(updatePaymentRequest());
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${reqData.jwt}`,
          },
        };
        const response = await axios.get(`${API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,config);
        console.log("updated data ---- ",response.data)
        dispatch(updatePaymentSuccess(response.data));
      } catch (error) {
        dispatch(updatePaymentFailure(error.message));
        console.log("catch error ",error)
      }
    };
  };

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};

 
  
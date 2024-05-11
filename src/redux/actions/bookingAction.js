import * as api from "../api/bookingAPI";
import * as types from "../constants/bookingConstant";

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    const { error, data } = await api.createBooking(bookingData);
 
    if (error) {
      throw new Error(error);
    }
    console.log(data);

    dispatch({
      type: types.CREATE_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.CREATE_BOOKING_FAIL,
      payload: error.message,
    });
  }
};
export const saveBookingData = (data) => ({
    type: types.BOOKING_DATA_SAVED,
    payload: data,
  });
  
  export const getBookingAction = () => async (dispatch) => {
    try {
      console.log("ni ")
      const { error, data } = await  api.getBookings();
      
      if (error) {
        throw new Error(error);
      }
      console.log("data", data)
    try{
              
      dispatch({
        type: types.GET_BOOKINGS_SUCCESS,
        payload: data,
        meta: {
          requiresAuth: true,
        },
      });
      console.log("succcess")
    }
    catch(err)
    {
      console.log(err)
    }
      
    } catch (error) {
      dispatch({
        type: types.GET_BOOKINGS_FAIL,
        payload: error.message,
        meta: {
          requiresAuth: true,
        },
      });
    }
  };
  
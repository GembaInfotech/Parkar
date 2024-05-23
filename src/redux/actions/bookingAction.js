import * as api from "../api/bookingAPI";
import * as types from "../constants/bookingConstant";

export const createBookingAction = (bookingData, navigate) => async (dispatch) => {
  try {
    const { error, data } = await api.createBooking(bookingData);
 
    if (error) {
      throw new Error(error);
    }

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

export const confirmBookingAction = (createdBooking) => async (dispatch) => {
  try {
    const id = createdBooking.booking._id
  
    const { error, data } = await api.confirmBooking(id);
 
    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.CONFIRM_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.CONFIRM_BOOKING_FAIL,
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
      const { error, data } = await  api.getBookings();
      
      if (error) {
        throw new Error(error);
      }
    try{
              
      dispatch({
        type: types.GET_BOOKINGS_SUCCESS,
        payload: data,
        meta: {
          requiresAuth: true,
        },
      });
    }
    catch(err)
    {
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
  
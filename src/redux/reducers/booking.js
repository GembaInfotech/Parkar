import * as types from "../constants/bookingConstant";
import { LOGOUT } from "../constants/authConstants";

const initialState = {
 
  bookings:[],
  booking:{},
  bookingPayload:{},
  bookingError:null,
  createBookingSuccess:null,
  createBookingError:null

};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type , payload)

  switch (type) {
    case LOGOUT:
      return {
        ...state,
        bookings:[],
        booking:{},
        bookingPayload:{},
        bookingError:null
       
      };
    case types.CREATE_BOOKING_SUCCESS:
        return{
            ...state,
            createBookingSuccess:payload?payload: null,
            bookingError:null
        } 
        case types.GET_BOOKINGS_SUCCESS:
          return{
              ...state,
              bookings:payload?payload.data: [null],
              bookingError:null
          } 
        case types.BOOKING_DATA_SAVED:
            return{
                ...state,
                bookingPayload:payload?payload: null,
            } 
        case types.GET_BOOKINGS_SUCCESS:
        return{
            ...state,
            bookings:payload?payload: null,
            bookingError:null
        } 
    case types.CREATE_BOOKING_FAIL:
      return {
        ...state,
        createBookingError: null,
        bookingError: null,
      };
  
    

   
      default:
      return state;
  }
};

export default bookingReducer;

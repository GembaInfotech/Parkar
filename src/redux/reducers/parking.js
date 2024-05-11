import * as types from "../constants/parkingConstant";
import { LOGOUT } from "../constants/authConstants";

const initialState = {
  parking: {},
  parkings: [],
  selected:{},
  parkingsError:null
};

const parkingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      return {
        ...state,
      parking:null,
      parkings:[]
      };

    case types.SEARCH_PARKINGS_SUCCESS:
      return { ...state, parkings: payload, userError: null };

    case types.SEARCH_PARKINGS_FAIL:
      return { ...state, userError: payload };
      
     case types.GET_PARKING_BY_ID:
      const selectedParking = state.parkings.find(parking => parking._id === payload);
      return {
        ...state,
        parking: selectedParking ? selectedParking : {},
      };
      case types.SELECTED_PARKING_SAVED:
        return {
          ...state,
          selected: payload? payload : {},
        };
        
  

    default:
      return state;
  }
};

export default parkingReducer;

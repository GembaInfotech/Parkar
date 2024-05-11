import * as types from "../constants/vehicleConstants";
import { LOGOUT } from "../constants/authConstants";

const initialState = {
  vehicle:null,
  vehicles:[],
  vehicleData: null,
  vehicleList: null,
  vehicleError:null
  

};

const vehicleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type , payload)

  switch (type) {
    case LOGOUT:
      return {
        ...state,
        vehicles: [],
        vehicleError: null,
       
      };
    case types.UPDATE_VEHICLE_SUCCESS:
        return{
            ...state,
            vehicleList:payload?payload: [],
            vehicleError:null
        } 
    case types.CREATE_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicles: payload ? payload : null,
        vehicleError: null,
      };
    case types.UPDATE_VEHICLE_FAIL:
        return {
          ...state,
      vehicleError: payload,
        };
    case types.CREATE_VEHICLE_FAIL:
      return {
        ...state,
    vehicleError: payload,
      };
      case types.GET_VEHICLE_FAIL:
      return {
        ...state,
    vehicleError: payload,
      };
      case types.GET_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicleList : payload ?  payload: [],
        vehicleError: null,
      };

   
      default:
      return state;
  }
};

export default vehicleReducer;

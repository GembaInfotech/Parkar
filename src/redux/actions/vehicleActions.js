import * as api from "../api/vehicleAPI";
import * as types from "../constants/vehicleConstants";

export const createVehicleAction = (vehicle) => async (dispatch) => {
  try {
    const { error, data } = await  api.createVehicle(vehicle);
    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.CREATE_VEHICLE_SUCCESS,
      payload: data,
      meta: {
        requiresAuth: true,
      },
    });
  } catch (error) {
    dispatch({
      type: types.CREATE_VEHICLE_FAIL,
      payload: error.message,
      meta: {
        requiresAuth: true,
      },
    });
  }
};

export const updateVehicleAction = (vehicle) => async (dispatch) => {
  try {
    console.log("ni ")
    const { error, data } = await  api.updateVehicle(vehicle);
    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.UPDATE_VEHICLE_SUCCESS,
      payload: data,
      meta: {
        requiresAuth: true,
      },
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_VEHICLE_FAIL,
      payload: error.message,
      meta: {
        requiresAuth: true,
      },
    });
  }
};

export const getVehicleAction = () => async (dispatch) => {
  try {
    console.log("ni ")
    const { error, data } = await  api.getVehicle();
    
    if (error) {
      throw new Error(error);
    }
    console.log("data", data)
  try{
            
    dispatch({
      type: types.GET_VEHICLE_SUCCESS,
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
      type: types.UPDATE_VEHICLE_FAIL,
      payload: error.message,
      meta: {
        requiresAuth: true,
      },
    });
  }
};


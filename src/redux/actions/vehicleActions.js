import * as api from "../api/vehicleAPI";
import * as types from "../constants/vehicleConstants";

export const createVehicleAction = ({vehicleName, vehicleNumber, vehicleType, isDefault}) => async (dispatch) => {
  try {
    const { error, data } = await  api.createVehicle({vehicleName, vehicleNumber, vehicleType, isDefault});
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


export const selectVehicleAction = (id) => ({
  type: types.SELECTED_VEHICLE_SAVED,
  payload: id,
});

export const updateVehicleAction = ({
  id, 
  vehicle_name, 
  vehicle_number, 
  vehicle_type,
  isDefault 
}) => async (dispatch) => {
  try {
    const { error, data } = await  api.updateVehicle( id, 
      vehicle_name, 
      vehicle_number, 
      vehicle_type,
      isDefault,
     );
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

export const getVehicleAction = ({page, limit}) => async (dispatch) => {
  try {
    const { error, data } = await  api.getVehicle(page, limit);
    
    if (error) {
      throw new Error(error);
    }
  try{
            
    dispatch({
      type: types.GET_VEHICLE_SUCCESS,
      payload: data,
      meta: {
        requiresAuth: true,
      },
    });
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
export const deleteVehicleAction = (id) => async (dispatch) => {
  try {
    const { error, data } = await  api.deleteVehicle(id);
    
    if (error) {
      throw new Error(error);
    }
 
    
  } catch (error) {
   console.log("error" , error)
  }
};



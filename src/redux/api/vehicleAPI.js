import { API, handleApiError } from "./utils";
import { APIS } from "../../Constants/api.constant";

export const createVehicle = async ({ vehicleName, vehicleNumber, vehicleType, isDefault }) => {
  try {
    const vehicle = {
      vehicle_name: vehicleName,
      vehicle_number: vehicleNumber,
      vehicle_type: vehicleType,
      isDefault: isDefault
    }
    const { data } = await API.post(`${APIS.CREATE_VEHICLE}`, { vehicle },);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateVehicle = async (id,
  vehicle_name,
  vehicle_number,
  vehicle_type,
  isDefault,
) => {
  try {
    const { data } = await API.put(`${APIS.UPDATE_VEHICLE}/${id}`, {
      vehicle_name,
      vehicle_number,
      vehicle_type,
      isDefault
    },
    );
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getVehicle = async (page, limit) => {
  try {
    const { data } = await API.get(`${APIS.VIEW_VEHICLE_LIST}?page=${page}&limit=${limit}`
    );
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const deleteVehicle = async (id) => {
  try {
    const { data } = await API.put(`${APIS.DELETE_VEHICLE}/${id}`
    );
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

import { API, handleApiError } from "./utils";

export const createVehicle = async ({vehicleName, vehicleNumber, vehicleType,isDefault}) => {
  try {
    const vehicle ={
        vehicle_name:vehicleName,
        vehicle_number:vehicleNumber,
        vehicle_type:vehicleType,
        isDefault:isDefault
    }
    console.log(vehicle)
    const {data} = await API.post(`/vehicle/create-new-vehicle`,  {vehicle},);
     console.log(data)
    
    return { error: null, data };
  } catch (error) {
    console.log(error.message)

    return handleApiError(error);
  }
};

export const updateVehicle = async ( id, 
  vehicle_name, 
  vehicle_number, 
  vehicle_type,
  isDefault,
 ) => {
    try {
      const {data} = await API.put(`/vehicle/update-vehicle/${id}`, {vehicle_name, 
        vehicle_number, 
        vehicle_type,
        isDefault}, 
       );
       console.log(data)
      
      return { error: null, data };
    } catch (error) {
      console.log(error.message)
  
      return handleApiError(error);
    }
  };

export const getVehicle = async (page, limit) => {
    try {
     
      const {data} = await API.get(`/vehicle/view-vehicle-list?page=${page}&limit=${limit}` 
       );
      
      return { error: null, data };
    } catch (error) {
  
      return handleApiError(error);
    }
  };
  export const deleteVehicle = async (id) => {
    try {
      const {data} = await API.put(`/vehicle/delete-vehicle/${id}` 
       );
      return { error: null, data };
    } catch (error) {
  
      return handleApiError(error);
    }
  };

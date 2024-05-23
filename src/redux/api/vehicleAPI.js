import { API, handleApiError } from "./utils";

export const createVehicle = async () => {
  try {
    const vehicle ={
        vehicle_name:"santro",
        vehicle_number:"mh06hg2180",
        vehicle_type:"four wheeler",
        isDefault:true
    }
    console.log(vehicle)
    const {data} = await API.post(`/vehicle/create-new-vehicle`,  {vehicle}, 
   
    
     );
     console.log(data)
    
    return { error: null, data };
  } catch (error) {
    console.log(error.message)

    return handleApiError(error);
  }
};

export const updateVehicle = async () => {
    try {
      const vehicle ={
        
          vehicle_number:"chcg002022",
      
      }
      console.log(vehicle)
      const {data} = await API.put(`/vehicle/update-vehicle/663b417a63c1a3842a7228ed`,  {vehicle}, 
     
      
       );
       console.log(data)
      
      return { error: null, data };
    } catch (error) {
      console.log(error.message)
  
      return handleApiError(error);
    }
  };

// export const setVehicleDefault = async () => {
//     try {
//       const vehicle ={
//           vehicle_name:"tiago",
//           vehicle_number:"chcg02020",
//           vehicle_type:"four wheeler"
//       }
//       console.log(vehicle)
//       const {data} = await API.put(`/vehicle/set-vehicle-default`,  {vehicle}, 
     
      
//        );
//        console.log(data)
      
//       return { error: null, data };
//     } catch (error) {
//       console.log(error.message)
  
//       return handleApiError(error);
//     }
//   };
  
export const getVehicle = async () => {
    try {
     
      const {data} = await API.get(`/vehicle/view-vehicle-list` 
       );
      
      return { error: null, data };
    } catch (error) {
  
      return handleApiError(error);
    }
  };




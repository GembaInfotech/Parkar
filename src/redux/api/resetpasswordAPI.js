import { API, handleApiError } from "./utils";
import { APIS } from "../../Constants/api.constant";

export const forgotPassword = async (email) => {
  try {
    const {data} = await API.post(`${APIS.FORGET_PASSWORD}`,  {email}, 
     );
    
    return { error: null, data };
  } catch (error) {

    return handleApiError(error);
  }
};

// export const updateUser = async (id, formData) => {
//   try {
//     const { data } = await API.put(`/users/${id}`, formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return { error: null, data };
//   } catch (error) {
//     return handleApiError(error);
//   }
// };







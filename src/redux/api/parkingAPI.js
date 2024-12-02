import { API, handleApiError } from "./utils";
import { APIS } from "../../Constants/api.constant";

export const searchParkings = async (locationQuery, latitude, longitude, type, outTime, inTime) => {
  try {
    console.log(outTime);
    const { data } = await API.get(`${APIS.SEARCH_PARKING}?place=${locationQuery}&latitude=${latitude}&longitude=${longitude}&type=${type}&outTime=${outTime}&inTime=${inTime}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getParking = async (id, inT, ouT) => {
  try {
    console.log("intime", inT,"outtime", ouT);
    
    const { data } = await API.get(`${APIS.GET_PARKING}/${id}?inT=${inT}&ouT=${ouT}`);
    console.log(data)
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};



// export const getSingleParking = async () => {
//   try {
//     const { data } = await API.put(`/parking/${id}`, formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return { error: null, data };
//   } catch (error) {
//     return handleApiError(error);
//   }
// };

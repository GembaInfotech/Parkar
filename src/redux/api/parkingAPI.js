import { API, handleApiError } from "./utils";

export const searchParkings = async (locationQuery, latitude, longitude, type) => {
  try {
    const { data } = await API.get(`/parking/search?place=${locationQuery}&latitude=${latitude}&longitude=${longitude}&type=${type}`);
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

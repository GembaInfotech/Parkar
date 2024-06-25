import { API, handleApiError } from "./utils";

export const createBooking = async (bookingData) => {
  try {
    const {data} = await API.post(`/booking/create-new-booking`,  {bookingData}, 
     );
    
    return { error: null, data };
  } catch (error) {

    return handleApiError(error);
  }
};


export const cancelBooking = async (id, transactionId) => {
  try {
    const {data} = await API.put(`/booking/cancel-booking/${id}`, {transactionId}, 
     );
    
    return { error: null, data };
  } catch (error) {

    return handleApiError(error);
  }
};

export const confirmBooking = async (id) => {
  try {
    const {data} = await API.put(`/booking/confirm-booking/${id}`
     );
    
    return { error: null, data };
  } catch (error) {

    return handleApiError(error);
  }
};
export const getBookings = async () => {
  try {
    const {data} = await API.get(`/booking/view-booking-list` 
     );
    
    return { error: null, data };
  } catch (error) {

    return handleApiError(error);
  }
};


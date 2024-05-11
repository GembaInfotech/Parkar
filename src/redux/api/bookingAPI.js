import { API, handleApiError } from "./utils";

export const createBooking = async (bookingData) => {
  try {

    const {data} = await API.post(`/booking/create-new-booking`,  {bookingData}, 
     );
     console.log(data)
    
    return { error: null, data };
  } catch (error) {
    console.log(error.message)

    return handleApiError(error);
  }
};
export const getBookings = async () => {
  try {
   console.log("Called")
    const {data} = await API.get(`/booking/view-booking-list` 
     );
     console.log(data)
    
    return { error: null, data };
  } catch (error) {
    console.log(error.message)

    return handleApiError(error);
  }
};


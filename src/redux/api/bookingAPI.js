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
export const getBookings = async (status, pageNumber, pageLimit) => {
  try {
    // Create query parameters dynamically based on whether the values are provided
    let queryParams = [];

    if (status) {
      queryParams.push(`status=${status}`);
    }

    if (pageNumber) {
      queryParams.push(`page=${pageNumber}`);
    }

    if (pageLimit) {
      queryParams.push(`limit=${pageLimit}`);
    }

    // Join query parameters with '&'
    const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';

    // Make the API request with the constructed query string
    const { data } = await API.get(`/booking/view-booking-list${queryString}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};


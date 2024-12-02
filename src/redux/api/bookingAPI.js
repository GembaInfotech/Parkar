import { API, handleApiError } from "./utils";
import { APIS } from "../../Constants/api.constant";

export const createBooking = async (bookingData) => {
  try {
    const {data} = await API.post(`${APIS.CREATE_BOOKING}`,  {bookingData}, 
     );
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const cancelBooking = async (id, transactionId) => {
  try {
    const {data} = await API.put(`${APIS.CANCEL_BOOKING}/${id}`, {transactionId}, 
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
    const { data } = await API.get(`${APIS.VIEW_BOOKING_LIST}${queryString}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};


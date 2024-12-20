import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { LuParkingCircle } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
// import { cancelBookingAction } from '../../redux/actions/bookingAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appConfig from "../../Config/app.config"


const BookingCard = ({ data }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const response = useSelector((state) => state?.bookings?.responseMsg);
  console.log(response);
  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

console.log("data", data)
const handleConfirmCancel = async (id, transactionId) => {
  try {
    const response = await axios.put(`${appConfig.apiBaseUrl}booking/cancel-booking/${id}`, {
      transactionId, 
    });

    // Display success or info messages from backend in a prompt popup
    if (response?.data?.message) {
      alert(response.data.message);
    } else if (response?.data?.msg) {
      alert(response.data.msg);
    }

    setShowConfirmation(false);
  } catch (error) {
    console.error("Cancellation failed:", error);

    // Show specific error message from backend, if available
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); // Display backend message in a prompt popup
    } else {
      alert('Cancellation failed. Please try again.'); // Default error message
    }

    setShowConfirmation(false);
  }
};

  const handleClosePopup = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="w-full sm:w-[30vw]">
      <ToastContainer />
      <div className="bg-[#1034A6] text-white shadow-lg rounded-md p-4 mb-4">
        <div className="text-xs sm:text-sm flex">
          <LuParkingCircle className="text-2xl sm:text-[32px] mr-2 mb-1" />
          <h1 className="text-sm sm:text-xl font-bold font-nonitu pb-1">
            {data?.parkingName}
          </h1>
        </div>
        <div className="justify-center text-xs sm:text-sm">
          <div className="flex justify-between items-center">
            <p>Price</p>
            <p>Rs. {data?.totalPrice}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Status</p>
            <p className="text-green-500">{data?.status}</p>
          </div>
          <div className="flex justify-between max-sm:items-start items-center">
            <p>Arrival</p>
            <p>{format(new Date(data?.inTime), "EE dd MMMM hh:mm aa")}</p>
          </div>
          <div className="flex justify-between max-sm:items-start items-center">
            <p>Departure</p>
            <p>{format(new Date(data?.outTime), "EE dd MMMM hh:mm aa")}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Vehicle</p>
            <p>{data?.vehicle?.number}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Transaction ID</p>
            <p>{data?.transaction_id}</p>
          </div>

          {data?.status === 'Confirmed' && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCancelClick}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel Booking
              </button>
            </div>
          )}
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">Are you sure you want to cancel your booking?</h2>
            <div className="flex justify-between">
              <button
                onClick={() => handleConfirmCancel(data._id, data.transaction_id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Continue
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookingCard;

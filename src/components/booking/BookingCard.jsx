import React, { useState } from 'react';
import { format } from 'date-fns';
import { LuParkingCircle } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { cancelBookingAction } from '../../redux/actions/bookingAction';

const BookingCard = ({ data }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmCancel = async (id, transactionId) => {
    try {
      await dispatch(cancelBookingAction(id, transactionId));
      setShowConfirmation(false);
      window.location.reload();
    } catch (error) {
      console.error("Cancellation failed:", error);
      // Optionally handle the error, e.g., show a message to the user
    }
  };

  const handleClosePopup = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="w-full sm:w-[30vw]">
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
            <p>{data?.vehicle_number}</p>
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

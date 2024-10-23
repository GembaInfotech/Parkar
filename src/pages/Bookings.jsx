import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookingAction } from '../redux/actions/bookingAction';
import CommonLoading from "../components/loader/CommonLoading";
import BookingCard from '../components/booking/BookingCard';
import Search from '../components/shared/Search';

const Bookings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('Confirmed');

  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10); 

  const data = useSelector((state) => state.bookings?.bookings);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(getBookingAction({
        status: selectedStatus,
        pageNumber: currentPage,
        pageLimit: bookingsPerPage
      }));
      setLoading(false);
    };
    fetchData();
  }, [selectedStatus, currentPage, dispatch]); 

  const filteredBookings = data?.data;
  const totalPages = Math.ceil(data?.pagination?.totalDocuments / bookingsPerPage); 

  const bookingCards = filteredBookings?.map((booking) => (
    <div key={booking._id} className="mb-5">
      <BookingCard data={booking} />
    </div>
  ));

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }

  return (
    <div>
      <Search />
      <div className="flex justify-around my-4">
        <button
          onClick={() => handleStatusChange('Confirmed')}
          className={`px-4 py-2 ${selectedStatus === 'Confirmed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Confirmed
        </button>
        <button
          onClick={() => handleStatusChange('Parked')}
          className={`px-4 py-2 ${selectedStatus === 'Parked' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Parked
        </button>
        <button
          onClick={() => handleStatusChange('Completed')}
          className={`px-4 py-2 ${selectedStatus === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
        <button
          onClick={() => handleStatusChange('Cancelled')}
          className={`px-4 py-2 ${selectedStatus === 'Cancelled' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Cancelled
        </button>
      </div>

      <div className="main-section grid grid-cols-1 sm:grid-cols-2 gap-0 overflow-y-auto max-h-screen">
        {bookingCards?.length > 0 ? bookingCards : <p>No bookings found for {selectedStatus}</p>}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePreviousPage}
          className={`mx-2 px-3 py-1 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className={`mx-2 px-3 py-1 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Bookings;

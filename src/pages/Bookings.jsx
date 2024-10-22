import React, { useMemo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBookingAction } from '../redux/actions/bookingAction'

import CommonLoading from "../components/loader/CommonLoading";
import BookingCard from '../components/booking/BookingCard';
import { Link } from 'react-router-dom';
import Search from '../components/shared/Search';

const Bookings = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const data = useSelector((state) => state.bookings?.bookings)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getBookingAction());
      setLoading(false);
    };
    fetchData();
  }, [])
  const currentDate = new Date();

  const currentBookings = data?.filter(
    booking => booking.status !== "Completed" && (booking.status === "Confirmed" || booking.status === "Parked")
  );
  const pastBookings = data?.filter(booking => booking.status == "Completed");
  const cancelBookings = data?.filter(booking => booking.status == "Cancelled");

  const pastCards = useMemo(() => {
    if (!data) {
      return null;
    }
    return pastBookings?.map((booking) => (
      <div key={booking._id} className=" ">
        <BookingCard className="mb-5" data={booking} />
      </div>
    ));
  }, [data]);
  const currentCards = useMemo(() => {
    if (!data) {
      return null;
    }
    return currentBookings?.map((booking) => (
      <div key={booking._id} className=" ">
        <BookingCard className="mb-5" data={booking} />
      </div>
    ));
  }, [data]);

  const cancelCards = useMemo(() => {
    if (!data) {
      return null;
    }
    return cancelBookings?.map((booking) => (
      <div key={booking._id} className=" ">
        <BookingCard className="mb-5" data={booking} />
      </div>
    ));
  }, [data]);

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
      <h2 className='h3-phone text-blue-900 font-bold'>Current Bookings</h2>
      <div className="main-section grid grid-cols-1 sm:grid-cols-2  gap-0 overflow-y-auto max-h-screen">{currentCards}</div>
      <h2 className='h3-phone text-blue-900 font-bold'>Completed Bookings</h2>
      <div className="main-section grid grid-cols-1 sm:grid-cols-2  gap-0 overflow-y-auto max-h-screen">{pastCards}</div>
      <h2 className='h3-phone text-blue-900 font-bold'>Cancelled Bookings</h2>
      <div className="main-section grid grid-cols-1 sm:grid-cols-2  gap-0 overflow-y-auto max-h-screen">{cancelCards}</div>
    </div>

  )
}

export default Bookings
import React, {useMemo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBookingAction } from '../redux/actions/bookingAction'

import CommonLoading from "../components/loader/CommonLoading";
import BookingCard from '../components/booking/BookingCard';

const Bookings = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const data = useSelector((state)=>state.bookings?.bookings)
    useEffect(()=>{
        const fetchData = async () => {
            await dispatch(getBookingAction());
            setLoading(false);
          };
          fetchData();
    },[])

    const bookingCards = useMemo(() => {
        if (!data) {
          return null;
        }
        return data.map((booking) => (
          <div key={booking._id} className="main-section flex items-center">
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

      
{/* <ParkingRender data={data.data} /> */}
<div className="main-section">{bookingCards}</div>


  </div>
   
  )
}

export default Bookings
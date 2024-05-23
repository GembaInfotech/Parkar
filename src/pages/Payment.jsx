import React, {useEffect} from 'react'
import { confirmBookingAction } from '../redux/actions/bookingAction';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector, useDispatch
 } from 'react-redux';
import {useNavigate} from 'react-router-dom'
const Payment = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const createdBooking = useSelector(
		(state) => state.bookings?.createBookingSuccess)
  useEffect(() => {
    
    dispatch(confirmBookingAction(createdBooking))
    const timer = setTimeout(() => {
      
      navigate('/booking')
      
    }, 3000);

    // Cleanup the timer if the component is unmounted before the timeout is completed
    return () => clearTimeout(timer);
   

  }, []);
  return (
    <div className='h-screen flex  items-center justify-center'>
     
     <div className=' flex flex-col  items-center justify-center   '>
     <div className='text-center' >
      <IoMdCheckmarkCircleOutline className='text-[64px] text-green-400   ' />
     </div>
     <div>
      <h1 className='text-bold text-3xl font-nunito text-green-500 '>Payment Successful</h1>
     </div> 
     </div>

    </div>
  )
}

export default Payment
import React from 'react'
import { useSelector } from 'react-redux';
import { getBookingAction } from '../redux/actions/bookingAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const data = useSelector((state)=>state.bookings?.bookings)
  useEffect(()=>{
      const fetchData = async () => {
          await dispatch(getBookingAction({status:undefined}));
         
        };
        fetchData();
  },[])

  return (
    <div>
        
      { user.vehicle?   <div className=" flex flex-col sm:flex-row">
            <div className="flex justify-center m-2  rounded-md items-center h-20 sm:h-32 w-48 sm:w-72 bg-blue-900 text-white">
                <p>{user?.vehicle?.length} Registered Vehicles </p>
            </div>
            <div className="flex justify-center m-2  rounded-md items-center h-20 sm:h-32 w-48  sm:w-72 bg-blue-700 text-white">
                <p>{data?.pagination?.totalDocuments} Booking  </p>
            </div>
          
        </div>  : <> <h2 className='p-phone sm:text-sm'> We are currently unable to fetch Details</h2>
                        <Navigate to="/profile" /></>
                          }
    </div>
  )
}

export default Dashboard
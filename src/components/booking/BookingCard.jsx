import React from 'react'
import { format, parseISO } from 'date-fns';
import cardbackground from '../../assets/bookingcard.jpg'
import { LuParkingCircle } from "react-icons/lu";


const BookingCard = ({data}) => {
  return (
    <div class="w-full    sm:w-[30vw]"  
   >
    <div class="bg-[#1034A6] text-white  shadow-lg rounded-md p-4  mb-4 ">
       
       
    <div className='text-xs sm:text-sm flex '> 
    <LuParkingCircle className='text-2xl sm:text-[32px]  mr-2 mb-1  '/>
                <h1 className='  text-sm sm:text-xl font-bold font-nonitu pb-1'>{data?.parkingName}</h1>
              </div>
            <div className="  justify-center text-xs sm:text-sm">
        <div className="flex justify-between items-center">  <p>Price  </p>   <p>Rs. {data?.totalPrice}</p></div>   
        <div className="flex justify-between items-center">  <p>Status  </p><p className='text-green-500'>{data?.status}</p></div>             

        <div className="flex   justify-between max-sm:items-start items-center"> <p>Arrival</p>  <p>{format(data?.inTime , "EE dd MMMM hh:mm aa")}</p>
        
</div>  
           

<div className="flex   justify-between max-sm:items-start items-center"> <p>Departure</p>  <p>{format(data?.outTime , "EE dd MMMM hh:mm aa")}</p>
</div>           


        <div className="flex justify-between items-center"> <p>Vehicle</p>   <p>{data?.vehicle_number}</p></div>             

        <div className="flex justify-between items-center"> <p>Transaction ID</p>  <p>{data?.transaction_id}</p></div>             

             
             
          
        </div>
    </div>

  

   
</div>
  )
}

export default BookingCard
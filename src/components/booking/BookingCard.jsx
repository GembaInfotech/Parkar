import React from 'react'
import { format, parseISO } from 'date-fns';


const BookingCard = ({data}) => {
  return (
    <div class="min-w-fit w-1/2">
    <div class="bg-white  shadow-lg rounded-2xl p-4 mb-4 ">
       
       
    <div>
                <h1 className='text-2xl font-nonitu pb-1'>{data?.parkingName}</h1>
              </div>
            <div class=" flex justify-between ">
             
                <div class="">
                    <p>Price  {data?.totalPrice}</p>
                  
                  <p>Arrival</p>
                  <p>Departure</p>
                  <p>{data?.vehicle_name}</p>

                </div>
                <div>
                    <p>Status : <span className= {`${data?.status=="Pending" ? 'text-red-600': 'text-green-500'} `}>{data?.status}</span></p>
                  
                    <p>{format(data?.inTime , "EE dd MMMM hh:mm aa")}</p>

                    <p>{format(data?.outTime , "EE dd MMMM hh:mm aa")}</p>
                    <p>{data?.vehicle_number}</p>

                </div>
          
        </div>
    </div>

  

   
</div>
  )
}

export default BookingCard
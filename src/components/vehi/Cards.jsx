import React from 'react'
import { FaCarRear } from "react-icons/fa6";


const Cards = ({vehicle}) => {
  return (
    <div className=" w-full sm:w-[30vw] rounded-md bg-[#1034A6]  text-white overflow-hidden shadow-lg  my-2">
    <div className='flex items-center justify-between w-full'>
    <div>
      < FaCarRear className=' text-3xl sm:text-[48px] mx-2' />
     </div>
      <div className="px-6 py-4  p-phone sm:text-lg w-full">
      <div className="font-bold text-sm sm:text-xl mb-2">{vehicle.vehicle_name}</div>
    
      <p className=" ">
        <span className="font-semibold">Number:</span> {vehicle.vehicle_number}
      </p>
      <p className=" ">
        <span className="font-semibold">Type:</span> {vehicle.vehicle_type}
      </p>
      <p className=" ">
        <span className="font-semibold">Is Default:</span> {vehicle.isDefault ? 'Yes' : 'No'}
      </p>
    </div>
    </div>
     
    </div>
  )
}

export default Cards
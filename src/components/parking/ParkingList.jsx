
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
const  ParkingList =({ data }) =>{
  const navigate = useNavigate();
  const launch = ()=>{
    
  navigate(`/detail/${data.name}?city=${data.city}&id=${data._id}`)
  
  }
 
  
  return (
    <div>
      <div className="max-w-full bg-white my-1  flex  shadow dark:bg-white">
        <div className='w-96 p-4'>
       
        </div>
        <div className="py-4 w-full">
          <div className=' flex justify-between'>
            <div>
              <h3 className="  font-bold tracking-tight text-[16px] text-gray-900 ">{data.name}</h3>
              <h3 className="  font-semibold  text-left text-sm text-gray-600  ">{data.city}</h3>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-medium text-xl pr-2'>{data.price_for}</h1>
            </div>
          </div>
        </div>
        <button onClick={()=>launch()}>Detail</button>
      </div>
     
    </div>
  )
}
export default ParkingList


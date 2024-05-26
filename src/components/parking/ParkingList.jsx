
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
import img from '../../assets/parking3.jpg'
import { GiCctvCamera } from "react-icons/gi";
import { BiSolidCarGarage } from "react-icons/bi";
import { PiCurrencyInrLight } from "react-icons/pi";


const  ParkingList =({ data, inT, outT }) =>{
  const navigate = useNavigate();
  console.log(inT, outT);
  const launch = ()=>{
    const url = `#/detail/${data.name}?city=${data.city}&id=${data._id}&in=${inT}&out=${outT}`
    
  //navigate(`/detail/${data.name}?city=${data.city}&id=${data._id}&in=${inT}&out=${outT}`)
  window.open(url, '_blank');
  }
 
  
  return (
 
      <div onClick={()=>launch()} className=" cursor-pointer w-full bg-white my-4 h-48 flex  shadow-xl dark:bg-white rounded-2xl hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-102 ">
       
       
          <div className=' flex flex-col justify-between p-4 w-full'>
         


          <div className='flex flex-col'>
              <h3 className="  font-bold  text-[20px] text-gray-900 ">{data.name}</h3>
              <h3 className="  font-normal  text-left p-phone md:text-sm text-gray-400  ">{data.address_line1}, {data?.address_line2}, {data.city}</h3>
            </div>

            <div className='flex justify-between'>
            <div className='flex  '>
           {!data.sheded && <h1 className='font-medium text-sm text-gray-400 float-right mx-1'><div className='bg-gray-200 p-2 rounded-full'><BiSolidCarGarage/></div></h1> }
            <h1 className='font-medium text-sm text-gray-400 float-right mx-1 '><div className='bg-gray-200 p-2 rounded-full'><GiCctvCamera/></div></h1>


            </div>
            <div className='flex flex-col '>
            <h1 className='font-medium text-[12px] text-gray-400 float-right'>Price For {data.price_for} hours</h1>
             <div className='flex '>
             <h1 className='font-medium text-xl font-semibold text-gray-400 flex-end  text-red-600 pt-0.5'><PiCurrencyInrLight className='font-semibold' /></h1>

             <h1 className='font-medium text-xl font-semibold text-gray-400 flex-end  text-red-600 '>{data.price}</h1>

             </div>
             </div>
            </div>
       
          </div>
       
     
      </div>
     
     
  )
}
export default ParkingList


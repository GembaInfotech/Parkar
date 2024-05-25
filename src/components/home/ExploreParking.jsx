import React from 'react'
import { TbLocationSearch } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { GoTasklist } from "react-icons/go";


const ExploreParking = () => {
  return (
   <section >
 <div className='center bg-gray-200   py-6 sm:py-12' >
    <div >
        <h1 className='h1 max-sm:text-[18px] text-xl'>Explore Parking Stay in just 3 easy way </h1>

    </div>
    <div>
        <h1 className='h2 max-sm:text-[12px]  text-sm sm:my-2 mt-1'>
Be more than just Home Stay, Get Started Stay         
   </h1>
    </div>
    <div className='flex max-sm:flex-col items-center  py-2 sm:py-4 w-[70vw] sm:w-[75vw] my-1 sm:my-2'>
        <div className='flex max-sm:my-2  sm:w-[25vw]'>
            <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] bg-[#5cb3ee] text-white rounded-full '>
                <TbLocationSearch/></div>
          <div>  <p className='text-sm sm:text-xl text-gray-700 font-bold'>Easy search</p>
            <p className='text-[11px] sm:text-sm'>Find a Parking through easy Search Feature with location filter option. </p></div>

        </div>
        <div className='flex max-sm:my-2  sm:w-[25vw]'>
            <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] bg-[#5cb3ee] text-white rounded-full '>
                <VscServerProcess/></div>
          <div>  <p className='text-sm sm:text-xl text-gray-700 font-bold'>Check Availability</p>
            <p className='text-[11px] sm:text-sm'>Check the details of selected Parking to book </p></div>

        </div>
        <div className='flex max-sm:my-2  sm:w-[25vw]'>
            <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] bg-[#5cb3ee] text-white rounded-full '>
                <GoTasklist/></div>
          <div>  <p className='text-sm sm:text-xl text-gray-700 font-bold '>Book Your Parking</p>
            <p className='text-[11px] sm:text-sm'>Choose Time and just pay and Parking is confirmed Now... </p></div>

        </div>

    </div>
 </div>
    </section>

  )
}

export default ExploreParking
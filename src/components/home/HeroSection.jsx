import React from 'react'
import AboutSmartParking from './AboutSmartParking'
import ExploreParking from './ExploreParking'
import WhySmartParking from './WhySmartParking'
import road from '../../assets/road.avif'
import { TbMoneybag } from "react-icons/tb";
import { BiSolidMapPin } from "react-icons/bi";
import { FaRoute } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import Footer from '../shared/Footer'




const HeroSection = () => {
  return (
    <div>

<AboutSmartParking/>
<ExploreParking/>
<WhySmartParking/>

<div className=' my-20  h-96  md:h-64 w-full  flex  flex-col items-center  md:flex-row  justify-center items-center ' 
    style={{ backgroundImage: `url(${road}) `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}}  >
      

<div className='   md:w-[20vw] md:bg-white  h-32 m-1  flex flex-col justify-center items-center'>
      <div className='p-4 sm:p-2 mx-2 text-4xl max-sm:bg-white flex justify-center items-center  sm:text-[54px]  text-black md:text-[#5cb3ee]  font-bold rounded-full '>
                        <BiSolidMapPin /></div>
    <p className='max-sm:text-white font-semibold text-gray-800 '>200+ Available Parkings</p>
</div>
<div className='   md:w-[20vw] md:bg-white  h-32 m-1 flex flex-col justify-center items-center'>
  <div className='p-4 sm:p-2 mx-2 text-4xl max-sm:bg-white flex justify-center items-center  sm:text-[54px]  text-black md:text-[#5cb3ee]  font-bold rounded-full '>
                        <FaCity /></div>
    <p className='max-sm:text-white font-semibold text-gray-800 '>100+ Cities</p>
</div>
<div className='   md:w-[20vw] md:bg-white h-32 m-1 flex flex-col justify-center items-center'>
  <div className='p-4 sm:p-2 mx-2 text-4xl max-sm:bg-white flex justify-center items-center  sm:text-[54px]  text-black md:text-[#5cb3ee]  font-bold rounded-full '>
                        <FaRoute /></div>
    <p className='max-sm:text-white font-semibold text-gray-800 '>200+ Available Parkings</p>
</div>



</div>

<Footer/>

    </div>
  )
}

export default HeroSection
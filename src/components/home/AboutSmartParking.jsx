import React from 'react'
import { BiSolidCarGarage } from "react-icons/bi";
import { Link } from 'react-router-dom';

const AboutSmartParking = () => {
  return (
   <section>

    <div  className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 '>
      <div className='center-div pt-8'>
        <BiSolidCarGarage className='h1-64 max-sm:text-4xl text-[#2b344e]'/>
      </div>
       <div className='center-div'>
       <h1 className='h1 max-sm:text-xl mb-2'>About Smart Parking</h1>
       </div>
       <div className='center-div'>
       <p className='text-center text-sm  max-sm:text-[11px]'> 
       At Smart Parking, we're passionate about revolutionizing parking convenience with our cutting-edge online platform. With a commitment to seamless experiences, we aim to redefine how you park, one click at a time.       </p>
       </div>
       <div className='center-div py-4'>
 <Link to="/about">        <button className='purple-rounded-button'><p className='text-white text-sm'>Read More</p></button>
</Link>
        </div>
    </div>
    </section>
  )
}

export default AboutSmartParking
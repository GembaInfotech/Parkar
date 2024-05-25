import React from 'react'
import { BiSolidCarGarage } from "react-icons/bi";

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
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi voluptatem ducimus, voluptates minus itaque? Ut ad corrupti, magnam error alias, mollitia nulla inventore excepturi, nisi facere quos necessitatibus. Dignissimos?
       </p>
       </div>
       <div className='center-div'>
       <p className='text-center text-sm max-sm:hidden'> 
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur natus omnis aspernatur illum excepturi architecto totam itaque nihil consequuntur, quisquam sequi dolorum! Illum ipsa unde facilis similique optio hic?
       </p>
       </div>
       <div className='center-div py-4'>
        <button className='purple-rounded-button'><p className='text-white text-sm'>Read More</p></button>
       </div>
    </div>
    </section>
  )
}

export default AboutSmartParking
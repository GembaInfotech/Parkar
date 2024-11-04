import React from 'react'
import helpyou from '../../assets/helpyou'
import ButtonGrid from './ButtonGrid'

const WeHelpYou = () => {
  return (
    <div className="px-4 sm:px-24 md:px-48 my-8 sm:my-4">
        <div className="flex flex-col items-center md:flex-row md:items-start">
    <div className='md:mt-0 md:w-1/2'>
        <img src={helpyou} alt="Helpimg" />
    </div>
    <div className="text-center md:mt-12 md:w-1/2 md:text-start">
      <h1 className="mb-4 font-bold text-gray-800 max-sm:text-xl md:text-2xl">
      We Make Parking Simple - Anytime, Anywhere
      </h1>
      <p className='text-sm  max-sm:text-[11px]'>Emphasizes the user-friendly nature of the service, focusing on simplifying what is often seen as a stressful or time-consuming task. The aim is to remove complexities from finding, booking, or paying for parking.</p>
      <br />
      <p className='text-sm  max-sm:text-[11px]'>Highlights the service's flexibility and availability, assuring customers that parking solutions are accessible 24/7, whether they are in urban areas, near airports, or any other location where parking is needed.</p>
    </div>
   </div>
  
    <ButtonGrid/>
    </div>
  )
}

export default WeHelpYou
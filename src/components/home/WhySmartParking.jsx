import React from 'react'
import { VscVerified } from "react-icons/vsc";
import { TbMoneybag } from "react-icons/tb";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { IoHappyOutline } from "react-icons/io5";

const WhySmartParking = () => {
    return (
        <section className='center'>
            <div className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 '>
                <div className='center-div pt-8'>
                    <VscVerified className='h1-64 max-sm:text-4xl text-[#2b344e]' />
                </div>
                <div className='center-div'>
                    <h1 className='h1 max-sm:text-xl mb-2'>Why Smart Parking?</h1>
                </div>
                <div className='center-div'>
                    <p className='text-center text-sm  max-sm:text-[11px]'>
                    Effortlessly reserve your parking spot online, ensuring hassle-free arrivals every time. Streamline your parking experience with our convenient online booking platform.                    </p>
                </div>


            </div>

            <div className="flex sm:w-[75vw]">
                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>

                    <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
                        <IoHappyOutline /></div>
                    <p className='font-bold text-[#353b4d]'>Convenient</p>
                    <p className='p-phone sm:text-sm text-center'>
                    Effortlessly book your parking spot online, saving you time and stress                        </p>
                </div>
                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>

                    <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  rounded-full '>
                        <HiMiniArrowsRightLeft /></div>
                    <p className='font-bold text-[#353b4d]'>Fast</p>
                    <p className='p-phone sm:text-sm text-center'>
                    Instantly secure your space for swift arrivals and departures in a quick Time 
                        </p>
                </div>
                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>

                    <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  rounded-full '>
                        <TbMoneybag /></div>          <p className='font-bold text-[#353b4d]'>Cheaper</p>
                    <p className='p-phone sm:text-sm text-center'>
                    Enjoy budget-friendly rates without compromising on quality or convenience                       </p>
                </div>
            </div>

        </section>
    )
}


export default WhySmartParking
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { LuLocateFixed } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";




const Footer = () => {
  return (
    <div>

      <div className="footer-parent">
       <div className="upper-footer ">
          <div className="firstly-upper-footer">
            <p className='h3-phone font-semibold'>About Us</p>
            <p className='p-phone md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus maiores delectus facilis similique unde blanditiis culpa. Iure nihil nulla iste error animi inventore voluptatem quidem, sequi cum excepturi quia!</p>
             <button className='blue-rounded-button w-fit'>Read More</button>
          </div>
          <div className="second-upper-footer">
            <p className='h3-phone font-semibold'>Quick Links</p>
            <div className='flex justify-between max-sm:justify-start'>
                <div className='max-sm:mr-4'>
                    <p className='p-phone md:text-sm'>Home</p>
                    <p className='p-phone md:text-sm'>About Us</p>
                    <p className='p-phone md:text-sm'>How does it Work</p>
                    <p className='p-phone md:text-sm'>FAQ</p>

                </div>
                <div>
                    <p className='p-phone md:text-sm'>Professionals</p>
                    <p className='p-phone md:text-sm'>Collaboration</p>
                    <p className='p-phone md:text-sm'>Insight</p>
                </div>

            </div>
          </div>

          <div className="third-upper-footer">
            <p className='h3-phone font-semibold'>Contact Us</p>
         <div className="flex">
         <LuLocateFixed className='md:text-2xl'/>
         <p className='p-phone md:text-sm ml-1'> 
          Near Villaverde, Quark Atrium, 14001,  Mohali, Punjab, India
            </p>
         </div>
           <div className="flex">
           <MdOutlineLocalPhone/>
           <p className='p-phone md:text-sm ml-1'>
                 +91- 7923883762
            </p>
           </div>
           <div className="flex">
           <AiOutlineMail className='sm:mt-0.5'/> 
           <p className='p-phone md:text-sm ml-1'>
               smartparking@gembainfotech.com
            </p>
           </div>
            <p className='h3-phone font-semibold mt-2'>Join Us</p>
            <div className="flex gap-4 items-center max-sm:mt-1 sm:mt-2 ">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaInstagramSquare />
           
        </div>
          </div>

       </div>
       <div className="lower-footer">
       <div className="first-lower-footer">
        <p className='p-phone md:text-[12px]'>Copyright 2024, All Rights reserved by Smart Parking, Powered by Gemba Infotech</p>
       </div>
          <div className="second-lower-footer ">
           
                <p className="p-phone md:text-[12px] mx-4 sm:mx-4" >Terms of Use</p>
                <p className="p-phone md:text-[12px] mx-4 sm:mx-4">Privacy Policy</p>
                <p className="p-phone md:text-[12px] mx-4 sm:mx-4">Legal Notice</p>
           
          </div>

       </div>

      </div>

    </div>
  )
}

export default Footer
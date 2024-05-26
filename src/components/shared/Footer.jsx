import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { LuLocateFixed } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div>

      <div className="footer-parent">
       <div className="upper-footer ">
          <div className="firstly-upper-footer">
            <p className='h3-phone font-semibold'>About Us</p>
            <p className='p-phone md:text-sm'>
            At Smart Parking, we're dedicated to transforming the way you park, offering seamless online booking for hassle-free experiences. With a passion for innovation, we strive to redefine convenience, speed, and affordability in the parking industry. Our commitment lies in providing you with reliable solutions that make parking simpler, faster, and more economical.              </p>
          <Link to="/about">
          <button className='blue-rounded-button w-fit'>Read More</button>
          </Link>
          </div>
          <div className="second-upper-footer">
            <p className='h3-phone font-semibold'>Quick Links</p>
            <div className='flex justify-between max-sm:justify-start'>
                <div className='max-sm:mr-4'>
                    <p className='p-phone md:text-sm'>Home</p>
                 <Link to="/about">   <p className='p-phone md:text-sm'>About Us</p></Link>
                  <Link to="/how-works">  <p className='p-phone md:text-sm'>How does it Work</p></Link>
                   <Link to="/FAQ"> <p className='p-phone md:text-sm'>FAQ</p></Link>

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
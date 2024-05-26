import React from 'react'
import image from '../assets/contact.jpg'
import ContactForm from '../components/form/ContactForm';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { LuLocateFixed } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <div>


        <img src={image} alt="" className=' w-[100vw] h-[30vh] sm:h-[60vh]' />
        <div  className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 '>
      <div className='center-div max-sm:pt-2 pt-8'>
        <FaWpforms className='h1-64 max-sm:text-4xl text-blue-400'/>
      </div>
       <div className='center-div'>
       <h1 className='h1 max-sm:text-xl mb-2 '>Contact Us</h1>
       </div>
       <div className='center-div'>
       <p className='text-center text-sm  max-sm:text-[11px]'> 
We love hearing from you! Here are some simple ways to get in touch with us.       </p>
       </div>

    
       <div className="flex max-sm:flex-col  items-center  md:items-start justify-center md:justify-start w-[90vw] md:w-[70vw]">
        <div className=' sm:w-[40%]  flex  m-2 p-4 md:p-4  border-gray-200 shadow-md  justify-center items-center'> <div className="">
            <p className='h3-phone font-semibold text-blue-400'>Reach Us</p>
         <div className="flex my-1 md:my-2">
         <LuLocateFixed className='md:text-2xl'/>
         <p className='p-phone md:text-sm ml-1'> 
          Near Villaverde, Quark Atrium, 14001,  Mohali, Punjab, India
            </p>
         </div>
           <div className="flex my-1 md:my-2">
           <MdOutlineLocalPhone/>
           <p className='p-phone md:text-sm ml-1'>
                 +91- 7923883762
            </p>
           </div>
           <div className="flex my-1 md:my-2">
           <AiOutlineMail className='sm:mt-0.5'/> 
           <p className='p-phone md:text-sm ml-1'>
               smartparking@gembainfotech.com
            </p>
           </div>
           
          </div></div>
        <div className='md:w-[60%] flex  md:m-2 max-sm:p-6 p-4  border-gray-200 shadow-md  justify-start items-center'>
       
           
        
  <ContactForm/>
        </div>

    </div>
    </div>
   
    </div>
  )
}

export default ContactUs
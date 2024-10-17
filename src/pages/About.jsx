/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import aboutparking from '../assets/aboutparking.jpg'
import appdownload from '../assets/appdownload.png'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'
import { FaRegEye } from "react-icons/fa"
import { RxRocket } from "react-icons/rx"
import { LuParkingCircle } from "react-icons/lu"
import { RiReservedFill } from "react-icons/ri"
import { MdQrCodeScanner } from "react-icons/md"
import { IoNotificationsCircleSharp } from "react-icons/io5"
import { MdOutlineSecurity } from "react-icons/md";
import Footer from '../components/shared/Footer'

const About = () => {
  return (
    <div>
    <div className='w-full h-[60vh] md:h-[100vh]'
    style={{
    backgroundImage: `url(${aboutparking})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
    >
      <div  className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 text-center py-20 text-white'>
      <div className='center-div'>
      <h1 className='max-sm:text-xl mb-2 text-5xl text-white'>About Us</h1>
      </div>
      <div className='center-div'>
      <p className='text-center text-base  max-sm:text-[11px]'> 
      Our journey began with a simple idea: making parking easy and accessible for everyone. Seeing the struggle and frustration of drivers trying to find parking in busy areas, we set out to develop a solution that addresses the root of the problem. From humble beginnings, we have grown into a passionate team dedicated to solving parking problems with technology.</p>
      </div>
      </div>
      </div>
     
      <div  className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 '>
      <div className='center-div'>
      <h1 className='h1 max-sm:text-xl mb-2'>Who We Are</h1>
      </div>
      <div className='center-div'>
      <p className='text-center text-sm  max-sm:text-[11px]'> 
      We are a forward-thinking team dedicated to revolutionizing the parking experience. Our parking application was created to solve everyday challenges of finding a secure and convenient parking spot. With a focus on user experience and technology, we strive to make parking hassle-free for everyone.</p>
      </div>
      </div>

      <div className='center bg-gray-200   py-6 sm:py-12' >
    <div >
        <h1 className='h1 max-sm:text-[18px] text-xl'>Parking Prioritized: Convenient, Efficient, Stress-Free</h1>
    </div>
    <div className='flex max-sm:flex-col items-center  py-2 sm:py-4 w-[70vw] sm:w-[75vw] my-1 sm:my-2 justify-evenly'>
        <div className=' max-sm:my-2  sm:w-[25vw]'>
            <div className='sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  rounded-full '>
            <FaRegEye /></div>
          <div>  <p className='text-sm sm:text-xl text-gray-700 font-bold text-center'>Our Mission</p>
            <p className='text-[11px] sm:text-sm text-center'>Our mission is to simplify parking for drivers everywhere by offering a real-time, user-friendly platform that helps locate, reserve, and pay for parking spaces. We aim to reduce the stress and time spent searching for parking, providing peace of mind to our users.</p></div>

        </div>
        <div className=' max-sm:my-2  sm:w-[25vw]'>
            <div className='sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  rounded-full '>
            <RxRocket /></div>
          <div>  <p className='text-sm sm:text-xl text-gray-700 font-bold text-center'>Our Vision</p>
            <p className='text-[11px] sm:text-sm text-center'>We envision a world where parking is seamless and stress-free, with smart solutions that improve the flow of urban traffic and enhance city life. Our goal is to continuously innovate and expand our services to make parking accessible to all.</p></div>

        </div>
    </div>
    </div>

    <div className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 '>
    <div className='center-div'>
                    <h1 className='h1 max-sm:text-xl mb-2'>What We Offer</h1>
                </div>
                <div className="flex flex-col md:flex-row sm:w-[75vw] items-center">
                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>
                <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
                <LuParkingCircle /></div>
                <p className='font-bold text-[#353b4d] text-center'>Real-Time Parking Availability</p>
                </div>

                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>
                <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
                <RiReservedFill /></div>
                <p className='font-bold text-[#353b4d] text-center'>Easy Reservations</p>
                </div>

                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>
                <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
                <MdQrCodeScanner /></div>
                <p className='font-bold text-[#353b4d] text-center'>Cashless Payments</p>
                </div>

                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>
                <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
          <IoNotificationsCircleSharp /></div>
                <p className='font-bold text-[#353b4d] text-center'>Smart Notifications</p>
                </div>

                <div className=' flex flex-col items-center justify-center sm:w-[25vw]'>
                <div className='p-4 sm:p-2 mx-2 text-2xl flex justify-center items-center  sm:text-[68px] text-[#5cb3ee]  font-bold rounded-full '>
                <MdOutlineSecurity /></div>
                <p className='font-bold text-[#353b4d] text-center'>Safety and Security</p>
                </div>
    </div>

    </div>

    <div className=' my-20  h-72 sm:h-[80vh]  md:h-[64vh] w-full justify-center items-center bg-gray-500 md:pb-0 pb-10' 
    style={{ backgroundImage: `url(${appdownload}) `,
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat'}}  >
    <div className='px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8 py-20 justify-center items-center'>
    <div >
        <h1 className=' max-sm:text-[18px] text-5xl text-white justify-center items-center'>Download the app and <br/>start parking smarter.</h1>
    </div>
    <div className="flex flex-col sm:flex-row md:flex-row my-10 md:my-4 ">
    <div className="sm:mt-5 md:mt-4 w-[30vw] md:w-[16vw] ml-2">
        <a href="#">
            <img src={appstore} alt="App Store"  className=" md:min-w-[128px] rounded-md md:rounded-md " />
        </a>
    </div>
    <div className=" w-[34vw] md:w-[18vw] ">
        <a href="#">
            <img src={playstore} alt="Play Store"   className=" md:min-w-[128px]" />
        </a>
    </div>
</div>

    </div>
</div>
    <Footer/>

    </div>
  )
}

export default About
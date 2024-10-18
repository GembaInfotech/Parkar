import React from "react";
import Footer from "../components/shared/Footer";
import itwork from "../assets/itwork.jpg";
import { MdOutlineQrCode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";


const HowDoesItWork = () => {
  return (
    <>
      <div className="my-8  px-4 sm:my-8 sm:px-24 md:px-48 lg:px-64 xl:px-48 ">
        <div className="flex flex-col items-center md:flex-row md:items-start ">
          <div className="text-center md:w-1/2 md:text-start">
            <h1 className=" mb-4 font-bold text-gray-800 max-sm:text-xl md:text-4xl">
              Say Goodbye to Parking Hassles
            </h1>
            <button className="mt-4 flex items-center justify-center gap-1 rounded-md bg-gray-100 px-6 py-3 text-gray-700 shadow-md transition-colors hover:bg-gray-200">
              Download the app <MdOutlineQrCode />
            </button>
          </div>
          <div className="mt-6 md:ml-2 md:mt-0 md:w-1/2">
            <img
              src={itwork}
              alt="Person using a phone"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        </div>

        <div className='center bg-gray-200 py-6 sm:py-12 my-8 sm:my-8'>
          <div className="center-div">
            <h1 className="h1 mb-4 max-sm:text-xl">How Does It Work?</h1>
          </div>

          <div className="flex flex-col md:flex-row sm:w-[75vw] ">
            <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
              <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <FaLocationDot />
              </div>
              <p className="font-bold text-[#353b4d]">Find Parking Nearby</p>
              <p className="p-phone text-center sm:text-sm">
                Enter your destination to see available parking spots nearby.
              </p>
            </div>

            <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
              <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  text-[#5cb3ee] sm:p-2  sm:text-[68px] ">
              <IoTime />
              </div>
              <p className="font-bold text-[#353b4d]">Secure Your Booking</p>
              <p className="p-phone text-center sm:text-sm">
                Reserve your spot and pay securely online in seconds.
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
              <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  text-[#5cb3ee] sm:p-2  sm:text-[68px] ">
              <FaMobileScreen />
              </div>
              <p className="font-bold text-[#353b4d]">Park and Enjoy</p>
              <p className="p-phone text-center sm:text-sm">
                Follow directions to your guaranteed parking space.
              </p>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
};

export default HowDoesItWork;

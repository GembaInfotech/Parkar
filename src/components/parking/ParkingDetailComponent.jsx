
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { selecetedParking } from '../../redux/actions/parkingAction';
import Search from '../shared/Search';
import { format, parseISO } from 'date-fns';
import Tooltip from "../shared/Tooltip";
import image2 from '../../assets/road2.jpg'


import { PiCurrencyInrLight } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { FaClock } from 'react-icons/fa';

import { FaCheckCircle } from 'react-icons/fa';

import { BiSolidCarGarage } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

import img from '../../assets/parking3.jpg'
import Reservation from './Reservation';



const ParkingDetailComponent = ({ data, inT, ouT }) => {



  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const setShowMethod = () => {
    setShow((show) => !show)
  }

  const navigate = useNavigate();



  // Parse the timestamp string into a Date object using parseISO from date-fns
  const dateObject = parseISO(inT);

  // Format the date using format function from date-fns



  useEffect(() => {
    const fetchData = async () => {
      await dispatch(selecetedParking(data));
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className='flex max-sm:flex-col   sm:max-h-[85vh] '>

      <div className='  sm:w-2/3 overflow-y-auto'>

        <div className='py-4'>
          <h3 className="  font-semibold  text-[24px] text-gray-900 ">{data.name}</h3>
          <h3 className="  font-normal  text-left text-[12px] sm:text-sm text-gray-400  ">{data.address_line1}, {data?.address_line2}, {data.city}</h3>

        </div>
        <div className=' flex overflow-x-auto w-full  scrollbar-hide'>
          <img src={img} alt="" className='m-2 rounded-2xl h-32 sm:h-48 ' />
          <img src={image2} alt="" className='m-2 rounded-2xl h-32 sm:h-48' />
          <img src={img} alt="" className='m-2 rounded-2xl h-32 sm:h-48' />
          <img src={image2} alt="" className='m-2 rounded-2xl h-32 sm:h-48' />

        </div>




        <div>
          <div className='bg-gray-100 rounded-2xl my-4 p-8 '>
            <h1 className='text-xl font-gray-700'>Details</h1>
            <div className='flex py-4'>

              <h1 className='font-medium text-xl text-gray-400 float-right mx-2 '><div className='bg-gray-200 p-4 py-3 rounded-full'>
                <Tooltip text="Security"> <GiCctvCamera /></Tooltip>
              </div></h1>
              <h1 className='font-medium text-xl text-gray-400 float-right mx-2 '><div className='bg-gray-200 p-4 py-3 rounded-full'>
                <Tooltip text="Covered Parking"><BiSolidCarGarage /></Tooltip></div></h1>
              <h1 className='font-medium text-xl text-gray-400 float-right mx-2 '><div className='bg-gray-200 p-4 py-3 rounded-full'>
                <Tooltip text="24 X 7 Available"><FaClock /></Tooltip></div></h1>

            </div>

            <div className='text-gray-700'>
              <h1 className='p-phone sm:text-sm'>
                {data.description}
               </h1>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-gray-100 rounded-2xl my-4 p-8 '>
            <h1 className='text-xl font-gray-700'>Features</h1>

            <div>


              <div className="flex justify-center p-phone sm:text-sm">
                {/* Left List */}
                <ul className="w-1/2  border-gray-300">
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li > 24 X 7 Availablity</li>
                  </div>
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li > Security</li>
                  </div>
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li > Contact- less Service</li>
                  </div>
                </ul>

                {/* Right List */}
                <ul className="w-1/2">
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li> Convinient </li>
                  </div>
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li > Covered Parking</li>
                  </div>
                  <div className='flex py-2'><FaCheckCircle className='text-xl text-blue-300 m-0.5' />   <li > Affordable Price</li>
                  </div>
                </ul>
              </div>



            </div>

          </div>
        </div>

      </div>

      <Reservation data={data} inT={inT} ouT={ouT} />

    </div>
  )
}

export default ParkingDetailComponent
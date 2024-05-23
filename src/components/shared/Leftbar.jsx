import { useMemo, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoCarOutline } from "react-icons/io5";
import { BsBookmarkCheck } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";



import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineRectangleStack,
  HiOutlineTag,
} from "react-icons/hi2";


const Leftbar = ({ showLeftbar }) => {


  return (
   
      <div className="flex flex-col justify-start  items-center h-[84vh] bg-gray-700 rounded-3xl sticky top-20  ">
        <div className=" font-nunito-sans flex flex-col items-start text-white gap-4 w-full p-5">
          <Link
            className=" flex hover:bg-white hover:text-black hover:rounded-2xl transition:smooth hover:w-full  duration-300 hover:px-2 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/profile"
          >
            <HiOutlineHome className="text-xl" />
            <p className="font-nunito-sans">Profile</p>
          </Link>
          <Link
            className="flex hover:bg-white hover:text-black hover:rounded-2xl transition:smooth hover:w-full  duration-300 hover:px-2 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/booking"
          >
            <HiOutlineRectangleStack className="text-xl" />
            <p className="font-nunito-sans">Booking</p>
          </Link>
          <Link
            className="flex hover:bg-white hover:text-black hover:rounded-2xl transition:smooth hover:w-full  duration-300 hover:px-2 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/vehicles"
          >
            <IoCarOutline className="text-xl" />
            <p className="font-nunito-sans">Vehicle</p>
          </Link>

       
            <Link
            className="flex hover:bg-white hover:text-black hover:rounded-2xl transition:smooth hover:w-full  duration-300 hover:px-2 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/setting"
            >
              <CiSettings className="text-xl" />
              <p className="font-nunito-sans">Setting</p>
            </Link>
          


       
       
      
        </div>
      </div>
    
  );
};

export default memo(Leftbar);

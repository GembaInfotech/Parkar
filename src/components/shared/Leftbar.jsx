import { useMemo, useEffect, memo } from "react";
import { Link , useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoCarOutline } from "react-icons/io5";
import { useRef } from "react";
import { useState } from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";




import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineRectangleStack,
  HiOutlineTag,
} from "react-icons/hi2";


const Leftbar = ({ showLeftbar, userData }) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(true);


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  const location = useLocation();

  // Define a function to determine if the link is active based on the URL path
  const isActive = (path) => {
    return location.pathname === path;
  };


  return (
     
        <div>
           
               <div ref={dropdownRef} className="  flex flex-col justify-start  items-center h-[90vh]  sm:h-[84vh] bg-[#110065] rounded-md sticky top-20  ">
      {  <div className=" font-nunito-sans flex flex-col items-start text-white gap-4 w-full p-5">
        
        <div className="flex flex-col justify-center items-center w-[100%] ">
          <img src={userData?.avatar} alt="" className="rounded-full w-12 h-auto" />
          <p className="p-phone sm:text-lg mt-1">{userData?.name}</p>
        </div>
          <div className="border-0 border-b-2 border-gray-100 w-full"></div>
        <Link
            style={{ color: isActive('/dashboard') ? 'blue' : null }}
            className=" flex hover:bg-white hover:text-black hover:rounded-xl transition:smooth hover:w-full  duration-300 hover:px-2 hover:py-1 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/dashboard"
          >
            <HiOutlineHome className="text-xl" />
            <p className="font-nunito-sans p-phone  sm:text-lg">Dashboard</p>
          </Link>
          <Link
            style={{ color: isActive('/profile') ? 'blue' : null }}
            className=" flex hover:bg-white hover:text-black hover:rounded-xl transition:smooth hover:w-full  duration-300 hover:px-2 hover:py-1 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/profile"
          >
            <HiOutlineHome className="text-xl" />
            <p className="font-nunito-sans p-phone  sm:text-lg">Profile</p>
          </Link>
          <Link
            style={{ color: isActive('/booking') ? 'blue' : null }}
            className="flex hover:bg-white hover:text-black hover:rounded-xl transition:smooth hover:w-full  duration-300 hover:px-2 hover:py-1 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/booking"
          >
            <HiOutlineRectangleStack className="text-xl" />
            <p className="font-nunito-sans p-phone  sm:text-lg">Booking</p>
          </Link>
          <Link
            style={{ color: isActive('/vehicles') ? 'blue' : null }}
            className="flex hover:bg-white hover:text-black hover:rounded-xl transition:smooth hover:w-full  duration-300 hover:px-2 hover:py-1 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/vehicles"
          >
            <IoCarOutline className="text-xl" />
            <p className="font-nunito-sans p-phone  sm:text-lg">Vehicle</p>
          </Link>

       
            <Link
              style={{ color: isActive('/setting') ? 'blue' : null }}
            className="flex hover:bg-white hover:text-black hover:rounded-xl transition:smooth hover:w-full  duration-300 hover:px-2 hover:py-1 items-center gap-2 text-lg font-medium hover:text-primary"
            to="/setting"
            >
              <CiSettings className="text-xl" />
              <p className="font-nunito-sans p-phone  sm:text-lg">Setting</p>
            </Link>
          


       
       
      
        </div>}
      </div>
</div>
     
    
  );
};

export default memo(Leftbar);

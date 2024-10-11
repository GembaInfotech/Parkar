import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import { memo } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { useSelector } from "react-redux";


import { logoutAction } from "../../redux/actions/authActions";
import { IoLogOutOutline } from "react-icons/io5";
import { Transition } from "@headlessui/react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import logo from '../../assets/tlogo.png'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";



const PublicNavbar = () => {
    const userData = useSelector((state) => state.auth?.userData);


  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = async () => {
    setLoggingOut(true);
    await dispatch(logoutAction());
    setLoggingOut(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const navigation = 
   
    [

      { name: 'ABOUT US', href: '/about', current: false },
      { name: 'WE HELP YOU', href: '/help-you', current: false },
      { name: 'HOW DOES IT WORK', href: '/how-works', current: false },
      { name: 'CONTACT US', href: '/contact', current: false },
     
    ];
  const [show, setShow] = useState(false);

  const setShowMethod = () => {
    setShow((show) => !show)
  }
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col relative z-50  sticky fixed top-0 bg-white  ">
      <div className="flex flex-row justify-between max-sm:px-4 px-24  mb-1">
        <div className="flex items-center">
          <img className="md:h-10 md:w-20 h-10 w-16" src={logo} href="/" />
          <div className="text-2xl  font-bold flex gap-1 text-xl sm:text-sm md:text-xl">
            <div className='text-black font-bold  decoration-4 '>SMART </div>
            <div className="text-blue-500 font-bold ">PARKING</div>
          </div>
        </div>
        <div className="flex gap-4 items-center max-sm:hidden ">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaInstagramSquare />
           
        </div>
        <div className="sm:hidden flex items-center " >

        { userData && <div className=" sm:hidden relative flex justify-end  md:w-36">
            <button
              type="button"
              className="inline-flex max-sm:h-4 max-sm:w-16 h-8 w-24 cursor-pointer items-center justify-end rounded-full"
              onClick={handleProfileClick}
            >
              <img
                src={userData?.avatar}
                alt="profile"
                className=" h-12 w-12  rounded-full object-cover"
              />
                                          <p className="text-sm font-semibold text-gray-700 max-sm:hidden">{userData?.name}</p>

            </button>
            <Transition
              show={showDropdown}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {() => (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 top-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="py-1" role="none">
                    <div className="flex flex-col items-center">
                      <img
                        src={userData?.avatar}
                        alt="profile"
                        className="mb-2 h-16 w-16 rounded-full object-cover"
                      />
                      <div className="text-sm font-semibold text-gray-700 hover:underline">
                        <Link to={`/profile`}>{userData?.name}</Link>
                      </div>
                      <div className="text-sm text-gray-500">{userData?.email}</div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600"
                        role="menuitem"
                        onClick={logout}
                        disabled={loggingOut}
                      >
                        {loggingOut ? (
                          <div className="text-center">Logging out...</div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <span>Logout</span>
                            <IoLogOutOutline className="ml-2" />
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </div> }

          {open ? <RxCross1 onClick={()=>{setOpen(!open)}} className="text-2xl"/> : <HiOutlineMenu onClick={()=>{setOpen(!open)}} className="text-2xl"/>
}
        </div>
      </div>
      
      <div className={    ` sm:my-1  max-sm:absolute max-sm:top-11 max-sm:h-screen   max-sm:px-2 px-24 flex flex-row max-sm:flex-col justify-between max-sm:justify-start  ${open  ? "max-sm:w-full max-sm:bg-white" :"max-sm:hidden "} `}>
        <div>
          <ul className="flex max-sm:flex-col font-semibold">
          <li  onClick={()=>{setOpen(false)}} className="max-sm:pt-2 mx-0.5 sm:mx-1 md:mx-1 lg:mx-4 xl:mx-2 sm:text-[10px] text-[12px] lg:text-xs"><Link to="/"><FaHome className=" text-3xl sm:text-2xl text-blue-600"/></Link></li>

          {navigation.map((item) => (
                           <Link to={`${item.href}`}
                           onClick={()=>{setOpen(false)}}
                           className="max-sm:py-2 mx-0.5 sm:mx-1 md:mx-1 lg:mx-4 xl:mx-2 sm:text-[10px] text-[14px] lg:text-xs"
                           >
                            <p 
    >{item.name}</p>


                        </Link>
                        ))}
          
          </ul>
        </div>
    {    userData ?  
        <div className="max-sm:hidden relative flex justify-end md:w-36">
      <button
        type="button"
        className="inline-flex h-6 w-full cursor-pointer items-center justify-center rounded-full"
        onClick={handleProfileClick}
      >
        <img
          src={`ProfileImage/UserProfileImg/${userData.profile}`}
          alt="profile"
          className="h-8 w-8  rounded-full object-cover"
        />
                                          <p className="  text-sm font-semibold text-gray-700 ">{userData?.name}</p>

      </button>
      <Transition
        show={showDropdown}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <div className="py-1" role="none">
              <div className="flex flex-col items-center">
                {/* <img
                  src={userData.avatar}
                  alt="profile"
                  className="mb-2 h-16 w-16 rounded-full object-cover"
                /> */}
                                   

                <div className="text-sm font-semibold text-gray-700 hover:underline">
                  <Link to={`/profile`}>{userData.name}</Link>
                </div>
                <div className="text-sm text-gray-500">{userData.email}</div>
              </div>
              <hr className="my-2" />
              <div className="flex justify-center">
                <button
                  type="button"
                  className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600"
                  role="menuitem"
                  onClick={logout}
                  disabled={loggingOut}
                >
                  {loggingOut ? (
                    <div className="text-center">Logging out...</div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Logout</span>
                      <IoLogOutOutline className="ml-2" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>:  <div className="flex max-sm:flex-col font-semibold"> 
          <div className="">
<Link  to="/signin">
<p className="mx-0.5 max-sm:py-2 sm:mx-1 md:mx-1 lg:mx-4 xl:mx-2 text-[14px] sm:text-[10px] lg:text-xs  ">USER LOGIN</p>
</Link>
          </div>
          <div className="">
          <Link  to="/signup">
<p className="mx-0.5 max-sm:py-2 sm:mx-1 md:mx-1 lg:mx-4 xl:mx-2 text-[14px] sm:text-[10px] lg:text-xs  ">USER SIGNUP</p>
</Link>          </div>
        </div>}
      </div>
    </div>

    //  <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1"><FaHome className="text-xl"/></li>
    //         <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1">ABOUT US</li>
    //         <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1">HOW DOES IT WORK?</li>
    //         <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1">WE HELP YOU</li>
    //         <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1">CONTACT US</li>
    //         <li className="mx-2 max-md:mx-1 max-md:text-[12px] max-lg:text-[12px] max-lg:mx-1 max-md:text-[10px] max-sm:m-0 xl:mx-1">FAQ</li>
    //     <nav className="sticky shadow-sm bg-gray-800 top-0 z-20 mb-0 flex justify-center gap-10 border bg-white py-2 md:items-center md:justify-between md:px-4">


    //       <button className="inline-block md:hidden" onClick={toggleLeftbar}>
    //         {showLeftbar ? <RxCross1 /> : <AiOutlineBars />}
    //       </button>

    //       <Link to="/">
    //       <img
    //                     src={logo}
    //                     alt="profile"
    //                     className=" h-12 w-24 rounded-full object-cover"
    //                   />
    //        </Link>


    //     <div className="flex w-full justify-center ">
    //     {show &&
    //     //  <div  className='fixed top-20 left-0 w-full  text-white px-16 py-4 flex justify-center z-10'>
    //     <div className={`   fixed top-20 left-0 w-full  text-white px-16 py-4 flex justify-center z-10 my-component transition duration-700  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

    //       <Search   /></div> }

    //       <button onClick={()=>{setShowMethod() ; toggleVisibility()}} >

    //       <h1  className=' bg-violet-100 text-sm rounded-2xl w-fit py-2 px-2'><div className='flex'><p>Where you want to go </p><CiSearch className=' bg-yellow-300 rounded-2xl text-xl mx-1 p-1 '/></div> </h1>
    //       </button>
    //     {navigation.map((item) => (
    //                        <Link to={`${item.href}`}

    //                        >
    //                         <p 
    //                            className="font-nunito-sans  flex hover:bg-gray-600 mx-6 hover:text-white hover:rounded-xl transition:smooth px-4 py-0.5  duration-300  items-center  text-lg font-medium hover:text-primary"
    // >{item.name}</p>


    //                     </Link>
    //                     ))}
    //     </div>

    //       <div className="relative flex justify-end md:w-36">
    //         <button
    //           type="button"
    //           className="inline-flex h-8 w-24 cursor-pointer items-center justify-center rounded-full"
    //           onClick={handleProfileClick}
    //         >
    //           <img
    //             src={userData.avatar}
    //             alt="profile"
    //             className="h-12 w-12  rounded-full object-cover"
    //           />
    //         </button>
    //         <Transition
    //           show={showDropdown}
    //           enter="transition ease-out duration-100 transform"
    //           enterFrom="opacity-0 scale-95"
    //           enterTo="opacity-100 scale-100"
    //           leave="transition ease-in duration-75 transform"
    //           leaveFrom="opacity-100 scale-100"
    //           leaveTo="opacity-0 scale-95"
    //         >
    //           {() => (
    //             <div
    //               ref={dropdownRef}
    //               className="absolute right-0 top-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    //               role="menu"
    //               aria-orientation="vertical"
    //               aria-labelledby="user-menu"
    //             >
    //               <div className="py-1" role="none">
    //                 <div className="flex flex-col items-center">
    //                   <img
    //                     src={userData.avatar}
    //                     alt="profile"
    //                     className="mb-2 h-16 w-16 rounded-full object-cover"
    //                   />
    //                   <div className="text-sm font-semibold text-gray-700 hover:underline">
    //                     <Link to={`/profile`}>{userData.name}</Link>
    //                   </div>
    //                   <div className="text-sm text-gray-500">{userData.email}</div>
    //                 </div>
    //                 <hr className="my-2" />
    //                 <div className="flex justify-center">
    //                   <button
    //                     type="button"
    //                     className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600"
    //                     role="menuitem"
    //                     onClick={logout}
    //                     disabled={loggingOut}
    //                   >
    //                     {loggingOut ? (
    //                       <div className="text-center">Logging out...</div>
    //                     ) : (
    //                       <div className="flex items-center justify-center">
    //                         <span>Logout</span>
    //                         <IoLogOutOutline className="ml-2" />
    //                       </div>
    //                     )}
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //         </Transition>
    //       </div>
    //     </nav>
  );
};

export default memo(PublicNavbar);

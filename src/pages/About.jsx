/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import aboutparking from "../assets/aboutparking.jpg";
import appdownload from "../assets/appdownload.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import { FaRegEye } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";
import { LuParkingCircle } from "react-icons/lu";
import { RiReservedFill } from "react-icons/ri";
import { MdQrCodeScanner } from "react-icons/md";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import Footer from "../components/shared/Footer";

const About = () => {
  return (
    <div>
      <div
        className="h-[60vh] w-full md:h-[100vh]"
        style={{
          backgroundImage: `url(${aboutparking})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="my-8  px-4 py-20 text-center text-white sm:my-8 sm:px-24 md:px-48 lg:px-64 xl:px-48">
          <div className="center-div">
            <h1 className="mb-2 text-3xl font-bold text-white max-sm:text-xl">
              About Us
            </h1>
          </div>
          <div className="center-div">
            <p className="text-center text-sm  max-sm:text-[11px]">
              Our journey began with a simple idea: making parking easy and
              accessible for everyone. Seeing the struggle and frustration of
              drivers trying to find parking in busy areas, we set out to
              develop a solution that addresses the root of the problem. From
              humble beginnings, we have grown into a passionate team dedicated
              to solving parking problems with technology.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8  px-4 sm:my-8 sm:px-24 md:px-48 lg:px-64 xl:px-48 ">
        <div className="center-div">
          <h1 className="h1 mb-2 max-sm:text-xl">Who We Are</h1>
        </div>
        <div className="center-div">
          <p className="text-center text-sm  max-sm:text-[11px]">
            We are a forward-thinking team dedicated to revolutionizing the
            parking experience. Our parking application was created to solve
            everyday challenges of finding a secure and convenient parking spot.
            With a focus on user experience and technology, we strive to make
            parking hassle-free for everyone.
          </p>
        </div>
      </div>

      <div className="center bg-gray-200 py-6 sm:py-12">
        <div>
          <h1 className="h1 text-xl max-sm:text-[18px]">
            Parking Prioritized: Convenient, Efficient, Stress-Free
          </h1>
        </div>
        <div className="my-1 flex w-[70vw]  items-center justify-evenly py-2 max-sm:flex-col sm:my-2 sm:w-[75vw] sm:py-4">
          <div className=" max-sm:my-2  sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full text-2xl  text-[#5cb3ee] sm:p-2  sm:text-[68px] ">
              <FaRegEye />
            </div>
            <div>
              {" "}
              <p className="text-center text-sm font-bold text-gray-700 sm:text-xl">
                Our Mission
              </p>
              <p className="text-center text-[11px] sm:text-sm">
                Our mission is to simplify parking for drivers everywhere by
                offering a real-time, user-friendly platform that helps locate,
                reserve, and pay for parking spaces. We aim to reduce the stress
                and time spent searching for parking, providing peace of mind to
                our users.
              </p>
            </div>
          </div>
          <div className=" max-sm:my-2  sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full text-2xl  text-[#5cb3ee] sm:p-2  sm:text-[68px] ">
              <RxRocket />
            </div>
            <div>
              {" "}
              <p className="text-center text-sm font-bold text-gray-700 sm:text-xl">
                Our Vision
              </p>
              <p className="text-center text-[11px] sm:text-sm">
                We envision a world where parking is seamless and stress-free,
                with smart solutions that improve the flow of urban traffic and
                enhance city life. Our goal is to continuously innovate and
                expand our services to make parking accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8  px-4 sm:my-8 sm:px-24 md:px-48 lg:px-64 xl:px-48 ">
        <div className="center-div">
          <h1 className="h1 mb-2 max-sm:text-xl">What We Offer</h1>
        </div>
        <div className="flex flex-col items-center sm:w-[60vw] md:w-[73vw] md:flex-row justify-center">
          <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <LuParkingCircle />
            </div>
            <p className="text-center font-bold text-[#353b4d]">
              Real-Time Parking Availability
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <RiReservedFill />
            </div>
            <p className="text-center font-bold text-[#353b4d]">
              Easy Reservations
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <MdQrCodeScanner />
            </div>
            <p className="text-center font-bold text-[#353b4d]">
              Cashless Payments
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <IoNotificationsCircleSharp />
            </div>
            <p className="text-center font-bold text-[#353b4d]">
              Smart Notifications
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center sm:w-[25vw]">
            <div className="mx-2 flex items-center justify-center rounded-full p-4 text-2xl  font-bold text-[#5cb3ee]  sm:p-2 sm:text-[68px] ">
              <MdOutlineSecurity />
            </div>
            <p className="text-center font-bold text-[#353b4d]">
              Safety and Security
            </p>
          </div>
        </div>
      </div>

      <div
        className=" my-20  h-72 w-full  items-center justify-center bg-gray-500 pb-10 sm:h-[80vh] md:h-[64vh] md:pb-0"
        style={{
          backgroundImage: `url(${appdownload}) `,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="my-8  items-center justify-center px-4 py-20 sm:my-8 sm:px-24 md:px-48 lg:px-64 xl:px-48">
          <div>
            <h1 className=" items-center justify-center text-3xl text-white max-sm:text-[18px]">
              Download the app and <br />
              start parking smarter.
            </h1>
          </div>
          <div className="my-6 flex flex-col sm:flex-row md:my-4 md:flex-row ">
            <div className="ml-2 w-[30vw] sm:mt-5 md:mt-4 md:w-[16vw]">
              <a href="#">
                <img
                  src={appstore}
                  alt="App Store"
                  className=" rounded-md md:min-w-[128px] md:rounded-md "
                />
              </a>
            </div>
            <div className=" w-[34vw] md:w-[18vw] ">
              <a href="#">
                <img
                  src={playstore}
                  alt="Play Store"
                  className=" md:min-w-[128px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

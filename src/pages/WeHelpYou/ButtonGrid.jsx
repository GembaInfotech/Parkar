import React from "react";
import { Link } from "react-router-dom";


const buttonData = [
  { id: 1, label: "GENERAL INFORMATION", Link: "/GInfo" },
  { id: 2, label: "PARKING ACCOUNT", Link: "/PAccount" },
  { id: 3, label: "ABOUT OUR CAR PARKS", Link: "/ACarParks" },
  { id: 5, label: "ABOUT OUR PRODUCTS", Link: "/AProducts" },
  { id: 6, label: "PARKING BOOKING", Link: "/PBooking" },
  { id: 8, label: "FREQUENTLY ASKED QUESTIONS", Link: "/FAQ" }
];

const ButtonGrid = () => {
  return (
    <div className="grid  md:grid-cols-3 gap-4 p-8">
      {buttonData.map((button) => (
        <Link
          key={button.id}
          to={button.Link} 
           className="border-2 border-[#1034A6] text-[#1034A6] px-4 py-2 rounded hover:bg-[#1034A6] hover:text-white transition-all text-center items-center justify-center"
        >
        <button className="items-center justify-center text-center"
        >
          {button.label}
        </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonGrid;

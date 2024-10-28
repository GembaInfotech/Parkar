import React from "react";
import { Link } from "react-router-dom";

const faqList = [
  { id: 1, question: "How to book a parking space with Know2Parking?", link: "/que1.4" },
  { id: 2, question: "Which payment methods can I use to pay for a Know2Parking booking?", link: "/que2.4" },
  { id: 3, question: "I have received a discount code, how can I apply it to my booking?", link: "/que3.4" },
  { id: 4, question: "Which information will I get once I have made my purchase?", link:"/que4.4"},
  { id: 5, question: "Price of the Know2Parking booking: How is the fee to be paid calculated?", link:"/que5.4"},
  { id: 6, question: "How can I cancel my Know2Parking booking?", link:"/que6.4"},
]

const PBooking = () => {
  return (
    <div className="p-8 px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8">
      <h2 className="text-2xl font-bold mb-4">PARKING BOOKING</h2>
      <ul className="space-y-4">
        {faqList.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-300 pb-2 text-gray-700 hover:text-blue-600 text-sm max-sm:text-[11px]"
          >
            <Link to={item.link} className="block">
              {item.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PBooking;

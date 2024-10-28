import React from "react";
import { Link } from "react-router-dom";


const faqList = [
  { id: 1, question: "What are the benefits of registering as a Know2Parking user?", link: "/que1.1" },
  { id: 2, question: "How can I create a Know2Parking account?", link: "/que2.1" },
  { id: 3, question: "How can I log in to my Know2Parking user account?", link: "/que3.1" },
  { id: 4, question: "I have forgotten my password or I want to change it, what should I do?", link:"/que4.1"},
  { id: 5, question: "How can I see my Know2Parking bookings in my user account?", link:"/que5.1"},
  { id: 6, question: "Which information can I add and/or modify about my Know2Parking user?", link:"/que6.1"},
  { id: 7, question: "How can I get an invoice for a Know2Parking booking from my account?", link:"/que7.1"},
  { id: 8, question: "How can I review my Know2Parking experience?", link:"/que8.1"},
  { id: 9, question: "How can I log out of my Know2Parking account?", link:"/que9.1"},
  { id: 10, question: "I don't want to receive any more messages from Know2Parking to my e-mail address, what should I do?", link:"/que10.1"},
  { id: 11, question: "How can I unsubscribe from Know2Parking?", link:"/que11.1"},
];

const PAccount = () => {
  return (
    <div className="p-8 px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8">
      <h2 className="text-2xl font-bold mb-4">PARKING ACCOUNT</h2>
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

export default PAccount;

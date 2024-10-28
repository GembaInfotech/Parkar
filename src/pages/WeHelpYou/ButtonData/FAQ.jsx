import React from "react";
import { Link } from "react-router-dom";

const faqList = [
  { id: 1, question: "Do I have to strictly follow the check-in and check-out times of my reservation?", link: "/que1.5" },
  { id: 2, question: "What should I do if I stay longer in the car park?", link: "/que2.5" },
  { id: 3, question: "Can I go directly to the car park without a Know2Parking reservation?", link: "/que3.5" },
  { id: 4, question: "Will I have a place allocated with a Know2Parking reservation?", link:"/que4.5"},
  { id: 5, question: "How can I find out if a car park is secure?", link:"/que5.5"},
  { id: 6, question: "Can I access a car park with a trailer, luggage rack or bicycle rack?", link:"/que6.5"},
  { id: 7, question: "What can I do if I have not received the confirmation email?", link:"/que7.5"},
  { id: 8, question: "I need an invoice for my stay in the name of my company or freelancer, how can I request it?", link:"/que8.5"},
  { id: 9, question: "Due to unforeseen circumstances, I did not take advantage of my Know2Parking booking, can I claim a refund?", link:"/que9.5"},
  { id: 10, question: "How do I request a refund for a reservation that I have been charged twice?", link:"/que10.5"},
  { id: 11, question: "I have not found the answer to my question, how can I contact Know2Parking Customer Service?", link:"/que11.5"},
];

const FAQ = () => {
  return (
    <div className="p-8 px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8">
      <h2 className="text-2xl font-bold mb-4 ">FREQUENTLY ASKED QUESTIONS</h2>
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

export default FAQ;

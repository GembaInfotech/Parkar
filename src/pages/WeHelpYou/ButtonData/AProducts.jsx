import React from "react";
import { Link } from "react-router-dom";

const faqList = [
  { id: 1, question: "Which Products do Know2Parking offer?", link: "/que1.3" },
  { id: 2, question: "Multi-Location pass", link: "/que2.3" },
  { id: 3, question: "Know2Parking Monthly Passes", link: "/que3.3" },
];

const AProducts = () => {
  return (
    <div className="p-8 px-4  sm:px-24 md:px-48 lg:px-64 xl:px-48 my-8 sm:my-8">
      <h2 className="text-2xl font-bold mb-4">ABOUT OUR PRODUCTS</h2>
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

export default AProducts;

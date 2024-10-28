import React from "react";
import Question from "../PAccountQue/Common";


const Que6FAQ = () => {
  const faqs = [
    {
      question: "Can I access a car park with a trailer, luggage rack or bicycle rack?",
      content: (
        <>
        <p className="py-6">
        <strong>No.</strong> The <strong>reservation is only valid for the type of vehicle selected, without a trailer</strong> or any object whose installation alters the vehicle's factory height or width.
        </p>
        <p><strong>Before booking your space, check the dimensions</strong> accepted for each category of vehicle (in the Vehicle section, next to the search engine) and the maximum height allowed in the car park. If you arrive with a trailer, the car park reserves the right to charge your trailer as an additional vehicle at on-site sales prices, or you may even be refused entry to the car park.
        </p>
          <p className="py-6">
          As for <strong>luggage racks or bicycle racks</strong>, you must <strong>remove them before entering the car park</strong>. Remember that our car parks do not have areas for storing these types of extensions.
          </p>
          
        </>
      ),
    },
  ];
  return (
    <div className="my-8 px-4 sm:my-8 sm:px-24 md:px-48 ">
      <div className="p-6">
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default Que6FAQ;

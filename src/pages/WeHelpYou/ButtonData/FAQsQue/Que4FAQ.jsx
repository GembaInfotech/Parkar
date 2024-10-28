import React from "react";
import Question from "../PAccountQue/Common";


const Que4FAQ = () => {
  const faqs = [
    {
      question: "Will I have a place allocated with a Know2Parking reservation?",
      content: (
        <>
        <p>In general, the Know2Parking reservation does not include a specifically allocated parking space. <strong>Some car parks do have specific spaces allocated to Know2Parking users</strong>, or the staff will tell you where you can leave your vehicle when you arrive.
        </p>
          <p className="py-6">
          For these car parks, detailed instructions will be provided on the booking voucher you receive in your purchase confirmation email. Unless specified otherwise, <strong>you are free to choose any available parking spot, as long as it is not designated for another specific use</strong>.
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

export default Que4FAQ;

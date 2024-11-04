import React from "react";
import Question from "../PAccountQue/Common";


const Que1FAQ = () => {
  const faqs = [
    {
      question: "Do I have to strictly follow the check-in and check-out times of my reservation?",
      content: (
        <>
        <p>At Know2Parking, we're experts when it comes to parking and driving, so we're the first to realise that traffic can be a little tricky to set specific times.</p>
          <p className="py-6">
          That's why a <strong>Know2Parking booking</strong> come with<strong> flexible entry</strong>. This means that, with your Know2Parking booking, not only will you have a 100% reserved parking space for the period indicated in the booking, but also, should you arrive a little earlier or a little later, you will not be prevented from accessing the car park.
          </p>
          <p>
          In the case of departure, you can leave earlier without any problem, but if for any reason you delay your departure, the extra time must be paid directly to the car park.
          </p>
         <p className="py-6">
          <strong>Remember that you can modify your booking up to 3 hour before the start of your booking</strong>, and you can do so either from your user account or through Customer Service. Our team is available on working days through our email info@know2parking.com
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

export default Que1FAQ;

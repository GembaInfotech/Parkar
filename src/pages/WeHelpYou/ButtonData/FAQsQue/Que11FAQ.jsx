import React from "react";
import Question from "../PAccountQue/Common";


const Que11FAQ = () => {
  const faqs = [
    {
      question: "I have not found the answer to my question, how can I contact Know2Parking Customer Service?",
      content: (
        <>
        <p>
        If you have any doubts or need more specific information about our car parks, products, how Know2Parking bookings work, or if you need help at any time during your stay, or even if you want to give us your opinion about our service or write us a suggestion, our <strong>
        Know2Parking Customer Service</strong> team will always be available to help you through our different channels: 
        </p>
          <ul className="list-decimal list-inside my-4">
            <li>
              <strong>Email</strong>: send us an email at any time of the day to <strong>
              info@know2parking.com</strong> and we will reply within 24 working hours.
            </li>
          <br />
            <li>
              <strong>Web form</strong>: available within our <strong>CONTACT US section</strong> at the top of our website. We will send you our reply to the e-mail address you indicate in the form within 24 working hours.
            </li>
          </ul>
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

export default Que11FAQ;

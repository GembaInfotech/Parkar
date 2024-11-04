import React from "react";
import Question from "../PAccountQue/Common";


const Que3FAQ = () => {
  const faqs = [
    {
      question: "Can I go directly to the car park without a Know2Parking reservation?",
      content: (
        <>
        <p><strong>Know2Parking is a leading platform</strong> for booking parking spaces online, now catering to the needs of users in India. Our primary goal is to provide convenient and affordable parking solutions for anyone looking to <strong>reserve a parking spot in advance</strong> at a special rate. This way, you can travel with peace of mind, knowing that you have a secure parking space waiting for you throughout your stay, and at the best price!
        </p>
          <p className="py-6">
          We don't operate as a traditional advertising platform but as a trusted intermediary between customers who need parking and parking facilities that wish to expand their reach. <strong>
          If you decide to visit the car park without booking in advance through Know2Parking, the prices may be higher</strong>, and availability isn't guaranteed.
          </p>
          <p>
          Remember, <strong>our prices are exclusive to our website and mobile app</strong>, meaning you can only access these special prices by booking through our platform. Plus, you'll enjoy benefits like the security of having a guaranteed parking space for your entire stay, along with the freedom to enter and exit as needed without any hassle.
          </p>
         <p className="py-6">
         At Know2Parking India, we're transforming the parking experience to suit your needs. Discover the convenience of our bookings and start enjoying our exclusive offers today!
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

export default Que3FAQ;

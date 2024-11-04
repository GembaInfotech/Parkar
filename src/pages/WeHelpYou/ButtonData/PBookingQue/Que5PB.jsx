import React from "react";
import Question from "../PAccountQue/Common";
import price from "../../../../assets/price.PNG";


const Que5PB = () => {
  const faqs = [
    {
      question: "Price of the Know2Parking booking: How is the fee to be paid calculated?",
      content: (
        <>
          <p>
          You've been browsing our website and you've already found the car park where you'll park your vehicle during your trip. That's great! Now all you have to do is confirm your booking and pay for your stay. In no time at all, you'll have your parking space reserved and you'll be able to enjoy all the comforts we offer at Know2Parking from the very first minute.
          </p>
          <p className="pt-6">
          When you start the booking process, we will show you the summary of your purchase on the right-hand side of the screen. Here you will find the breakdown of the <strong>
         Know2Parking booking price</strong>, which will be visible at all times until the final confirmation of payment.
          </p>
          
          <img src={price} alt="price" className="px-36 py-14" />
          <p>
          For any further information about the rate of your stay, our Customer Service team will be at your entire disposition through our <strong>email info@know2parking.com</strong>.
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

export default Que5PB;

import React from "react";
import Question from "../PAccountQue/Common";


const Que3PB = () => {
  const faqs = [
    {
      question: "I have received a discount code, how can I apply it to my booking?",
      content: (
        <>
          <p>
          If you are a registered Know2Parking user, you will periodically receive special promotions by email that may be accompanied by a <strong>Know2Parking discount code</strong> exclusive to our registered users.
          </p>

          <p className="py-6">
          Just that simple! <strong>Remember to read carefully the conditions attached to this discount code in the promotional email we will send you</strong>. You will only be able to benefit from these discounts during the period of validity of the discount code, which we will indicate in the promotional email. The discount code can only be used once, as long as the benefit is less than the total amount of the purchase. Finally, please note that <strong>if you cancel or modify your booking, the promotional code will no longer be applied</strong>.
          </p>
          <p>
          If you have any questions or need assistance during the process, our Customer Service team will be at your disposition through our live chat or our <strong>email info@know2parking.com</strong>.
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

export default Que3PB;

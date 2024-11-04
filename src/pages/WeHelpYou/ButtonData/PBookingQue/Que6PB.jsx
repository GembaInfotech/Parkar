import React from "react";
import Question from "../PAccountQue/Common";
import detail from "../../../../assets/detail.jpeg";


const Que6PB = () => {
  const faqs = [
    {
      question: "How can I cancel my Know2Parking booking?",
      content: (
        <>
          <p>
          Need to cancel your stay? At Know2Parking, we understand that sometimes plans can change due to last minute circumstances. For this reason,<strong> our bookings have a prior cancellation period so that you can cancel your stay within an extended period of time</strong>.
          </p>
          <p className="py-6">
          Depending on the car park, you may be able to <strong>cancel your Know2Parking booking up to 3 hour before the start of your booking</strong>. You can check the policy attached to your booking throughout the booking process:
          </p>
          <p>Before the booking confirmation, in the product availability box of each car park.</p>

          <img src={detail} alt="detail" className="px-36 py-14" />

          <p><strong>Your Know2Parking booking can be cancelled as long as it is within the period specified in the cancellation</strong> and modification conditions specific to each car park. Remember that once this period has passed or even once your stay has started, reservations cannot be cancelled.</p>

          <p className="py-6">If you have any questions or need help during the process, our Customer Service team will be happy to make the cancellation for you free of charge. Our team is available on weekdays via  <strong>email info@know2parking.com</strong>.
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

export default Que6PB;

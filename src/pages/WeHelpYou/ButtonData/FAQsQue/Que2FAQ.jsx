import React from "react";
import Question from "../PAccountQue/Common";


const Que2FAQ = () => {
  const faqs = [
    {
      question: "What should I do if I stay longer in the car park?",
      content: (
        <>
        <p>As we explained in our article DO I HAVE TO STRICTLY FOLLOW THE CHECK-IN AND CHECK-OUT TIMES OF MY Know2Parking BOOKING? <strong>Know2Parking bookings have flexible entry</strong>, i.e. with a courtesy time, thanks to which it is not imperative to arrive at the exact time indicated for your parking stay. However, outside this margin, any additional time in the car park that is not covered by your booking will have to be paid to the car park if required.
        </p>
          <p className="py-6">
          At Know2Parking, we know that there may be last-minute changes to your trip or that unforeseen circumstances may arise that force you to stay longer in the car park, so first of all, we want to assure you that <strong>the car can remain in the car park without moving, as long as the corresponding fee is subsequently paid for this additional time</strong>.
          </p>
          <p>
          Payment can be made directly at the car park and the price will be calculated on the basis of the local rates that the car park operates at that time, without penalties. If you need an extra day or more than one day in the same car park, you can also <strong>make a new Know2Parking booking</strong>, indicating as date and time of entry as the same date and time of departure as your initial booking. When you go to the car park, inform the staff of this new booking and they will give you the necessary instructions to continue enjoying your Know2Parking stay in the same car park.
          </p>
         <p className="py-6">
          <strong>Remember that you can modify your booking up to 3 hour before the start of your booking</strong>, and you can do so either from your user account or through Customer Service. Our team is available on working days through our <strong>email info@know2parking.com.</strong>
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

export default Que2FAQ;

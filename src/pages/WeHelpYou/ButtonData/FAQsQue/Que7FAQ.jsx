import React from "react";
import Question from "../PAccountQue/Common";


const Que7FAQ = () => {
  const faqs = [
    {
      question: "What can I do if I have not received the confirmation email?",
      content: (
        <>
        <p className="py-6">
        <strong>Every time you make a booking on Know2Parking, we will send you an email to the address you indicated during the purchase process as a booking confirmation.</strong>
        </p>
        <p>The email will be sent within minutes of payment confirmation. If after a few hours you do not receive this confirmation email, first of all, check your spam folder to make sure that your email manager has not considered our message as SPAM.
        </p>
          <p className="py-6">
          No sign of the confirmation email? In this case, please <strong>send us an email at info@know2parking.com</strong> so that we can send you your booking voucher in PDF format.
          </p>
          <p>
          In your request, you will need to provide us with the following information, which is very useful for us to find your booking:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
              <strong>The email address used to make the booking.</strong>
            </li>
            <li>
              <strong>Full name </strong>of the person making the booking.
            </li>
            <li>
              <strong>Name of the car park </strong>and dates of stay.
            </li>
            <li>
              <strong>Details of the payment</strong> you used earlier.
            </li>
          </ul>
          <p>In any case, remember that, <strong>if you have a Know2Parking account, you can access your personal area and review the history of your bookings</strong> in the Car park bookings section. Here you will always have the information and documents relating to your booking at your disposition.
          </p>
          <p className="py-6">
          It is possible that, due to an occasional system failure related to the availability of the car park, the reservation has not been confirmed but the purchase amount has been charged. In this case, your booking will not be reflected in your Know2Parking account. <strong>To resolve this incident, contact Customer Service</strong> and we will refund the full amount of the purchase and, if you wish, we will try a new booking in the same car park or in a nearby car park of your interest.
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

export default Que7FAQ;

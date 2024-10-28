import React from "react";
import Question from "../PAccountQue/Common";


const Que8FAQ = () => {
  const faqs = [
    {
      question: "I need an invoice for my stay in the name of my company or freelancer, how can I request it?",
      content: (
        <>
        <p>
        In order to issue an <strong>invoice for a Know2Parking booking</strong> the service provided in the name of your company or as a freelancer, you must send an email to the <strong>
        Customer Service email info@know2parking.com</strong> with the following information:
        </p>
       
          <ul className="list-decimal list-inside my-4">
            <li>
              <strong>Booking reference number.</strong>
            </li>
            <li>
              <strong>Name</strong> of the company or individual
            </li>
            <li>
              <strong>Address</strong> of the company or individual
            </li>
            <li>
              <strong>VAT NUMBER</strong> of the company or ID card number of the private individual.
            </li>
          </ul>
          <p><strong>If you need a purchase receipt, remember that with each booking we send it to you in PDF</strong> format in the purchase confirmation email, together with your booking voucher. You can also download this document by consulting your booking history in the Parking bookings section of your Know2Parking account.
          </p>
          <p className="py-6">
          The invoice will always be issued in PDF format at the end of the stay, as it is not possible to issue an invoice for a service until the service is completed. If the booking has been cancelled, we will only be able to issue an invoice for any associated management fees.
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

export default Que8FAQ;

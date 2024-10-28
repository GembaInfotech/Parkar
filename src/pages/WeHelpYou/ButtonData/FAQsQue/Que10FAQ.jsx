import React from "react";
import Question from "../PAccountQue/Common";


const Que10FAQ = () => {
  const faqs = [
    {
      question: "How do I request a refund for a reservation that I have been charged twice?",
      content: (
        <>
        <p>
        Have you booked through our platform and been <strong>charged twice</strong>? Have you booked twice by mistake? We understand that this type of situation can happen. In order for us to refund the additional amount, you should <strong>email us at info@know2parking.com</strong> with the following information:
        </p>
          <ul className="list-decimal list-inside my-4">
            <li>
              <strong>Booking locator</strong>
            </li>
          
            <li>
              <strong>Email address</strong> used to make the booking
            </li>
            
            <li><strong>For duplicated charges on your credit/debit card: </strong>
               Screenshot or bank statement corresponding to both charges, clearly showing the amount, the concept of the charge and the validity date.
            </li>
          </ul>
          <p>Once we have this information, we will be able to make the necessary checks to detect the possible error and, in this case, proceed to the full refund of one of the charges. This refund will be made to the same payment method used for the purchase with Know2Parking and may take up to a maximum of 5 to 10 working days to become effective, depending on your bank.
          </p>
          <p className="py-6">
          Remember that our Customer Service team is available on working days. Within these hours, <strong>your claim will be taken into consideration within a maximum of 24 hours</strong>.
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

export default Que10FAQ;

import React from "react";
import Question from "../PAccountQue/Common";
import purchaseinfo from "../../../../assets/purchaseinfo.jpeg";


const Que4PB = () => {
  const faqs = [
    {
      question: "Which information will I get once I have made my purchase?",
      content: (
        <>
          <p>
          You have already booked a parking space with Know2Parking! But... Do you know what to do when you arrive and where to find your proof of purchase? Don't panic, we've got everything ready for your next parking stay.
          </p>
          <p className="pt-6">
          Once you confirm the payment of your purchase, you will receive a <strong>Know2Parking booking confirmation email</strong> automatically sent from the address noreply@know2parking.com. In this message, you will find all the information about your purchase and two attached documents in PDF format: the booking voucher and the purchase receipt.
          </p>
          
          <img src={purchaseinfo} alt="purchaseinfo" className="px-36 py-14" />
          <p>
          <strong>If, for some reason, you have not received the email, first of all, check your SPAM folder</strong> to verify that your email administrator has not discarded our message. And if you cannot see the attached files correctly, you can obtain these documents from your user area, in the Car park bookings section, or even ask our Customer Service Department by sending an <strong>email to info@know2parking.com</strong>.
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

export default Que4PB;

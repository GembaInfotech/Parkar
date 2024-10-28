import React from "react";
import Question from "../PAccountQue/Common";
import payment from "../../../../assets/payment.jpeg";


const Que2PB = () => {
  const faqs = [
    {
      question: "Which payment methods can I use to pay for a Know2Parking booking?",
      content: (
        <>
          <p>
          In the <strong>Know2Parking booking</strong> process, you will make the full payment for the parking space through our platform. This way, when you go to the car park,<strong> your parking space will already be paid </strong>for and you won't have to do anything more than validate your booking and enjoy all the comforts and advantages that booking with Know2Parking.
          </p>
          <p>
          You can use any of these <strong>payment methods</strong> to make your online booking:
          </p>
          <ul className="my-4 list-inside list-decimal">
            <li>
              <strong>UPI:</strong> Unified Payments Interface (UPI) allows you to make quick and secure payments directly from your bank account using a UPI-enabled app. It's a convenient and widely used digital payment method in India, requiring just a <strong>UPI ID or QR code</strong> to complete the transaction.
            </li>
            <br />
            <li>
              <strong> Cards:</strong> You can pay using debit or credit cards. Enter <strong>
              the card details such as card number, expiry date, and CVV </strong>to securely book your parking space. This payment option supports major card networks like Visa, MasterCard, and RuPay.
            </li>
            <br />
            <li>
              <strong>Netbanking:</strong> This option allows you to make payments directly from your bank account using your bank's online banking platform. <strong>Choose your bank, log in with your credentials, and complete the payment</strong> securely for your booking.
            </li>
            <br />
            <li>
              <strong>Wallet:</strong> Digital wallets, like Paytm, PhonePe, or Google Pay, offer a cashless payment option where <strong>you can use the balance stored in your wallet</strong> to pay for parking. It's a quick and seamless way to complete the transaction.
            </li>
            <br />
            <li>
              <strong>Pay Later:</strong> The "Pay Later" option lets you book a parking space without immediate payment. <strong>You can settle the payment at a later date</strong>, providing flexibility for those who prefer deferred payment options.
            </li>
          </ul>
          <img src={payment} alt="payment" className="px-36 py-14" />
          <p>
          <strong>Payments by cheque, cash or other payment methods not listed</strong> above are not valid for our bookings.
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

export default Que2PB;

import React from 'react'
import Question from "./Common";


const Que6PA = () => {
  const faqs = [
    {
      question: "Which information can I add and/or modify about my Know2Parking user?",
      content: (
        <>
          <p>
          From your Know2Parking account, you can <strong>change personal information related to your Know2Parking account </strong>(i.e. your full name, city of residence and telephone number) whenever you want and as many times as you need.
          </p>
          <p className="py-6">But that's not all! You will also be able to <strong>add additional information </strong>that will be very useful for you to save in order to make your purchases on Know2Parking more quickly. You can save the details of your usual vehicles and even associate the payment methods of your choice.</p>
          <p>You can access your account details:</p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>From our website:</strong> by clicking on your name at the top right, in the My Account section.
            </li>
            <li>
            <strong> From our APP:</strong> in the menu on the top left, by clicking on your name, in the My Details section.
            </li>
          </ul>
            <p className='py-6'><strong>The only data you cannot change is the email address</strong> associated with your Know2Parking account, as this is sensitive and identifiable data for our system. If at any time you wish to change your email address, you must create a new account with the desired email address and request the cancellation of the first account to Customer Service. Send us an email to 
            <strong> info@know2parking.com</strong> with your request and your account will be cancelled within a maximum period of one week.

</p>
        </>
      ),
    },
  ];
  return (
    <div className="px-4 sm:px-24 md:px-48 my-8 sm:my-8 ">
      
      <div className="p-6">
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} content={faq.content} />
        ))}
      </div>
    </div>
  )
}

export default Que6PA
import React from 'react'
import Question from "./Common";


const Que11PA = () => {
  const faqs = [
    {
      question: "How can I unsubscribe from Know2Parking?",
      content: (
        <>
          <p>
          If you want to <strong>unsubscribe as a Know2Parking user</strong>, you must contact our Customer Service team to take care of this procedure. <strong>Send us an email to info@know2parking.com </strong>requesting the definitive cancellation of your account and your data, and indicating the e-mail address associated with your Know2Parking account. Within a maximum period of one week, the account will have been deleted from our system.
          </p>
         
          <p className="py-6"><strong>Remember that</strong> if you wish to have a Know2Parking account again in the future <strong>with the same email address, you can create a new one from scratch</strong>, but please note that you will no longer have access to your booking history prior to the unsubscription request.
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

export default Que11PA
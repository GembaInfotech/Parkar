import React from 'react'
import Question from "./Common";


const Que10PA = () => {
  const faqs = [
    {
      question: "I don't want to receive any more messages from Know2Parking to my e-mail address, what should I do?",
      content: (
        <>
          <p>
          To <strong>stop receiving Know2Parking notifications</strong> to your email, just <strong>           
          </strong>click on the sentence at the end of the message of any of our notifications, where it reads <strong>click here to unsubscribe.</strong>
          </p>
         
          <p className="py-6">Please note that <strong>if you decide to stop receiving our newsletters, you will not be able to find out about the latest offers we offer on our platform, nor will you benefit from the exclusive discounts</strong> that we periodically send to our registered customers. We don't want to spam you! We will only inform you about what you might be most interested in based on your previous purchases with us</p>
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

export default Que10PA
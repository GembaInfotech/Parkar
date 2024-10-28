import React from 'react'
import Question from "../PAccountQue/Common";


const Que1AP = () => {
  const faqs = [
    {
      question: "Which Products do Know2Parking offer?",
      content: (
        <>
          <p>
          <strong>Know2Parking products</strong> and prices that we offer on our platform are those that each car park has decided to publish.
          </p>
          
            <p className='py-6'>Depending on the car park, you will find different products:
</p>  
<ul className="list-decimal list-inside my-4">
  <li>
  <strong>Basic pass:</strong> This booking allows <strong>a single entry and exit to the car park</strong>. Once outside the car park, the pass will no longer be valid.
  </li>
  <br />
  <li>
  <strong>Unlimited pass:</strong> This booking allows the user to <strong>enter and leave the car park as many times as desired during the time of the booking</strong>, as long as it is done within the opening hours of each car park.
  </li>
</ul>
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

export default Que1AP
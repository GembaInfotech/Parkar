import React from 'react'
import Question from "../PAccountQue/Common";


const Que1ACP = () => {
  const faqs = [
    {
      question: "What kind of car parks can I find at Know2Parking?",
      content: (
        <>
          <p className="mb-4">
          <strong>At Know2Parking</strong>, you can find a variety of car parks designed to meet different needs:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>Long-Term Parking:</strong> Suitable for extended stays, such as travelers leaving their cars for several days.     
            </li>
            <br />
            <li>
            <strong>Valet Parking:</strong> Offers a premium service where attendants park your car for you, typically found at hotels, airports, or shopping centers.
            </li>
            <br />
            <li>
              <strong>Open-Air Parking:</strong> Outdoor spaces, often more affordable, suitable for short or long stays.
            </li>
            <br />
            <li>
              <strong>Reserved Parking:</strong> Pre-booked spaces guaranteeing availability upon arrival.
            </li>
          </ul>
            <p className='py-6'><strong>Know2Parking aims</strong> to accommodate diverse parking requirements with flexible options.</p>
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

export default Que1ACP
import React from 'react'
import Question from "../PAccountQue/Common";


const Que3ACP = () => {
  const faqs = [
    {
      question: "How does a car park with a shuttle service work?",
      content: (
        <>
          <p className="mb-4">
          <strong>A car park with a shuttle service</strong> offers convenient parking for locations that may not be within immediate walking distance of your destination, such as airports, event venues, or large shopping centers.
          </p>
          <p> Here's how it typically works:</p>

          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>Parking Arrival:</strong> You park your vehicle in the designated shuttle car park. These lots are usually located a short drive away from the main destination.
            </li>
            <br />
            <li>
            <strong>Shuttle Pickup:</strong> Once parked, you head to the nearest shuttle stop within the parking lot. Shuttles run at regular intervals, and some services may offer on-demand pickup.
            </li>
            <br />
            <li>
              <strong>Transfer to Destination:</strong> The shuttle transports you to your destination, such as the airport terminal, event entrance, or mall. The ride is usually complimentary as part of the parking fee.
            </li>
            <br />
            <li>
              <strong>Return Pickup:</strong> When you're ready to leave, catch the shuttle back to the parking lot. Shuttle stops are often located near major exits of the destination for easy access.
            </li>
            <br />
            <li>
              <strong>Retrieve Your Car:</strong> The shuttle drops you off at the car park, and you can then retrieve your vehicle and exit.
            </li>
          </ul>
            <p className='py-6'><strong>These services</strong> provide a hassle-free way to park further away while still reaching your destination conveniently.</p>
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

export default Que3ACP
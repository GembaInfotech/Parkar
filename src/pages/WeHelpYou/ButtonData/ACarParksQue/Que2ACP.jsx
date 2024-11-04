import React from 'react'
import Question from "../PAccountQue/Common";


const Que2ACP = () => {
  const faqs = [
    {
      question: "What is a Valet Parking and how does it work?",
      content: (
        <>
          <p>
          A <strong>Valet Car Park </strong>is a car park that offers a <strong>valet parking service</strong>, i.e. a pick-up and drop-off service at a specific point at an airport, station or port.
          </p>
          
            <p className='py-6'>If you have booked or are interested in using this convenient service, the way it works is very simple: on the day of your arrival, you must drive to the agreed meeting point. Generally, your booking will provide you with a contact number that you should call to let them know the time of your arrival and to arrange the meeting point. This way, by the time you arrive at the terminal,<strong> a member of staff will be waiting to pick up your vehicle and drive it to the car park for you</strong>. On your return, you will need to inform the car park of your landing as you did on your departure day so that the staff can bring your vehicle back.
</p>  
<p className='pb-6'>It is important <strong>to follow the instructions on your booking</strong>, as you will find detailed instructions there. Sometimes, this service carries out a previous inspection of the vehicle as a guarantee, and the characteristics of the car park where your vehicle will be taken will be specified on our website (covered or uncovered, if it has video surveillance, opening hours, etc.). In order to enjoy all the advantages of this type of service, we inform you that it will be necessary to leave the keys of your vehicle with the staff.

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

export default Que2ACP
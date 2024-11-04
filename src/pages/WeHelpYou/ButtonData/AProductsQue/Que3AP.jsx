import React from 'react'
import Question from "../PAccountQue/Common";


const Que3AP = () => {
  const faqs = [
    {
      question: "Know2Parking Monthly Passes",
      content: (
        <>
          <p>
          <strong>At Know2Parking</strong>, we offer rates adapted to those users who need a parking space for long stays or permanent stays. The car parks with this type of offer available can be found in the <strong>Monthly Passes</strong> section, next to the search engine and the other Passes and Airports sections.
          </p>
          <p className="py-6">
          Our <strong>long-stay passes</strong> require a <strong>minimum stay of 1, 3, 6 or 12 months</strong>, depending on the offer of each car park. But don't panic: this length does not entail any type of surcharge in the rate. You only have to sign a contract with the car park in which you guarantee that you will use the parking space during the established months.
          </p>
          <p>
          Within our offer, we offer several types of rates adapted to the main needs of our users:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>24-Hour Parking:</strong> As the name suggests, you'll have <strong>access to a parking spot 24/7</strong>, allowing you to park, enter, and exit the car park an unlimited number of times, day or night.
            </li>
            <br />
            <li>
            <strong>Daytime Parking:</strong> Ideal if you need a parking space during your working hours. This option is <strong>available from Monday to Friday (and in some car parks, from Monday to Sunday) for up to 14 hours a day, covering a schedule that extends from morning to evening.</strong> The exact timings can be adjusted based on your needs when you sign the contract. Different rate plans are available for durations of 7, 10, 12, or 14 hours per day.
            </li>
            <br />
            <li>
              <strong>Night Parking:</strong> Suitable if you only need a parking spot outside of regular work hours. This plan allows <strong>parking from Monday to Friday for up to 14 hours overnight, with a schedule extending from evening to morning.</strong> Additionally, the spot is <strong>
             available 24 hours on Saturdays, Sundays, and public holidays </strong>. The exact hours can be arranged with the car park when the contract is signed.
            </li>
          </ul>
            <p>When you <strong>buy a monthly season ticket from Know2Parking</strong>, depending on the duration of each season ticket, you will enjoy a reduced price compared to the normal retail price. In the event that you decide to cancel your subscription within the period of permanence, you must agree to pay the car park the difference between the reduced price and the normal retail price for each month and/or days that you have stayed in the car park.</p>
            <p className='py-6'>
            To benefit from one of these rates is very simple: contact <strong>Customer Service</strong> through our <strong>
            email info@know2parking.com</strong> to check all the conditions and we will help you to reserve your season ticket.
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

export default Que3AP
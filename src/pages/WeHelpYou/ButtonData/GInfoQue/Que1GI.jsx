import React from 'react';
import Question from "../PAccountQue/Common";

const Que1GI = () => {
  const faqs = [
    {
      question: "What is Know2Parking?",
      content: (
        <>
        <p>Know2Parking is <strong>India's leading website</strong> for booking parking spaces online.</p>
        <p className='py-6'>
        <strong>Know2Parking aims</strong> to revolutionize parking solutions in India by offering a smart, user-friendly platform for finding and booking parking spaces. The service caters to the unique challenges of parking in busy Indian cities, providing a seamless experience for both drivers and parking operators.
        </p>
        <p>Key aspects of Know2Parking for India's market:</p>
        <ul className="list-decimal list-inside my-4">
          <li>
            <strong>Flexible Parking Options:</strong>  Users can choose from a range of booking options, including hourly, daily, monthly, and long-term subscriptions, making it convenient for all types of parking needs.
          </li>
          <br />
          <li>
            <strong>Affordable Rates:</strong> Know2Parking partners with parking facilities to offer discounted rates, helping customers save money. This makes parking more accessible and economical.
          </li>
          <br />
          <li>
            <strong>Optimizing Urban Parking Spaces:</strong> The platform helps parking operators maximize the usage of their parking lots by filling unused spots and increasing profitability without taking on additional risks.
          </li>
          <br />
          <li>
            <strong>Smart City Integration:</strong> By providing real-time availability and booking, Know2Parking aligns with the smart city initiatives across major Indian cities, contributing to reducing traffic congestion and pollution.
          </li>
          <br />
          <li>
            <strong>Expanding Across Major Cities:</strong> Starting with metropolitan areas like Delhi, Mumbai, Bengaluru, and Chennai, Know2Parking plans to gradually extend its reach to other cities, offering convenient parking solutions nationwide.
          </li>
          <br />
          <li>
            <strong>User-Centric Technology:</strong> The platform uses innovative technology to deliver real-time updates, navigation assistance, and secure payment options, making parking stress-free and hassle-free.
          </li>
        </ul>
        <p>Know2Parking's approach addresses the increasing demand for efficient parking solutions, helping both individuals and businesses navigate India's growing urban landscape with ease.</p>
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
}

export default Que1GI
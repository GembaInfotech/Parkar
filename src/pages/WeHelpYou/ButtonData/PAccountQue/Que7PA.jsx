import React from 'react'
import Question from "./Common";


const Que7PA = () => {
  const faqs = [
    {
      question: "How can I get an invoice for a Know2Parking booking from my account?",
      content: (
        <>
          <p>
          At the moment, unfortunately, there is no way to <strong>download an invoice for a Know2Parking booking </strong>in the name of a company or individual directly from your user area.
          </p>
          <p className="py-6">First of all, we would like to remind you that, if what you need is a purchase receipt, we always send this receipt as an attachment and in PDF format within the purchase confirmation email, together with your booking voucher. You can also find this document by <strong>
          consulting your booking history in the Parking bookings</strong> section of your Know2Parking account.
</p>
<p>To issue an invoice for your Know2Parking booking for the service provided in the name of your company or as a freelancer, <strong>you must send an email to the Customer Service email info@know2parking.com </strong>with the following information:</p>
          
          <ul className="list-disc list-inside my-4">
            <li>
            <strong>Booking </strong>reference number
            </li>
            <li>
            <strong>Name </strong>of the company or individual
            </li>
            <li><strong>Address </strong>of the company or individual</li>
            <li><strong>VAT NUMBER</strong> of the company or<strong> ID card number</strong> of the private individual</li>
          </ul>
            <p className='py-6'>The invoice will always be issued in PDF format at the end of the stay, as <strong>it is not possible to issue an invoice for a service until the service is completed.</strong> If the booking has been cancelled, we will only be able to issue an invoice for any associated management fees.
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

export default Que7PA
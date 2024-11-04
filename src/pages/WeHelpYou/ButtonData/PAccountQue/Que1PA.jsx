import React from "react";
import Question from "./Common"; 

const Que1PA = () => {
  const faqs = [
    {
      question: "What are the benefits of registering as a Know2Parking user?",
      content: (
        <>
          <p>
            Having an <strong>account with Know2Parking</strong> is all about
            advantages. For starters, registering is completely <strong>free</strong> and
            will give you access to incredible <strong>benefits</strong> and <strong>comforts</strong>,
            as well as <strong>exclusive promotions</strong> for the simple fact of having an
            account with us. It's also extremely <strong>convenient</strong> for those users
            who book through our platform on a regular basis.
          </p>
          <p className="py-6">
            What else can you benefit from? Here is a list of all the good things
            we have thought of for you:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Personalise your access to Know2Parking:</strong> save your personal
              information, and your vehicle's information and register your usual
              payment methods to make your purchases more quickly. You can also save
              your favourite car parks in favourites so that you can find them more
              easily. You won't waste a minute!
            </li>
            <br />
            <li>
              <strong>Always have access to your account on whatever device you use:</strong> from
              your computer, mobile or tablet, you will have all the information you
              have registered as default. No more hassle!
            </li>
            <br />
            <li>
              <strong>Consult your bookings or active parking meter tickets:</strong> manage dates, times, access information and validation of your stay, and have the documentation of your stay (booking voucher and purchase receipt) available at any time.
            </li>
            <br />
            <li>
              <strong>Access to the record of your reservations and parking meter tickets:</strong> even if you didn't have a Know2Parking account before, you will see all the reservations and tickets associated with your account email address.
            </li>
            <br />
            <li>
              <strong>Cancel or modify your reservations:</strong> as long as you are within the cancellation/modification policy applicable to each reservation at that time, without the need for intermediaries.
            </li>
            <br />
            <li>
              <strong>Receive user-only promotions and discount codes:</strong> we won't SPAM you or pester you too much, as we will only select offers that suit your type of booking
            </li>
          </ul>
          <p className="py-6">
          It's never too late to sign up for an account! <strong> You can register with Know2Parking</strong> at any time, <strong>even if you have already made a reservation.</strong> To do this, remember to register <strong>with the same email address you used for your previous bookings</strong> so that you can view your entire booking history.
          </p>
          <p>
          Don't wait any longer and register now with Know2Parking! Check out our article HOW CAN I CREATE A Know2Parking ACCOUNT? to find out how to do it. You'll see: it won't take you two minutes
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
  );
};

export default Que1PA;

import React from "react";
import Question from "../PAccountQue/Common";
import SearchBooking from "../../../../assets/SearchBooking.PNG";
import location from "../../../../assets/location.PNG";
import detail from "../../../../assets/detail.jpeg";
import vehicle from "../../../../assets/vehicle.jpeg";
import payment from "../../../../assets/payment.jpeg";
import processpay from "../../../../assets/processpay.jpeg";

const Que1PB = () => {
  const faqs = [
    {
      question: "How to book a parking space with Know2Parking?",
      content: (
        <>
          <p>
            Using our platform is quick and easy! You'll find the parking space
            you're looking for in no time and enjoy all the benefits of
            <strong> booking a parking space with Know2Parking:</strong>
          </p>
          <ul className="my-4 list-inside list-decimal">
            <li>
              <strong>Enter our website </strong>
            </li>
            <li>
              <strong>Use the search engine to find the city or address</strong>
              where you want to book your parking space.
            </li>
            <li>
              <strong>Select the day and time </strong>of your arrival and
              departure
            </li>
            <li>
              <strong>Click on SEARCH</strong>
            </li>
          </ul>
          <img
            src={SearchBooking}
            alt="SearchBooking"
            className="px-36 py-14"
          />
          <p className="py-6">
            Based on your search, <strong>
               we will provide you with a list of all available car parks
            </strong>
            . You will see a map with the location of nearby car parks and their
            prices, and
            <strong> a list on the left with the names of the car parks </strong>
            and some interesting information about them. The car parks will be
            ordered from the closest to the furthest, but you also have the
            option to order them by price.
          </p>
          <img src={location} alt="location" className="px-36 py-14" />
          <p>
            To see all the detailed information about each car park, you can
            click on the name of the car park you are interested in from the
            list itself or directly from the map. <strong> We will inform you about
            everything you need to know:</strong> its location, the different accesses,
            some photos of the car park, the prices, the booking validation
            instructions, the average rating of our users and their opinions
            about their experiences in that car park.
          </p>
          <img src={detail} alt="detail" className="px-36 py-14" />
          <p>
            Do you already know where you want to leave your vehicle? Great!
            <strong> Click on BOOK</strong> to access the purchase and booking section. We will
            only ask you for <strong>user information and vehicle information if
            required</strong> (if you are logged in from your account, this information
            will already appear automatically by default).
          </p>
          <img src={vehicle} alt="vehicle" className="px-36 py-14" />
          <p>
           <strong> Choose your preferred payment method</strong> from our five options: UPI,
            Cards, Netbanking, Wallet or Pay Later. Just a moment! Take a last
            look at your booking to make sure everything is correct: on the
            right-hand side of the screen, you will have the details of your
            stay available throughout the booking process. Now, <strong>click on PAY
            NOW</strong>.
          </p>
          <img src={payment} alt="payment" className="px-36 py-14" />
          <img src={processpay} alt="processpay" className="px-36 py-14" />
          <p>
            Your Know2Parking booking is now complete! You will appear on the
            booking confirmation screen and,<strong> in a few moments, you will receive
            a confirmation message in your email</strong>.
          </p>
          <p className="py-6">
            Isn't it a piece of cake? Remember that if you have any questions
            about our car parks, products, information or if you need help
            during the process, our <strong>Customer Service</strong> team will be able to help
            you on working days. You can also consult our available articles in
            the Help section (at the top of the website), or you can contact us
            through our <strong>email info@know2parking.com</strong>, from where
            we will answer you within 24 hours.
          </p>
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
};

export default Que1PB;

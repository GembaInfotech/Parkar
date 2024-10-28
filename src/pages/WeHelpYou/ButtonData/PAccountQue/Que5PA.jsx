import React from 'react'
import Question from "./Common";


const Que5PA = () => {
  const faqs = [
    {
      question: "How can I see my Know2Parking bookings in my user account?",
      content: (
        <>
          <p>
          Have you just created your first Know2Parking booking and want to <strong>see your booking in your Know2Parking account?</strong> Then you will have to register as a Know2Parking user. In addition to the fact that having an account on our platform is completely free, you will have at your disposition a complete user area where you will always have your booking history registered. This will be extremely useful for you, as you will be able to <strong>access your booking before, during and after your purchase.</strong> What's more, you can take your booking with you comfortably on your smartphone, without having to print or carry any paper, by downloading our APP and accessing your Know2Parking account from there.
          </p>
          
            <p className='py-6'>One important thing! To be able to access your bookings, your<strong> Know2Parking account must be associated with the same email address you gave when you made your booking.</strong> 
</p>
<p>Don't have a Know2Parking account? Don't worry, there's still time! Register by accessing the menu on the main screen of the APP (at the top left) and create your user account by associating the same email address you gave when you made your booking.</p>
           
          <p className='py-6'>
          Are you registered on Know2Parking? Perfect! However, in order to be able to see your booking in your user area, your account must be associated with the same email address as the one you registered for your booking. If this is not your case, no problem:<strong> you can create a new Know2Parking account with your booking email address.</strong> Remember that if you no longer need the first account you created,<strong> you can request the cancellation of the first account from our Customer Service</strong> if you no longer need it. For more information, see our article HOW CAN I UNSUBSCRIBE FROM Know2Parking?
          </p>
          <p>Once you have your account and are logged in, you <strong>can access your bookings in the Parking bookings section of your user area.</strong> If you are logged in to your account and cannot find your booking,
          we recommend you to log out and log in again, or even uninstall and re-download the APP to refresh your data.</p>
          <p className='py-6'>Finally, for any questions or help regarding your Know2Parking account and the registration of your bookings, our <strong>Customer Service</strong> team is available via email at <strong>info@know2parking.com.</strong></p>
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

export default Que5PA
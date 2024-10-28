import React from 'react'
import Question from "../PAccountQue/Common";


const Que2AP = () => {
  const faqs = [
    {
      question: "Multi-Location pass",
      content: (
        <>
          <p>
          The <strong>Multi-Location Pass</strong> is the most flexible and convenient parking solution we offer in India. It allows you to access a network of car parks across multiple locations during the reserved period, with <strong>unlimited entries and exits</strong>, as long as these car parks belong to the same operator.
          </p>
          
            <p className='py-6'>Currently, the Multi-Location Pass is available in select cities, such as Bengaluru, covering a network of municipal and private car parks. You can book a <strong>
           Multi-Location Pass for durations ranging from 1 to 7 days </strong>, during which you can use any of the participating car parks as many times as needed.
</p>  
<p>To activate your Multi-Location Pass, <strong>visit the reserved parking booth and show your reservation details to the attendant</strong>, who will validate your pass. The staff will provide you with an access card or ticket, enabling you to enter and exit any car park within the operator's network. 
</p>
<p className='py-6'><strong>Remember that</strong> the Multi-Location Pass is valid only within the specified network of car parks. For instance, if your pass is connected to a specific operator in Bengaluru, you cannot use it for car parks that are not part of that network.</p>
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

export default Que2AP
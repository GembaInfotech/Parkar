import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { format, differenceInMinutes } from 'date-fns';
import { PiCurrencyInrLight } from "react-icons/pi";


const Reservation = ({data, inT , ouT}) => {
  
    const [amt , setAmt] = useState();
    const  difference = differenceInMinutes(ouT, inT);

    useEffect(()=>{
        const diff = 60*data?.price_for;
        const remainder = difference % diff;
        const quotient = Math.floor(difference/ diff);
        const val =  remainder ==0 ?0 : 1
        const newAmt = data?.price *( quotient + val);
      setAmt(newAmt);
      console.log(diff , " ", difference, " ", remainder,  " ",quotient ,  " ",val, " ", newAmt)

    },[])

   const navigate = useNavigate();
    const launch = ()=>{
    
        
        navigate(`/checkout?name=${data.name}&id=${data._id}&in=${inT}&out=${ouT}&amt=${amt}&diff=${difference}`)
        
        }
  return (
    <div className=' sticky ml-4 shadow-2xl dark:bg-white rounded-2xl mt-16  w-1/3  h-96'>
    <div className='p-8 pb-2'><p className='text-xl'>Reservation Details</p></div>

     <div className='px-8 '>
       <div className=' border border-1 border-gray-400  rounded-3xl p-4 '>
       <div className='flex  justify-between '>
          <div>
          <p>Basic Price</p>
          </div>
          <div className=' '>
           <div className='flex'>
           <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-3xl '/>
            <p className='text-orange-400 font-bold text-2xl '>{amt} </p>
           </div>
            <p className='text-[12px] text-gray-500'>for {Math.round(difference/60)} hours</p>
          </div>
      </div>
     <div className='py-2'>
     <hr  />
     </div>
      <div className='flex justify-between '>
        <div>
          <div><p  className='text-[12px] text-gray-500'>Arrival </p>
          <p> {format(inT , "EE dd MMMM hh:mm")}</p></div>
        </div>
        <div>
         
          <div><p className='text-[12px] text-gray-500'>Departure</p>
           <p>{format(ouT, "EE dd MMMM  hh:mm")}</p>
          </div>
        </div>
      </div>
      
     
       </div>
     </div>
     <div className='p-8 '>
     <div>
        <button class="bg-violet-50 w-full mb-2   text-sm py-1 px-4 rounded-2xl ">
 <p className='text-gray-500'>  Free cancelation</p>
</button>
</div>
        <div>
        <button onClick={()=>launch()} class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ">
  Continue
</button>
        </div>
      </div>

    </div>
  )
}

export default Reservation
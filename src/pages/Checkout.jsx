
import React, { useState, useEffect, useRef } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { saveBookingData } from '../redux/actions/bookingAction';
import { getUserAction } from '../redux/actions/userActions';



const Checkout = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const parkingData = useSelector(
    (state) => state.parkings?.selected
  ); 

  

     

  
 
    const save = async () => {
      const {user} = await JSON.parse(localStorage.getItem('profile'))
      parkingData.user = user._id
      await dispatch(saveBookingData(parkingData));
      const payment_link_url = "https://rzp.io/i/XGZnE2tP"
      window.location.href=payment_link_url;

      
    };
    

  
  
  
  return (
    <div>{parkingData.name} 
        <button onClick={()=>{save()}}>pay</button>
</div>
  )
}

export default Checkout
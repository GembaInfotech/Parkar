
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { selecetedParking } from '../../redux/actions/parkingAction';




const ParkingDetailComponent = ({data}) => {



  const dispatch = useDispatch();

  const navigate = useNavigate();
  const launch = ()=>{
    
  navigate(`/checkout?id=${data._id}`)
  
  }


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(selecetedParking(data));
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>{data.name}
     <h2>{data.city}</h2>
     <h2>{data.price_for}</h2>
     <button onClick={()=>{launch()}}>continue</button>

    </div>
  )
}

export default ParkingDetailComponent
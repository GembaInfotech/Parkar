import React, { useMemo, useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getParkingById, getParkingAction } from '../redux/actions/parkingAction';
import CommonLoading from "../components/loader/CommonLoading";
import { useLocation } from 'react-router-dom';
import ParkingDetailComponent from '../components/parking/ParkingDetailComponent';





const ParkingDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const inT = searchParams.get('in')
  const ouT = searchParams.get('out')
 console.log(inT)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  const parking = useSelector(
    (state) => state.parkings?.parking
  );
  const parkingss = useSelector(
    (state) => state.parkings?.parkings
  );

 
  

  useEffect(() => {
    
    
    const fetchData = async () => {
      if(parkingss.length==0)
        {
          await dispatch(getParkingAction(id));
        }
     else{
      await dispatch(getParkingById(id));
     }
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);



  const parkingDetail = useMemo(() => {
    if (!parking) {
      return null;
    }
    return   <div  className="main-section ">
         <ParkingDetailComponent data={parking} inT={inT} ouT={ouT}/>      </div>
  
  }, [parking]);
 

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }
  return (
    <div className='w-[90vw] mx-auto'>{parkingDetail}</div>

  )
};

export default ParkingDetail
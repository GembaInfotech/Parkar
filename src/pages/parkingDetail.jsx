import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getParkingById, getParkingAction } from '../redux/actions/parkingAction';
import CommonLoading from "../components/loader/CommonLoading";
import { useLocation } from 'react-router-dom';
import ParkingDetailComponent from '../components/parking/ParkingDetailComponent';





const ParkingDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams)
  const id = searchParams.get('id');
  console.log(id)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  const parking = useSelector(
    (state) => state.parkings?.parking
  );

  // const particularParking = useSelector(
  //   (state) => state.parkings?.parking
  // );

  console.log(parking);
  console.log("test12345666");
  // console.log(particularParking);


  useEffect(() => {
    
    const fetchData = async () => {
      console.log("par")
      console.log(parking);
      await dispatch(getParkingById(id));
      if(!parking)
        {
          console.log("no")
          await dispatch(getParkingAction(id));
        }
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);



  console.log(parking)

 

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }
  return (
    <div><ParkingDetailComponent data={parking}/></div>

  )
};

export default ParkingDetail

import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVehicleAction, updateVehicleAction, getVehicleAction } from '../redux/actions/vehicleActions';
import CommonLoading from "../components/loader/CommonLoading";
import Cards from "../components/vehi/Cards";
function Vehicle() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const vehicle = useSelector(
    (state) => state.vehicle?.vehicleList
  );
 console.log(vehicle)
  const call =() => {
    setLoading(true)
    const fetchData = async () => {
      await dispatch(createVehicleAction());
      setLoading(false);
    };
    fetchData();
  };
 
  const update =() => {
    setLoading(true)
    const fetchData = async () => {
      await dispatch(getVehicleAction());
      setLoading(false);
    };
    fetchData();
  };


  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }

  return <div className="main-section">
 <button onClick={()=>{call()}}>call</button>

 <button onClick={()=>{update()}}>Update</button>


 {vehicle?.map((vehicled, index) => (

        <div key={index}>
         
         <Cards vehicle={vehicled} />
        </div>
      ))}

  </div>;
};


export default Vehicle

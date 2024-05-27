
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVehicleAction, getVehicleAction } from '../redux/actions/vehicleActions';
import CommonLoading from "../components/loader/CommonLoading";
import Cards from "../components/vehi/Cards";
import DeleteModal from "../components/modals/DeleteModal";

function Vehicle() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (value) => {
    setShowModal(value);
  };
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
 
useEffect(()=>{
  setLoading(true)
  const fetchData = async () => {
    await dispatch(getVehicleAction());
    setLoading(false);
  };
  fetchData();

},[])
   
  


  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }

  return   (
<div>
<DeleteModal
        showModal={showModal}
       
        onClose={() => toggleModal(false)}
       
      />
<div className="main-section  overflow-y-auto max-h-screen">
 <button onClick={()=>{call()}}>call</button>

 <button
                onClick={() => toggleModal(true)}
                className="text-red-500"
              > button 
                </button>


                <div  className="grid grid-cols-1 sm:grid-cols-2  gap-0">
 {vehicle?.map((vehicled, index) => (

    
         
         <Cards key={index} vehicle={vehicled} />
       
      ))}
       </div>

  </div>
  </div>

  )
};


export default Vehicle

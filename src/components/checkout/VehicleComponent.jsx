import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleAction, selectVehicleAction } from '../../redux/actions/vehicleActions';
import { FaDotCircle } from "react-icons/fa";


const VehicleComponent = ({handler}) => {

     

    const dispatch = useDispatch();
    const vehicle = useSelector(
        (state) => state.vehicle?.vehicleList
        
      )
      const vehicleSelected = useSelector(
        (state) => state.vehicle?.selectedVehicle
      )

      const handleVehicleUpdate= async (id)=>{
        await  dispatch(selectVehicleAction(id));
      }

    
      useEffect(()=>{
        const fetchData = async () => {
          await dispatch(getVehicleAction());
        
        }
        fetchData()
        
      },[dispatch])


      if(vehicle?.length==0){
        return <h1>Kindly add One vehicle for proceed</h1>
      }


  return (
    vehicle?.map((item) => (
        
        <div key={item._id} className="main-section ">
          
            <div  onClick={()=>{    handleVehicleUpdate(item._id)  
            handler()

            }} className='bg-lavendar-100 w-[80vw] sm:w-full p-2 sm:p-4 m-2  flex justify-between  rounded-xl  border border-1'>
           <div className='flex '>
           <h3 className=' p-phone sm:text-sm  px-1 bg-blue-200 rounded-sm'> {item.vehicle_name} </h3> 
            <h3 className=' p-phone sm:text-sm  px-1'> {item.vehicle_number}  </h3> 
            <h3 className=' p-phone sm:text-sm  px-1'>  {item.vehicle_type} </h3></div> 
           <div> {( vehicleSelected &&  vehicleSelected?._id === item._id) && <button  className='text-green-400 text-sm sm:text-xl'><FaDotCircle /></button>}</div> </div> 
              
        </div>
      ))
  )
}

export default VehicleComponent
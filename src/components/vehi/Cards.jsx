import React from 'react'
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { deleteVehicleAction } from '../../redux/actions/vehicleActions';
import { useDispatch } from 'react-redux';
import { AiOutlinePlus } from "react-icons/ai";




const Cards = ({vehicle, call}) => {

const dispatch = useDispatch();
 const delete_vehice = async (id) =>{
    await dispatch(deleteVehicleAction(id))
    window.location.reload();

 }

  return (
    <div className=" w-full sm:w-[30vw] flex  justify-center items-center rounded-md bg-[#1034A6]  text-white overflow-hidden shadow-lg  my-2">
 

         { vehicle ? <>
   
<div className='flex items-center justify-between w-full'>
<div>
  < FaCarRear className=' text-3xl sm:text-[48px] mx-2' />
 </div>
  <div className="px-6 py-4  p-phone sm:text-lg w-full">
  <div className="font-bold text-sm sm:text-xl mb-2">{vehicle.vehicle_name}</div>

  <p className=" ">
    <span className="font-semibold">Number:</span> {vehicle.vehicle_number}
  </p>
  <p className=" ">
    <span className="font-semibold">Type:</span> {vehicle.vehicle_type}
  </p>
  <p className=" ">
    <span className="font-semibold">Is Default:</span> {vehicle.isDefault ? 'Yes' : 'No'}
  </p>
</div>
</div>  <div onClick={()=>{delete_vehice(vehicle?._id)}} className='float-right text-xl px-2 '><MdOutlineDelete onClick={()=> {alert("Deleting ")}}/></div>
</> : <> <div onClick={()=>call()} className='text-white text-3xl sm:text-[48px] flex flex-col my-auto items-center max-sm:h-24 h-32  justify-center '><div><AiOutlinePlus/></div></div></> }
     
    </div>
  )
}

export default Cards
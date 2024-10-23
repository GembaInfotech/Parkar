import React, { useState } from 'react';
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { deleteVehicleAction } from '../../redux/actions/vehicleActions';
import UpdateVehicleForm from '../vehi/UpdateVehicleForm'; 
import { AiOutlinePlus } from "react-icons/ai";

const Cards = ({ vehicle, call }) => {
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const deleteVehicle = async (id) => {
    await dispatch(deleteVehicleAction(id));
    window.location.reload();
  };

  return (
    <div className="w-full sm:w-[30vw] flex justify-center items-center rounded-md bg-[#1034A6] text-white overflow-hidden shadow-lg my-2">
      {vehicle ? (
        <>
          <div className='flex items-center justify-between w-full'>
            <div>
              <FaCarRear className='text-3xl sm:text-[48px] mx-2' />
            </div>
            <div className="px-6 py-4 sm:text-lg w-full">
              <div className="font-bold text-sm sm:text-xl mb-2">{vehicle.vehicle_name}</div>
              <p><span className="font-semibold">Number:</span> {vehicle.vehicle_number}</p>
              <p><span className="font-semibold">Type:</span> {vehicle.vehicle_type}</p>
              <p><span className="font-semibold">Is Default:</span> {vehicle.isDefault ? 'Yes' : 'No'}</p>
            </div>
          </div>
          <div onClick={() => setShowWarning(true)} className='float-right text-xl px-2'>
            <MdOutlineDelete />
          </div>
          <div onClick={() => setShowUpdateModal(true)} className='float-right text-xl px-2'>  {/* On Edit */}
            <CiEdit />
          </div>

          {showUpdateModal && (  
            <div className="fixed inset-0 flex items-center justify-center z-10">
              <div
                className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-lg relative z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setShowUpdateModal(false)}
                >
                  &times;
                </button>
                <UpdateVehicleForm vehicleData={vehicle} onClose={() => setShowUpdateModal(false)} />  {/* Pass vehicle data */}
              </div>
              <div
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={() => setShowUpdateModal(false)}
              ></div>
            </div>
          )}
        </>
      ) : (
        <div onClick={() => call()} className='text-white text-3xl sm:text-[48px] flex flex-col my-auto items-center max-sm:h-24 h-32 justify-center'>
          <div><AiOutlinePlus /></div>
        </div>
      )}
      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md text-black">
            <p>Are you sure you want to delete this vehicle?</p>
            <div className="flex justify-end">
              <button onClick={() => setShowWarning(false)} className="mr-2 bg-gray-200 p-2 rounded">Cancel</button>
              <button onClick={() => { deleteVehicle(vehicle._id); setShowWarning(false); }} className="bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;

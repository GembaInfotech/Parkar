import React, { useState } from 'react';
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { deleteVehicleAction } from '../../redux/actions/vehicleActions';
import { useDispatch } from 'react-redux';
import { AiOutlinePlus } from "react-icons/ai";

const Cards = ({ vehicle, call }) => {
    const dispatch = useDispatch();
    const [showWarning, setShowWarning] = useState(false);

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

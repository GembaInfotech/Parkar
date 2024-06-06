import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleAction, selectVehicleAction } from '../../redux/actions/vehicleActions';
import { FaDotCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import VehicleForm from '../vehi/VehicleForm';

const VehicleComponent = ({ handler }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state?.vehicle?.vehicleList);
  const vehicleSelected = useSelector((state) => state?.vehicle?.selectedVehicle);

  const handleVehicleUpdate = async (id) => {
    await dispatch(selectVehicleAction(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getVehicleAction());
    };
    fetchData();
  }, [dispatch]);

  if (!vehicle || vehicle.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1>Kindly add a vehicle to proceed <span><button className='text-blue p-phone sm:text-sm font-semibold text-green-600' onClick={() => setShowModal(true)}>Add Vehicle</button></span></h1>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={() => setShowModal(false)}
          ></div>
          <div 
            className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-lg relative z-20"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" 
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <VehicleForm />
          </div>
        </div>
      )}
      </div>

    );
  }

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => setShowModal(true)}>
          Add new Vehicle
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={() => setShowModal(false)}
          ></div>
          <div 
            className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-lg relative z-20"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" 
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <VehicleForm />
          </div>
        </div>
      )}

      {vehicle.map((item) => (
        <div key={item._id} className="main-section">
          <div
            onClick={() => {
              handleVehicleUpdate(item._id);
              handler();
            }}
            className="bg-lavender-100 w-full sm:w-full p-4 sm:p-6 mb-4 flex justify-between items-center rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-lg sm:text-base bg-blue-200 rounded-sm px-2 py-1">
                {item.vehicle_name}
              </h3>
              <h3 className="text-lg sm:text-base px-2 py-1">
                {item.vehicle_number}
              </h3>
              <h3 className="text-lg sm:text-base px-2 py-1">
                {item.vehicle_type}
              </h3>
            </div>
            <div>
              {vehicleSelected && vehicleSelected?._id === item._id && (
                <button className="text-green-500 text-xl">
                  <FaDotCircle />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleComponent;

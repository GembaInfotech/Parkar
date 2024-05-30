import React, { useState } from 'react';
import { createVehicleAction } from '../../redux/actions/vehicleActions';
import { useDispatch } from 'react-redux';
function VehicleForm() {
  const [vehicleName, setVehicleName] = useState('');
  const dispatch = useDispatch();
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vehicle Name:', vehicleName);
    console.log('Vehicle Number:', vehicleNumber);
    console.log('Vehicle Type:', vehicleType);
    dispatch(createVehicleAction({vehicleName, vehicleNumber, vehicleType}))
    window.location.reload();

  };

  return (
    <div className="flex flex-col justify-center items-center">
    
      <form onSubmit={handleSubmit} >
        <div>
          <label>Vehicle Name:</label>
          <input
            type="text"
            value={vehicleName}
            className='mt-1 block w-[60vw] rounded-md border border-blue-400 text-xs p-2 outline-none'
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>
        <div>
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            className='mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none'
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none'
          >
            <option value="">Select Vehicle Type</option>
            <option value="two wheeler">Two Wheeler</option>
            <option value="four wheeler">Four Wheeler</option>
          </select>
        </div>
        <button className='inline-flex w-full justify-start rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none my-2 sm:w-auto sm:text-sm bg-blue-900 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VehicleForm;

import React, { useState } from 'react';
import { createVehicleAction } from '../../redux/actions/vehicleActions';
import { useDispatch } from 'react-redux';

function VehicleForm() {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isDefault, setIsDefault] = useState(false); // New state for isDefault
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vehicle Name:', vehicleName);
    console.log('Vehicle Number:', vehicleNumber);
    console.log('Vehicle Type:', vehicleType);
    console.log('Is Default:', isDefault); // Log the isDefault value
    dispatch(createVehicleAction({ vehicleName, vehicleNumber, vehicleType, isDefault }));
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="w-70">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleName">
            Vehicle Name:
          </label>
          <input
            id="vehicleName"
            type="text"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none text-sm"
            placeholder="Enter vehicle name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleNumber">
            Vehicle Number:
          </label>
          <input
            id="vehicleNumber"
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none text-sm"
            placeholder="Enter vehicle number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleType">
            Vehicle Type:
          </label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none text-sm"
          >
            <option value="">Select Vehicle Type</option>
            <option value="two wheeler">Two Wheeler</option>
            <option value="four wheeler">Four Wheeler</option>
          </select>
        </div>
        
        {/* Checkbox for isDefault */}
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)} // Update isDefault state
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Set as Default Vehicle</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VehicleForm;

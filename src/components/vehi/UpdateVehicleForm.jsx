import React, { useState, useEffect } from 'react';
import { updateVehicleAction } from '../../redux/actions/vehicleActions';
import { useDispatch } from 'react-redux';

function UpdateVehicleForm({ vehicleData, onClose }) {
  const [vehicle_name, setVehicleName] = useState('');
  const [vehicle_number, setVehicleNumber] = useState('');
  const [vehicle_type, setVehicleType] = useState('');
  const [isDefault, setIsDefault] = useState(false); // New state for isDefault
  const dispatch = useDispatch();

  useEffect(() => {
    if (vehicleData) {
      console.log("Populating form with vehicle data");
      setVehicleName(vehicleData.vehicle_name || ''); 
      setVehicleNumber(vehicleData.vehicle_number || ''); 
      setVehicleType(vehicleData.vehicle_type || ''); 
      setIsDefault(vehicleData.isDefault || false); // Set initial state for isDefault
    }
  }, [vehicleData]);

  const handleSubmit = (e) => {
    console.log("isDefault", isDefault );
    
    e.preventDefault();
    dispatch(updateVehicleAction({
      id: vehicleData._id, 
      vehicle_name, 
      vehicle_number, 
      vehicle_type, 
      isDefault,  // Include isDefault in the submission
    }));
    onClose(); 
    window.location.reload(); 
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="w-70">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle_name">
            Vehicle Name:
          </label>
          <input
            id="vehicle_name"
            type="text"
            value={vehicle_name} 
            onChange={(e) => setVehicleName(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md text-black outline-none text-sm"
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
            value={vehicle_number} 
            onChange={(e) => setVehicleNumber(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md text-black outline-none text-sm"
            placeholder="Enter vehicle number"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleType">
            Vehicle Type:
          </label>
          <select
            id="vehicleType"
            value={vehicle_type} 
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none text-black text-sm"
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
              onChange={(e) => setIsDefault(e.target.checked)} // Handle checkbox change
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Set as Default Vehicle</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateVehicleForm;

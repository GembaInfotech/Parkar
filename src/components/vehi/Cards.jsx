import React from 'react'

const Cards = ({vehicle}) => {
  return (
    <div className="max-w-sm rounded-md bg-violet-50 overflow-hidden shadow-lg  m-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{vehicle.vehicle_name}</div>
      
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Number:</span> {vehicle.vehicle_number}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Type:</span> {vehicle.vehicle_type}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Is Default:</span> {vehicle.isDefault ? 'Yes' : 'No'}
        </p>
      </div>
     
    </div>
  )
}

export default Cards
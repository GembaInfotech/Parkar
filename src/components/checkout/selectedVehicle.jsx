import React from 'react'
import { useSelector } from 'react-redux'

const SelectedVehicle = () => {
    const vehicles = useSelector((state) => state.vehicle?.selectedVehicle)

      return vehicles
   
}

export default SelectedVehicle
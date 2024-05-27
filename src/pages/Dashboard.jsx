import React from 'react'

const Dashboard = () => {
  return (
    <div>
        
        <div className=" flex flex-col sm:flex-row">
            <div className="flex justify-center m-2  rounded-md items-center h-20 sm:h-32 w-48 sm:w-72 bg-blue-900 text-white">
                <p>3 Vehicles </p>
            </div>
            <div className="flex justify-center m-2  rounded-md items-center h-20 sm:h-32 w-48  sm:w-72 bg-blue-700 text-white">
                <p>3 Booking  </p>
            </div>
          
        </div>
    </div>
  )
}

export default Dashboard
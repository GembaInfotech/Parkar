import React from 'react'
import ParkingList from './ParkingList'
const ParkingRender = ({data}) => {
  return (

    <div> {data?.map((data, index) => (

<div key={index}>
 
 <ParkingList data={data} />
</div>
))}</div>
  )
}

export default ParkingRender
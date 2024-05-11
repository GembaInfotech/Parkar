import React from 'react'

const BookingCard = ({data}) => {
  return (
    <div className='bg-blue-200'>{data.inTime}
     <h2>{data.outTime}</h2>
     <h2>{data.price}</h2>
    </div>
  )
}

export default BookingCard
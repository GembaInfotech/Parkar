import React from 'react'
import Search from '../../src/components/shared/Search'
import imageUrl from '../assets/parking3.jpg'

const MainPage = () => {
  return (
 

    <div className='h-screen flex  items-center dark-overlay justify-between  ' style={{ backgroundImage: `url(${imageUrl}) `, height: '100vh',
    width:'100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}}  >
      <Search/>
   
    </div>
  )
}

export default MainPage
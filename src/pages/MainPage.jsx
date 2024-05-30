import React from 'react'
import Search from '../../src/components/shared/Search'
import imageUrl from '../assets/homepage.jpg'
import HeroSection from '../components/home/HeroSection'

const MainPage = () => {
  return (
 



    <div>
      
    <div className=' flex   dark-overlay justify-between max-sm:h-[50vh]   sm:h-[90vh]' 
    style={{ backgroundImage: `url(${imageUrl}) `, height: '  md:100vh',
    width:'100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}}  >
     
     <div className='mt-16 sm:mt-32 md:mt-24 lg:mt-16 flex mx-auto justify-center'>
      <Search/> 
     </div>
   
    </div>

    <HeroSection/>




    </div>
  )
}

export default MainPage
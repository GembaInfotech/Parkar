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
     
      <Search/>
   
    </div>

    <HeroSection/>




    </div>
  )
}

export default MainPage
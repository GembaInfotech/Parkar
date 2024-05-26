import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div>
      <img src={about} alt="" className='w-full h-[30vh] md:h-[100vh]' />
     

    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:w-[80vw] mx-auto p-4">
      <img src={about} alt="Image 1" className="w-full h-auto" />
      <img src={about} alt="Image 2" className="  w-full h-auto" />
      <img src={about} alt="Image 3" className="w-full  h-auto" />
      <img src={about} alt="Image 4" className="w-full invisible h-auto" />
      <img src={about} alt="Image 5" className="w-full h-auto" />
      <img src={about} alt="Image 2" className="  w-full invisible h-auto" />
      <img src={about} alt="Image 3" className="w-full  h-auto" />
      <img src={about} alt="Image 2" className="  w-full invisible h-auto" />
      <img src={about} alt="Image 3" className="w-full h-auto" />
      <img src={about} alt="Image 2" className="  w-full h-auto" />
      <img src={about} alt="Image 3" className="w-full h-auto" />
      <img src={about} alt="Image 6" className="w-full   h-auto" />
    </div>


    </div>
  )
}

export default About
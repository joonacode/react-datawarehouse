import React from 'react'
import { IMGHero } from '../../assets'

const Hero = () => {
  return (
    <div className='flex space-x-10 mt-10' id='hero'>
      <div className='lg:w-4/6 w-full'>
        <h1 className='xl:text-7xl text-5xl font-bold text-gray-800 mb-8 font-helvetica'>
          Save your data storage here.
        </h1>
        <p className='opacity-70 mb-6 lg:w-3/4 w-full font-bold text-gray-600'>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <button className='px-8 py-3 bg-purple-600 font-bold text-white rounded-full hover:bg-purple-800 transition-all	duration-500'>
          Learn More
        </button>
      </div>
      <div className='mt-5 md:block hidden'>
        <img src={IMGHero} alt='hero' />
      </div>
    </div>
  )
}

export default Hero

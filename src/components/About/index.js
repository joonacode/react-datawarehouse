import React from 'react'
import { IMGAbout } from '../../assets'
import './about.css'

const About = () => {
  return (
    <div
      className='my-40 bg-gray-200 rounded-3xl sm:px-20 px-5 py-10 relative'
      id='about'
    >
      <div className='flex items-center md:space-x-10'>
        <div className='md:w-2/4 md:relative absolute img-about sm:block hidden'>
          <img src={IMGAbout} alt='about' />
        </div>
        <div className='md:w-3/4 w-full z-10'>
          <h2 className='lg:text-4xl md:text-2xl sm:text-xl text-3xl md:px-0 md:py-0 py-2 px-5 leading-10 bg-text-about font-helvetica font-bold text-gray-800 lg:mb-7 md:mb-3'>
            We are a high-level data storage bank
          </h2>
          <p className='md:opacity-80 sm:opacity-100 opacity-80 lg:text-base md:px-0 md:pb-0 pb-2 px-5 text-sm bg-text-about'>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

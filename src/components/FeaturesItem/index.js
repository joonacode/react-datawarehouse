import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IMGBgFeatures } from '../../assets'
const FeatureItem = ({ title, description, imgFeature }) => {
  return (
    <div className='flex lg:flex-row flex-col lg:space-x-5 relative lg:shadow-none shadow-lg lg:bg-transparent bg-gray-200 rounded-lg lg:py-0 md:py-10 py-16 lg:px-0 px-10 lg:items-start items-center justify-center'>
      <img
        src={IMGBgFeatures}
        className='object-cover absolute right-0 lg:block hidden'
        alt='bg-features'
      />
      <div className='lg:pl-10 xl:pt-16 lg:pt-10 lg:mb-0 mb-5 lg:w-auto w-36'>
        <img src={imgFeature} alt='features1' />
      </div>
      <div className='xl:w-1/2 w-full xl:pt-16 lg:pt-10 lg:pr-10'>
        <h5 className='lg:mb-5 mb-3 md:text-2xl sm:text-2xl text-3xl md:text-left text-center'>
          {title}
        </h5>
        <p className='lg:mb-5 mb-8 opacity-60 lg:text-base text-sm md:text-left text-center'>
          {description}
        </p>
        <button
          type='button'
          className='flex items-center md:mx-0 mx-auto space-x-2 font-bold px-5 py-2 lg:bg-transparent bg-gray-200 lg:rounded-none rounded-full lg:shadow-none shadow focus:outline-none hover:shadow-none transition-all	duration-500 cursor-pointer'
        >
          <span>Learn More</span>{' '}
          <BsArrowRight className='text-xl text-purple-500' />
        </button>
      </div>
    </div>
  )
}

export default FeatureItem

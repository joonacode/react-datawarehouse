import React from 'react'
import FeatureItem from '../FeaturesItem'
import { data1, data2, data3, data4 } from './data'

const Features = () => {
  return (
    <div className='mb-36' id='features'>
      <h2 className='text-4xl text-center leading-10 font-helvetica font-bold text-gray-800 mb-10'>
        Features
      </h2>
      <div className='flex items-center justify-center mb-10'>
        <p className='text-center text-gray-600 lg:w-2/5 w-full'>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-10 lg:gap-y-20 gap-y-10 lg:mt-28 mt-20'>
        <FeatureItem {...data1} />
        <FeatureItem {...data2} />
        <FeatureItem {...data3} />
        <FeatureItem {...data4} />
      </div>
    </div>
  )
}

export default Features

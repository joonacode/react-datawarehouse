import React from 'react'

const TestimoniItem = (props) => {
  return (
    <div className='testimoni-item p-10'>
      <div className='flex sm:flex-row flex-col sm:items-start items-center justify-center sm:space-x-5'>
        <img src={props.image} className='h-14 w-14 ' alt='user1' />
        <div className='sm:mt-0 mt-5 sm:text-left text-center'>
          <p className='font-bold text-sm'>{props.name}</p>
          <span className='text-xs text-purple-400'>{props.title}</span>
          <p className='sm:mt-4 mt-2 text-sm opacity-60'>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimoniItem

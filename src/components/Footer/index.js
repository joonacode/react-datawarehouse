import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { ICFacebook, ICInstagram, ICMessage, ICTwitter } from '../../assets'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div className='mt-36 border-t-2 py-20'>
      <div className='container mx-auto lg:px-20 px-10'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-between'>
          <div className=''>
            <h2 className='text-3xl leading-10 font-helvetica font-bold text-gray-800 mb-2'>
              Try For Free
            </h2>
            <p>Get limited 1 week free try our features!</p>
          </div>
          <div className='flex sm:items-center sm:mt-0 mt-5 md:flex-row flex-col-reverse'>
            <button className='mr-5 px-8 py-3 md:mt-0 mt-3 text-sm font-bold text-white bg-pink-400 hover:bg-pink-500 transition-all	duration-500 rounded-full'>
              Learn More
            </button>
            <button className='flex items-center space-x-2 px-6 py-3 text-sm font-bold text-gray-700 bg-white hover:shadow-none transition-all	duration-500 shadow-md rounded-full'>
              <span>Request Demo</span>{' '}
              <BsArrowRight className='text-xl text-purple-500' />
            </button>
          </div>
        </div>
        <div className='grid sm:grid-cols-5 grid-cols-1 sm:gap-y-0 gap-y-10 py-20'>
          <div className='sm:col-span-2 col-span-1'>
            <div className='mb-10'>
              <Logo className='h-12 w-12' showName={true} />
            </div>
            <p className='mb-7'>
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </p>
            <p className='opacity-80'>
              info@warehouse.project <br />
              1-232-3434 (Main)
            </p>
          </div>
          <div>
            <h5 className='font-bold sm:mb-10 mb-5'>About</h5>
            <a href='/' className='block mb-4'>
              Profile
            </a>
            <a href='/' className='block mb-4'>
              Features
            </a>
            <a href='/' className='block mb-4'>
              Careers
            </a>
            <a href='/' className='block'>
              DW News
            </a>
          </div>
          <div>
            <h5 className='font-bold sm:mb-10 mb-5'>Help</h5>
            <a href='/' className='block mb-4'>
              Support
            </a>
            <a href='/' className='block mb-4'>
              Sign up
            </a>
            <a href='/' className='block mb-4'>
              Guide
            </a>
            <a href='/' className='block mb-4'>
              Reports
            </a>
            <a href='/' className='block'>
              Q&A
            </a>
          </div>
          <div>
            <h5 className='font-bold sm:mb-10 mb-5'>Social Media</h5>
            <div className='flex items-center'>
              <a href='/' className=' mr-4'>
                <img src={ICFacebook} className='h-10 w-10' alt='facebook' />
              </a>
              <a href='/' className=' mr-4'>
                <img src={ICTwitter} className='h-10 w-10' alt='facebook' />
              </a>
              <a href='/'>
                <img src={ICInstagram} className='h-10 w-10' alt='facebook' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col-reverse items-center justify-between'>
          <div>
            <p className='sm:mt-0 mt-5 text-sm'>
              © Datawarehouse™, 2020. All rights reserved.
              <br />
              Company Registration Number: 21479524.
            </p>
          </div>
          <div>
            <img
              src={ICMessage}
              className='w-12 h-12 cursor-pointer'
              alt='message'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

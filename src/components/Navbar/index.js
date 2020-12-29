import React from 'react'
import Logo from '../Logo'
import { animateScroll as scroll, Link } from 'react-scroll'
import { BsArrowRight, BsList, BsX } from 'react-icons/bs'

const Navbar = ({ toggleSidebar, showSidebar, scrollNav }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <div
      className={`bg-white ${
        scrollNav ? 'sticky top-0 py-5 z-20 shadow' : 'py-10'
      }`}
    >
      <div className='container mx-auto lg:px-20 px-10'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Logo onClick={toggleHome} className='h-10 w-10 cursor-pointer' />
            <div className='ml-20 md:flex hidden'>
              <Link
                to='/'
                onClick={toggleHome}
                className='mr-7 font-bold hover:opacity-90 opacity-50 cursor-pointer'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                activeClass='opacity-100'
              >
                Home
              </Link>
              <Link
                to='about'
                className='mr-7 font-bold hover:opacity-90 opacity-50 cursor-pointer'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-145}
                activeClass='opacity-100'
              >
                About
              </Link>
              <Link
                to='features'
                className='mr-7 font-bold hover:opacity-90 opacity-50 cursor-pointer'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-150}
                activeClass='opacity-100'
              >
                Features
              </Link>
              <Link
                to='testimoni'
                className='mr-7 font-bold hover:opacity-90 opacity-50 cursor-pointer'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-140}
                activeClass='opacity-100'
              >
                Testimoni
              </Link>
              <Link
                to='/'
                className='mr-7 font-bold hover:opacity-90 opacity-50 cursor-pointer'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-30}
                activeClass='opacity-100'
              >
                Signup
              </Link>
            </div>
          </div>
          <button className='md:flex hidden focus:outline-none items-center space-x-2 px-6 py-3 text-sm font-bold text-gray-700 bg-white hover:shadow-none transition-all	duration-500 shadow-md rounded-full'>
            <span>Request Demo</span>{' '}
            <BsArrowRight className='text-xl text-purple-500' />
          </button>
          <button
            onClick={toggleSidebar}
            className='md:hidden focus:outline-none block px-4 py-3 text-sm font-bold text-gray-700 bg-white shadow rounded-lg'
          >
            {showSidebar ? (
              <BsX className='text-xl' />
            ) : (
              <BsList className='text-xl' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React, { useEffect, useRef } from 'react'
import Logo from '../Logo'
import { BsArrowRight } from 'react-icons/bs'
import { animateScroll as scroll, Link } from 'react-scroll'

const Sidebar = ({ toggleSidebar }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
    toggleSidebar()
  }
  const node = useRef()
  useEffect(() => {
    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        return
      }
      toggleSidebar()
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [toggleSidebar])
  return (
    <div className='bg-sidebar h-full min-h-full w-full fixed top-0 left-0 z-50'>
      <div
        className='min-h-full h-full w-8/12 p-10 bg-blue-200 shadow-lg'
        ref={node}
      >
        <div className='flex justify-center items-center flex-col h-full'>
          <div className='flex flex-col items-center justify-center space-y-8'>
            <Logo className='pr-4' />
            <Link
              to='/'
              onClick={toggleHome}
              className='mr-7 font-bold hover:opacity-90 opacity-50 text-xl cursor-pointer'
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
              onClick={toggleSidebar}
              className='mr-7 font-bold hover:opacity-90 opacity-50 text-xl cursor-pointer'
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
              onClick={toggleSidebar}
              className='mr-7 font-bold hover:opacity-90 opacity-50 text-xl cursor-pointer'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-130}
              activeClass='opacity-100'
            >
              Features
            </Link>
            <Link
              to='testimoni'
              onClick={toggleSidebar}
              className='mr-7 font-bold hover:opacity-90 opacity-50 text-xl cursor-pointer'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-130}
              activeClass='opacity-100'
            >
              Testimoni
            </Link>
            <Link
              to='/'
              onClick={toggleHome}
              className='mr-7 font-bold hover:opacity-90 opacity-50 text-xl cursor-pointer'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-30}
              activeClass='opacity-100'
            >
              Signup
            </Link>
            <button className='focus:outline-none flex items-center space-x-2 px-10 py-3 text-sm font-bold text-gray-700 bg-white shadow-md rounded-full'>
              <span>Request Demo</span>{' '}
              <BsArrowRight className='text-xl text-purple-500' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

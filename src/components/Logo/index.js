import React from 'react'
import { IMGLogo } from '../../assets'

const Logo = ({ className, showName, onClick }) => {
  if (showName) {
    return (
      <div className='flex items-center space-x-3' onClick={onClick}>
        <img src={IMGLogo} className={className} alt='logo' />
        <span className='block font-bold text-xl'>DataWarehouse</span>
      </div>
    )
  }
  return (
    <>
      <img src={IMGLogo} className={className} alt='logo' onClick={onClick} />
    </>
  )
}

export default Logo

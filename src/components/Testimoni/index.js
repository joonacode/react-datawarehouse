import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './testimoni.css'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import TestimoniItem from '../TestimoniItem'
import { dataTestimoni } from './dataTestimoni'

const Testimoni = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const next = () => sliderRef.current.slickNext()
  const prev = () => sliderRef.current.slickPrev()
  return (
    <div className='overflow-hidden md:px-20 px-5' id='testimoni'>
      <div className='container mx-auto md:px-20 px-10 relative  bg-testimoni rounded-3xl pb-16 pt-20 '>
        <h2 className='text-4xl leading-10 sm:text-left text-center font-helvetica font-bold text-white mb-7'>
          Testimonial
        </h2>
        <div className='slider-testimoni'>
          <Slider {...settings} ref={sliderRef}>
            {dataTestimoni.map((item, i) => (
              <TestimoniItem {...item} key={i} />
            ))}
          </Slider>
        </div>
        <div className='flex cus-slider-nav'>
          <span
            className='text-white text-2xl mr-2 cursor-pointer'
            onClick={prev}
          >
            <BsArrowLeft />
          </span>
          <span className='text-white text-2xl cursor-pointer' onClick={next}>
            <BsArrowRight />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Testimoni

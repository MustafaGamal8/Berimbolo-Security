import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const data = [
  {
    image: "/assets/hero/1.jpg",
    title: "Comprehensive Surveillance",
    description: "Complete coverage for your property with Berimbolo's CCTV systems."
  },
  {
    image: "/assets/hero/2.jpg",
    title: "Intelligent Threat Detection",
    description: "Stay ahead of threats with Berimbolo's smart CCTV solutions."
  },
  {
    image: "/assets/hero/3.jpg",
    title: "Scalable Security Solutions",
    description: "From homes to large complexes, trust Berimbolo for scalable security."
  },
  {
    image: "/assets/hero/4.jpg",
    title: "Seamless Integration & Access",
    description: "Easily integrate and access your CCTV systems from anywhere."
  }
];


export default function Hero() {

  return (
    <section id='hero'  className=' w-full '>
      <style>
        {`
      .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background-color: #FA541C;
      }
      `}
      </style>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        loop={true}
        className="mySwiper"
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-[750px] relative cursor-grab'>
                <img className='w-full h-full object-cover' src={item.image} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center  gap-4 items-center z-[1]'>
                  <h1 className='md:text-5xl text-xl text-primary  bg-white  rounded-md p-3 text-center'>{item.title}</h1>
                  <p className='text-white md:text-lg md:w-[600px] w-[90%] bg-secondary bg-opacity-80 rounded-md p-3 text-center'>{item.description}</p>
                </div>
                <div className='bg-dark bg-opacity-70 h-full w-full absolute top-0 left-0'></div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}

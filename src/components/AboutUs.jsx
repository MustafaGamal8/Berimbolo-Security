import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

function Card({image, title, description}) {
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  return (
    <div
    id='about'
      className='relative group overflow-hidden'
      onMouseEnter={() => setIsMouseHovered(true)}
      onMouseLeave={() => setIsMouseHovered(false)}
    >
      <img className='md:w-[400px] w-[200px] md:h-[600px]  h-[200px] object-cover group-hover:scale-110 transition-all' src={image} alt="" />
      <Transition
        show={isMouseHovered}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className='absolute bottom-0 left-0 w-full md:h-[150px] h-[100px] bgtrans text-center p-2 rounded-t-lg drop-shadow-lg'>
          <h1 className='md:text-4xl text-base text-dark font-bold'>{title}</h1>
          <p className='text-dark md:text-xl text-sm'>{description}</p>
        </div>
      </Transition>
    </div>
  );
};

export default function AboutUs() {
  const data = [
    {
      image:"/assets/about-us/t1.jpg",
      title:"Mike Henderson",
      description:"CEO & CO-FOUNDER"
    },
    {
      image:"/assets/about-us/t2.jpg",
      title:"Robert Johnson",
      description:"CTO & CO-FOUNDER"
    },
    {
      image:"/assets/about-us/t3.jpg",
      title:"John Smith",
      description:"Lead Developer"
    }
  ];
  return (
    <section className='bgtrans min-h-[600px] p-8 pt-10 flex  flex-col md:flex-row justify-between items-start gap-16 mt-20 '>
      <div>
      <h1 className='font-extrabold md:text-[80px] text-6xl md:w-[330px]  w-full  text-dark  me-auto uppercase p-2 ' >
        Meet The <span className=' text-dark '>Team</span>
      </h1>
      
      <p className='text-dark text-xl'>Meet the team behind Berimbolo Security.</p>
      </div>
      <div className='flex ' >
        {data.map((teamMember, index) => (
          <Card
            key={index}
            image={teamMember.image}
            title={teamMember.title}
            description={teamMember.description}
          />
        ))}
      </div>
    </section>
  );
}

import React from 'react'
import ProductsSlider from '../moudels/ProductsSlider'


export default function Products() {
  return (

    <section id='products' className='bgoverlay h-[600px] p-8 pt-10 flex flex-col  items-end gap-16 '>
      <h1 className='font-bold text-6xl w-[80%]  text-dark' > 
        Explore Our <span className=' text-primary block pl-2'>Products</span>
      </h1>
      
      <div className='  bg-transparent lg:w-[65%] w-full h-[420px]'><ProductsSlider /></div>

    </section>

  )
}



import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='pb-5'>

      <section className='flex flex-col items-center justify-around  border-t mt-40'>

        <div className='flex items-center justify-between  border-b-2 border-gray-300 w-[80%]'>


          <div className='flex items-center justify-center my-5 w-full'>
            <img className='w-60 h-40 object-cover' src="/assets/logo.png" alt="" />
          </div>


        </div>

        <div className='flex items-center justify-center gap-3 mt-5'>
          {/* Social Icons */}

          <div className='flex items-center justify-center hover:scale-105 transition-all p-2 rounded-full overflow-hidden  cursor-pointer hover:text-dark text-primary'><FaFacebook className=' text-4xl' /></div>
          <div className='flex items-center justify-center hover:scale-105 transition-all p-2 rounded-full overflow-hidden  cursor-pointer hover:text-dark text-primary'><FaWhatsapp className=' text-4xl' /></div>
          <div className='flex items-center justify-center hover:scale-105 transition-all p-2 rounded-full overflow-hidden  cursor-pointer hover:text-dark text-primary'><FaLinkedin className=' text-4xl' /></div>

        </div>

        <div>
          <h1>Copyright © {new Date().getFullYear()} - All right reserved</h1>
        </div>




      </section>

    </footer>
  )
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/free-mode';
import 'swiper/css/autoplay';


// import required modules
import { Pagination, Navigation, Autoplay ,FreeMode } from 'swiper/modules';

export default function ProductsSlider() {
  const data = [
    {
      id: 3,
      name: "SmartWatch Elite Surveillance System",
      description: "Elite-level surveillance system with advanced analytics and remote monitoring capabilities.",
      image: "/assets/hero/3.jpg",
    },
    {
      id: 4,
      name: "GuardianEye 4K Ultra HD CCTV System",
      description: "Experience crystal-clear surveillance with 4K resolution and advanced night vision capabilities.",
      image: "/assets/products/p1.jpg",
    },
    
    {
      id: 2,
      name: "VisionGuard Pro Outdoor Cameras",
      description: "High-performance outdoor cameras with weatherproof design and advanced motion detection.",
      image: "/assets/hero/2.jpg",
    },
    {
      id: 5,
      name: "SentinelPro Dome Camera Set",
      description: "Achieve professional-grade security monitoring with dome cameras designed for both indoor and outdoor use.",
      image: "/assets/products/p2.jpg",
    },
    {
      id: 6,
      name: "SecureView Wireless CCTV Kit",
      description: "Enjoy hassle-free surveillance with easy-to-install wireless cameras.",
      image: "/assets/products/p3.jpg",
    },
    {
      id: 7,
      name: "Infrared Night Vision Camera",
      description: "Capture clear images even in low light conditions with advanced infrared night vision technology.",
      image: "/assets/products/p4.jpg",
    },
    
    {
      id: 1,
      name: "Sentinel360 Home Security System",
      description: "Comprehensive home security solution with 360-degree coverage and smart AI features.",
      image: "/assets/hero/1.jpg",
    },
    {
      id: 8,
      name: "360° Panoramic Camera",
      description: "Monitor every corner with a single camera using 360-degree panoramic view technology.",
      image: "/assets/products/p5.jpg",
    },
  ];


  return (
    <Swiper
      // slidesPerView={3}
      spaceBetween={50}
      freeMode={true}
      loop={true}
      autoplay={true}
      modules={[Pagination, Navigation, Autoplay, FreeMode]}
      breakpoints={{
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 400
        },
        // when window width is <= 1024px (md)
        1524: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}
      className='swiper' 
    >
      {data.map((product) => (
        <SwiperSlide key={product.id} className='rounded-lg swiper-slide'> 
          <div className='w-[400px] p-4 rounded-lg text-start flex flex-col gap-5'>
            <img className='h-[200px] w-full object-cover rounded-lg' src={product.image} alt="" />
            <div>
              <h1 className='text-2xl font-bold text-secondary'>{product.name}</h1>
              <p className='text-sm'>{product.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

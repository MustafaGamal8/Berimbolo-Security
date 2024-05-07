import React from 'react';
import { FaBell, FaCamera, FaDatabase, FaLock, FaCheckCircle } from 'react-icons/fa';

export default function Pricing() {
  const products = [
    {
      title: "Basic Security Package",
      features: [
        "1 × Alarm System",
        "1 × Surveillance Camera",
        "Local CCTV footage storage",
        "Not centrally monitored"
      ],
      icon: FaBell
    },
    {
      title: "Standard Security Package",
      features: [
        "1 × Alarm System",
        "2 × Surveillance Cameras",
        "Online and local CCTV footage storage",
        "Not centrally monitored"
      ],
      icon: FaCamera
    },
    {
      title: "Premium Security Package",
      features: [
        "1 × Alarm System",
        "4 × Surveillance Cameras",
        "Online and local CCTV footage storage",
        "Central monitoring"
      ],
      icon: FaDatabase
    },
    {
      title: "Custom Security Systems",
      features: [
        "Customized security systems",
        "Evaluation and planning meetings required"
      ],
      icon: FaLock
    }
  ];

  return (
    <div id="pricing" className="container mx-auto py-8 mt-20">
      <h2 className="text-5xl font-bold mb-8 text-center">Our Princing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5   shadow">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function ProductItem({ title, features, icon: Icon }) {
  return (
    <div className="product-item rounded-lg overflow-hidden shadow-md bg-white h-[500px] group">
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center rounded-full mt-10 w-16 h-16 bg-dark text-white text-3xl">
          <Icon />
        </div>
        <h3 className="text-2xl font-semibold mb-2 mt-5 group-hover:text-white delay-500">{title}</h3>
        <ul className="text-gray-700 group-hover:text-white delay-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2"><FaCheckCircle /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="bg-primary group-hover:bg-dark delay-200 transition-all text-white py-2 px-8 rounded mt-8">Get Started</button>
      </div>


      <div className='absolute bottom-0 left-0 h-0 w-full group-hover:h-[100%] bg-primary transition-all duration-1000 z-[-1]'></div>
    </div>
  );
}

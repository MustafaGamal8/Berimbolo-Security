import React from 'react';
import { FaVideo, FaWrench, FaDesktop, FaEye } from 'react-icons/fa';
export default function Service() {
  const services = [
    { title: "Security Risk Assessments", description: "Assessing security risks to provide comprehensive solutions.", icon: FaVideo, image: '/assets/hero/2.jpg' },
    { title: "Sale and Installation of Security Systems", description: "Providing alarm systems and surveillance camera sales and installations.", icon: FaWrench, image: '/assets/products/p1.jpg' },
    { title: "Security System Maintenance", description: "Regular maintenance to ensure the optimal performance of security systems.", icon: FaDesktop, image: '/assets/hero/3.jpg' },
    { title: "24/7 Monitoring", description: "Continuous monitoring of alarm systems and CCTV cameras.", icon: FaEye, image: '/assets/hero/4.jpg' },
  ];

  return (
    <div id="services" className="container mx-auto py-8 mt-20">
      <h2 className="text-5xl font-bold mb-8 text-center">Our Services</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 ">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </ul>
    </div>
  );
}

function ServiceItem({ title, description, icon: Icon, image }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li className="relative overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105 bg-white">
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col items-center justify-center">
        <div
          className="mb-4 flex items-center justify-center rounded-full w-16 h-16 bg-primary text-white text-3xl transition-transform duration-300 transform hover:rotate-45"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </li>
  );
}

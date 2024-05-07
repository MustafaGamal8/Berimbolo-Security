import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

// Import Tailwind CSS utility classes
import 'tailwindcss/tailwind.css';

export default function Faq() {
  const faqData = [
    {
      question: "What services does Berimbolo Security offer?",
      answer: "Berimbolo Security provides security solutions for homes and small businesses, including risk assessments, sale and installation of security systems such as alarms and surveillance cameras, and maintenance of security systems. Additionally, they offer 24/7 monitoring for alarm systems and CCTV footage."
    },
    {
      question: "What product packages does Berimbolo Security provide?",
      answer: "Berimbolo Security offers various product packages to meet different security needs:\n1. Basic Security Package: Includes an alarm system and a surveillance camera with local CCTV footage storage.\n2. Standard Security Package: Includes an alarm system, two surveillance cameras, and online/local CCTV footage storage.\n3. Deluxe Security Package: Includes an alarm system, four surveillance cameras, online/local CCTV footage storage, and central monitoring.\n4. Custom Security Systems: Customers can arrange meetings for assessment and planning for personalized security solutions."
    },
    {
      question: "What are the core features of Berimbolo Security's website?",
      answer: "Berimbolo Security's website is designed to:\n1. Provide modern and attractive design\n2. Enhance brand awareness\n3. Offer information about the company's services, including security offerings and general advice\n4. Enable customers to easily contact the company for additional information\n5. Ensure responsive design for seamless user experience across mobile and desktop browsers"
    },
    {
      question: "How does Berimbolo Security assist in improving brand awareness?",
      answer: "Berimbolo Security improves brand awareness through its website by:\n1. Displaying the company's logo and branding elements prominently\n2. Consistent use of brand colors and imagery throughout the website\n3. Engaging content that showcases the company's expertise and commitment to security\n4. Providing clear and concise information about the company's services and offerings\n5. Encouraging user engagement through social media integration and customer testimonials"
    },
    {
      question: "What accessibility features does Berimbolo Security's website offer?",
      answer: "Berimbolo Security's website is designed with accessibility in mind, offering:\n1. Clear and readable font styles and sizes\n2. High color contrast for easy readability\n3. Keyboard navigation support for users who rely on keyboard navigation\n4. Alt text for images to assist users with visual impairments\n5. Semantic HTML markup to ensure compatibility with screen readers and assistive technologies"
    }
  ];
  

  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleFaq = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div className="mx-auto mt-20">
      <h2 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border border-primary-light rounded-lg shadow-md mb-4 md:w-[900px] w-[90%] mx-auto">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium bg-primary-light text-primary hover:bg-primary-dark hover:text-primary-light focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span>{item.question}</span>
            {isOpen[index] ? <BsChevronUp className="w-6 h-6" /> : <BsChevronDown className="w-6 h-6" />}
          </button>
          <Transition
            show={isOpen[index]}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="px-6 py-4 bgtrans text-dark">
              <p className="text-base">{item.answer}</p>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
}

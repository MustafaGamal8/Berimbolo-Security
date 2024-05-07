import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="flex flex-col lg:flex-row items-center justify-center py-8 mt-28">
      <div className="lg:w-1/2 w-[90%] ">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="flex items-center border border-primary-light rounded-md p-3">
              <AiOutlineUser className="w-6 h-6 mr-2 text-primary-dark" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full outline-none placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex items-center border border-primary-light rounded-md p-3">
              <AiOutlineMail className="w-6 h-6 mr-2 text-primary-dark" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full outline-none placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">Message</label>
            <div className="flex items-start border border-primary-light rounded-md p-3">
              <AiOutlineMessage className="w-6 h-6 mr-2 text-primary-dark" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full resize-none outline-none placeholder-gray-500"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="bg-dark hover:bg-primary transition-all text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
      <div className="md:w-[40%] w-[80%] lg:ml-8 mt-8 lg:mt-0">
        <img src="/assets/hero/4.jpg" alt="Contact" className="rounded-lg" />
      </div>
    </div>
  );
}

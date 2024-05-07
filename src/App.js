import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/Hero'
import ScrollableComponent from './components/Scroll'
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import ContactForm from './components/ConatctForm';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Products />
      <AboutUs />
      <Service />
      <Pricing />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  )
}

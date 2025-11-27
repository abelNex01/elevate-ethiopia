import React from 'react'
import Hero from '../section/home/Hero.jsx'
import About from '../section/home/About.jsx'
import Services from '../section/home/Services.jsx'
import WhyChoose from '../section/home/WhyChoose.jsx'
import Company from '../section/home/Company.jsx'
import Newsletter from '../section/home/Newsletter.jsx'
import Team from '../section/home/Team.jsx'
import Banner from '../section/home/Banner.jsx'
import Customers from '../section/home/Customers.jsx'
import Contact from '../section/home/Contact.jsx'

const Home = () => {
  return (
    <>
       <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Company />
      <Newsletter />
      <Team />
      <Banner />
      <Customers />
      <Contact />
    </>
  )
}

export default Home
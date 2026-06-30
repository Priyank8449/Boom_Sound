import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'

import "./index.css"
import Service from './components/Services/Service'
import Banner from './components/Banner/Banner'
import BannerText from './components/bannerText/BannerText'
import Blog from './components/blogs/blog'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <BannerText />
      <Blog />
      <Footer />

    </main>
  )
}

export default App
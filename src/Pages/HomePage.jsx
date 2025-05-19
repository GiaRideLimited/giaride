import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EarnMoney from '../components/EarnMoney'
import WhereYouNeed from '../components/WhereYouNeed'
import OurServices from '../components/OurServices'
import DownloadApp from '../components/DownloadApp'
import WhyChooseUs from '../components/WhyChooseUs'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <EarnMoney />
      <WhereYouNeed />
      <OurServices />
      <DownloadApp />
    </div>
  )
}

export default HomePage
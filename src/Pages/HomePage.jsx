import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EarnMoney from '../components/EarnMoney'
import WhereYouNeed from '../components/WhereYouNeed'
import OurServices from '../components/OurServices'
import DownloadApp from '../components/DownloadApp'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <EarnMoney />
        <WhereYouNeed />
        <OurServices />
        <DownloadApp />
    </div>  
  )
}

export default HomePage
import React from 'react'
import Header from '../components/header'
import ImageCarousel from '../components/image_carousel'
import Introduction from '../components/introduction'
import LP_Events from '../components/lp_events'
import SideBar from '../components/side_bar'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1'>
        <ImageCarousel />
        <Introduction />
        <LP_Events />
      </div>
    </div>
  )
}

export default LandingPage
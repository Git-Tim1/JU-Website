import React, { useEffect, useLayoutEffect } from 'react'
import CampangeBanner from '../components/campange-banner'
import Footer from '../components/footer'
import Header from '../components/header'
import ImageCarousel from '../components/image_carousel'
import Introduction from '../components/introduction'
import LP_Events from '../components/lp_events'
import LP_Positions from '../components/lp_positions'

const LandingPage = () => {
  useEffect(() => {
    document.title = "Junge Union Kirchheim"
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <Header />
      <CampangeBanner/>
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[13rem] 3xs:mt-[14rem] xs:mt-[15rem] sm:mt-[16rem] duration-200'>
        <ImageCarousel />
        <Introduction />
        <LP_Events />
        <LP_Positions />
      </div>
      <Footer absolute={false} />
    </div>
  )
}

export default LandingPage
import React, { useEffect, useLayoutEffect } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ImageCarousel from '../components/image_carousel'
import Introduction from '../components/introduction'
import LP_Events from '../components/lp_events'
import LP_Positions from '../components/lp_positions'
import SideBar from '../components/side_bar'

const LandingPage = () => {
  useEffect(() => {
    document.title = "Junge Union Kirchheim"
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
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
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Position from '../components/position'
import PositionContext from '../context/positionContext'


const Positions = () => {
  const positionData = useContext(PositionContext)

  useEffect(() => {
    document.title = "Positionen - Junge Union Kirchheim"

  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Positionen</h1>
        <div className='grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4'>
            {
                positionData.map((position, index) => {
                    return (
                        <Position 
                          image={position.picture} 
                          topic={position.topic}  
                          lp={false}
                          index={index}
                        />
                    )
                })
            }
      </div>
      <p className='mb-6'></p>
    </div>
    <Footer />
  </div>
  )
}

export default Positions
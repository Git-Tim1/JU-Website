import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Position from '../components/position'
import PositionContext from '../context/positionContext'


const Positions = () => {
  const positionData = useContext(PositionContext)

  useEffect(() => {
    document.title = "Positionen - Junge Union Kirchheim"

    console.log(positionData)

  }, []);
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Positionen</h1>
        <div className='grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4'>
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
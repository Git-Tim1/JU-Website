import React, { useEffect } from 'react'
import Header from '../components/header'
import Position from '../components/position'
import { positionData } from '../data/position_data'

const Positions = () => {
  useEffect(() => {
    document.title = "Positionen - Junge Union Kirchheim"
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
                          title={position.title} 
                          link={position.link} 
                          lp={false}
                        />
                    )
                })
            }
      </div>

    </div>
  </div>
  )
}

export default Positions
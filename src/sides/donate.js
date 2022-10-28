import React from 'react'
import Header from '../components/header'

const Donate = () => {
  return (
    <div className='h-full'>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-bold text-xl sm:text-2xl'>Spenden</h1>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  )
}

export default Donate
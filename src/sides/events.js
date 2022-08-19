import React from 'react'
import Header from '../components/header'
import Event from '../components/event'
import Footer from '../components/footer'
import { eventData } from '../data/event_data'

const Events = () => {
  return (
    <div className='h-full'>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-bold text-xl sm:text-2xl'>Termine</h1>
          {eventData.map((event, index) => {
          return(
            <Event Day={event.day} Month={event.month} EventName={event.event_name} Description={event.description} />
              
          )
          })}
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  )
}

export default Events
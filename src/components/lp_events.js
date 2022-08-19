import React from 'react'
import Event from './event'
import { eventData } from '../data/event_data'

const LP_Events = () => {
  return (
    <div className='mt-12 block w-full h-auto float-left'>
        <h1 className='font-bold text-xl sm:text-2xl'>Termine</h1>
        {eventData.map((event, index) => {
        return(
            <>
                {(index < 3) && (<Event Day={event.day} Month={event.month} EventName={event.event_name} Description={event.description} />)}
            </>
            
        )
        })}
    </div>
  )
}

export default LP_Events
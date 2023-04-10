import React, { useContext, useEffect } from 'react'
import { EventContext } from '../context'
import Event from './event'

const LP_Events = () => {
  const eventData = useContext(EventContext)

  useEffect(() => {
    console.log(eventData)
  }, [])
  
  
  return (
    <div className='mt-12 block w-full h-auto float-left'>
        <h1 className='font-extrabold text-xl sm:text-2xl'>Termine</h1>
        {(eventData[0] !== " ") && <>{eventData.map((event, index) => {
        return(
            <>
                {(index < 3) && (<Event Day={event.day} Month={event.month} EventName={event.event_name} Description={event.description} />)}
            </>
            
        )
        })}</>}
    </div>
  )
}

export default LP_Events
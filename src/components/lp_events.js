import React from 'react'
import Event from './event'
import { useEffect, useState } from 'react'

const LP_Events = () => {
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    try {
      fetch('https://api.wrire.com/partner/ju-kirchheim/Events', { // fetch data from backend server
        method: 'GET',
      }).then((response) => response.json().then((data) => {
        console.log(data)
        setEventData(data)
      }))
      } catch (error){console.log(error)}
    }, []);
  
  return (
    <div className='mt-12 block w-full h-auto float-left'>
        <h1 className='font-extrabold text-xl sm:text-2xl'>Termine</h1>
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
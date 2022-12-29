import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Event from '../components/event'
import Footer from '../components/footer'

const Events = () => {
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    document.title = "Veranstaltungen - Junge Union Kirchheim"


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
    <div className='h-full'>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-bold text-xl sm:text-2xl'>Termine und Veranstaltungen</h1>
          {eventData != null && eventData.map((event, index) => {
          return(
            <Event Day={event.day} Month={event.month} EventName={event.event_name} Description={event.description} />
          )
          })}
          {eventData == null && <p className='mt-2 font-semibold text-lg'>Es stehen momentan keine Termine an</p>}
          <p className='mb-20'></p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
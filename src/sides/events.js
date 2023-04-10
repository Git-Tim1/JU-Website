import React, { useEffect, useState, useContext } from 'react'
import Header from '../components/header'
import Event from '../components/event'
import Footer from '../components/footer'
import { EventContext } from '../context'

const Events = () => {
  const eventData = useContext(EventContext)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    document.title = "Veranstaltungen - Junge Union Kirchheim"
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    if (eventData[0] !== " "){setLoading(false)}
  }, [eventData]);
  return (
    <div className='h-full'>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-extrabold text-2xl sm:text-3xl'>Termine und Veranstaltungen</h1>
          {!loading && <>
          {eventData.map((event, index) => {
          return(
            <Event Day={event.day} Month={event.month} EventName={event.event_name} Description={event.description} />
          )
          })}
          </>}
          <p className='mb-20'></p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
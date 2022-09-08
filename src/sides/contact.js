import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import InputField from '../components/input_field'

const Contact = () => {
  const [data, setData] = useState({name: null, e_mail: null, message: null})

  useEffect(() => {
    document.title = "Kontakt - Junge Union Kirchheim"
  }, []);
  return (
    <div>
      <Header />
      <form className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Kontakt</h1>
        <p className='mt-3'>Hier Text einfügen, in dem beschrieben wird wieso man euch kontaktieren sollte und dass ihr für Feedback, Anregungen und Fragen offen seid.</p>
        <InputField datapoint='Name' type='text' />
        <InputField datapoint='E-Mail' type='e-mail' />
        <label className='font-semibold text-lg mt-3 inline-block'>Nachricht</label>
        <textarea className='w-full mt-1 border border-gray-10 bg-white p-3 focus:outline-none focus:border-accent-blue-2' />
        <div className='w-full inline-block'>
          <input type='checkbox' className="float-left mt-3 w-[18px] h-[18px] outline-none border border-gray-200 rounded-none" />
          <p className='w-[calc(100%-25px)] float-right mt-2 font-medium'>Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Website einverstanden.</p>
        </div>
        <button className='bg-accent-blue-3 text-white px-4 py-1.5 text-lg font-semibold mt-2'>Senden</button>
      </form>
    </div>
  )
}

export default Contact
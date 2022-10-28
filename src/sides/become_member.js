import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Select from 'react-select'
import InputField from '../components/input_field'
import Footer from '../components/footer'


const BecomeMember = () => {
  useEffect(() => {
    document.title = "Mitglied werden - Junge Union Kirchheim"
  }, []);

  

  const [data, setData] = useState({sex: "", vorname: "", nachname: "", e_mail: "", street_and_number: "", place_of_residence:"", zip:"", birth_date: "", bank_name: "",  iban: "", bic: "", checked: false})
  const [completeData, setCompleteData] = useState(false)


  useEffect(() => {
    console.log(data)
  }, [data])
  
  const handleSubmit = () => {
    console.log(null)
  }

  return (
    <div>
      <Header />
      <form className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] mb-10'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Mitglied werden</h1>

        <p className='mt-3'>
          Cool, dass du Interesse hast, bei uns Mitglied zu werden und somit unsere Heimat mitzugestalten. 

          Wir, die Junge Union Stadtverband Kirchheim, sind ein junger und aktiver Verband, welcher die Interessen der junge Menschen vertritt. 

          Wenn du Lust auf Politik hast und Spaß haben willst, bist du bei uns genau richtig! Dann heißt es jetzt nur noch Mitglied werden!

          Mitglied der JU kann werden, wer das 14. Lebensjahr vollendet hat, mit 35 ented die Mitgliedschaft der JU automatisch.
        </p>

        <label className='font-semibold text-lg mt-3 inline-block'>Anrede</label>
        <select onChange={inputDataValue => setData({...data, sex: inputDataValue.target.value})} className='w-full mt-1 h-10 border border-gray-10 focus:outline-none px-3 focus:border-accent-blue-2' required >
          <option value={"male"}>Herr</option>
          <option value={"female"}>Frau</option>
          <option value={"no-data"}>Keine Angabe</option>
        </select>

        <InputField datapoint={"Vorname"} type="text" inputData={i => setData({...data, vorname: i})} />
        <InputField datapoint={"Nachname"} type="text" inputData={i => setData({...data, nachname: i})} />
        <InputField datapoint={"E-Mail"} type="E-Mail" inputData={i => setData({...data, e_mail: i})} />
        <InputField datapoint={"Straße, Hausnr."} type="text" inputData={i => setData({...data, street_and_number: i})} />
        <InputField datapoint={"Wohnort"} type="text" inputData={i => setData({...data, place_of_residence: i})} />
        <InputField datapoint={"Postleitzahl"} type="text" inputData={i => setData({...data, zip: i})} />
        <InputField datapoint={"Geburtsdatum"} type="text" inputData={i => setData({...data, birth_date: i})} />

        <input type="submit" onClick={e => {e.preventDefault(); handleSubmit()}} className='cursor-pointer bg-accent-blue-2 text-white px-5 py-2 text-xl font-semibold mt-4' value="Jetzt Mitglied werden" />
      </form>
      <Footer />
    </div>
  )
}

export default BecomeMember
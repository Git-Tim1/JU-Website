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

        <p className='mt-3 text-justify text-[17px]'>
          Du hast Interesse an der Arbeit der Jungen Union und bist zwischen 14 und 35 Jahre alt? Dann schreibe uns oder komm zu einem unserer nächsten Treffen! Denn: In der Jungen Union aktiv sein heißt, die eigene Zukunft selbst in die Hand zu nehmen. Wir freuen uns auf Dich, denn gemeinsam macht Politik mehr Spaß.
          Warum aktiv werden? Hier findest du vier gute Gründe!
        
            
          <h2 className='text-lg font-bold mt-2'>VOR ORT</h2>
            Der Jugendclub steht vor dem Aus, die Sportanlage muss dringend renoviert oder das Nachtbusnetz sollte ausgebaut werden? Die JU setzt sich dort ein, wo sie gebraucht wird. Als einzige politische Jugendorganisation in Deutschland ist die Junge Union flächendeckend vertreten und stellt dabei die größte Jugendorganisation in Kirchheim dar. Der Mitgliedsbeitrag beträgt hierbei 12€ im Jahr.

          <h2 className='text-lg font-bold mt-2'>GEMEINSCHAFT</h2>
            Mit rund 110.000 Mitgliedern ist die Junge Union eine starke Gemeinschaft. Wir diskutieren über Politik und streiten um die besten Lösungen. Genauso gehören jedoch ein Kinoabend, eine Party oder ein Stand auf dem Straßenfest zu den Aktivitäten der JU.

          <h2 className='text-lg font-bold mt-2'>VERANSTALTUNGEN</h2>
            Von Podiumsdiskussionen über Straßenaktionen bis zu gemeinsamen Freizeit-Aktivitäten: Bei der Jungen Union ist immer viel los!

          <h2 className='text-lg font-bold mt-2'>NETZWERK</h2>
            In der Jungen Union aktiv sein heißt auch, neue Leute kennen zu lernen. Bei gemeinsamen Projekten, der Arbeit in Ausschüssen oder bei gemeinsamen Fahrten bilden sich oft Freundschaften, die weit über die Junge Union heraus reichen.
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
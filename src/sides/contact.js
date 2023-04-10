import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import InputField from '../components/input_field'
import swal from 'sweetalert';


const Contact = () => {
  const [data, setData] = useState({name: "", e_mail: "", message: "", checked: false})
  const [completeData, setCompleteData] = useState(false)
  const navigate = useNavigate();


  useEffect(() => {
    document.title = "Kontakt - Junge Union Kirchheim"
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (completeData == true){
      swal({
        icon: "error",
        title: "Formular vollständig aufüllen"
      })
    }
  }, [completeData])
  


  const submitData = () => {

    let formdata = new FormData()
    for ( var key in data ) {
      key != "checked" && formdata.append(key, data[key]);
   }
    try{
      fetch("https://api.wrire.com/partner/ju-kirchheim/form", {
        method: "POST",
        body: formdata
      }).then((r) => console.log(swal({
        title: "Vielen Dank",
        text: "Wir haben deine Anfrage erhalten und werden dir schnellstmöglich antworten",
        icon: "success",
        button: "Ok"
      }).then(e => navigate("/path/to/push"))));
    } catch (e) {
      swal({
        title: "Error",
        text: "Etwas ist Schief gelaufen, versuche später noch einmal",
        icon: "error"
    }
      )
    }
  }


  const handleSubmit = () => {
    if (data.name !== "" && data.e_mail !== "" && data.message !== "" && data.checked !== false){
      submitData()
    } else {
      console.log("Date complete")
      setCompleteData(true)
    }
  }

  return (
    <div>
      <Header />
      <form className='max-w-[60rem] w-[90%] mx-auto min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Kontakt</h1>
        <p className='mt-3 text-md sm:text-[17px]'>Dich stört in deiner Gemeinde etwas? Du willst dich für eine Veranstaltung anmelden oder hast sogar Interesse an einer Mitgliedschaft? Dein schreib uns über unser Kontaktformular!</p>
        
        <InputField datapoint='Name' type='text' inputData={inputData => {setData({...data, name: inputData})}} />
        <InputField datapoint='E-Mail' type='e-mail' inputData={inputData => {setData({...data, e_mail: inputData})}} />
        <label className='font-semibold text-lg mt-3 inline-block'>Nachricht</label>
        <textarea className='
        w-full mt-1 border border-gray-10 
        bg-white p-3 
        focus:outline-none focus:border-accent-blue-2 min-h-[150px]'
        onChange={inputDataValue => setData({...data, message: inputDataValue.target.value})}

        />
        <div className='w-full inline-block'>
          <input type='checkbox' className="float-left mt-3 w-[18px] h-[18px] outline-none border border-gray-200 rounded-none" onChange={() => setData({...data, checked: !data.checked})} />
          <p className='w-[calc(100%-25px)] float-right mt-2 font-medium'>Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Webseite einverstanden.</p>
        </div>
        <input type="submit" onClick={e => {e.preventDefault(); handleSubmit()}} className='cursor-pointer bg-accent-blue-2 text-white px-4 py-1.5 text-lg font-semibold mt-2' value="Senden" />
      </form>
      <Footer />
    </div>
  )
}

export default Contact
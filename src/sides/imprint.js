import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Imprint = () => {
  let text1 = 'Dienstanbieter dieser Seite ist die \n \
              Junge Union – Stadtverband Kirchheim unter Teck \n \
              Adresse auf Anfrage: kontakt@ju-kirchheim.de \n \n \
              Vertreten durch den Vorsitzenden Giancarlo Crescente. \n \n \
              Inhaltlich Verantwortlich ist die Junge Union Stadtverband Kirchheim/Teck.\n \n \
              E-Mail: kontakt@ju-kirchheim.de'
  
  let text2 = 'JU Kirchheim, privat \n \n \
  Bei dem Inhalt unserer Internetseiten handelt es sich um urheberrechtlich geschützte Werke. Die Junge Union Stadtverband Kirchheim/Teck gestattet die Übernahme von Texten in Datenbestände, die ausschließlich für den privaten Gebrauch eines Nutzers bestimmt sind. Die Übernahme und Nutzung der Daten zu anderen Zwecken bedarf der schriftlichen Zustimmung der Partei. \n \n \
  Haftungshinweis: Im Rahmen unseres Dienstes werden auch Links zu Internetinhalten anderer Anbieter bereitgestellt. Auf den Inhalt dieser Seiten haben wir keinen Einfluss; für den Inhalt ist ausschließlich der Betreiber der anderen Website verantwortlich. Trotz der Überprüfung der Inhalte im gesetzlich gebotenen Rahmen müssen wir daher jede Verantwortung für den Inhalt dieser Links bzw. der verlinkten Seite ablehnen.'
  return (
    <div className='h-full'>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-extrabold text-2xl sm:text-3xl'>Impressum</h1>
          <p className='text-[17px] mt-2 text-justify whitespace-pre-line'>
            {text1}
          </p>
          <h2 className='font-bold  text-md sm:text-xl mt-4'>Bildnachweis</h2>
          <p className='text-[17px] mt-2 mb-8 text-justify whitespace-pre-line'>
            {text2}
          </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Imprint
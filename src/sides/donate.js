import React, {useEffect, useLayoutEffect} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Donate = () => {
  useEffect(() => {
    document.title = "Spenden - Junge Union Kirchheim"
    window.scrollTo(0, 0)
  }, []);

  let text1 = 'Die Junge Union (JU) begeistert erfolgreich seit 1947 junge Menschen zu politischem Engagement. Ob Roland Koch, Gerhard Stoltenberg, Edmund Stoiber, Friedrich Merz, Jürgen Rüttgers, Günther Oettinger oder Helmut Kohl – nahezu alle Spitzenpolitiker von CDU und CSU waren einmal in der JU aktiv und haben dort ihr politisches Handwerkszeug gelernt. \
              Die JU versteht sich als der Erneuerungsmotor von CDU und CSU und betreibt eine Interessenspolitik für künftige Generationen. Dies steht so nicht nur in unserem Grundsatzprogramm, sondern wird von vielen, engagierten JU-Mitgliedern täglich praktiziert. \
              Als größte politische Jugendorganisation – sowohl international als auch lokal – sehen wir uns als Anwalt der zukünftigen Generationen. Wir möchten mit unserer Politik eine lebenswerte Zukunft für Alle ermöglichen. \
              Dabei kostet unsere Arbeit Geld. Wir finanzieren unsere ehrenamtliche Arbeit hierbei ausschließlich aus Mitgliedsbeiträgen (Grundbeitrag: 12€/Jahr) und Spenden. Eine Finanzierung durch unsere Mutterpartei findet nicht statt. \
              Deshalb sind wir auf Ihre Spende angewiesen! \n \n \
              Mit Ihrer Spende unterstützen Sie direkt die Arbeit unseres Verbands hier vor Ort. Sie ermöglichen das politische Engagement von Jugendlichen in Kirchheim, Ohmden, Holzmaden, Weilheim, Neidlingen, Lenningen, Erkenbrechtsweiler, Owen, Dettingen und Bissingen. \
              Derzeit ist es wichtig, viel mehr junge Menschen in ganz Deutschland für Politik zu begeistern. Wir dürfen in unserer Demokratie nicht zulassen, gesamte Personengruppen unbeachtet zu lassen. \
              Für eine Spende zur Unterstützung der JU-Arbeit wären wir Ihnen sehr dankbar! \n \n'
  let text2 = 'Junge Union Stadtverband Kirchheim \n \
              bei der Volksbank Mittlerer Neckar eG \n \
              IBAN: DE25 6129 0120 0360 9550 02 \n \
              BIC: GENODES1NUE \n \
              Verwendungszweck: SPENDE ‚Vorname, Nachname, Adresse‘ \n '

  return (
    <div className='h-full'>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <h1 className='font-extrabold text-2xl sm:text-3xl'>Spenden</h1>
          <p className='text-md sm:text-[17px] mt-2 mb-6 sm:text-justify whitespace-pre-line'>
            <p className='mt-1'>{text1}</p>
            <p className='italic'>Hinweis: Parteispenden werden steuerlich privilegiert. Gerne stellen wir Ihnen hierfür eine Spendenbescheinigung aus.</p>
            <h2 className='text-xl font-bold mt-2'>Spendenkonto</h2>
            <p className='mt-1'>{text2}</p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Donate
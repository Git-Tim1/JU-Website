import React, {useLayoutEffect} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
var Tempo50 = require('../images/50-schild.png')
var img_1 = require('../images/Logo_Hass.jpg')
var img_2 = require('../images/logo_2.png')
var img_3 = require('../images/logo_3.png')
var img_4 = require('../images/logo_4.png')


const Campange = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <div className='h-32 3xs:h-36 xs:h-40 sm:h-44 top-[5rem] w-full bg-accent-blue-3 mt-[5rem]'>
          <div className='h-full max-w-[60rem] w-[90%] relative mx-auto flex overflow-y-hidden'>
            <div className='font-bold h-auto text-white text-[26px] leading-8 xs:text-3xl sm:text-4xl my-auto duration-500'>
              <p>Schnelle Nummer?</p>
              <p className={`text-yellow-300`}>Nicht mit Tempo 30!</p>
                <div className={`text-black text-sm 3xs:text-base xs:text-lg  sm:text-xl mt-2 font-bold z-40 duration-200`}>
                  <a href="https://www.openpetition.de/petition/blog/schnelle-nummer-nicht-mit-tempo-30?language=de_DE.utf8" target="_blank"
                    className={`bg-white hover:bg-yellow-300 drop-shadow-md rounded-sm focus:bg-yellow-300 px-[6px] xs:px-2 py-[2px] float-left`}>
                    Jetzt Petition unterschreiben
                  </a>      
                </div>
            </div>
            <img src={Tempo50} className={`h-full xs:h-[105%] md:h-[120%] top-0 xs:top-[-2.5%] md:top-[-10%] absolute hidden xxs:block right-0 xs:right-[-2%] sm:right-0 duration-200`} />
          </div>
          
      </div>
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 duration-200'>
          <span className='text-sm xxs:text-base sm:text-lg mt-4 sm:mt-6 mb-10 inline-block sm:leading-8 duration-200'>Die Einführung von Tempo 30 stört den Verkehrsfluss massiv. Betroffene Anwohner
          werden nur vermeintlich entlastet. Auf der anderen Seite werden Rettungskräfte,
          Berufstätige und der öffentliche Nahverkehr massiv gestört. <b>Wir fordern deshalb, dass
          nur zwischen 22 - 5 Uhr, Tempo 30 verpflichtend ist. Tagsüber sollen 50 km/h
          gefahren werden dürfen.</b> Gefährdete Bereiche, wie Schulen oder Kindergärten, sind von
          unserer Forderung unberührt. <br /> <br />
          Die kommunalen Maßnahmen in Bezug auf Tempo 30, insbesondere deren
          Begründungen, sehen wir als haltlos an. Demnach kritisieren wir folgende Punkte scharf: <br />
          <ul className='ml-6 xs:ml-8 md:ml-10 mt-2' style={{ listStyleType: 'disc' }} >
            <li>
              <span className='relative left-1 xs:left-2'>
              Den Vorwand des Lärmschutzes sehen wir als ein reines Instrument, Tempo 30
              zu etablieren. In diesem Kontext beruft sich die Stadt Kirchheim auf
              den <i>Lärmaktionsplan</i> <a href='#fn-1' className='italic'>(Quelle 1)</a>. Hier geht aber insbesondere hervor, dass
              Messergebnisse oft nur minimal überschritten wurden. Wie auch im Aktionsplan
              aufgeführt, sind andere Möglichkeiten vorhanden, Lärm zu reduzieren. Die
              Möglichkeiten müssen mit voller Kraft angestrebt werden, bevor eine
              Tempobeschränkung zum Tragen kommt. Dies sollte immer die letzte Regulierung
              sein. Hinzufügend muss man erwähnen, dass eine Einsparung bei Tempo 30 von
              nur 2 db(A) vorliegt <a href='#fn-2' className='italic'>(Quelle 2)</a>, was für das menschliche Gehör kaum wahrnehmbar
              ist.
              </span>
            </li>
            <li>
              <span className='relative left-1 xs:left-2'>
              Nach einer Erhebung des ADAC ist eine Erhöhung der Reisedauer um 25% zu
              vermerken <a href='#fn-2' className='italic'>(Quelle 2)</a>, wenn anstatt 50 km/h, 30km/h gefahren wird. Für
              Privatpersonen scheint dieser Mehraufwand "nur" ein Ärgernis zu sein. Im
              Speziellen für freiwillige Feuerwehrleute auf Anfahrt zum Gerätehaus birgt Tempo
              30 allerdings eine ernstzunehmende Gefahr für die Allgemeinheit. Aber auch
              Berufspendler sind durch die Störungen des Verkehrsflusses eingeschränkt.
              </span>
            </li> 
            <li> 
              <span className='relative left-1 xs:left-2'>
              Wir sehen die Förderung des öffentlichen Personennahverkehrs als
              unabdingbar an. Dieser kann aber nur eine Alternative zum eigenen PKW
              darstellen, wenn auch dessen Pünktlichkeit gegeben ist. Wie schon die
              Lokalpresse berichtete <a href='#fn-3' className='italic'>(Quelle 3)</a> ist das bei Tempo 30 nach unserer Meinung nicht
              gegeben.
              </span>
            </li> 
            <li>
              <span className='relative left-1 xs:left-2'>
              Das Argument, durch Tempo 30 würde der Umweltschutz gefördert werden,
              sehen wir als unbegründet an. So ist die Landesanstalt für Umwelt, Messungen
              und Naturschutz Baden-Württemberg <a href='#fn-4' className='italic'>(Quelle 4)</a> schon im Jahr 2012 zu folgendem
              Ergebnis gekommen: Die motorbedingte Belastung durch Feinstaub stieg durch
              Tempo 30 massiv im Vergleich zu Tempo 50. Auch die Stickstoffdioxid-Emissionen
              wurden in diesem Zuge gemessen. Im Vergleich zu Tempo 30, wurde hierbei eine
              deutlich geringere Belastung bei 50 km/h festgestellt.
              </span>
            </li>
          </ul>
          <div className='w-full h-2' />
          Zusammenfassend zeigt sich, dass die Argumentation gegen eine Tempobeschränkung
          auf 30 überwiegt. Das Ziel einer effektiven Verkehrsplanung muss sein, den Verkehrsfluss
          aufrechtzuerhalten.
          <br />
          
          <div className='w-full h-auto inline-block mt-2'>
            <p className='inline-block my-2 font-bold w-full'>Mit freundlicher Unterstützung:</p>
            <img src={img_1} className='w-1/5 float-left ml-[1.5%] mr-[6%]' />
            <img src={img_2} className='w-1/5 float-left mt-5 mr-[6%]'/>
            <img src={img_3} className='w-1/5 float-left mr-[6%]'/>
            <img src={img_4} className='w-1/5 float-left'/>
          </div>



          <br />
            <p className='font-bold'>Quellen:</p>
            <ul className='ml-6 xs:ml-8 md:ml-10 mt-1' style={{ listStyleType: 'disc' }}>
              <li><span className='left-1 xs:left-2 relative'>(Quelle 1): <a id="fn-1" className='text-blue-800 underline ' href='https://www.kirchheim-teck.de/de/Wirtschaft-Bauen/Verkehr-Mobilitaet/Laermaktionsplan'>Lärmaktionsplan Stadt Kirchheim unter Teck (kirchheim-teck.de)</a></span></li>
              <li><span className='left-1 xs:left-2 relative'>(Quelle 2): <a id="fn-2" className='text-blue-800 underline ' href='https://www.adac.de/-/media/pdf/vek/fachinformationen/urbane-mobilitaet-und-laendlicher-verkehr/tempo30pro-contra-adac-bro.pdf'>Tempo 30 - Pro und Contra (adac.de)</a></span></li>
              <li><span className='left-1 xs:left-2 relative'>(Quelle 3): <a id="fn-3" className='text-blue-800 underline ' href='https://www.teckbote.de/nachrichten/lokalnachrichten-kirchheim_artikel,-tempo-30-busse-geraten-aus-dem-takt-_arid,306440.html'>Tempo 30: Busse geraten aus dem Takt (teckbote.de)</a></span></li>
              <li><span className='left-1 xs:left-2 relative'>(Quelle 4): <a id="fn-4" className='text-blue-800 underline ' href='https://pudi.lubw.de/detailseite/-/publication/75125'>Vermessung des Abgasemissionsverhaltens von zwei Pkw und einem Fahrzeug der Transporterklasse im realen Straßenbetrieb in Stuttgart mittels PEMS-Technologie</a></span></li>
            </ul>
          </span>
      </div>
      <Footer />
    </div>
  )
}

export default Campange
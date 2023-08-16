import React from 'react'

var Giancarlo = require('../images/Giancarlo.jpeg')


const Introduction = () => {
  return (
    <div className='mt-6 inline-block w-full h-auto'>
      <div className='hidden lg:block w-full h-auto'>
        <div className='float-left w-[70%]'>
          <p className=' text-2xl font-extrabold rounded-sm'>Herzlich Willkommen bei der JU Kirchheim</p>
          
          <p className='text-lg w-full mt-3 text-justify'>
          Liebe Besucherinnen und Besucher,
          herzlich Willkommen auf der Internetseite der Jungen Union Kirchheim. Wir sind die Jugendorganisation der CDU für Kirchheim, Ohmden, Holzmaden, Weilheim, Neidlingen, Lenningen, Erkenbrechtsweiler, Owen, Dettingen und Bissingen.
          Wir sehen uns als Anwalt für kommende Generationen und fordern eine konsequente generationengerechte Politik. Wir stehen ein für unsere Demokratie, unseren Rechts- und Sozialstaat, unsere Freiheit und die Interessen unserer jungen Generation. Wir müssen heute die richtigen Entscheidungen treffen, um morgen in Frieden, Wohlstand und Sicherheit leben zu können.  
          Bei regelmäßigen Sitzungen, Veranstaltungen, Diskussionsrunden und Debatten lernst Du uns und hin und wieder auch unsere Bundestags- und Landtagsabgeordneten, viele Bürgermeister, aber auch Kreis– und Regionalräte in lockerer Atmosphäre kennen.  
          Und noch was: Party ist bei uns ein fester Bestandteil.
          Interesse? Dann komm doch mal vorbei!
          </p>
          <p className='text-lg float-right italic mt-0'>
              - Giancarlo Crescente, Vorsitzender
          </p>
        </div>

          <img src={Giancarlo}
          className='w-[25%] h-auto float-right' 
          />
      </div>


      <div className='lg:hidden'>
        <p className='4xs:hidden 3xs:block text-xl 4xs:text-lg xxs:text-xl font-extrabold w-full'>Herzlich Willkommen bei der JU Kirchheim</p>
        <p className='text-xl hidden 4xs:block 3xs:hidden font-extrabold w-full'>Herzlich Willkommen bei der <br />Jungen Union Kirchheim</p>

        
        <img src={Giancarlo}
        className='w-[35%] sm:w-[30%] md:w-[25%] h-auto float-right my-3 ml-4 hidden xs:block' />
        
        <p className='text-sm xxs:text-base sm:text-lg w-auto mt-1 xs:mt-2 sm:mt-3 '>
          Liebe Besucherinnen und Besucher,
          herzlich Willkommen auf der Internetseite der Jungen Union Kirchheim. Wir sind die Jugendorganisation der CDU für Kirchheim, Ohmden, Holzmaden, Weilheim, Neidlingen, Lenningen, Erkenbrechtsweiler, Owen, Dettingen und Bissingen.
          Wir sehen uns als Anwalt für kommende Generationen und fordern eine konsequente generationengerechte Politik. Wir stehen ein für unsere Demokratie, unseren Rechts- und Sozialstaat, unsere Freiheit und die Interessen unserer jungen Generation. Wir müssen heute die richtigen Entscheidungen treffen, um morgen in Frieden, Wohlstand und Sicherheit leben zu können.  
          Bei regelmäßigen Sitzungen, Veranstaltungen, Diskussionsrunden und Debatten lernst Du uns und hin und wieder auch unsere Bundestags- und Landtagsabgeordneten, viele Bürgermeister, aber auch Kreis– und Regionalräte in lockerer Atmosphäre kennen.  
          Und noch was: Party ist bei uns ein fester Bestandteil.
          Interesse? Dann komm doch mal vorbei!
        </p>

        <img src={Giancarlo}
        className='xs:hidden xxs:h-64 w-full object-cover mt-2' />
        <p className='text-sm xxs:text-base sm:text-lg float-left italic mt-2 sm:mt-1'>
            - Giancarlo Crescente, Vorsitzender
      </p>
        
      </div>
    </div>
  )
}

export default Introduction
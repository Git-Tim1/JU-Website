import React from 'react'
import {Giancarlo} from '../images/Giancarlo.jpg'

const Introduction = () => {
  return (
    <div className='mt-10 inline-block w-full h-auto'>
      <div className='hidden md:block w-full h-auto'>
        <div className='float-left w-[70%]'>
          <p className='text-2xl font-extrabold rounded-sm'>Herzlich Willkommen bei der JU Kirchheim</p>
          
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

          <img src="https://media.discordapp.net/attachments/804256706514649159/1009546492664627341/HJR-5D4-02240-768x512_1.jpg"
          className='w-[25%] h-auto float-right' 
          />
      </div>


      <div className='md:hidden'>
        <p className='text-xl font-bold rounded-sm w-full'>Herzlich Willkommen bei der JU Kirchheim</p>
        
        <img src="https://media.discordapp.net/attachments/804256706514649159/1009546492664627341/HJR-5D4-02240-768x512_1.jpg"
        className='w-[35%] sm:w-[30%] md:w-[25%] h-auto float-right my-3 ml-4 hidden xxs:block' />
        
        <p className='text-md sm:text-lg w-auto md:w-[72%] mt-3 md:float-left text-justify'>
          Liebe Besucherinnen und Besucher,
          herzlich Willkommen auf der Internetseite der Jungen Union Kirchheim. Wir sind die Jugendorganisation der CDU für Kirchheim, Ohmden, Holzmaden, Weilheim, Neidlingen, Lenningen, Erkenbrechtsweiler, Owen, Dettingen und Bissingen.
          Wir sehen uns als Anwalt für kommende Generationen und fordern eine konsequente generationengerechte Politik. Wir stehen ein für unsere Demokratie, unseren Rechts- und Sozialstaat, unsere Freiheit und die Interessen unserer jungen Generation. Wir müssen heute die richtigen Entscheidungen treffen, um morgen in Frieden, Wohlstand und Sicherheit leben zu können.  
          Bei regelmäßigen Sitzungen, Veranstaltungen, Diskussionsrunden und Debatten lernst Du uns und hin und wieder auch unsere Bundestags- und Landtagsabgeordneten, viele Bürgermeister, aber auch Kreis– und Regionalräte in lockerer Atmosphäre kennen.  
          Und noch was: Party ist bei uns ein fester Bestandteil.
          Interesse? Dann komm doch mal vorbei!
        </p>

        <img src="https://media.discordapp.net/attachments/804256706514649159/1009568271126757487/HJR-5D4-02240-768x512.jpeg"
        className='xxs:hidden mt-2' />
        <p className='text-md sm:text-lg float-left italic mt-0'>
            - Giancarlo Crescente, Vorsitzender
      </p>
        
      </div>
    </div>
  )
}

export default Introduction
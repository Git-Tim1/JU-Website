import React from 'react'
import {Giancarlo} from '../images/Giancarlo.jpg'

const Introduction = () => {
  return (
    <div className='mt-10 inline-block w-full h-auto'>
      <div className='hidden md:block w-full h-auto'>
        <div className='float-left w-[70%]'>
          <p className='text-2xl font-bold rounded-sm'>Herzlich Willkommen bei der JU Kirchheim</p>
          
          <p className='text-lg w-full mt-3 text-justify'>
              Hier Vorstellung, Begrüßung und persönliche Worte einfügen. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor invidunt ut labore et dolore magna 
              aliquyam erat, sed diam voluptua. At vero eos et accusam et 
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
              erat, sed diam voluptua. 
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
            Hier Vorstellung, Begrüßung und persönliche Worte einfügen. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
            diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. At vero eos et accusam et 
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
            erat, sed diam voluptua. 
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
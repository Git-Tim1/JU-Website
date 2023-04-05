import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
var Tempo50 = require('../images/50-schild.png')

const CampangeBanner = () => {
    const navigate = useNavigate();
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        // Adding the scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            // Removing listener
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    const handleScroll = () => {
        if(window.pageYOffset > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
      }  
    
    return (
      <div className={`w-full bg-accent-blue-3 ${isScrolled ? 'top-[5rem] h-14 4xs:h-10 3xs:h-16 xs:h-10 sm:h-14 md:h-16' : 'h-32 3xs:h-36 xs:h-40 sm:h-44 top-[5rem]'}  fixed overflow-hidden z-30 duration-500`}>
          <div className={`h-full max-w-[60rem] w-[90%] ${!isScrolled ? 'md:relative' : 'relative'} mx-auto flex`}>
                <div className={`font-bold h-auto text-white ${isScrolled ? ' text-[15px] 3xs:text-base sm:text-lg md:text-xl w-full' : 'text-[26px] leading-8 xs:text-3xl sm:text-4xl'} my-auto z-50 duration-500`}>
                    <Link to="/tempo-50">
                        <p className={isScrolled && '4xs:float-left 3xs:float-none xs:float-left'} >Schnelle Nummer?</p>
                        <p className={`text-yellow-300 ${isScrolled && 'float-left 4xs:ml-1 3xs:ml-0 xs:ml-1 sm:ml-2 '}`}>Nicht mit Tempo 30!</p>
                    </Link>
                    <div className={`text-black ${isScrolled ? 'text-sm sm:text-base md:text-lg px-[6px] absolute right-0 mt-0' : 'text-sm 3xs:text-base xs:text-lg  sm:text-xl mt-2'} font-bold z-40 duration-200`}>
                        <a href="https://www.openpetition.de/petition/blog/schnelle-nummer-nicht-mit-tempo-30?language=de_DE.utf8" 
                            className={`bg-white hover:bg-yellow-300 drop-shadow-md rounded-sm focus:bg-yellow-300 px-[6px] xs:px-2 py-[2px] float-left ${isScrolled && 'hidden 3xs:block'}`}>
                                Petition unterschreiben
                        </a>
                        <Link to="/tempo-50" 
                            className={`bg-white hover:bg-yellow-300 drop-shadow-md rounded-sm focus:bg-yellow-300 text-black px-[6px] xs:px-2 py-[2px] ml-2 float-left
                             font-bold  ${isScrolled ?'hidden m-l:block' : 'hidden 4xs:block'}`}>
                            Unsere Meinung
                        </Link>
                    </div>
                </div>
                
    
                <img src={Tempo50} className={`h-full xs:h-[105%] md:h-[120%] top-0 xs:top-[-2.5%] md:top-[-10%] absolute hidden xxs:block right-0 xs:right-[-2%] sm:right-0  ${isScrolled && 'invisible'} duration-200`} />
          </div>
        </div>
    )
  }

export default CampangeBanner
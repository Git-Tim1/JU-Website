import React from 'react'
import { Link } from 'react-router-dom'


const LP_Position = ({ title, image, link }) => {
    return (        
        <a href={ link } className='w-full inline-block relative mt-1 opacity-90 hover:opacity-100 drop-shadow hover:drop-shadow-lg'>
            <img className='object-cover aspect-4/3 xxs:aspect-video sm:aspect-4/3 md:aspect-video lg:aspect-4/3' src={image} />
            <h1 className='absolute
                text-lg 3xs:text-xl sm:text-lg md:text-xl 
                w-auto max-w-[90%]
                font-semibold 
                left-3 bottom-3  
                bg-accent-blue-3 text-white 
                px-2 py-1 z-10'>
            {title}</h1> 
        </a>
  )
}

export default LP_Position
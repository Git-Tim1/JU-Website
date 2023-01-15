import React, {useEffect, useState, useLayoutEffect} from 'react'
import { Link } from 'react-router-dom'


const Position = ({ topic, image, lp, index }) => {
    const [link, setLink] = useState(null)
    useEffect(() => {
      setLink(encodeURI(topic) + "&" + index)
    }, [])

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    });
  
    
    return (        
        <a href={"/position/" + link} className={`w-full inline-block relative mt-1 opacity-90 hover:opacity-100 drop-shadow hover:drop-shadow-lg aspect-4/3 xxs:aspect-video sm:aspect-4/3 md:aspect-video ${lp && 'lg:aspect-4/3'}`}>
            <img className={`object-cover h-full w-full`} src={image} />
            <h1 className='absolute
                text-lg 3xs:text-xl sm:text-lg md:text-xl 
                w-auto max-w-[90%]
                font-semibold 
                left-3 bottom-3  
                bg-accent-blue-3 text-white 
                px-2 py-1 z-10'>
            {topic}</h1> 
        </a>
  )
}

export default Position
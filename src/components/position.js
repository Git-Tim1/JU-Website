import React, {useEffect, useState, useLayoutEffect} from 'react'
import { Link } from 'react-router-dom'


const Position = ({ topic="lorem ipsum", image, lp, index=0 }) => {
    const [link, setLink] = useState(null)
  
    
    return (        
        <Link to={"/position/" + topic.toLowerCase() + "&" + index} className={`w-full inline-block relative mt-1 opacity-90 hover:opacity-100 drop-shadow hover:drop-shadow-lg aspect-4/3 xxs:aspect-video sm:aspect-4/3 md:aspect-video ${lp && 'lg:aspect-4/3'} duration-300`}>
            <img className={`object-cover h-full w-full`} src={image} />
            <h1 className='absolute
                text-lg 3xs:text-xl sm:text-lg md:text-xl 
                w-auto max-w-[90%]
                font-semibold 
                left-3 bottom-3  
                bg-accent-blue-3 text-white 
                px-2 py-1 z-10'>
            {topic}</h1> 
        </Link>
  )
}

export default Position
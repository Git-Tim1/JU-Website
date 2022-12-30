import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ArticleComponent = ({image, title, content, link, unixTime, author}) => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    let unix_timestamp = unixTime
    var dateVar = new Date(unix_timestamp * 1000);

    var day = dateVar.getDay()
    var month = dateVar.getMonth()
    var year = dateVar.getFullYear()

    setDate(day + '.' + month + '.' + year)
  
}, [])

  return (
    <Link to={link} className='w-full bg-white shadow-md h-auto sm:h-40 mt-5 inline-block rounded-sm'>
        <img className='aspect-video sm:aspect-4/3 h-full w-full float-left sm:w-64 object-cover' src={image} />
        
        <div className='relative h-full ml-[4%] xxs:ml-[3%] sm:ml-4 mt-4 sm:mt-3 float-left w-[92%] xxs:w-[94%] sm:w-[calc(100%-18rem)]'>
            <h1 className='text-lg xxs:text-xl max-h-[5.25rem] xxs:max-h-14 sm:max-h-[7rem] md:max-h-14 overflow-hidden font-bold'>{title}</h1>
            <p className='sm:hidden md:block mt-1 text-gray-700 text-base max-h-[4.5rem] sm:max-h-12 overflow-hidden'>{content}</p>
            <div className='absolute w-auto bottom-6 bg-accent-blue-1 px-1 py[2px]'>
              <p className='text-white font-bold text-[15px]'>{date}</p>
            </div>
            <div className='block h-5 sm:hidden'></div>
        </div>
        
    </Link>
  )
}

export default ArticleComponent
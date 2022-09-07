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
    <Link to={link} className='w-full bg-white shadow-md h-40 mt-5 inline-block rounded-sm'>
        <img className='h-full float-left w-64 object-cover' src={image} />
        
        <div className='ml-4 mt-3 float-left w-[calc(100%-18rem)]'>
            <p className='text-gray-800 font-medium'>{author} • {date}</p>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='mt-1 text-gray-700 text-base h-[4.5rem] overflow-hidden'>{content}</p>
        </div>
    </Link>
  )
}

export default ArticleComponent
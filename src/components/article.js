import React from 'react'
import { Link } from 'react-router-dom'

const ArticleComponent = ({image, title, preview, link}) => {
  return (
    <Link to={link} className='w-full bg-white shadow-md h-40 mt-5 inline-block rounded-sm'>
        <img className='h-full float-left w-64 object-cover' src={image} />
        
        <div className='ml-4 mt-3 float-left w-[calc(100%-18rem)]'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p>{preview}</p>
        </div>
    </Link>
  )
}

export default ArticleComponent
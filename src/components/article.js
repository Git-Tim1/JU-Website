import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ArticleComponent = ({image, title="lorem ipsum", content, link}) => {

  return (
    <Link to={link} className='w-full bg-white shadow-md h-auto sm:h-40 mt-5 inline-block rounded-sm'>
      <img className='aspect-video sm:aspect-4/3 h-full w-full float-left sm:w-64 object-cover' src={image} />
          
      <div className='relative py-4 sm:py-3 md:py-4 h-full px-3 xxs:px-4 sm:px-0 sm:ml-4 float-left w-full sm:w-[calc(100%-18rem)]'>
        <h1 className='text-lg xxs:text-xl  max-h-[5.25rem] xxs:max-h-14 sm:max-h-[7rem] md:max-h-14 overflow-hidden font-bold'>{title}</h1>
        <p className='block mt-[2px] md:mt-1 text-gray-700 text-base line-clamp-3 overflow-hidden'>{content}</p>
        <div className='block h-1 sm:hidden'></div>
      </div>
    </Link>
  )
}

export default ArticleComponent
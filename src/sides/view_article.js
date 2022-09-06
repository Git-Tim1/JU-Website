import React from 'react'
import Header from '../components/header'

const ViewArticle = ({ id }) => {
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
        {id}
      </div>
    </div>
  )
}

export default ViewArticle
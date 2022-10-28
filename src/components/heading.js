import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='mt-20 w-full bg-accent-blue-3 h-16'>
        <div className='max-w-[60rem] w-[90%] mx-auto block text-white'>
            <h1 className='text-2xl font-bold mt-3 inline-block italic'>{title}</h1>
        </div>
    </div>
  )
}

export default Heading
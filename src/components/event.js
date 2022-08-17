import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Event = ({Day, Month, EventName, Description}) => {
    const [showMore, setShowMore] = useState(false)
    return (
    <div onClick={() => setShowMore(!showMore)} className='cursor-pointer bg-white drop-shadow hover:drop-shadow-md'>
        <div className='w-full h-32  rounded-sm mt-4' >
            <div className='w-[150px] h-full float-left'>
                <h1 className='text-5xl font-extrabold text-accent-blue-2 w-full text-center inline-block mt-[25px] ml-1'>{Day}</h1>
                <h2 className='text-lg font-medium text-center w-full inline-block'>{Month}</h2>
            </div>
            <div className='float-left w-[calc(100%-150px)] h-full flex items-center justify-between'>
                <h1 className='text-[22px] font-bold ml-2 max-w-[70%]'>{EventName}</h1>
                <AiOutlinePlus  size={32} className={`mr-8 ${showMore && 'hidden'}`} />
                <AiOutlineMinus size={32} className={`mr-8 ${!showMore && 'hidden'}`} />
            </div>
        </div>
        <div className={`bg-decent-blue p-6 ${!showMore && 'hidden'}`}>
            {Description}
        </div>
    </div>
    )
}

export default Event
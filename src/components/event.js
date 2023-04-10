import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Event = ({Day, Month, EventName, Description}) => {
    const [showMore, setShowMore] = useState(false)
    return (
    <a onClick={e => {e.preventDefault(); setShowMore(!showMore)}} href="#">
    <div  className='w-[calc(100%-2px)] ml-[1px] cursor-pointer bg-white drop-shadow hover:drop-shadow-md'>
        <div className='w-full mx-autp h-32 rounded-sm mt-4' >
            <div className='w-[100px] 3xs:w-[105px] xs:w-[120px] sm:w-[140px] h-full float-left'>
                <h1 className='text-[32px] leading-8 xxs:text-3xl xs:text-4xl font-extrabold text-accent-blue-2 w-full text-center inline-block mt-[36px] xxs:mt-[32px] xs:mt-[27px] '>{Day}</h1>
                <h2 className='text-base xs:text-lg font-medium text-center w-full inline-block'>{Month}</h2>
            </div>
            <div className='float-left w-[calc(100%-100px)]  3xs:w-[calc(100%-105px)] xs:w-[calc(100%-120px)] sm:w-[calc(100%-140px)] h-full flex items-center justify-between'>
                <h1 className='text-[15px] 4xs:text-base 3xs:text-lg xxs:text-[19px] font-bold ml-2 max-w-[80%]'>{EventName}</h1>
                <AiOutlinePlus  size={30} className={`mr-4 xs:mr-6 sm:mr-8 ${showMore && 'hidden'}`} />
                <AiOutlineMinus size={30} className={`mr-4 xs:mr-6 sm:mr-8 ${!showMore && 'hidden'}`} />
            </div>
        </div>
        <div className={`bg-decent-blue text-[15px] xs:text-base p-5 xs:p-6 ${!showMore && 'hidden'}`}>
            {Description}
        </div>
    </div>
    </a>
    )
}

export default Event
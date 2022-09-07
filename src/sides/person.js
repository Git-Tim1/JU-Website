import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import { vorstand_data } from '../data/vorstand_data'

const Person = () => {
    let navigate = useNavigate()
    let { personid } = useParams()
    
    let [id, setID] = useState(0)

    useEffect(() => {
        setID(personid.split("+")[1])
    }, [])

    return (
        <div>
            <Header />
            <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[7rem] pb-4 block'>
                <div className='w-full h-full inline-block'>
                    <img src={vorstand_data[id].image} className='
                    md:w-[310px] md:h-[430px]
                    lg:w-[380px] lg:h-[500px]
                    object-cover float-left ' />
                    <div className='md:w-[calc(100%-325px)] lg:w-[calc(100%-400px)] float-right '>
                        <h2 className='font-medium text-xl text-accent-blue-2'>{vorstand_data[id].role}</h2>
                        <h1 className='font-extrabold text-3xl'>{vorstand_data[id].name}</h1>
                        <p className='text-lg mt-2 whitespace-pre-line'>{vorstand_data[id].introduction}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person
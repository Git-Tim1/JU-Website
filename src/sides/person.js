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
                    sm:hidden md:block
                    aspect-4/3 sm:aspect-3/4 
                    md:w-[36%] lg:w-2/5
                    object-cover float-left' />
                    <div className='w-full md:w-[62%] lg:w-[58%] float-right '>
                        <h2 className='font-medium text-lg xs:text-xl text-accent-blue-2 mt-2 sm:mt-0'>{vorstand_data[id].role}</h2>

                        <h1 className='font-extrabold text-2xl xs:text-3xl'>{vorstand_data[id].name}</h1>

                        <img src={vorstand_data[id].image} className='
                        hidden sm:block md:hidden
                        aspect-3/4 object-cover
                        w-1/3 float-right ml-4
                        ' />

                        <p className='xxs:text-lg text-base mt-1 sm:mt-2 whitespace-pre-line text-justify w-full'>{vorstand_data[id].introduction}</p>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person
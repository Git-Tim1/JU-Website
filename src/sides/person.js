import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Person = () => {
    let navigate = useNavigate()
    let { personID } = useParams()
    
    let [id, setID] = useState(0)
    const [vorstand_data, setVorstandData] = useState([{
        name: '',
        role: '',
        image: '',
        occupation: '',
        twitter: '',
        instagram: '',
        e_mail: '',
        introduction: ''
    }])

    useEffect(() => {
        setID(personID.split("+")[1])

        try {
            fetch('https://api.wrire.com/partner/ju-kirchheim/Vorstand',  {
              method: 'GET',
            }).then((response) => response.json().then((data) => {setVorstandData(data); console.log(data)}))
        } catch (error){console.log(error)}

    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[7rem] pb-4 block'>
                <div className='w-full h-full inline-block mb-5'>
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

                        <p className='xxs:text-lg text-base mt-1 sm:mt-2 whitespace-pre-line sm:text-justify w-full'>{vorstand_data[id].introduction}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Person
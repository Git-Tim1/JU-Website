import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import { VorstandContext } from '../context'
import { LoadingText } from './view_article'

const Person = () => {
    let navigate = useNavigate()
    let { personID } = useParams()
    
    let [id, setID] = useState(0)
    const vorstand_data = useContext(VorstandContext)

    useEffect(() => {
        setID(personID.split("+")[1])
        document.title = personID.split("+")[0] +  " - Junge Union Kirchheim"

        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[7rem] pb-4 block'>
                <div className='w-full h-full inline-block mb-5'>
                    {(vorstand_data[0] !== " ") ?
                    <>
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
                    </> :
                    <>
                        <div className='sm:hidden md:block w-full
                        aspect-4/3 sm:aspect-3/4 
                        md:w-[36%] lg:w-2/5
                        float-left bg-accent-blue-2 opacity-25'></div>

                        <div className='w-full md:w-[62%] lg:w-[58%] float-right '>
                            <div className='w-32 animation h-5 mt-2 sm:mt-0 xs:h-6 sm:h-7'></div>

                            <div className='animation w-80 mt-2 h-8 xs:h-9 md:h-10'></div>

                            <div className='
                            hidden sm:block md:hidden
                            aspect-3/4 
                            w-1/3 float-right ml-4 bg-accent-blue-2 opacity-25
                            '></div>

                            <div className='w-full sm:w-2/3 sm:pr-2 md:w-full p-0'>
                            <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
                            <LoadingText x="left-[20%]" y="left-[40%]" z="left-[77%]" />
                            <LoadingText x="left-[30%]" y="left-[45%]" z="left-[60%]" />
                            <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" />
                            <LoadingText x="left-[22%]" y="left-[66%]" z="left-[88%]" />
                            <LoadingText x="left-[11%]" y="left-[55%]" z="left-[78%]" />
                            <LoadingText x="left-[17%]" y="left-[47%]" z="left-[85%]" />
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Person
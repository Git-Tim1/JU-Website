import React, {useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

import { PositionContext } from '../context'

export const LoadingText = ({ x, y, z, h="h-4" }) => {
    return (
      <div className={`${h} w-full mt-2 animation rounded`}>
        <div className={`background-masker btn-divide-left ${x}`}>
        </div>
        <div className={`background-masker btn-divide-left ${y}`}>
        </div>
        <div className={`background-masker btn-divide-left ${z}`}>
        </div>
      </div>
    )
  }

const ViewPosition = () => {
    let navigate = useNavigate()
    let { positionID } = useParams()
    
    const positionData = useContext(PositionContext)
    
    const [id, setID] = useState(0)
    const [time, setTime] = useState("01.01.2020")
    const [loading, setLoading] = useState(true)

    function parseDateTime(datetime) {
        let z = (num, places) => String(num).padStart(places, '0')
        let a = datetime.split("T")[0].split("-")
        let y = parseInt(a[0])
        let m = parseInt(a[1])
        let d = parseInt(a[2])+1
        return `${z(d, 2)}.${z(m, 2)}.${z(y, 4)}`
    }

    useEffect(() => {
      if (positionData[id].date_time != null){
        setLoading(false)
        setTime(parseDateTime(positionData[id].date_time))
      }
    }, [positionData])
    

    useEffect(() => {
        let newID = positionID.split("&")[1]
        setID(newID)
        console.log(positionData)

        window.scrollTo(0, 0)

        if (positionID == 'Schnelle Nummer') {navigate('/tempo-50')}

    }, [])
    

    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
                <div className='mt-[1.5rem] block w-full h-auto float-left'>
                    {!loading ? <>
                        <img className='aspect-video lg:max-h-[400px] lg:aspect-auto lg:object-cover w-full' src={positionData[id].picture} />
                        <div className='mt-3 mb-1 bg-accent-blue-1 w-auto h-auto inline-block px-2 py-[2px]'>
                            <h2 className='text-sm xxs:text-base sm:text-lg font-bold text-white'>Stand: {time}</h2>
                        </div>
                        <h1 className='text-xl xxs:text-2xl sm:text-3xl font-extrabold'>{ positionData[id].title}</h1>

                        <p className='text-sm xxs:text-base sm:text-lg mt-2 whitespace-pre-line'>{ positionData[id].content }</p>

                        <div className='w-full flex justify-center mb-6'><a href={positionData[id].PDF}  download={"Position_" + positionData.topic} className='py-1.5 px-3 bg-accent-blue-2 text-white text-lg font-bold mt-4 '>Pressemitteilung herunterladen</a></div>
                    </> : 
                    <>
                        <div className='flex justify-center aspect-video lg:h-[400px] lg:aspect-auto bg-accent-blue-2 opacity-25 w-full'>
                            <div className='loader border-accent-blue-3'></div>
                        </div>
                        <div className='animation h-6 xxs:h-7 sm:h-9 w-2/3 mt-5'>
                            <div className='background-masker btn-divide-left left-[40%]'></div>
                        </div>
                        <div className='mt-4 mb-10'>
                            <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
                            <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" />
                            <LoadingText x="left-[30%]" y="left-[45%]" z="left-[60%]" />
                            <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" />
                            <LoadingText x="left-[22%]" y="left-[66%]" z="left-[88%]" />
                            <LoadingText x="left-[11%]" y="left-[55%]" z="left-[78%]" />
                            <LoadingText x="left-[17%]" y="left-[47%]" z="left-[85%]" />
                        </div>

                    </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPosition
import React, {useState, useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import PositionContext from '../context/positionContext'

const ViewPosition = () => {
    let navigate = useNavigate()
    let { positionID } = useParams()
    //const positionData = useContext(PositionContext)
    const [positionData, setPositionData] = useState([])
    
    const [id, setID] = useState(0)
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")

    function parseDateTime(datetime) {
        let z = (num, places) => String(num).padStart(places, '0')
        let a = datetime.split("T")[0].split("-")
        let y = parseInt(a[0])
        let m = parseInt(a[1])
        let d = parseInt(a[2])+1
        return `${z(d, 2)}.${z(m, 2)}.${z(y, 4)}`
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        let newID = positionID.split("&")[1]
        setID(newID)

        fetch('https://api.wrire.com/partner/ju-kirchheim/Positionen', { // fetch data from backend server
            method: 'GET',
        }).then((response) =>  response.json().then((data)=>{ 
            setContent(decodeURI(data[newID].content));
            setDate(parseDateTime(data[newID].date_time))
            setPositionData(data[newID])
        }))
    }, [])
    

    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
                <div className='mt-[1.5rem] block w-full h-auto float-left'>
                    <img className='aspect-video lg:max-h-[400px] lg:aspect-auto lg:object-cover w-full' src={positionData.picture} />
                    <div className='mt-3 mb-1 bg-accent-blue-1 w-auto h-auto inline-block px-2 py-[2px]'>
                        <h2 className='text-md sm:text-lg font-bold text-white'>Stand: {date} </h2>
                    </div>
                    <h1 className='text-2xl sm:text-3xl font-extrabold'>{ positionData.title}</h1>

                    <p className='text-md sm:text-[17px] mt-2 sm:text-justify whitespace-pre-line'>{ content }</p>

                    <div className='w-full flex justify-center mb-6'><a href={positionData.PDF}  download={"Position_" + positionData.topic} className='py-1.5 px-3 bg-accent-blue-2 text-white text-lg font-bold mt-4 '>Pressemitteilung herunterladen</a></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPosition
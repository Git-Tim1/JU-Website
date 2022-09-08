import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import { positionData } from '../data/position_data'

const ViewPosition = () => {
    let navigate = useNavigate()
    let { positionID } = useParams()
    
    const [id, setID] = useState(0)
    const [date, setDate] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {
        console.log("Test")
        let newID = positionID.split("&")[1]
        setID(newID)

        console.log(newID)


        let unixTime = positionData[newID].date_time

        let unix_timestamp = unixTime
        var dateVar = new Date(unix_timestamp * 1000);

        var day = dateVar.getDay()
        var month = dateVar.getMonth()
        var year = dateVar.getFullYear()

        setDate(day + '.' + month + '.' + year)

        setContent(decodeURI(positionData[newID].content))
    }, [])

    return (
        <div>
            <Header />
            <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
                <img className='aspect-video' src={positionData[id].picture} />
                <h2 className='mt-5 mb-2 leading-3 text-lg font-medium text-accent-blue-2'>{ date }</h2>
                <h1 className='text-3xl font-bold'>{ positionData[id].title}</h1>

                <p className='text-lg mt-2 text-justify whitespace-pre-line'>{ content }</p>

                <div className='w-full flex justify-center'><a href="#" download className='py-1.5 px-3 bg-accent-blue-2 text-white text-lg font-bold mt-4 '>Pressemitteilung herunterladen</a></div>
            </div>
        </div>
    )
}

export default ViewPosition
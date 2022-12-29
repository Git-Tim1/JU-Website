import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
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

        document.title = positionData[newID].topic + " - Junge Union Kirchheim"

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
                <div className='mt-[1.5rem] block w-full h-auto float-left'>
                    <img className='aspect-video lg:max-h-[400px] lg:aspect-auto lg:object-cover w-full' src={positionData[id].picture} />
                    <h2 className='mt-5 mb-2 leading-3 text-lg font-medium italic text-gray-500'>Stand: { date }</h2>
                    <h1 className='text-3xl font-bold'>{ positionData[id].title}</h1>

                    <p className='text-lg mt-2 text-justify whitespace-pre-line'>{ content }</p>

                    <div className='w-full flex justify-center mb-6'><a href="#" download className='py-1.5 px-3 bg-accent-blue-2 text-white text-lg font-bold mt-4 '>Pressemitteilung herunterladen</a></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPosition
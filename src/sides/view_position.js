import React, {useState, useEffect, useContext} from 'react'
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

    useEffect(() => {
        console.log(positionData)
        let newID = positionID.split("&")[1]
        setID(newID)
        console.log(newID)

        fetch('https://api.wrire.com/partner/ju-kirchheim/Positionen', { // fetch data from backend server
            method: 'GET',
        }).then((response) =>  response.json().then((data)=>{ 
            console.log(data[newID])
            setContent(decodeURI(data[newID].content));
            setDate(parseDateTime(data[newID].date_time))
            setPositionData(data[newID])
        }))
    }, [])
    

    return (
        <div>
            <Header />
            <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
                <div className='mt-[1.5rem] block w-full h-auto float-left'>
                    <img className='aspect-video lg:max-h-[400px] lg:aspect-auto lg:object-cover w-full' src={positionData.picture} />
                    <h2 className='mt-5 mb-2 leading-3 text-lg font-medium italic text-gray-500'>Stand: { date }</h2>
                    <h1 className='text-3xl font-bold'>{ positionData.title}</h1>

                    <p className='text-lg mt-2 text-justify whitespace-pre-line'>{ content }</p>

                    <div className='w-full flex justify-center mb-6'><a href={positionData.PDF}  download={"Position_" + positionData.topic} className='py-1.5 px-3 bg-accent-blue-2 text-white text-lg font-bold mt-4 '>Pressemitteilung herunterladen</a></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPosition
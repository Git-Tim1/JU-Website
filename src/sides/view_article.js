import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import * as ReactBootStrap from 'react-bootstrap'
import Footer from '../components/footer'

const LoadingText = ({x, y, z}) => {
  return (
    <div className='h-4 xs:h-5 w-full mt-2 animation rounded'>
      <div className={`background-masker btn-divide-left ${x}`}>
      </div>
      <div className={`background-masker btn-divide-left ${y}`}>
      </div>
      <div className={`background-masker btn-divide-left ${z}`}>
      </div>
    </div>
  )
}


const ViewArticle = () => {
  const [articleData, setArticleData] = useState([])
  const [date, setDate] = useState(null)
  const [loading, setLoading] = useState(true)

  let { articleID } = useParams()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    document.title = "Junge Union Kirchheim"

    try {
      fetch('https://api.wrire.com/api/article/' + articleID,  {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
      }).then((response) => response.json().then((data) => {setArticleData(data); setLoading(false)}))
    } catch (error){console.log(error)}
  }, []);

  useEffect(() => {
    let unix_timestamp =  articleData.time
    var dateVar = new Date(unix_timestamp * 1000);

    var day = dateVar.getDate()
    var month = dateVar.getMonth() + 1
    var year = dateVar.getFullYear()

    console.log(date)

    if (day < 10) {day = "0" + day.toString()}
    if (month < 10) {month = "0" + month.toString()}

    setDate(day + '.' + month + '.' + year)
  
  }, [articleData])

  useEffect(() => {
    console.log(date)
  })

  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          
          
          
          {!loading ? <><img className='aspect-video lg:max-h-[400px] lg:aspect-auto object-cover w-full' src={`https://api.wrire.com${articleData.thumbnail}`} /> <div className='mt-3 mb-1 bg-accent-blue-1 w-auto h-auto inline-block px-2 py-[2px]'>
            <h2 className='text-sm xxs:text-base sm:text-lg font-bold text-white'>{date} </h2>
          </div>
          <h1 className='text-xl xxs:text-2xl sm:text-3xl font-extrabold'>{articleData.title}</h1>
          <p className='text-sm xxs:text-base sm:text-lg mt-2 mb-10 whitespace-pre-line'>{ articleData.content }</p></> : 
          <div>
            <div className='aspect-video lg:h-[400px] lg:aspect-auto object-cover w-full bg-accent-blue-2 opacity-5'></div>
            <div className='animation-blue h-8 w-40 mt-3'>
            </div>
            <div className='animation h-8 md:h-10 w-3/5 mt-3 rounded'>
            </div>
            <div className='mt-5 mb-10'>
              <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
              <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" />
              <LoadingText x="left-[30%]" y="left-[45%]" z="left-[60%]" />
              <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" />
              <LoadingText x="left-[22%]" y="left-[66%]" z="left-[88%]" />
              <LoadingText x="left-[11%]" y="left-[55%]" z="left-[78%]" />
              <LoadingText x="left-[17%]" y="left-[47%]" z="left-[85%]" />
            </div>
          </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewArticle
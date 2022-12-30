import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import * as ReactBootStrap from 'react-bootstrap'
import Footer from '../components/footer'


const ViewArticle = () => {
  const [articleData, setArticleData] = useState([])
  const [date, setDate] = useState(null)

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
      }).then((response) => response.json().then((data) => {setArticleData(data); console.log(data)}))
    } catch (error){console.log(error)}
  }, []);

  useEffect(() => {
    let unix_timestamp = articleData.time
    var dateVar = new Date(unix_timestamp * 1000);

    var day = dateVar.getDay()
    var month = dateVar.getMonth()
    var year = dateVar.getFullYear()

    setDate(day + '.' + month + '.' + year)
  
  }, [articleData])

  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <img className='aspect-video lg:max-h-[400px] lg:aspect-auto object-cover w-full' src={`https://api.wrire.com${articleData.thumbnail}`} />
          <h2 className='mt-5 mb-2 leading-3 text-lg font-medium italic text-gray-500'>{date} </h2>
          <h1 className='text-2xl sm:text-3xl font-extrabold'>{articleData.title}</h1>

          <p className='text-md sm:text-lg mt-2 mb-10 sm:text-justify whitespace-pre-line'>{ articleData.content }</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewArticle
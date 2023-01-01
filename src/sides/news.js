import React, { useEffect, useState, useLayoutEffect } from 'react'
import Header from '../components/header'
import { articleData } from '../data/articleData.js'
import ArticleComponent from '../components/article'
import Footer from '../components/footer'

const News = () => {

  const [articleData, setArticleData] = useState([])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    document.title = "Aktuelles - Junge Union Kirchheim"

    fetch('https://api.wrire.com/partner/ju-kirchheim?page=0', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((data)=>{
        console.log(data)
        setArticleData(data)
    }))
}, [])
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Aktuelles</h1>

        {articleData.map((article, index) => {
          console.log(article)
          return(<ArticleComponent image={`https://api.wrire.com${article.thumbnail}`} title={article.title} content={article.content} link={`/article/${article.id}`} unixTime={article.time} />)
        })}
        <p className='mb-8'></p>
      </div>
      <Footer />
    </div>
  )
}

export default News
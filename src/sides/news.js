import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { articleData } from '../data/articleData.js'
import ArticleComponent from '../components/article'
import Footer from '../components/footer'

const News = () => {

  const [articleData, setArticleData] = useState([])

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
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Aktuelles</h1>

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
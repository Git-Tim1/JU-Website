import React, { useEffect } from 'react'
import Header from '../components/header'
import { articleData } from '../data/articleData.js'
import ArticleComponent from '../components/article'
import Footer from '../components/footer'
const News = () => {
  useEffect(() => {
    document.title = "Aktuelles - Junge Union Kirchheim"
  }, []);
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Aktuelles</h1>
        {articleData.map((article, index) => {
          return(<ArticleComponent image={article.image} title={article.title} content={article.content} link={article.link} unixTime={article.date} author={article.author.username} />)
        })}
      </div>
      <Footer />
    </div>
  )
}

export default News
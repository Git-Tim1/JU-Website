import React from 'react'
import Header from '../components/header'
import { articleData } from '../data/articleData.js'
import ArticleComponent from '../components/article'
import Footer from '../components/footer'
const News = () => {
  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Termine und Veranstaltungen</h1>
        {articleData.map((article, index) => {
          return(<ArticleComponent image={article.image} title={article.title} preview={article.preview} link={article.link} />)
        })}
      </div>
      <Footer />
    </div>
  )
}

export default News
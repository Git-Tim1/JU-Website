import React, { useEffect, useState, useLayoutEffect, useContext } from 'react'
import Header from '../components/header'
import ArticleComponent from '../components/article'
import Footer from '../components/footer'
import { ArticleContext } from '../context'
import { LoadingText } from '../sides/view_article'


const ArticleLoad = () => {
  return(
    <div className='w-full bg-white shadow-md h-auto sm:h-40 mt-5 inline-block rounded-sm'>
      <div className='aspect-video sm:aspect-4/3 h-full w-full float-left sm:w-64 flex justify-center bg-accent-blue-2 opacity-25'>
        <div className='loader'></div>
      </div>
      <div className='relative py-4 sm:py-3 md:py-4 h-full px-3 xxs:px-4 sm:px-0 sm:ml-4 float-left w-full sm:w-[calc(100%-18rem)]'>
        <div className='animation h-6 sm:h-7 w-2/3 rounded-sm'>
          <div className='btn-divide-left-h background-masker left-[40%]'></div>
          </div>
          <div className='mt-3 sm:mt-4'>
            <LoadingText h="h-4" x="left-[15%]" y="left-[50%]" z="left-[90%]" />
            <LoadingText h="h-4" x="left-[20%]" y="left-[40%]" z="left-[80%]" />
            <LoadingText h="h-4" x="left-[30%]" y="left-[45%]" z="left-[60%]" />
          </div>
        </div>
      </div>
  )
}

const News = () => {

  const articleData = useContext(ArticleContext)

  useEffect(() => {
    document.title = "Aktuelles - Junge Union Kirchheim"

    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem]'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Aktuelles</h1>
        
        {(articleData[0] !== " ") ? <>{articleData.map((article, index) => {
          return(<ArticleComponent image={`https://api.wrire.com${article.thumbnail}`} title={article.title} content={article.content} link={`/article/${article.id}`} unixTime={article.time} />)
        })}</> : 
        <>
          <ArticleLoad />
          <ArticleLoad />
          <ArticleLoad />
          <ArticleLoad />
        </>
        }
        <p className='mb-8'></p>
      </div>
      <Footer />
    </div>
  )
}

export default News
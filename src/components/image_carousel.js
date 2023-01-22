import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsCircleFill } from 'react-icons/bs'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ImageCarousel = () => {
    let slideInterval;
    let intervalTime = 10000;
    let autoscroll = true;

    const [currentSlide, setCurrentSlide] = useState(0)
    const [articleData, setArticleData] = useState([])

    const autoSlide = () => {
        slideInterval = setInterval(() => setCurrentSlide(currentSlide + 1), intervalTime)    
    }

    useEffect(() => {
        fetch('https://api.wrire.com/partner/ju-kirchheim?page=0', { // fetch data from backend server
            method: 'GET',
        }).then((response) =>  response.json().then((data)=>{
            setArticleData(data)
        }))
    }, [])

    useEffect(() => {
        if (currentSlide == 4) {
            setCurrentSlide(0)
        }
        else if (currentSlide == -1) {
            setCurrentSlide(3)
        }
        if (autoscroll) {
             autoSlide()
        }

        return () => clearInterval(slideInterval)
    }, [currentSlide])

    
    return (
        <div className='mt-[1.5rem] inline-block w-full group relative'>
            <div className='block sm:hidden group-hover:block relative text-white'>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(currentSlide - 1)}}>
                    <MdKeyboardArrowLeft size={40} 
                    className='absolute top-36 sm:top-44 md:top-48 left-0 z-10 bg-accent-blue-1'/>
                </a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(currentSlide + 1)}}>
                    <MdKeyboardArrowRight size={40} className='absolute top-36 sm:top-44 md:top-48 right-0 z-10 bg-accent-blue-1'/>
                </a>
            </div>
            
            <div className='absolute flex flex-row z-20 w-[4.5rem] h-auto text-white justify-between 
            left-[calc(50%-36px)] top-[300px] sm:top-[355px] md:top-[415px]
            '>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(0)}}>
                    <BsCircleFill size={10} className={currentSlide == 0 ? "opacity-100" : "opacity-50"} />
                </a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(1)}}><BsCircleFill size={10} className={currentSlide == 1 ? "opacity-100" : "opacity-50"} /></a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(2)}}><BsCircleFill size={10} className={currentSlide == 2 ? "opacity-100" : "opacity-50"} /></a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(3)}}><BsCircleFill size={10} className={currentSlide == 3 ? "opacity-100" : "opacity-50"} /></a>
            </div>
            
            {articleData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                            <Link to={`/article/${slide.id}`}>
                                <img src={`https://api.wrire.com${slide.thumbnail}`} alt="slide-img" 
                                className='z-1 h-[320px] sm:h-[380px] md:h-[440px] w-full object-cover' 
                                />
                                <p className=
                                'font-bold absolute bg-accent-blue-3 text-white w-52
                                px-3 py-1
                                left-5 bottom-8 text-lg 
                                xxs:w-72 xxs:left-8
                                xs:w-auto 
                                sm:left-9 sm:bottom-10 sm:text-xl sm:px-[14px] sm:py-[6px]
                                lg:left-10 lg:bottom-12 lg:text-2xl 
                                '
                                >{slide.short_title}</p>

                                
                            </Link>
                            </>
                        )}
                    </div>
                )
            })} 
        </div>
    )
}

export default ImageCarousel
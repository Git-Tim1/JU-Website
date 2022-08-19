import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFil, BsCircleFill } from 'react-icons/bs'
import { sliderData } from '../data/slider_data'
import { Link } from 'react-router-dom'

const ImageCarousel = () => {
    let slideInterval;
    let intervalTime = 10000;
    let autoscroll = true;
    const [currentSlide, setCurrentSlide] = useState(0)

    const autoSlide = () => {
        slideInterval = setInterval(() => setCurrentSlide(currentSlide + 1), intervalTime)

        if (currentSlide == 4) {
            setCurrentSlide(0)
        }
    }

    useEffect(() => {
        if (autoscroll) {
             autoSlide()
        }

        return () => clearInterval(slideInterval)
    }, [currentSlide])

    
    return (
        <div className='mt-[1.5rem] inline-block w-full'>
            {/*<a href="#"><BsFillArrowLeftCircleFill size={30} 
                className='absolute 
                top-[15rem] left-[8%] z-50'/></a>
            <BsFillArrowRightCircleFill size={30} className='absolute top-0 right-0 z-50'/>*/}
            
            <div className='absolute flex flex-row z-20 w-[4.5rem] h-auto text-white justify-between 
            left-[calc(50%-36px)] top-[calc(6rem+300px)] sm:top-[calc(6rem+355px)] md:top-[calc(6rem+415px)]
            '>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(0)}}>
                    <BsCircleFill size={10} className={currentSlide == 0 ? "opacity-100" : "opacity-50"} />
                </a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(1)}}><BsCircleFill size={10} className={currentSlide == 1 ? "opacity-100" : "opacity-50"} /></a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(2)}}><BsCircleFill size={10} className={currentSlide == 2 ? "opacity-100" : "opacity-50"} /></a>
                <a href="#" onClick={e => {e.preventDefault(); setCurrentSlide(3)}}><BsCircleFill size={10} className={currentSlide == 3 ? "opacity-100" : "opacity-50"} /></a>
            </div>
            
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                            <Link to={slide.link}>
                                <img src={slide.image} alt="slide-img" 
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
                                >{slide.heading}</p>

                                
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
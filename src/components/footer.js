import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = ({}) => {
  return (
    <footer className='w-full h-44 3xs:h-36 sm:h-20 bg-accent-blue-3 text-white bottom-0 overflow-hidden text-xs'>
      <div className='min-h-[100vh] max-w-[60rem] w-[90%] mx-auto'>
        <div className='xs:float-left mt-3 mr-6 sm:mr-10 inline-block'>
            <p>Junge Union Stadtverband Kirchheim unter Teck</p>
            <p className='my-[2px]'>kontakt@ju-kirchheim.de</p>
            <p>Vorsitzender: Giancarlo Crescente</p>
        </div>
        <div className='hidden 3xs:block float-right mt-3 mr-1 h-full'>
          <a href="https://www.instagram.com/jukirchheim/" className='float-right'><BsInstagram size={ 28 } /></a>
          <a href="https://de-de.facebook.com/JUKirchheim/" className='float-left mr-3'><BsFacebook size={ 28 } /></a>
        </div>
        <div className='ml-0 mr-12 mt-2 xs:mt-3  sm:mr-0 float-left'>
            <Link to='/datenschutz'><p className='hover:underline'>Datenschutzhinweise</p></Link>
            <Link to='/impressum'><p className='hover:underline my-[2px]'>Impressum</p></Link>
            <p className=''>© 2022 JU Kirchheim</p>
        </div>
        <div className='3xs:hidden w-full 3xs:w-auto float-left mt-2'>
          <a href="https://www.instagram.com/jukirchheim/" className='float-left'><BsInstagram size={ 28 } /></a>
          <a href="https://de-de.facebook.com/JUKirchheim/" className='float-left ml-3'><BsFacebook size={ 28 } /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
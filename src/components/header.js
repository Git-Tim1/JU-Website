import React from 'react'
import { useState } from 'react'
import JU_Logo from '../images/ju_logo.png'
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

import {Link} from 'react-router-dom'
import SideBar from './side_bar'

const Header = () => {

    const [mobileNavBar, setMobileNavBar] = useState(false)

    return (
        <>
            <header className='w-full h-[4.5rem] drop-shadow-sm bg-white fixed z-20 top-0'>
                <div className='h-full max-w-[60rem] w-[90%] m-auto uppercase font-semibold'>
                    <ul className={`float-left h-full hidden sm:flex`}>
                        <li className='mr-4 md:mr-5 my-auto hover:text-accent-blue-2 group py-2'>
                            <p className='cursor-pointer'>Über uns</p>

                            <div className='w-auto h-auto font-medium uppercase z-2 
                                    bg-white drop-shadow-sm hidden group px-0.25 py-1.5
                                    group-hover:block absolute top-14 border-t-2 border-accent-blue-2 
                                    text-accent-color-3'>
                                <ul className='text-black'>
                                    <Link to="/aktuelles"><li className='px-4 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-accent-blue-2 hover:text-white'>Aktuelles</li></Link>
                                    <Link to="/events"><li className='px-4 py-3 my-1 bg-decent-blue cursor-pointer hover:bg-accent-blue-2 hover:text-white'>Termine und Veranstaltungen</li></Link>
                                    <Link to="/vorstand"><li className='px-4 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-accent-blue-2 hover:text-white'>Vorstand</li></Link>
                                </ul>
                            </div>
                            </li>
                        <Link to="/positionen" className='h-full flex'><li className='mx-4 md:mx-5 my-auto  hover:text-accent-blue-2 py-2'><p className='cursor-pointer'>Positionen</p></li></Link>
                        <Link to="/contact" className='h-full flex'><li className='ml-4 md:ml-5 my-auto cursor-pointer hover:text-accent-blue-2'>Kontakt</li></Link>
                    
                    </ul>
                    
                    
                    <a className='float-left h-full w-auto flex' href="#" onClick={e => {e.preventDefault(); setMobileNavBar(!mobileNavBar)}} >
                        {!mobileNavBar ? 
                        <AiOutlineMenu size={25} className='sm:hidden my-auto'/> 
                        : 
                        <AiOutlineClose size={25} className='sm:hidden my-auto'/>}
                    </a>
                    

                    <Link to="/home"><img className='float-right h-full' src="https://ju-kirchheim.de/wp-content/uploads/2019/05/ju-logo-3-e1558030740569.png" alt="JU Kirchheim Logo" /></Link>
                    <Link className='hidden 3xs:flex px-4 h-3/5 border border-accent-blue-2 float-right shadow-sm text-sm 4xs:text-base
                    hover:bg-accent-blue-2 focus:bg-accent-blue-2 focus:text-white hover:text-white mt-[15px] rounded-sm mr-4' 
                    to="/mitmachen">
                        <p className='m-auto'>Mitmachen</p>
                    </Link>

                </div>
            </header>
            <div onClick={() => setMobileNavBar(false)}
                className={`${mobileNavBar ? 'block' : 'hidden'} bg-black fixed opacity-10 z-10 h-full w-full`}>
            </div>
            {mobileNavBar && <SideBar />}
        </>
    )
}

export default Header
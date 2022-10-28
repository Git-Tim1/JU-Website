import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const SideBar = () => {
    const [showMore, setShowMore] = useState(false)
    const [showMore2, setShowMore2] = useState(false)
    return (
    <div className='z-30 w-full top-[4.5rem] fixed bg-accent-blue-3 border-t border-gray-300 uppercase sm:hidden'>
        <ul className='m-auto py-2 font-semibold text-lg'>
            <li className='py-3  text-white  hover:bg-accent-blue-2'><Link to='/home'><div className='w-[90%] mx-auto'>Startseite</div></Link></li>
            <a href="#" onClick={e => {e.preventDefault(); setShowMore(!showMore)}}>
                <li className='py-3 bg-accent-blue-3 text-white hover:bg-accent-blue-2 border-t border-gray-600'>
                    <div className='w-[90%] mx-auto'>
                        Über uns 
                        {!showMore ? 
                        <AiFillCaretRight className='float-right accent-blue-1 mt-1 mr-3' /> :
                        <AiFillCaretDown className='float-right accent-blue-1 mt-1 mr-3' />
                        }
                    </div>
                </li>
            </a>
            {showMore && <div className='border-t border-gray-600 bg-decent-blue font-medium'>
                 <ul>
                    <li><Link to='/aktuelles'><div className='w-[85%] mx-auto pb-3 pt-4 group'>
                        Aktuelles
                    </div></Link></li>
                    <li className='border-y border-gray-400'><Link to='/events'><div className='w-[85%] mx-auto py-3'>
                        Termine und Veranstaltungen
                    </div></Link></li>
                    <li><Link to='/vorstand'><div className='w-[85%] mx-auto pt-3 pb-4'>
                        Vorstand
                    </div></Link></li>
                </ul>
            </div>}
            <li className='py-3 border-t border-gray-600 text-white  hover:bg-accent-blue-2'><Link to='/positionen'><div className='w-[90%] mx-auto'>Positionen</div></Link></li>
            <a href="#" onClick={e => {e.preventDefault(); setShowMore2(!showMore2)}}>
                <li className='py-3 bg-accent-blue-3 text-white hover:bg-accent-blue-2 border-t border-gray-600'>
                    <div className='w-[90%] mx-auto'>
                        Unterstützen 
                        {!showMore2 ? 
                        <AiFillCaretRight className='float-right accent-blue-1 mt-1 mr-3' /> :
                        <AiFillCaretDown className='float-right accent-blue-1 mt-1 mr-3' />
                        }
                    </div>
                </li>
            </a>
            {showMore2 && <div className='border-t border-gray-600 bg-decent-blue font-medium'>
                 <ul>
                    <li className='border-b border-gray-400'><Link to='/spenden'><div className='w-[85%] mx-auto pb-3 pt-4 group'>
                        Spenden
                    </div></Link></li>
                    <li><Link to='/mitglied-werden'><div className='w-[85%] mx-auto pt-3 pb-4'>
                        Mitglied werden
                    </div></Link></li>
                </ul>
            </div>}            
            <li className='py-3 border-t border-gray-600 bg-accent-blue-3 text-white  hover:bg-accent-blue-2'><Link to='/contact'><div className='w-[90%] mx-auto'>Kontakt</div></Link></li>
        </ul>
    </div>
    )
}
export default SideBar
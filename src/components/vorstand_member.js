import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const VorstandMember = ({ image, name, occupation, role, twitter, instagram, e_mail }) => {
  return (
    <div className='h-32 mt-4'>
        <img className='h-28 3xs:h-full w-28 3xs:w-32 object-cover float-left mt-2 3xs:mt-1' src={image} />
        <div className='float-left w-[calc(100%-8.75rem)] 3xs:w-[calc(100%-9rem)] h-full ml-3 3xs:ml-4 relative'>
            <h2 className='text-accent-blue-2 font-normal '>{role}</h2>
            <h1 className='font-bold text-xl leading-5 '>{name}</h1>
            <h2 className='mt-1 italic w-full'>{occupation}</h2>
            <div className='bottom-2 absolute'>
              { instagram && <a className='float-left' href={instagram}><BsInstagram size={25} /></a>}
              { twitter && <a className='float-left ml-3' href={twitter}><BsTwitter size={25} /></a>}
              { e_mail && <a className='float-left ml-3' href={`mailto:${e_mail}`}><FiMail size={25} /></a>}
            </div>
        </div>
    </div>
  )
}

export default VorstandMember
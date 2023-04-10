import React, { useEffect, useState }  from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const VorstandMember = ({ image, name, occupation, role, twitter, instagram, e_mail, introduction, index }) => {
  const [urlName, setUrlName] = useState("")

  useEffect(() => {
    setUrlName("/personen/" + encodeURI(name) + "+" + index)
  }, [])
 
  return (
    <>
      {(introduction !== '') ? <a href={urlName} className='h-32 mt-4 inline-block w-full'>
        <img className='3xs:mt-1 h-28 3xs:h-full w-28 object-cover float-left mt-2' src={image} />
        <div className='float-left w-[calc(100%-8.75rem)] 3xs:w-[calc(100%-9rem)] h-full ml-3 3xs:ml-4 relative'>
          <h2 className='text-accent-blue-2 font-normal '>{role}</h2>
          <h1 className='font-bold text-xl leading-5 '>{name}</h1>
          <h2 className='mt-1 italic w-full'>{occupation}</h2>
          <div className='bottom-2 absolute'>
            { instagram && <a className='float-left mr-3' href={instagram}><BsInstagram size={25} /></a>}
            { twitter && <a className='float-left mr-3' href={twitter}><BsTwitter size={25} /></a>}
            { e_mail && <a className='float-left' href={`mailto:${e_mail}`}><FiMail size={25} /></a>}
          </div>
        </div>
      </a> : 
      <div className='h-32 mt-4 inline-block w-full'>
        <img className='3xs:mt-1 h-28 3xs:h-full w-28 object-cover float-left mt-2' src={image} />
        <div className='float-left w-[calc(100%-8.75rem)] 3xs:w-[calc(100%-9rem)] h-full ml-3 3xs:ml-4 relative'>
          <h2 className='text-accent-blue-2 font-normal '>{role}</h2>
          <h1 className='font-bold text-xl leading-5 '>{name}</h1>
          <h2 className='mt-1 italic w-full'>{occupation}</h2>
          <div className='bottom-2 absolute'>
            { instagram && <a className='float-left mr-3' href={instagram}><BsInstagram size={25} /></a>}
            { twitter && <a className='float-left mr-3' href={twitter}><BsTwitter size={25} /></a>}
            { e_mail && <a className='float-left' href={`mailto:${e_mail}`}><FiMail size={25} /></a>}
          </div>
        </div>
      </div>}
    </>
  )
}

export default VorstandMember
import React, { useEffect } from 'react'
import Header from '../components/header'
import { vorstand_data } from '../data/vorstand_data'
import VorstandMember from '../components/vorstand_member'

const Vorstand = () => {
  useEffect(() => {
    document.title = "Ortsvorstand - Junge Union Kirchheim"
  }, []);

  return (
    <div>
      <Header />
      <div className='h-full max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-bold text-xl sm:text-2xl mt-6 inline-block'>Vorstand</h1>
        {vorstand_data.map((member, index) => {
          return(<VorstandMember name={member.name} role={member.role} image={member.image} occupation={member.occupation} twitter={member.twitter} instagram={member.instagram} e_mail={member.e_mail} />)
        })}
      </div>
    </div>
  )
}

export default Vorstand
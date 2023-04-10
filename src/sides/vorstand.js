import React, { useEffect, useLayoutEffect, useContext } from 'react'
import Header from '../components/header'
import VorstandMember from '../components/vorstand_member'
import Footer from '../components/footer'
import { VorstandContext } from '../context'

const Vorstand = () => {
  const vorstand_data = useContext(VorstandContext)

  useEffect(() => {
    document.title = "Ortsvorstand - Junge Union Kirchheim"
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Vorstand</h1>
        {(vorstand_data[0]!==" ") ? <>{vorstand_data.map((member, index) => {
          return(<VorstandMember name={member.name} role={member.role} image={member.image} occupation={member.occupation} twitter={member.twitter} instagram={member.instagram} e_mail={member.email} index={index} introduction={member.introduction} />)
        })}</> : 
        <div className=''>
          <LoadingVorstand />
          <LoadingVorstand />
          <LoadingVorstand />
          <LoadingVorstand />
          <LoadingVorstand />
        </div>

        }
        <p className='mb-5'></p>
      </div>
      <Footer />
    </div>
  )
}


const LoadingVorstand = () => {
  return (
    <div className='h-32 mt-4 inline-block w-full '>
      <div className='3xs:mt-1 h-28 3xs:h-full float-left w-28 mt-2 bg-accent-blue-2 opacity-25'></div>
      <div className='w-[calc(100%-8.75rem)] 3xs:w-[calc(100%-9rem)] float-left h-full ml-3 3xs:ml-4 mt-2'>
        <div className='animation h-4 w-24'></div>
        <div className='animation h-5 w-48 my-1'><div className='btn-divide-left-h background-masker left-[40%]'></div></div>
        <div className='animation h-4 w-36'></div>

        <div className='animation h-8 w-28 mt-5'><div className='btn-divide-left-h background-masker left-[45%]'></div></div>
      </div>
    </div>
  )
}

export default Vorstand
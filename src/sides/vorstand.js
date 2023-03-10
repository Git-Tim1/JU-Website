import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../components/header'
import { vorstand_data } from '../data/vorstand_data'
import VorstandMember from '../components/vorstand_member'
import Footer from '../components/footer'

const Vorstand = () => {
  const [vorstand_data, setVorstandData] = useState([])

  useEffect(() => {
    document.title = "Ortsvorstand - Junge Union Kirchheim"

    try {
      fetch('https://api.wrire.com/partner/ju-kirchheim/Vorstand',  {
        method: 'GET',
      }).then((response) => response.json().then((data) => {setVorstandData(data); console.log(data)}))
    } catch (error){console.log(error)}
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-256px)] 3xs:min-h-[calc(100vh-214px)] sm:min-h-[calc(100vh-166px)] max-w-[60rem] w-[90%] mx-auto z-1 mt-[4.5rem] pb-4 block'>
        <h1 className='font-extrabold text-2xl sm:text-3xl mt-6 inline-block'>Vorstand</h1>
        {vorstand_data.map((member, index) => {
          return(<VorstandMember name={member.name} role={member.role} image={member.image} occupation={member.occupation} twitter={member.twitter} instagram={member.instagram} e_mail={member.email} index={index} introduction={member.introduction} />)
        })}
        <p className='mb-5'></p>
      </div>
      <Footer />
    </div>
  )
}

export default Vorstand
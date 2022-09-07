import React, { useEffect } from 'react'
import Header from '../components/header'

const BecomeMember = () => {
  useEffect(() => {
    document.title = "Mitglied werden - Junge Union Kirchheim"
  }, []);

  return (
    <div>
      <Header />

      Mitglied werden
    </div>
  )
}

export default BecomeMember
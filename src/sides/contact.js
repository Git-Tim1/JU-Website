import React, { useEffect } from 'react'
import Header from '../components/header'

const Contact = () => {
  useEffect(() => {
    document.title = "Kontakt - Junge Union Kirchheim"
  }, []);
  return (
    <div>
      <Header />
    </div>
  )
}

export default Contact
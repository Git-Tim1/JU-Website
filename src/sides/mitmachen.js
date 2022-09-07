import React, { useEffect } from 'react'
import Header from '../components/header'

const Mitmachen = () => {
  useEffect(() => {
    document.title = "Mitmachen - Junge Union Kirchheim"
  }, []);
  return (
    <div>
        <Header />
        Mitmachen
    
    </div>
  )
}

export default Mitmachen
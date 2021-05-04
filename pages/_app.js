import '../styles/globals.css'
import DefaultHead from '../components/DefaultHead/DefaultHead'
import React from 'react'

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultHead />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App

import React from 'react'
import type { AppProps } from 'next/app'

import '../App.css'
import { OnboardProvider } from '../contexts/OnboardContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <OnboardProvider>
      <Component {...pageProps} />
    </OnboardProvider>
  )
}
export default App

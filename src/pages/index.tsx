import React, { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="outer-container" style={{ height: '100%' }}>
      <Head>
        <title>Giveth Claims</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main id="page-wrap">
        <Navbar />
        <Dashboard />
      </Main>
    </div>
  )
}

const Main = styled.main`
  background: #eee;
  min-height: 100vh;
`
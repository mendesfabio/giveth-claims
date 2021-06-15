import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Sidebar from './components/SideBar'
import './App.css'
import { useOnboardAndNotify } from './hooks/useOnboardAndNotify'

function App() {
  const {
    address,
    network,
    balance,
    wallet,
    onboard,
    notify,
    provider,
  } = useOnboardAndNotify()

  const [isOpen, setIsOpen] = useState(false)

  return onboard && notify ? (
    <div id="outer-container" style={{ height: '100%' }}>
      <Sidebar
        wallet={wallet}
        onboard={onboard}
        address={address}
        ethBalance={balance}
        network={network}
        isOpen={isOpen}
        closeSidebar= {() => setIsOpen(false)}
      />
      <Main id="page-wrap">
        <Navbar
          wallet={wallet}
          onboard={onboard}
          address={address}
          ethBalance={balance}
          network={network}
          openSidebar={() => setIsOpen(true)}
        />
        <Dashboard
          wallet={wallet}
          address={address}
          provider={provider}
          onboard={onboard}
          network={network}
        />
      </Main>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const Main = styled.main`
  background: linear-gradient(116.82deg, #c7eeec 0%, #f4f6f6 100%);
  min-height: 100vh;
`

export default App

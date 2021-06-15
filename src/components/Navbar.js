import React from 'react'
import styled from 'styled-components'
import logo from '../assets/mini-logo.svg'
import { networkAllowed } from '../lib/web3-utils'
import ConnectionInfo from './ConnectionInfo'

const Navbar = ({
  address,
  ethBalance,
  network,
  wallet,
  onboard,
  openSidebar,
}) => (
  <NavbarSection>
    {networkAllowed(network) && <ConnectedLine />}
    <Container>
      <h1 onClick={openSidebar}>
        <img src={logo} alt="logo" />
        DAppNode Dashboard
      </h1>
      <div>
        <ConnectionInfo
          address={address}
          ethBalance={ethBalance}
          network={network}
          wallet={wallet}
          onboard={onboard}
        />
      </div>
    </Container>
  </NavbarSection>
)

const ConnectedLine = styled.div`
  background: #54d4cb;
  box-shadow: 0px 0px 12px #54d4cb;
  width: 100%;
  height: 4px;
`

const NavbarSection = styled.section`
  background-color: transparent;
  height: 72px;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
`

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  h1 {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #35403f;
    cursor: pointer;
    img {
      padding-right: 22px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    p {
      margin: 0 15px;
    }
  }
  @media only screen and (max-width: 444px) {
    img {
      width: 190px;
    }
  }
`

export default Navbar

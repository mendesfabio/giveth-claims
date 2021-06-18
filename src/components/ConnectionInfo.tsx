import React, { useContext } from 'react'
import styled from 'styled-components'
import { shortenAddress, getNetworkType } from '../lib/web3-utils'
import { LightGreenButton, NavbarButton } from './Styles'

import { OnboardContext } from '../contexts/OnboardContext'

function Connection() {

  const { address, network, connect, disconnect, isReady} = useContext(OnboardContext)

  return (
    <>
      {isReady && (
        <ConnectWallet
          onClick={disconnect}
        >
          Disconnect Wallet
        </ConnectWallet>
      )}
      {!isReady && (
        <ConnectWallet
          onClick={connect}
        >
          Connect Wallet
        </ConnectWallet>
      )}
      {network && (
        <LightGreenButton>Network: {getNetworkType(network)} </LightGreenButton>
      )}
      {address && (
        <NavbarButton>
          {address && <p>{shortenAddress(address)}</p>}
        </NavbarButton>
      )}
    </>
  )
}

const ConnectWallet = styled.button`
  background: #ffffff;
  border: solid 0px transparent;
  border-radius: 27px;
  font-family: 'Inter-Bold';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #23c8bc;
  padding: 8px 16px;
  box-shadow: 0px 1px 1px rgba(8, 43, 41, 0.08),
    0px 0px 8px rgba(8, 43, 41, 0.06);
  &:hover {
    cursor: pointer;
    background: #c4f3ef;
    color: #144b52;
    transition: all 0.25s ease-in-out;
  }
`

export default Connection

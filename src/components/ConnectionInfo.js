import React from 'react'
import styled from 'styled-components'
import { shortenAddress, getNetworkType } from '../lib/web3-utils'
import { LightGreenButton, NavbarButton } from './Styles.js'

const Connection = ({ address, ethBalance, network, wallet, onboard }) => (
  <>
    {wallet.provider && (
      <ConnectWallet
        onClick={ () => {
          console.log(onboard.walletReset())
          onboard.walletReset()
        }}
      >
        Disconnect Wallet
      </ConnectWallet>
    )}
    {!wallet.provider && (
      <ConnectWallet
        onClick={async () => {
          const select = await onboard.walletSelect()
          if (!select) return false
          const ready = await onboard.walletCheck()
          return ready
        }}
      >
        Connect Wallet
      </ConnectWallet>
    )}
    {network && (
      <LightGreenButton>Network: {getNetworkType(network)} </LightGreenButton>
    )}
    {address && (
      <NavbarButton onClick={onboard.walletSelect}>
        {address && <p>{shortenAddress(address)}</p>}
      </NavbarButton>
    )}
    {ethBalance && (
      <NavbarButton>
        {Number(ethBalance) > 0 ? ethBalance / 1000000000000000000 : ethBalance}{' '}
        <span> ETH</span>
      </NavbarButton>
    )}
  </>
)

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

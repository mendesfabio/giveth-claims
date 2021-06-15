import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { initOnboard, initNotify } from '../services'

export function useOnboardAndNotify() {
  const [provider, setProvider] = useState(null)
  const [address, setAddress] = useState(null)
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(null)
  const [wallet, setWallet] = useState({})

  const [onboard, setOnboard] = useState(null)
  const [notify, setNotify] = useState(null)

  useEffect(
    () => {
      if (!onboard) {
        const onboard = initOnboard({
          address: setAddress,
          network: setNetwork,
          balance: setBalance,
          wallet: wallet => {
            if (wallet.provider) {
              setWallet(wallet)
              const ethersProvider = new ethers.providers.Web3Provider(
                wallet.provider
              )
              setProvider(ethersProvider)
              window.localStorage.setItem('selectedWallet', wallet.name)
            } else {
              setWallet({})
            }
          },
        })
        setOnboard(onboard)
      }

      if (!notify) {
        setNotify(initNotify())
      }
    },
    [address, network, balance]
  )

  useEffect(
    () => {
      const previouslySelectedWallet = window.localStorage.getItem(
        'selectedWallet'
      )

      if (previouslySelectedWallet && onboard) {
        onboard.walletSelect(previouslySelectedWallet)
      }
    },
    [onboard]
  )

  return {
    address,
    network,
    balance,
    wallet,
    onboard,
    notify,
    provider,
  }
}

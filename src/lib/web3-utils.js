export const DEFAULT_LOCAL_CHAIN = 'private'


export const addressPattern = '(0x)?[0-9a-fA-F]{40}'


export function shortenAddress(address, charsLength = 4) {
  const prefixLength = 2 // "0x"
  if (!address) {
    return ''
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address
  }
  return (
    address.slice(0, charsLength + prefixLength) +
    '…' +
    address.slice(-charsLength)
  )
}

//TODO: Add DN network id
export function getNetworkType(chainId) {
  chainId = String(chainId)

  if (chainId === '1') return 'main'
  if (chainId === '3') return 'ropsten'
  if (chainId === '4') return 'rinkeby'
  if (chainId === '5') return 'goerli'
  if (chainId === '42') return 'kovan'
  if (chainId === '100') return 'xDAI'
  if (chainId === 'localhost') return 'localhost'

  return DEFAULT_LOCAL_CHAIN
}


//TODO: Add DN network id
export function networkAllowed(chainId) {
  chainId = String(chainId)
  return (chainId === '4' || chainId === '1')
}

export function isMainnet(chainId) {
  chainId = String(chainId)
  return (chainId === '1')
}

//TODO: Change networtk
export function isDN(chainId) {
  chainId = String(chainId)
  return (chainId === '4')
}

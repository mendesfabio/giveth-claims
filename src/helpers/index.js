import { getAddress } from '@ethersproject/address'

export function isAddress(address) {
  try {
    return getAddress(address)
  } catch {
    return false
  }
}

export async function fetchMerkleResults() {
  const response = await fetch(`/merkle_distributor_result.json`)
  const results = await response.json()
  return results
}

export async function fetchClaimData(address) {
  const { claims } = await fetchMerkleResults()

  const formatted = isAddress(address)
  return claims[formatted]
}


export async function userUnclaimedAmount(address) {
  const userClaimData = await fetchClaimData(address)

  if (!userClaimData) {
    return 0
  }

  return userClaimData.amount
}
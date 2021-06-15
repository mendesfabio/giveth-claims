import { ethers } from 'ethers'

export const bn = x => ethers.BigNumber.from(x)

export const ZERO = bn('0')

export const ONE = bn('1000000000000000000')

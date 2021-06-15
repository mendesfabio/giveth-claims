import { useEffect, useState } from 'react'
import { useOnboardAndNotify } from './useOnboardAndNotify'

export function usePoolCardInfo() {
  const { provider, address } = useOnboardAndNotify()
  let owner = address

  const poolAddress = {
    'CAR/xDAI': '0x561807cd1f2d32f7ef7dadb1515a55d35eba207c',
    'CAR/HNY': '0xb755a9614bfd5eb812b9cc3d00166565f2e72b41',
    CAR: '0xf43913aF72af30d6b34782D08C4De3F6a14Ce42e',
  }

  const [contracts, setContracts] = useState({
    'CAR/xDAI': {},
    'CAR/HNY': {},
    CAR: {},
  })

  const [poolInfo, setPoolInfo] = useState({
    'CAR/xDAI': {
      stakePoolInfo: {
        tokensInPool: '1532 DN, 0.23 ETH',
        tokensInPoolUSD: '(1400.65 USD)',
        lpTokens: 56,
        APR: '148.55%',
        earned: {amount: 900, token: 'DN'}
      },
      userStakeInfo: null,
    },
    'CAR/HNY': { stakePoolInfo: null, userStakeInfo: null },
    CAR: { stakePoolInfo: null, userStakeInfo: null },
  })

  return {
    poolInfo,
    contracts,
  }
}

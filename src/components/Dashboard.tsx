import React from 'react'
import styled from 'styled-components'
import Rewards from './Rewards'
import { Inter700 } from './Styles'

function Dashboard() {
  return (
    <DashboardSection>
      <Inter700>
        Claim tokens
      </Inter700>
      <PoolsContainer>
        <Rewards />
      </PoolsContainer>
    </DashboardSection>
  )
}

const DashboardSection = styled.section`
  height: 100%;
  width: 80%;
  max-width: 940px;
  margin: auto;
  padding: 100px;
`

const PoolsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Dashboard